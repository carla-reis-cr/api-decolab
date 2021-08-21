import { type } from 'os';
import { Entity, Column, PrimaryGeneratedColumn, Index, PrimaryColumn } from 'typeorm';

@Entity()
export class wp_term_relationships { 
  @PrimaryGeneratedColumn()
  object_id: BigInt;//id do post

  @PrimaryColumn({type:"bigint"})
  term_taxonomy_id: Number;

  @Column({ type:"int"})
  term_order: Number;

}
 