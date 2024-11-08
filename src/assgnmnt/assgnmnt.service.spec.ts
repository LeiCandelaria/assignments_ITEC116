import { Test, TestingModule } from '@nestjs/testing';
import { AssgnmntService } from './assgnmnt.service';

describe('AssgnmntService', () => {
  let service: AssgnmntService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssgnmntService],
    }).compile();

    service = module.get<AssgnmntService>(AssgnmntService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
