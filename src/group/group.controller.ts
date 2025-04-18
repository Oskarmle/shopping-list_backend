import {
  Body,
  Controller,
  Delete,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { GroupService } from './group.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { UpdateGroupDto } from './dto/update-group.dto';

@UseGuards(AuthGuard)
@Controller('group')
export class GroupController {
  constructor(private groupService: GroupService) {}

  @Post()
  create(@Body() createGroupDto: CreateGroupDto, @Request() req) {
    const loggedInUser = req.user.sub;
    return this.groupService.create(createGroupDto, loggedInUser);
  }

  @Patch(':id')
  update(@Param('id') groupid: number, @Body() updateGroupDto: UpdateGroupDto) {
    return this.groupService.update(groupid, updateGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') groupid: number, @Request() req) {
    const groupCreator = req.user.sub;
    return this.groupService.remove(groupid, groupCreator);
  }
}
