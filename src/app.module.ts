import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TriviaModule } from './trivia/trivia.module';

@Module({
  imports: [TriviaModule],
  
})
export class AppModule {}
