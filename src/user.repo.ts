import {User, UserModel} from "./schema";

export class UserRepo{
    private model;
    constructor() {
        const newModel = new UserModel();
        this.model = newModel.model;
    }
    async saveModel(user: User): Promise<User>{
        const doc = new this.model(user)
        return await doc.save();
    }
    async findModel(): Promise<User[]>{
        return await this.model.find().exec()
    }
}