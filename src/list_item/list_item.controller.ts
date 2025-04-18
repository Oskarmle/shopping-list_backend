import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { ListItemService } from './list_item.service';
import { CreateListitemDto } from './dto/create-listitem.dto';

@Controller('listitem')
export class ListItemController {
  constructor(private listItemService: ListItemService) {}

  @Post()
  create(@Body() createListitemDto: CreateListitemDto) {
    return this.listItemService.create(createListitemDto);
  }

  @Delete(':id')
  remove(@Param('id') listid: number) {
    return this.listItemService.remove(listid);
  }
}
