import { Controller } from "@nestjs/common";
import { Crud, CrudController } from "@nestjsx/crud";

import { Book } from "./book.entity";
import { BooksService } from "./books.service";
// import { Controller, Get, Post, Body, Param, Patch, Delete } from "@nestjs/common";
@Crud({
    model: {
      type: Book,
 
     }
  })
@Controller("books")
export class BooksController implements CrudController<Book> {
    constructor(public service: BooksService) {} 
    
    
}



// constructor(private readonly booksService: BooksService){}
// @Get()
// getAllbook(){
//     return this.booksService.getBooks()
// }
// @Post()
// addBook(
//     @Body('name') bookName:string,
//     @Body('author') bookAuthor:string,
//     @Body('price') bookPrice:number
// ){
//     const generatedID = this.booksService.insertBook(
//         bookName,
//         bookAuthor,
//         bookPrice
//     );
//     return{ id:generatedID } 

// }
// @Get(':id')
// getSingleBook(@Param('id') bookId: string){
//     return this.booksService.getSingleBook(bookId) ;

// }
// @Patch(':id')
// updateBook(
//     @Param('id') Id: string,
//     @Body('name') bookName: string,
//     @Body('author') bookAuthor: string,
//     @Body('price') bookPrice: number
    
//     ){
//         this.booksService.updateBookInfo(Id,bookName,bookAuthor,bookPrice)
//         return "the element is updated"

// }
// @Delete(':id')
// removeBook(@Param('id') bookId: string){
//     this.booksService.deleteBook(bookId)
//     return "The element is deleted"
// }    