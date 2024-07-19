import { Test, TestingModule } from '@nestjs/testing';
import { JourneyCarriageController } from './journey-carriage.controller';

describe('JourneyCarriageController', () => {
  let controller: JourneyCarriageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JourneyCarriageController],
    }).compile();

    controller = module.get<JourneyCarriageController>(JourneyCarriageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
