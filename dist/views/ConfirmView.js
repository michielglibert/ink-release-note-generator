"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const YesNoMenu_1 = __importDefault(require("../components/YesNoMenu"));
const ConfirmView = ({ releaseNote, handleChange }) => {
    return (react_1.default.createElement(ink_1.Box, { flexDirection: "column" },
        react_1.default.createElement(ink_1.Text, { color: "green" }, "Is this the releasenote you want to add?"),
        react_1.default.createElement(ink_1.Text, { color: "blue" }, releaseNote),
        react_1.default.createElement(YesNoMenu_1.default, { handleChange: handleChange })));
};
exports.default = ConfirmView;
