import { Injectable } from '@nestjs/common';
import { AuthorDTO } from './author.dto';

@Injectable()
export class AuthorService {
  create(createAuthorDto: AuthorDTO) {
    return 'This action adds a new author';
  }

  findAll() {
    return `This action returns all author`;
  }

  findOne(id: number) {
    return `This action returns a #${id} author`;
  }

  update(id: number, updateAuthorDto: AuthorDTO) {
    return `This action updates a #${id} author`;
  }

  remove(id: number) {
    return `This action removes a #${id} author`;
  }
}
