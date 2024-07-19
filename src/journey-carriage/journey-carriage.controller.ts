import { Controller, Get } from '@nestjs/common';
import { JourneyCarriageService } from 'src/journey-carriage/journey-carriage.service';

@Controller('journey-carriage')
export class JourneyCarriageController {
  constructor(
    private readonly _journeyCarriageService: JourneyCarriageService,
  ) {}

  @Get()
  getAll() {
    return this._journeyCarriageService.getAll();
  }
}
