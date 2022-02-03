import {User} from "./schema";

export class UserService{
    getOldUser(users: User[]): User[]{
        users.forEach((user,i) => {
            if(user.age < 40){
                delete users[i];
            }
        });
        return users;
    }
}

const user = <T extends User>(object : T)=>{
    return {...object, uuid: 1}
}

user({name: "shayan", email: "shayan@gmail.com", age: 20})






