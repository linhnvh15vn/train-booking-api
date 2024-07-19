import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateJourneyDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsUUID()
  scheduleId: string;
}
