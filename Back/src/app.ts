import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { EnemyModule } from 'core/enemies'
import { UsersModule } from 'core/users'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(process.env.MONGO_URL ?? ''),
    UsersModule,
    EnemyModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
