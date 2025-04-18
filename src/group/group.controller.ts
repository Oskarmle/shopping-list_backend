import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { GroupService } from './group.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';

@UseGuards(AuthGuard)
@Controller('group')
export class GroupController {
  constructor(private groupService: GroupService) {}

  @Post()
  create(@Body() createGroupDto: CreateGroupDto, @Request() req) {
    const loggedInUser = req.user.sub;
    return this.groupService.create(createGroupDto, loggedInUser);
  }
}
