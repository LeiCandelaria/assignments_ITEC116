import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssignController } from './assign/assign.controller';

@Module({
  imports: [],
  controllers: [AppController, AssignController],
  providers: [AppService],
})
export class AppModule {}
