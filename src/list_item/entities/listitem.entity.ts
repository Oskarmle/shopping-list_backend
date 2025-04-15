import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Listitem {
  @PrimaryGeneratedColumn()
  listid: number;

  @Column()
  title: string;

  @Column()
  date: Date;
}
