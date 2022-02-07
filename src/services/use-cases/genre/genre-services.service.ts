import { Injectable } from "@nestjs/common";
import { IDataServices } from "src/core/abstracts";
import { CreateGenreDto, UpdateGenreDto } from "src/core/dtos";
import { Genre } from "src/core/entities";
import { GenreFactoryService } from "./genre-factory.service";



@Injectable()
export class GenreServices {
  constructor(
    private dataServices: IDataServices,
    private genreFactoryService: GenreFactoryService,
  ) {}

  getAllGenres(): Promise<Genre[]> {
    return this.dataServices.genres.getAll();
  }

  getGenreById(id: any): Promise<Genre> {
    return this.dataServices.genres.get(id);
  }

  createGenre(createGenreDto: CreateGenreDto): Promise<Genre> {
    const genre = this.genreFactoryService.createNewGenre(createGenreDto);
    return this.dataServices.genres.create(genre);
  }

  updateGenre(genreId: string, updateGenreDto: UpdateGenreDto): Promise<Genre> {
    const genre = this.genreFactoryService.updateGenre(updateGenreDto);
    return this.dataServices.genres.update(genreId, genre);
  }
}
