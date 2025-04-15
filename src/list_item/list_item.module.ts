import { Module } from '@nestjs/common';
import { ListItemService } from './list_item.service';
import { ListItemController } from './list_item.controller';

@Module({
  providers: [ListItemService],
  controllers: [ListItemController],
})
export class ListItemModule {}
