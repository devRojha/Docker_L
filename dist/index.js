"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const body_parser_1 = __importDefault(require("body-parser"));
const rout_1 = __importDefault(require("./rout"));
const app = express();
const port = 3000;
app.use(body_parser_1.default.json());
app.use('/api', rout_1.default);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
