import { Injectable } from '@nestjs/common'
import { CreateAuthorDto, UpdateAuthorDto } from 'src/core/dtos'
import { Author } from 'src/core/entities'

@Injectable()
export class AuthorFactoryService {
  createNewAuthor(createAuthorDto: CreateAuthorDto) {
    const newAuthor = new Author()
    newAuthor.firstName = createAuthorDto.firstName;
    newAuthor.lastName = createAuthorDto.lastName;
    return newAuthor;
  }
  updateAuthor(updateAuthorDto: UpdateAuthorDto) {
    const newAuthor = new Author();
    newAuthor.firstName = updateAuthorDto.firstName;
    newAuthor.lastName = updateAuthorDto.lastName;
    return newAuthor;
  }
}