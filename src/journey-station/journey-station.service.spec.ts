import { Test, TestingModule } from '@nestjs/testing';
import { JourneyStationService } from './journey-station.service';

describe('JourneyStationService', () => {
  let service: JourneyStationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JourneyStationService],
    }).compile();

    service = module.get<JourneyStationService>(JourneyStationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
