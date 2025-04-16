import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { User } from 'src/user/entity/user.entity';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  // Create a new user (signup)
  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  // Validate user credentials as you sign in
  async signin(
    email: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const user = await this.userService.findOne(email);
    if (user?.password !== password) {
      throw new UnauthorizedException();
    }
    const payload = { email: user.email, sub: user.userid };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
