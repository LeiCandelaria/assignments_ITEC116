import { Module } from '@nestjs/common';
import { AssignmentsController } from './assignment.controller';

@Module({
  controllers: [AssignmentsController],
})
export class AssignmentsModule {}
