"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const Menu_1 = __importDefault(require("./Menu"));
const ProjectView = ({ handleChange }) => {
    const projectOptions = [
        "general",
        "proflow",
        "louise",
        "claims",
        "campaigns",
        "toolkit",
        "settings",
        "smt",
        "other",
    ];
    return (react_1.default.createElement(ink_1.Box, { flexDirection: "column" },
        react_1.default.createElement(ink_1.Text, { color: "green" }, "What project is this releasenote for?"),
        react_1.default.createElement(Menu_1.default, { menuOptions: projectOptions, handleChange: (val) => handleChange(val) })));
};
exports.default = ProjectView;
