import { Shoppinglist } from 'src/shoppinglist/entities/shoppinglist.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Listitem {
  @PrimaryGeneratedColumn()
  listid: number;

  @Column()
  title: string;

  @Column()
  date: Date;

  @ManyToOne(() => Shoppinglist, (shoppinglist) => shoppinglist.listitems)
  shoppinglist: Shoppinglist;
}
