import { Injectable } from '@nestjs/common';
import { CreateJourneyDto } from 'src/journey/dto/create-journey.dto';
import { UpdateJourneyDto } from 'src/journey/dto/update-journey.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class JourneyService {
  constructor(private readonly _prismaService: PrismaService) {}

  getAll() {
    return this._prismaService.journey.findMany();
  }

  create(createJourneyDto: CreateJourneyDto) {
    return this._prismaService.journey.create({
      data: createJourneyDto,
    });
  }

  update(id: string, updateJourneyDto: UpdateJourneyDto) {
    return this._prismaService.journey.update({
      data: updateJourneyDto,
      where: {
        id,
      },
    });
  }

  delete(id: string) {
    return this._prismaService.journey.delete({
      where: {
        id,
      },
    });
  }
}
