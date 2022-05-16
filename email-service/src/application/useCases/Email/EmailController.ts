import { Controller, Inject } from "@nestjs/common";
import { EventPattern } from "@nestjs/microservices";
import { RegisterUserEvent } from "../../../domain/User/events/register-user.event";
import { EmailUseCase } from "./EmailUseCase";



@Controller()
export class EmailController {

    constructor(@Inject(EmailUseCase) private readonly emailUseCase: EmailUseCase){}

    @EventPattern('user_registered')
    handleRegisterUser(data: RegisterUserEvent){
        console.log({data})
        this.emailUseCase.execute(data)
    } 
    
}