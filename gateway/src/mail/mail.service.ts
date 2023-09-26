import {Inject, Injectable} from '@nestjs/common';
import {ClientKafka} from '@nestjs/microservices';

@Injectable()
export class MailService {
    constructor(
        @Inject('MAILSERVICE') private readonly mailClient: ClientKafka
    ) {
    }

    sendmail() {
        this.mailClient.emit('send_email', JSON.stringify({"send": "success"}));
    }
}
