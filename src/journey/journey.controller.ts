import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateJourneyDto } from 'src/journey/dto/create-journey.dto';
import { UpdateJourneyDto } from 'src/journey/dto/update-journey.dto';
import { JourneyService } from 'src/journey/journey.service';

@Controller('journey')
export class JourneyController {
  constructor(private readonly _journeyService: JourneyService) {}

  @Get()
  getAll() {
    return this._journeyService.getAll();
  }

  @Post()
  create(@Body() createJourneyDto: CreateJourneyDto) {
    return this._journeyService.create(createJourneyDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, updateJourneyDto: UpdateJourneyDto) {
    return this._journeyService.update(id, updateJourneyDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this._journeyService.delete(id);
  }
}