import { Injectable, NotFoundException } from "@nestjs/common";
import { TypeOrmCrudService} from '@nestjsx/crud-typeorm'
import {Book} from './book.entity';
import { InjectRepository} from '@nestjs/typeorm';
// import {Book} from "./book.model"
import { from } from "rxjs";
// import { from } from "rxjs";
@Injectable()
export class BooksService extends TypeOrmCrudService<Book> {
    constructor(@InjectRepository(Book) repo){
        super(repo)
    }

}






// private books: Book[]= []//ask

// insertBook(name: string,author: string,price: number){
//     const bookID = Math.random().toString();
//     const  newBook = new Book(bookID,name, author,price);

//     this.books.push(newBook);
//     return bookID
// }   

//  getBooks(){
//      return [...this.books]
//  }
//  getSingleBook(bookId:string){
//     const book = this.findBook(bookId)[0]// because we return arrey [Book,number] and we only need the Book
//     return{...book}
//  }
//  updateBookInfo(bookId:string ,name:string, author:string,price:number){
//      const [book, index ] =this.findBook(bookId)
//      const updatedBook = {...book};
//      if(name){// to only change if we have sent value from the body and insure we dont replace it with null
//          updatedBook.name = name
//      }
//      if(author){
//          updatedBook.author = author
//      }
//      if(price){
//          updatedBook.price = price
//      }
//      this.books[index] = updatedBook


//  }
//  deleteBook(bookId: string){
//      const index = this.findBook(bookId)[1]
//      this.books.splice(index,1)
//  }
// getHello(): string {
//     return 'Hello World!';
//   }
//   private findBook(id:string) : [Book ,number]{
//       const bookIndex = this.books.findIndex(book =>book.id===id)
//       const book = this.books[bookIndex] ;
//       if(!book){
//           throw new NotFoundException("could not find the book")
//       }
//       return [book,bookIndex]
//   }