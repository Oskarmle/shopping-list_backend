import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Shoppinglist {
  @PrimaryGeneratedColumn()
  listid: number;

  @Column()
  title: string;

  @Column()
  description: string;
}
