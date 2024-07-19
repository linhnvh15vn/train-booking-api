import { Module } from '@nestjs/common';
import { CarriagePriceController } from './carriage-price.controller';
import { CarriagePriceService } from './carriage-price.service';

@Module({
  controllers: [CarriagePriceController],
  providers: [CarriagePriceService]
})
export class CarriagePriceModule {}
