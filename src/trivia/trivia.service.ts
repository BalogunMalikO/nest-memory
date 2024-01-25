import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTriviaDto } from './dto/create-trivia.dto';
import { UpdateTriviaDto } from './dto/update-trivia.dto';
import { Trivia } from './entities/trivia.entity';

@Injectable()
export class TriviaService {
  private triviaQuestion: Trivia[] = [];

  create(createTriviaDto: CreateTriviaDto): Trivia {
    const newTrivia: Trivia = {
      id: this.generateUniqueId(),
      ...createTriviaDto,
    };
    this.triviaQuestion.push(newTrivia);
    return newTrivia;
  }

  findAll(): Trivia[] {
    return this.triviaQuestion;
  }

  findOne(id: number): Trivia {
    const trivia = this.triviaQuestion.find((t) => t.id === id);
    if (!trivia) {
      throw new NotFoundException(`Trivia with ID ${id} not found`);
    }
    return trivia;
  }

  update(id: number, updateTriviaDto: UpdateTriviaDto): Trivia {
    const index = this.triviaQuestion.findIndex((t) => t.id === id);
    if (index === -1) {
      throw new NotFoundException(`Trivia with ID ${id} not found`);
    }

    this.triviaQuestion[index] = { ...this.triviaQuestion[index], ...updateTriviaDto };
    return this.triviaQuestion[index];
  }

  remove(id: number): void {
    const index = this.triviaQuestion.findIndex((t) => t.id === id);
    if (index === -1) {
      throw new NotFoundException(`Trivia with ID ${id} not found`);
    }

    this.triviaQuestion.splice(index, 1);
  }

  private generateUniqueId(): number {
    return this.triviaQuestion.length > 0 ? Math.max(...this.triviaQuestion.map((t) => t.id)) + 1 : 1;
  }
}
