import { Module } from '@nestjs/common';
import { TriviaService } from './trivia.service';
import { TriviaController } from './trivia.controller';

@Module({
  controllers: [TriviaController],
  providers: [TriviaService],
})
export class TriviaModule {}
