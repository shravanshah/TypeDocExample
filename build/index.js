"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const users_routes_1 = __importDefault(require("./routes/users.routes"));
const app = express_1.default();
const PORT = 8000;
const routes = express_2.Router();
routes.use('/users', users_routes_1.default);
exports.default = routes;
app.get('/', (req, res) => res.send('Express + TypeScript Server!!!'));
app.use(routes);
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
