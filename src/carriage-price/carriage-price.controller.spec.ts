import { Test, TestingModule } from '@nestjs/testing';
import { CarriagePriceController } from './carriage-price.controller';

describe('CarriagePriceController', () => {
  let controller: CarriagePriceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarriagePriceController],
    }).compile();

    controller = module.get<CarriagePriceController>(CarriagePriceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
