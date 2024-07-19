import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateJourneyStationDto } from 'src/journey-station/dto/create-journey-station.dto';
import { UpdateJourneyStationDto } from 'src/journey-station/dto/update-journey-station.dto';
import { JourneyStationService } from 'src/journey-station/journey-station.service';

@Controller('journey-station')
export class JourneyStationController {
  constructor(private readonly _journeyStationService: JourneyStationService) {}

  @Get()
  getAll() {
    return this._journeyStationService.getAll();
  }

  @Post()
  create(@Body() createJourneyStationDto: CreateJourneyStationDto) {
    return this._journeyStationService.create(createJourneyStationDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateJourneyStationDto: UpdateJourneyStationDto,
  ) {
    return this._journeyStationService.update(id, updateJourneyStationDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this._journeyStationService.delete(id);
  }
}
