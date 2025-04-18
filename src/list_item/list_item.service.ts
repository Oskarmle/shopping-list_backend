import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Listitem } from './entities/listitem.entity';
import { Repository } from 'typeorm';
import { CreateListitemDto } from './dto/create-listitem.dto';

@Injectable()
export class ListItemService {
  constructor(
    @InjectRepository(Listitem)
    private listitemRepository: Repository<Listitem>,
  ) {}

  create(createListitemDto: CreateListitemDto) {
    return this.listitemRepository.save(createListitemDto);
  }

  remove(listid: number) {
    return this.listitemRepository.delete(listid);
  }
}
