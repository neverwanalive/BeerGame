import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { EnemyDto } from './dto/enemy.dto'

@Injectable()
export class EnemyService {
  constructor(
    @InjectModel(EnemyDto.name) private enemyModel: Model<EnemyDto>,
  ) {}

  async getEnemies(): Promise<EnemyDto[]> {
    return await this.enemyModel.find().exec()
  }

  async addEnemy(enemyBody: EnemyDto): Promise<EnemyDto> {
    return await this.enemyModel.create(enemyBody)
  }
}
