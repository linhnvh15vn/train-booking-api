import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CarriagePriceService {
  constructor(private readonly _prismaService: PrismaService) {}

  getAll() {
    return this._prismaService.carriagePrice.findMany();
  }
}
