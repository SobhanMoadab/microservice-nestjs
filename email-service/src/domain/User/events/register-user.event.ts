import { User } from "../User";

export class RegisterUserEvent {
    public name: string
    public email: string

    constructor(public readonly user: Omit<User, 'password'>){
        this.name = user.name,
        this.email = user.email
    }
}