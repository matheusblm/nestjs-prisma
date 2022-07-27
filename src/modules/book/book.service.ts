import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { BookDTO } from './book.dto';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}
  async create(data: BookDTO) {
    const bookExist = await this.prisma.book.findFirst({
      where: {
        bar_code: data.bar_code,
      },
    });
    if (bookExist) {
      throw new Error('Book already exist');
    }
    const book = await this.prisma.book.create({ data });
    return book;
  }

  async findAll() {
    return this.prisma.book.findMany();
  }

  async update(id: string, data: BookDTO) {
    const bookExist = await this.prisma.book.findUnique({
      where: {
        id,
      },
    });
    if (!bookExist) {
      throw new Error('Book does not exist');
    }

    return this.prisma.book.update({
      data,
      where: {
        id,
      },
    });
  }
}
