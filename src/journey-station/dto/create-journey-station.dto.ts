import { IsNotEmpty, IsNumber, IsUUID } from 'class-validator';

export class CreateJourneyStationDto {
  @IsNotEmpty()
  @IsUUID()
  journeyId: string;

  @IsNotEmpty()
  @IsUUID()
  stationId: string;

  @IsNotEmpty()
  @IsNumber()
  stopOrder: number;

  @IsNotEmpty()
  departureTime: Date;
}
