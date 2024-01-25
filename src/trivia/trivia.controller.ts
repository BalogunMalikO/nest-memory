import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { TriviaService } from './trivia.service';
import { CreateTriviaDto } from './dto/create-trivia.dto';
import { UpdateTriviaDto } from './dto/update-trivia.dto';

@Controller('trivia')
export class TriviaController {
  constructor(private readonly triviaService: TriviaService) {}

  @Post()
  create(@Body() createTriviaDto: CreateTriviaDto) {
    try {
      const createdTrivia = this.triviaService.create(createTriviaDto);
      return createdTrivia;
    } catch (error) {
      return { error: error.message };
    }
  }

  @Get()
  findAll() {
    return this.triviaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      const trivia = this.triviaService.findOne(+id);
      return trivia;
    } catch (error) {
      return { error: error.message };
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTriviaDto: UpdateTriviaDto) {
    try {
      const updatedTrivia = this.triviaService.update(+id, updateTriviaDto);
      return updatedTrivia;
    } catch (error) {
      return { error: error.message };
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      this.triviaService.remove(+id);
      return { message: 'Trivia successfully removed' };
    } catch (error) {
      return { error: error.message };
    }
  }
}
