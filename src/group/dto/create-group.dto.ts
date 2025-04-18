import { IsDate, IsString } from 'class-validator';

export class CreateGroupDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsDate()
  date_added: Date;
}
