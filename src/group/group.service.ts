import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from './entities/group.entity';
import { Repository } from 'typeorm';
import { CreateGroupDto } from './dto/create-group.dto';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group)
    private groupRepository: Repository<Group>,
  ) {}

  create(createGroupDto: CreateGroupDto, loggedInUser: number) {
    const group = {
      ...createGroupDto,
      group_creator: loggedInUser,
      date_added: new Date(),
    };
    return this.groupRepository.save(group);
  }
}
