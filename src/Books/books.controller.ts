import { Controller, Get, Post, Body, Param, Patch, Delete } from "@nestjs/common";
import { BooksService } from "./books.service";

@Controller("books")
export class BooksController {
     constructor(private readonly booksService: BooksService){}
    @Get()
    getAllbook(){
        return this.booksService.getBooks()
    }
    @Post()
    addBook(
        @Body('name') bookName:string,
        @Body('author') bookAuthor:string,
        @Body('price') bookPrice:number
    ){
        const generatedID = this.booksService.insertBook(
            bookName,
            bookAuthor,
            bookPrice
        );
        return{ id:generatedID } 

    }
    @Get(':id')
    getSingleBook(@Param('id') bookId: string){
        return this.booksService.getSingleBook(bookId) ;

    }
    @Patch(':id')
    updateBook(
        @Param('id') Id: string,
        @Body('name') bookName: string,
        @Body('author') bookAuthor: string,
        @Body('price') bookPrice: number
        
        ){
            this.booksService.updateBookInfo(Id,bookName,bookAuthor,bookPrice)
            return "the element is updated"

    }
    @Delete(':id')
    removeBook(@Param('id') bookId: string){
        this.booksService.deleteBook(bookId)
        return "The element is deleted"
    }    
    
    
//     @Get()
//   getHello(): string {
//     return this.booksService.getHello();
//   }
    
}