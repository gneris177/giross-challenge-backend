import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export const typeorm = TypeOrmModule.forRoot({
  type: 'mysql',
  host: process.env.HOST,
  port: +process.env.PORT,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  entities: [__dirname + '/../**/*.entity.js'],
  synchronize: true,
});
