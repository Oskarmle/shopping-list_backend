import { Module } from '@nestjs/common';
import { ShoppinglistController } from './shoppinglist.controller';
import { ShoppinglistService } from './shoppinglist.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shoppinglist } from './entities/shoppinglist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Shoppinglist])],
  controllers: [ShoppinglistController],
  providers: [ShoppinglistService],
})
export class ShoppinglistModule {}
