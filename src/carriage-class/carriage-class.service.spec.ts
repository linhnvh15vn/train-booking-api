import { Test, TestingModule } from '@nestjs/testing';
import { CarriageClassService } from './carriage-class.service';

describe('CarriageClassService', () => {
  let service: CarriageClassService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarriageClassService],
    }).compile();

    service = module.get<CarriageClassService>(CarriageClassService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
