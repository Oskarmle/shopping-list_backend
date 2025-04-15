import { Shoppinglist } from 'src/shoppinglist/entities/shoppinglist.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  icon: string;

  @OneToMany(() => Shoppinglist, (shoppinglist) => shoppinglist.category)
  shoppinglists: Shoppinglist[];
}
