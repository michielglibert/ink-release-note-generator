"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Menu_1 = __importDefault(require("./Menu"));
const YesNoMenu = ({ handleChange, defaultOption = true }) => {
    return (react_1.default.createElement(Menu_1.default, { defaultOption: defaultOption ? "Yes" : "No", manualInputEnabled: false, menuOptions: ["Yes", "No"], handleChange: (arg0) => handleChange(arg0 === "Yes") }));
};
exports.default = YesNoMenu;
