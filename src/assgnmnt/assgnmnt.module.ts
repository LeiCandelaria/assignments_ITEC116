import { Module } from '@nestjs/common';
import { AssgnmntService,} from './assgnmnt.service';
import { assgnmntController} from './assgnmnt.controller';


@Module({
  controllers: [assgnmntController],
  providers: [AssgnmntService],
})
export class assgnmntModule {

}
