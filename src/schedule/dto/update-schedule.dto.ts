import { PartialType } from '@nestjs/mapped-types';
import { CreateScheduleDto } from 'src/schedule/dto/create-schedule.dto';

export class UpdateScheduleDto extends PartialType(CreateScheduleDto) {}
