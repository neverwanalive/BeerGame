import { Body, Controller, Get, Post } from '@nestjs/common'
import { ApiBody, ApiTags } from '@nestjs/swagger'

import { UserDto } from './dto/user.dto'
import { UsersService } from './service'

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUsers(): Promise<UserDto[]> {
    return await this.usersService.getUsers()
  }

  @ApiBody({ type: UserDto, required: true })
  @Post()
  async addUser(@Body() userBody: UserDto): Promise<UserDto> {
    return await this.usersService.addUser(userBody)
  }
}
