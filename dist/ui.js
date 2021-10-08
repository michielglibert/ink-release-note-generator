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
const ReleaseNoteTypeView_1 = __importDefault(require("./components/ReleaseNoteTypeView"));
var View;
(function (View) {
    View[View["ReleaseNoteType"] = 0] = "ReleaseNoteType";
    View[View["Project"] = 1] = "Project";
    View[View["Message"] = 2] = "Message";
})(View || (View = {}));
const App = () => {
    const [releaseNote, setReleaseNote] = (0, react_1.useState)({
        type: undefined,
        project: undefined,
        message: undefined,
    });
    const [currentView, setCurrentView] = (0, react_1.useState)(0);
    (0, ink_1.useInput)((input) => {
        if (input === "q")
            (0, process_1.exit)();
    });
    const handleReleaseNoteTypeChange = (value) => {
        setReleaseNote({ ...releaseNote, type: value });
        setCurrentView(View.Project);
    };
    return (react_1.default.createElement(ink_1.Box, null, {
        [View.ReleaseNoteType]: (react_1.default.createElement(ReleaseNoteTypeView_1.default, { handleChange: handleReleaseNoteTypeChange })),
        [View.Project]: react_1.default.createElement(ink_1.Text, null, releaseNote.type),
        [View.Message]: react_1.default.createElement(react_1.default.Fragment, null),
    }[currentView] || react_1.default.createElement(ink_1.Text, null, "View not defined")));
};
exports.default = App;
