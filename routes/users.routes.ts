/**
 * This is the doc comment for users.routes.ts
 * @packageDocumentation
 */

import { Router } from 'express';

/**
 * This is a doc comment for "userRouter".
 */
const usersRouter = Router();



/**
 * Code blocks are great for examples
 * @name Greeter
 */
export class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return "Hello, " + this.greeting;
  }
}

let greeter = new Greeter("world");

usersRouter.get('/', (request, response) => {
    return response.json(greeter.greet);
  });

export default usersRouter;



/**
 * This is a doc comment for "routes".
 */
const routes = [['/route', 
/**
 * This is a doc comment for "routes1234253453".
 */
(request: any, response: any) => {
  return response.json(greeter.greet);
}]]

