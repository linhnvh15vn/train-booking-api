import { Test, TestingModule } from '@nestjs/testing';
import { CarriagePriceService } from './carriage-price.service';

describe('CarriagePriceService', () => {
  let service: CarriagePriceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarriagePriceService],
    }).compile();

    service = module.get<CarriagePriceService>(CarriagePriceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
