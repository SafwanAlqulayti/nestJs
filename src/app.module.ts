import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './Books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { configService } from './config/config.service';
import { config } from './database.providers';


 @Module({
  imports: [
    TypeOrmModule.forRoot(config)
  ,
      BooksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // constructor(private connection: Connection) {}//to make available to inject across the entire project
}
