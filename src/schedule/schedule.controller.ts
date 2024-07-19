import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CreateScheduleDto } from 'src/schedule/dto/create-schedule.dto';
import { UpdateScheduleDto } from 'src/schedule/dto/update-schedule.dto';
import { ScheduleService } from 'src/schedule/schedule.service';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly _scheduleService: ScheduleService) {}

  @Get()
  getAll() {
    return this._scheduleService.getAll();
  }

  @Post()
  create(@Body() createStationDto: CreateScheduleDto) {
    return this._scheduleService.create(createStationDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStationDto: UpdateScheduleDto) {
    return this._scheduleService.update(id, updateStationDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this._scheduleService.delete(id);
  }
}
