import { Category } from 'src/category/entities/category.entity';
import { Group } from 'src/group/entities/group.entity';
import { Listitem } from 'src/list_item/entities/listitem.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Shoppinglist {
  @PrimaryGeneratedColumn()
  listid: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => Group, (group) => group.shoppinglists)
  group: Group;

  @ManyToOne(() => Category, (category) => category.shoppinglists)
  category: Category;

  @OneToMany(() => Listitem, (listitem) => listitem.shoppinglist)
  listitems: Listitem[];
}
