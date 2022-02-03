import {Controller, Param, Body, Get, Post, Put, Delete, JsonController, UseBefore} from 'routing-controllers';
import {ErrorHandler} from "./ErrorHandler";
import {User} from "./schema";
import {UserRepo} from "./user.repo";
import {UserService} from "./user.service";
@UseBefore(ErrorHandler)

@JsonController()
export class MainController {
    private __service;
    constructor() {
        this.__service = new UserService();
    }
    @Get('/users')
    async getAll() : Promise<User[]> {
        const obj = new UserRepo();
        const users = await obj.findModel();
        return this.__service.getOldUser(users);
    }
}