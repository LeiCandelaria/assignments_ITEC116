import { Test, TestingModule } from '@nestjs/testing';
import { AssgnmntController } from './assgnmnt.controller';

describe('AssgnmntController', () => {
  let controller: AssgnmntController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssgnmntController],
    }).compile();

    controller = module.get<AssgnmntController>(AssgnmntController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
