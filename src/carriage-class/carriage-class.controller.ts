import { Controller, Get } from '@nestjs/common';
import { CarriageClassService } from 'src/carriage-class/carriage-class.service';

@Controller('carriage-class')
export class CarriageClassController {
  constructor(private readonly _carriageClassService: CarriageClassService) {}

  @Get()
  getAll() {
    return this._carriageClassService.getAll();
  }
}
