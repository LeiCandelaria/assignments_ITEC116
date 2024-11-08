import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { assgnmntController } from './assgnmnt/assgnmnt.controller';
import { assgnmntModule } from './assgnmnt/assgnmnt.module';

@Module({
  imports: [assgnmntModule],
  controllers: [AppController, assgnmntController],
  providers: [AppService],
})
export class AppModule {
  
}
