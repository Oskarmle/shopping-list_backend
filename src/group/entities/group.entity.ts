import { Shoppinglist } from 'src/shoppinglist/entities/shoppinglist.entity';
import { User } from 'src/user/entity/user.entity';
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  groupid: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  date_added: Date;

  @ManyToMany(() => User, (user) => user.groups)
  users: User[];

  @OneToMany(() => Shoppinglist, (shoppinglist) => shoppinglist.group)
  shoppinglists: Shoppinglist[];
}
