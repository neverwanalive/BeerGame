import { Body, Controller, Get, Post } from '@nestjs/common'
import { ApiBody, ApiTags } from '@nestjs/swagger'

import { EnemyDto } from './dto/enemy.dto'
import { EnemyService } from './service'

@ApiTags('enemies')
@Controller('enemies')
export class EnemyController {
  constructor(private readonly enemyService: EnemyService) {}

  @Get()
  async getEnemy(): Promise<EnemyDto[]> {
    return await this.enemyService.getEnemies()
  }

  @ApiBody({ type: EnemyDto, required: true })
  @Post()
  async addEnemy(@Body() enemyBody: EnemyDto): Promise<EnemyDto> {
    return await this.enemyService.addEnemy(enemyBody)
  }
}
