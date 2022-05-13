import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "fa03253b57166b",
        pass: "23ae6ae08a4718"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <rih.oliver.97@gmail.com>',
            to: 'Richard Oliver <ri.tricolor_2008@hotmail.com>',
            subject,
            html: body,
        })
    };
}