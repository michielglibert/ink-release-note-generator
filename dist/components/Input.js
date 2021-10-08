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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const ink_1 = require("ink");
const Input = ({ value: initialValue, onChange }) => {
    const [value, setValue] = (0, react_1.useState)(initialValue || "");
    (0, react_1.useEffect)(() => {
        if (initialValue != null)
            setValue(initialValue);
    }, [initialValue]);
    (0, ink_1.useInput)((input) => {
        const newValue = value + input;
        onChange(newValue);
        setValue(newValue);
    });
    return (react_1.default.createElement(ink_1.Text, null,
        "> ",
        value));
};
exports.default = Input;
