import { MailService } from './mail.service';
import { Controller, Post } from '@nestjs/common';

@Controller('mail')
export class MailController {
  constructor(private authService: MailService) {}

  @Post(`/send`)
  async login() {
    return this.authService.sendmail();
  }
}