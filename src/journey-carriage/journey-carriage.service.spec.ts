import { Test, TestingModule } from '@nestjs/testing';
import { JourneyCarriageService } from './journey-carriage.service';

describe('JourneyCarriageService', () => {
  let service: JourneyCarriageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JourneyCarriageService],
    }).compile();

    service = module.get<JourneyCarriageService>(JourneyCarriageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
