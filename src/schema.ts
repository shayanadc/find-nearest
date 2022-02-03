import {model, Schema} from "mongoose";
import * as mongoose from "mongoose";

export type User = {
    name: string;
    email: string;
    age: number;
}

export class UserModel{
    public readonly schema;
    public model;
    constructor() {
        this.schema = new Schema<User>({
            name: {type: String, required: true},
            email: {type: String, required: true},
            age: {type: Number, required: true},
        });
        this.getModel();
    }
        getModel(){
            this.model = model<User>('User', this.schema);
        }
}
