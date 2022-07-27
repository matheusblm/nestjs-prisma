import { Module } from '@nestjs/common';
import { ModulesModule } from './book/modules/modules.module';
import { BookModule } from './modules/book/book.module';

@Module({
  imports: [ModulesModule, BookModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
