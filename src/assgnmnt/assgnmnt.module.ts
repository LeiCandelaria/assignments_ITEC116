import { Module } from '@nestjs/common';
import { AssgnmntService,} from './assgnmnt.service';
import { assgnmntController} from './assgnmnt.controller';
// always import the controller and service in here//

@Module({
  controllers: [assgnmntController],
  providers: [AssgnmntService],
})
export class ssgnmntModule {

}
