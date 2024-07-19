import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CarriageClassService {
  constructor(private readonly _prismaService: PrismaService) {}

  getAll() {
    return this._prismaService.carriageClass.findMany();
  }
}
