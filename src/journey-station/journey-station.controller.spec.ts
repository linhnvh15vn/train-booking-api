import { Test, TestingModule } from '@nestjs/testing';
import { JourneyStationController } from './journey-station.controller';

describe('JourneyStationController', () => {
  let controller: JourneyStationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JourneyStationController],
    }).compile();

    controller = module.get<JourneyStationController>(JourneyStationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
