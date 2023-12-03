import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { UserDto } from './dto/user.dto'

@Injectable()
export class UsersService {
  constructor(@InjectModel(UserDto.name) private userModel: Model<UserDto>) {}

  async getUsers(): Promise<UserDto[]> {
    return await this.userModel.find().exec()
  }

  async addUser(userBody: UserDto): Promise<UserDto> {
    return await this.userModel.create(userBody)
  }
}
