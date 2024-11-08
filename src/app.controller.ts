import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello("Hello Sir Vince!"): string {
    return this.appService.getHello();
  }
}
