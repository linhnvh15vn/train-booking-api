import { Module } from '@nestjs/common';
import { JourneyStationController } from './journey-station.controller';
import { JourneyStationService } from './journey-station.service';

@Module({
  controllers: [JourneyStationController],
  providers: [JourneyStationService]
})
export class JourneyStationModule {}
