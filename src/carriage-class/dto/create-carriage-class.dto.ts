import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCarriageClassDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  seatingCapacity: number;
}
