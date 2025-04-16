import { Controller, Get, Request } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  getProfile(@Request() req) {
    return req.user;
  }

  @Get(':email')
  getProfileByEmail(@Request() req) {
    return this.userService.findOne(req.params.email);
  }
}
