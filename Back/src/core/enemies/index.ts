import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'

import { EnemyController } from './controller'
import { EnemyDto, EnemySchema } from './dto/enemy.dto'
import { EnemyService } from './service'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: EnemyDto.name, schema: EnemySchema }]),
  ],
  controllers: [EnemyController],
  providers: [EnemyService],
})
export class EnemyModule {}
