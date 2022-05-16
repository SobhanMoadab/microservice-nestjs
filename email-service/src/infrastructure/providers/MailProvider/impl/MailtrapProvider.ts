import Mail from "nodemailer/lib/mailer"
import * as nodemailer from 'nodemailer'
import { IMailProvider, IMessage } from "../IMailProvider";
import { Injectable } from "@nestjs/common";


@Injectable()
export class MailtrapProvider implements IMailProvider {

    private transporter: Mail

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'emerson.lueilwitz30@ethereal.email',
                pass: 'dUEhMsSudCQu5592fs'
            }
        })
    }

    async sendMail(message: IMessage): Promise<void> {
        this.transporter.sendMail({
            to: message.to.email,
            from: {
                name: message.from.name,
                address: message.from.email,
            },
            subject: message.subject,
            html: message.body,

        })
        .then((res) => console.log({res}))
        .catch(err => console.log({ err }))
    }
}