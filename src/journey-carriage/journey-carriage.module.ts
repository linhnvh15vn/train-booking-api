import { Module } from '@nestjs/common';
import { JourneyCarriageController } from './journey-carriage.controller';
import { JourneyCarriageService } from './journey-carriage.service';

@Module({
  controllers: [JourneyCarriageController],
  providers: [JourneyCarriageService]
})
export class JourneyCarriageModule {}
