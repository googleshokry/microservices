import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailController } from './mail.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MAILSERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'mailservice',
            brokers: ['kafka:9092'],
          },
          consumer: {
            groupId: 'mail-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [MailController],
  providers: [MailService],
})
export class MailModule {}
