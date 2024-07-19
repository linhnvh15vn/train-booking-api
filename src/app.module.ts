import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { StationModule } from './station/station.module';
import { ScheduleModule } from './schedule/schedule.module';
import { JourneyModule } from './journey/journey.module';

@Module({
  imports: [PrismaModule, StationModule, ScheduleModule, JourneyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
