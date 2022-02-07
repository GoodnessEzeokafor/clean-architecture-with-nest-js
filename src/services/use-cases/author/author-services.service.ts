import { Injectable } from "@nestjs/common";
import { IDataServices } from "src/core/abstracts";
import { CreateAuthorDto, UpdateAuthorDto } from "src/core/dtos";
import { Author } from "src/core/entities";
import { AuthorFactoryService } from "./author-factory.service";





@Injectable()

export class AuthorServices {
  constructor(
    private dataServices: IDataServices,
    private authorFactoryService: AuthorFactoryService
  ) { }

  getAllAuthors(): Promise<Author[]> {
    return this.dataServices.authors.getAll()
  }

  getAuthorById(id: any): Promise<Author> {
    return this.dataServices.authors.get(id);
  }

  createAuthor(createAuthorDto: CreateAuthorDto): Promise<Author> {
    const author = this.authorFactoryService.createNewAuthor(createAuthorDto);
    return this.dataServices.authors.create(author);
  }

  updateAuthor(
    authorId: string,
    updateAuthorDto: UpdateAuthorDto,
  ): Promise<Author> {
    const author = this.authorFactoryService.updateAuthor(updateAuthorDto);
    return this.dataServices.authors.update(authorId, author);
  }
}