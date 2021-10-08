"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const ink_1 = require("ink");
const process_1 = require("process");
const uuid_1 = require("uuid");
const date_fns_1 = require("date-fns");
const lodash_1 = require("lodash");
const fs_1 = require("fs");
// Components
const Header_1 = __importDefault(require("./components/Header"));
// Views
const ReleaseNoteTypeView_1 = __importDefault(require("./views/ReleaseNoteTypeView"));
const ProjectView_1 = __importDefault(require("./views/ProjectView"));
const MessageView_1 = __importDefault(require("./views/MessageView"));
const FlagView_1 = __importDefault(require("./views/FlagView"));
const ConfirmView_1 = __importDefault(require("./views/ConfirmView"));
var View;
(function (View) {
    View[View["ReleaseNoteType"] = 0] = "ReleaseNoteType";
    View[View["Project"] = 1] = "Project";
    View[View["Message"] = 2] = "Message";
    View[View["Flag"] = 3] = "Flag";
    View[View["Confirm"] = 4] = "Confirm";
})(View || (View = {}));
const App = ({ root = "." }) => {
    var _a;
    const [releaseNote, setReleaseNote] = (0, react_1.useState)({
        type: undefined,
        project: undefined,
        message: undefined,
    });
    const releaseNoteText = `[${(_a = releaseNote.type) === null || _a === void 0 ? void 0 : _a.toUpperCase()}] ${(0, lodash_1.capitalize)(releaseNote.project)}: ${releaseNote.message}`;
    const [currentView, setCurrentView] = (0, react_1.useState)(0);
    const [isAdded, setIsAdded] = (0, react_1.useState)();
    const [changelogFilename, setChangelogFilename] = (0, react_1.useState)();
    (0, ink_1.useInput)((input) => {
        if (input === "q")
            (0, process_1.exit)();
    });
    const handleReleaseNoteTypeChange = (value) => {
        setReleaseNote({ ...releaseNote, type: value });
        setCurrentView(View.Project);
    };
    const handleProjectChange = (value) => {
        setReleaseNote({ ...releaseNote, project: value });
        setCurrentView(View.Message);
    };
    const handleMessageChange = (value) => {
        setReleaseNote({ ...releaseNote, message: value });
        setCurrentView(View.Flag);
    };
    const handleFlagChange = (value) => {
        setReleaseNote({ ...releaseNote, flag: value });
        setCurrentView(View.Confirm);
    };
    const handleConfirmChange = (value) => {
        if (value) {
            const filename = `${(0, date_fns_1.format)(new Date(), "dd-MM-yyyy")}_${(0, uuid_1.v4)()}`;
            const dir = `${root}/.changelog`;
            setChangelogFilename(filename);
            if (!(0, fs_1.existsSync)(dir)) {
                (0, fs_1.mkdirSync)(dir);
            }
            (0, fs_1.writeFileSync)(`${dir}/${filename}.json`, JSON.stringify(releaseNote), "ascii");
            setIsAdded(true);
            (0, process_1.exit)();
        }
        else {
            setCurrentView(View.ReleaseNoteType);
        }
    };
    return (react_1.default.createElement(ink_1.Box, { flexDirection: "column" },
        react_1.default.createElement(Header_1.default, null),
        {
            [View.ReleaseNoteType]: (react_1.default.createElement(ReleaseNoteTypeView_1.default, { handleChange: handleReleaseNoteTypeChange })),
            [View.Project]: react_1.default.createElement(ProjectView_1.default, { handleChange: handleProjectChange }),
            [View.Message]: react_1.default.createElement(MessageView_1.default, { handleChange: handleMessageChange }),
            [View.Flag]: react_1.default.createElement(FlagView_1.default, { handleChange: handleFlagChange }),
            [View.Confirm]: (react_1.default.createElement(ConfirmView_1.default, { releaseNote: releaseNoteText, handleChange: handleConfirmChange })),
        }[currentView] || react_1.default.createElement(ink_1.Text, null, "View not defined"),
        isAdded != null &&
            (isAdded ? (react_1.default.createElement(ink_1.Box, null,
                react_1.default.createElement(ink_1.Text, { color: "green" }, "Releasenote was saved to "),
                react_1.default.createElement(ink_1.Text, { color: "yellow" },
                    ".changelog/",
                    changelogFilename,
                    ".json"))) : (react_1.default.createElement(ink_1.Text, { color: "red" }, "Something went wrong when saving the file")))));
};
exports.default = App;
