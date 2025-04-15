import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { Category } from 'src/category/entities/category.entity';
import { Group } from 'src/group/entities/group.entity';
import { Listitem } from 'src/list_item/entities/listitem.entity';
import { Shoppinglist } from 'src/shoppinglist/entities/shoppinglist.entity';
import { User } from 'src/user/entity/user.entity';
import { DataSource, DataSourceOptions } from 'typeorm';

dotenv.config();

export const dbConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  //   entities: ['dist/**/*.entity{.ts,.js}'],
  entities: [User, Category, Shoppinglist, Group, Listitem],
  migrations: ['dist/src/migrations/*{.ts,.js}'],
};

const datasource = new DataSource(dbConfig as DataSourceOptions);
export default datasource;
