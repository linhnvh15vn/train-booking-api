import { Controller, Get } from '@nestjs/common';
import { CarriagePriceService } from 'src/carriage-price/carriage-price.service';

@Controller('carriage-price')
export class CarriagePriceController {
  constructor(private readonly _carriagePriceService: CarriagePriceService) {}

  @Get()
  getAll() {
    return this._carriagePriceService.getAll();
  }
}
