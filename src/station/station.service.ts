import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStationDto } from 'src/station/dto/create-station.dto';
import { UpdateStationDto } from 'src/station/dto/update-station.dto';

@Injectable()
export class StationService {
  constructor(private readonly _prismaService: PrismaService) {}

  getAll() {
    return this._prismaService.station.findMany();
  }

  create(createStationDto: CreateStationDto) {
    return this._prismaService.station.create({
      data: createStationDto,
    });
  }

  update(id: string, updateStationDto: UpdateStationDto) {
    return this._prismaService.station.update({
      data: {
        name: updateStationDto.name,
      },
      where: {
        id,
      },
    });
  }

  delete(id: string) {
    return this._prismaService.station.delete({
      where: {
        id,
      },
    });
  }
}
