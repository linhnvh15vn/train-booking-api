import { PartialType } from '@nestjs/mapped-types';
import { CreateJourneyDto } from 'src/journey/dto/create-journey.dto';

export class UpdateJourneyDto extends PartialType(CreateJourneyDto) {}
