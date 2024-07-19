import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateScheduleDto } from 'src/schedule/dto/create-schedule.dto';
import { UpdateScheduleDto } from 'src/schedule/dto/update-schedule.dto';

@Injectable()
export class ScheduleService {
  constructor(private readonly _prismaService: PrismaService) {}

  getAll() {
    return this._prismaService.schedule.findMany();
  }

  create(createScheduleDto: CreateScheduleDto) {
    return this._prismaService.schedule.create({
      data: createScheduleDto,
    });
  }

  update(id: string, updateScheduleDto: UpdateScheduleDto) {
    return this._prismaService.station.update({
      data: {
        name: updateScheduleDto.name,
      },
      where: {
        id,
      },
    });
  }

  delete(id: string) {
    return this._prismaService.schedule.delete({
      where: {
        id,
      },
    });
  }
}
