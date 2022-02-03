import { createExpressServer } from 'routing-controllers';
import { MainController } from './MainController';
import { ErrorHandler } from "./ErrorHandler";
//*******************************************
// creates express app, registers all controller routes and returns you express app instance
export const app = createExpressServer({
    routePrefix: '/api',
    controllers: [MainController], // we specify controllers we want to use
    // defaultErrorHandler : false,
    middlewares: [ErrorHandler],
});