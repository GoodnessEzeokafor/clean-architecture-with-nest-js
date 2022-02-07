import { Injectable } from "@nestjs/common";
import { CreateGenreDto, UpdateGenreDto } from "src/core/dtos";
import { Genre } from "src/core/entities";


@Injectable()
export class GenreFactoryService {
  createNewGenre(createGenreDto: CreateGenreDto) {
    const newGenre = new Genre();
    newGenre.name = createGenreDto.name;

    return newGenre;
  }

  updateGenre(updateGenreDto: UpdateGenreDto) {
    const newGenre = new Genre();
    newGenre.name = updateGenreDto.name;

    return newGenre;
  }
}
