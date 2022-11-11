import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateBookDto } from "./dto/create-book.dto";
import { BooksService } from "./books.service";

@Controller('books') //Prefijo de PATH opcional
export class BooksController {
  constructor(private booksService: BooksService) {
  }
  @Get() //PATH opcional
  findAll(): string{
    return 'Esta accion retorna todos los libros';
  }
  @Post()
  create(@Body() createBookBto: CreateBookDto){
    //return createBookBto;
    return this.booksService.create(createBookBto);
  }
  /*create():string{
    return 'Esta accion crea un libro';
  }
  manejador(): string{
    return 'HOLA DESDE LIBROS';
  }*/
}
//ENDPOINT
// GET Prefijo de PATH opcional + PATH opcional
