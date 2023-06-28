import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/crateUser.dto';
import { UserEntity } from './user.entity';
import { UserRepository } from './user.repository';
import { v4 as uuid } from 'uuid';
import { ListUserDTO } from './dto/ListUser.dto';

@Controller('/user')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() data: CreateUserDTO) {
    const { name, email, password } = data;
    const userId = uuid();
    const user = new UserEntity(userId, name, email, password);

    this.userRepository.saveUser(user);
    return {
      user: new ListUserDTO(user.userId, user.name),
      message: 'Create use success',
    };
  }

  @Get()
  async usersList() {
    const allUser = await this.userRepository.getAll();
    const allUserList = allUser.map((user: UserEntity) => {
      return new ListUserDTO(user.userId, user.name);
    });

    return allUserList;
  }
}
