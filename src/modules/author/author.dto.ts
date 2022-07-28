import { BookDTO } from '../book/book.dto';

export type AuthorDTO = {
  id?: string;
  name: string;
  age: number;
  book?: BookDTO;
};
