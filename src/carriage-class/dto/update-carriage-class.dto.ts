import { PartialType } from '@nestjs/mapped-types';
import { CreateCarriageClassDto } from 'src/carriage-class/dto/create-carriage-class.dto';

export class UpdateCarriageClassDto extends PartialType(
  CreateCarriageClassDto,
) {}
