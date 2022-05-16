import { Module } from '@nestjs/common';
import { EmailModule } from './infrastructure/ioc/Email.module';

@Module({
  imports: [EmailModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
