import { Module } from '@nestjs/common';
import { ShoppinglistController } from './shoppinglist.controller';
import { ShoppinglistService } from './shoppinglist.service';

@Module({
  controllers: [ShoppinglistController],
  providers: [ShoppinglistService],
})
export class ShoppinglistModule {}
