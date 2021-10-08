"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const MenuOpton_1 = __importDefault(require("./MenuOpton"));
const ReleaseNoteTypeView = ({ handleChange }) => {
    const releaseTypeOptions = [
        "feature",
        "improvement",
        "fix",
        "technical",
        "other",
    ];
    const [activeOption, setActiveOption] = react_1.default.useState(0);
    const handleNextOption = () => {
        if (activeOption === releaseTypeOptions.length - 1)
            setActiveOption(0);
        else
            setActiveOption((activeOption) => activeOption + 1);
    };
    const handlePreviousOption = () => {
        if (activeOption === 0)
            setActiveOption(releaseTypeOptions.length - 1);
        else
            setActiveOption((activeOption) => activeOption - 1);
    };
    (0, ink_1.useInput)((_, key) => {
        if (key.downArrow)
            handleNextOption();
        if (key.upArrow)
            handlePreviousOption();
        if (key.return && releaseTypeOptions[activeOption])
            handleChange(releaseTypeOptions[activeOption]);
    });
    return (react_1.default.createElement(ink_1.Box, { flexDirection: "column" },
        react_1.default.createElement(ink_1.Box, null,
            react_1.default.createElement(ink_1.Box, { borderStyle: "single", marginX: 2, marginY: 1, paddingX: 2 },
                react_1.default.createElement(ink_1.Text, { color: "green" }, "ADD A CHANGELOG"))),
        react_1.default.createElement(ink_1.Text, { color: "green" }, "What type of releasenote do you want to add?"),
        releaseTypeOptions.map((releaseType, index) => (react_1.default.createElement(MenuOpton_1.default, { key: `MenuOption_${releaseType}`, isActive: index === activeOption }, releaseType)))));
};
exports.default = ReleaseNoteTypeView;
