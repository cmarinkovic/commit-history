import { Module } from '@nestjs/common';
import { CommitsModule } from './commits/commits.module';

@Module({
  imports: [CommitsModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
