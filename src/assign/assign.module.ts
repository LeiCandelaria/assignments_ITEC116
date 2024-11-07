import { Module } from '@nestjs/common';
import { AssignController } from './assign.controller';

@Module({
  controllers: [AssignController],
})
export class AssignModule {}