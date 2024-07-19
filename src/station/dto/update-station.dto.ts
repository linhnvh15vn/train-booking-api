import { PartialType } from '@nestjs/mapped-types';
import { CreateStationDto } from 'src/station/dto/create-station.dto';

export class UpdateStationDto extends PartialType(CreateStationDto) {}
