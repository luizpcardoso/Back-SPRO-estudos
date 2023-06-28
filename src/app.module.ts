import { Module } from '@nestjs/common';
import { UserController } from './modules/users/user.controller';
import { UserModule } from './modules/users/user.module';

@Module({
  imports: [UserModule],
})
export class AppModule {}
