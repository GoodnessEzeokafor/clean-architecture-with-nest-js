import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { CreateGenreDto, UpdateGenreDto } from "src/core/dtos";
import { GenreServices } from "src/services/use-cases/genre/genre-services.service";




@Controller('api/genre')
export class GenreController {
  constructor(private genreServices: GenreServices) { }

  @Get()
  async getAll() {
    return this.genreServices.getAllGenres();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.genreServices.getGenreById(id);
  }

  @Post()
  createGenre(@Body() genreDto: CreateGenreDto) {
    return this.genreServices.createGenre(genreDto);
  }

  @Put(':id')
  updateGenre(
    @Param('id') genreId: string,
    @Body() updateGenreDto: UpdateGenreDto,
  ) {
    return this.genreServices.updateGenre(genreId, updateGenreDto);
  }
}
