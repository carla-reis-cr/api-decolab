import { Injectable, Inject } from '@nestjs/common';
import { ResultDto } from 'src/dto/result.dto';
import { Repository } from 'typeorm';
import { CreateNewTermsRelationshipsDto } from './dto/term_relationships.create.dto';
import { wp_term_relationships } from './term_relationships.entity';

@Injectable()
export class TermRelationshipsService {
  [x: string]: any;
  constructor(
    @Inject('TERM_RELATIONSHIPS_REPOSITORY')
    private TermRelationshipsRepository: Repository<wp_term_relationships>,
  ) {}

  /** Lista todos os posts */
  async findAll(): Promise<wp_term_relationships[]> {
    return this.TermRelationshipsRepository.find()
  }

}