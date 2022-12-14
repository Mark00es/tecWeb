import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('foo')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('bar')
  getHello(): string {
    return this.appService.getHello();
  }
}
