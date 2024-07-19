import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { StationModule } from './station/station.module';
import { ScheduleModule } from './schedule/schedule.module';
import { JourneyModule } from './journey/journey.module';
import { JourneyStationModule } from './journey-station/journey-station.module';
import { CarriageClassModule } from './carriage-class/carriage-class.module';
import { JourneyCarriageModule } from './journey-carriage/journey-carriage.module';
import { CarriagePriceModule } from './carriage-price/carriage-price.module';

@Module({
  imports: [
    PrismaModule,
    StationModule,
    ScheduleModule,
    JourneyModule,
    JourneyStationModule,
    CarriageClassModule,
    JourneyCarriageModule,
    CarriagePriceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
