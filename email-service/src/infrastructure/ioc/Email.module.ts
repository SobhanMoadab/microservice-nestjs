import { Module } from "@nestjs/common";
import { EmailController } from "../../application/useCases/Email/EmailController";
import { EmailUseCase } from "../../application/useCases/Email/EmailUseCase";
import { MAIL_PROVIDER } from "../providers/MailProvider/IMailProvider";
import { MailtrapProvider } from "../providers/MailProvider/impl/MailtrapProvider";


@Module({
    imports: [],
    controllers: [EmailController],
    providers: [
        EmailUseCase,
        { provide: MAIL_PROVIDER, useClass: MailtrapProvider }
    ]
})
export class EmailModule { }