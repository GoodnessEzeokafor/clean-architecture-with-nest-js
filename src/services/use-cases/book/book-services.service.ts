import { Injectable } from "@nestjs/common";
import { ICrmServices, IDataServices } from "src/core/abstracts";
import { Book } from "src/core/entities";




@Injectable()
export class BookServices {
  constructor(
    private dataServices: IDataServices,
    private crmServices: ICrmServices,
  ) {}

  getAllBooks(): Promise<Book[]> {
    return this.dataServices.books.getAll();
  }

  getBookById(id: any): Promise<Book> {
    return this.dataServices.books.get(id);
  }

  async createBook(book: Book): Promise<Book> {
    try {
      // call to our dependencies
      const createdBook = await this.dataServices.books.create(book);
      await this.crmServices.bookAdded(createdBook);

      return createdBook;
    } catch (error) {
      throw error;
    }
  }

  updateBook(bookId: string, book: Book): Promise<Book> {
    return this.dataServices.books.update(bookId, book);
  }
}