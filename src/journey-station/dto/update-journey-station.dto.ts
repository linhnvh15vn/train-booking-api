import { PartialType } from '@nestjs/mapped-types';
import { CreateJourneyStationDto } from 'src/journey-station/dto/create-journey-station.dto';

export class UpdateJourneyStationDto extends PartialType(
  CreateJourneyStationDto,
) {}
