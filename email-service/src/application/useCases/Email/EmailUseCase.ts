import { Inject, Injectable } from "@nestjs/common";
import { RegisterUserEvent } from "../../../domain/User/events/register-user.event";
import { IMailProvider, IMessage, MAIL_PROVIDER } from '../../../infrastructure/providers/MailProvider/IMailProvider'


@Injectable()
export class EmailUseCase {

    constructor(@Inject(MAIL_PROVIDER) private readonly emailProvider: IMailProvider) { }

    execute(data: RegisterUserEvent) {
        this.emailProvider.sendMail({
            to: {
                name: data.user.name,
                email: data.user.email,
            },
            from: {
                name: 'Emerson Lueilwitz',
                email: 'lwitz30@ethereal.email',
            },
            subject: 'Hello Thanks for signing up',
            body: '<p> Greetings my friend o/ <p>',
        })
    }
}