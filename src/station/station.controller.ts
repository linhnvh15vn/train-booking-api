import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateStationDto } from 'src/station/dto/create-station.dto';
import { UpdateStationDto } from 'src/station/dto/update-station.dto';
import { StationService } from 'src/station/station.service';

@Controller('station')
export class StationController {
  constructor(private readonly _stationService: StationService) {}

  @Get()
  getAll() {
    return this._stationService.getAll();
  }

  @Post()
  create(@Body() createStationDto: CreateStationDto) {
    return this._stationService.create(createStationDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStationDto: UpdateStationDto) {
    return this._stationService.update(id, updateStationDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this._stationService.delete(id);
  }
}
