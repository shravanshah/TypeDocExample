"use strict";
/**
 * This is the doc comment for users.routes.ts
 * @packageDocumentation
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Greeter = void 0;
const express_1 = require("express");
/**
 * This is a doc comment for "userRouter".
 */
const usersRouter = express_1.Router();
/**
 * Code blocks are great for examples
 * @name Greeter
 */
class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
exports.Greeter = Greeter;
let greeter = new Greeter("world");
usersRouter.get('/', (request, response) => {
    return response.json(greeter.greet);
});
exports.default = usersRouter;
/**
 * This is a doc comment for "routes".
 */
const routes = [['/route', 
        /**
         * This is a doc comment for "routes1234253453".
         */
        (request, response) => {
            return response.json(greeter.greet);
        }]];
