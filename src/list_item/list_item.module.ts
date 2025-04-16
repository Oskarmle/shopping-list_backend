import { Module } from '@nestjs/common';
import { ListItemService } from './list_item.service';
import { ListItemController } from './list_item.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Listitem } from './entities/listitem.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Listitem])],
  providers: [ListItemService],
  controllers: [ListItemController],
})
export class ListItemModule {}
