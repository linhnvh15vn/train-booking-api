import { Test, TestingModule } from '@nestjs/testing';
import { CarriageClassController } from './carriage-class.controller';

describe('CarriageClassController', () => {
  let controller: CarriageClassController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarriageClassController],
    }).compile();

    controller = module.get<CarriageClassController>(CarriageClassController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
