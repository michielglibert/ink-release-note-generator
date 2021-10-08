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
const MenuOption_1 = __importDefault(require("./MenuOption"));
const Input_1 = __importDefault(require("./Input"));
const Menu = ({ menuOptions: passedMenuOptions, handleChange, manualInputEnabled = true, defaultOption, }) => {
    const menuOptions = [
        ...passedMenuOptions,
        ...(manualInputEnabled ? ["manual"] : []),
    ];
    const defaultOptionIndex = defaultOption
        ? menuOptions.findIndex((option) => option === defaultOption)
        : -1;
    const [activeOption, setActiveOption] = react_1.default.useState(defaultOptionIndex > -1 ? defaultOptionIndex : 0);
    const [manualInputActive, setManualInputActive] = (0, react_1.useState)(false);
    const [manualInputValue, setManualInputValue] = (0, react_1.useState)("");
    const handleNextOption = () => {
        if (activeOption === menuOptions.length - 1)
            setActiveOption(0);
        else
            setActiveOption((activeOption) => activeOption + 1);
    };
    const handlePreviousOption = () => {
        if (activeOption === 0)
            setActiveOption(menuOptions.length - 1);
        else
            setActiveOption((activeOption) => activeOption - 1);
    };
    (0, ink_1.useInput)((_, key) => {
        if (key.downArrow)
            handleNextOption();
        if (key.upArrow)
            handlePreviousOption();
        if (key.return && menuOptions[activeOption]) {
            if (menuOptions[activeOption] === "manual" && !manualInputActive) {
                setManualInputActive(true);
            }
            else if (manualInputActive) {
                handleChange(manualInputValue);
                setManualInputActive(false);
            }
            else {
                handleChange(menuOptions[activeOption]);
            }
        }
    });
    return (react_1.default.createElement(ink_1.Box, { flexDirection: "column" },
        menuOptions.map((releaseType, index) => (react_1.default.createElement(MenuOption_1.default, { key: `MenuOption_${releaseType}`, isActive: index === activeOption }, releaseType))),
        manualInputActive && (react_1.default.createElement(Input_1.default, { onChange: (arg0) => setManualInputValue(arg0) }))));
};
exports.default = Menu;
