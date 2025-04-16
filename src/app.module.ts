import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { ShoppinglistModule } from './shoppinglist/shoppinglist.module';
import { UserModule } from './user/user.module';
import { ListItemModule } from './list_item/list_item.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from '../data-source';
import { GroupModule } from './group/group.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(dbConfig),
    CategoryModule,
    ShoppinglistModule,
    UserModule,
    ListItemModule,
    GroupModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
