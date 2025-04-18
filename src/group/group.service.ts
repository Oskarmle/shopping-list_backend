import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from './entities/group.entity';
import { Repository } from 'typeorm';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';

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

  update(groupid: number, updateGroupDto: UpdateGroupDto) {
    return this.groupRepository.update(groupid, updateGroupDto);
  }

  async remove(groupid: number, groupCreator: number) {
    const group = await this.groupRepository.findOne({
      where: { groupid: groupid },
    });
    if (group.group_creator !== groupCreator) {
      throw new ForbiddenException(
        'You are not authorized to delete this group',
      );
    }
    await this.groupRepository.remove(group);
  }
}
