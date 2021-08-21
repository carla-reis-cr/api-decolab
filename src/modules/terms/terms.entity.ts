import { type } from 'os';
import { Entity, Column, PrimaryGeneratedColumn, Index, PrimaryColumn } from 'typeorm';

@Entity()
export class wp_terms { 
  @PrimaryGeneratedColumn()
  term_id: BigInt;

  @Column({length:200})
  name: string;

  @Column({length:200})
  slug: string;

  @Column({ type:"bigint"})
  term_group: Number;
}
 