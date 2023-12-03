import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { ApiProperty } from '@nestjs/swagger'
import { Document } from 'mongoose'

@Schema({ collection: 'users' })
export class UserDto {
  @ApiProperty()
  @Prop()
  name: string

  @ApiProperty()
  @Prop()
  gold: number

  @ApiProperty()
  @Prop()
  hp: number
}

export const UserSchema = SchemaFactory.createForClass(UserDto)
export type UserDocument = UserDto & Document
