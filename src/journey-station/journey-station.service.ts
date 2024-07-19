import { Injectable } from '@nestjs/common';
import { CreateJourneyStationDto } from 'src/journey-station/dto/create-journey-station.dto';
import { UpdateJourneyStationDto } from 'src/journey-station/dto/update-journey-station.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class JourneyStationService {
  constructor(private readonly _prismaService: PrismaService) {}

  getAll() {
    return this._prismaService.journeyStation.findMany();
  }

  create(createJourneyStationDto: CreateJourneyStationDto) {
    return this._prismaService.journeyStation.create({
      data: createJourneyStationDto,
    });
  }

  update(id: string, updateJourneyStationDto: UpdateJourneyStationDto) {
    return this._prismaService.journeyStation.update({
      data: updateJourneyStationDto,
      where: {
        id,
      },
    });
  }

  delete(id: string) {
    return this._prismaService.journeyStation.delete({
      where: {
        id,
      },
    });
  }
}
