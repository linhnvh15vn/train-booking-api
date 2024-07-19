import { Module } from '@nestjs/common';
import { CarriageClassController } from './carriage-class.controller';
import { CarriageClassService } from './carriage-class.service';

@Module({
  controllers: [CarriageClassController],
  providers: [CarriageClassService]
})
export class CarriageClassModule {}
