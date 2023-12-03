import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { ApiProperty } from '@nestjs/swagger'
import { Document } from 'mongoose'

@Schema({ collection: 'enemies' })
export class EnemyDto {
  @ApiProperty()
  @Prop()
  atack: number

  @ApiProperty()
  @Prop()
  armor: number

  @ApiProperty()
  @Prop()
  hp: number

  @ApiProperty()
  @Prop()
  heal: number
}

export const EnemySchema = SchemaFactory.createForClass(EnemyDto)
export type EnemyDocument = EnemyDto & Document
