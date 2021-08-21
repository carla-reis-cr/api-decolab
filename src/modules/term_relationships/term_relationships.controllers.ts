import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {  TermRelationshipsService } from './term_relationships.service';
import { wp_term_relationships } from './term_relationships.entity';
import { CreateNewTermsRelationshipsDto } from './dto/term_relationships.create.dto';
import { ResultDto } from 'src/dto/result.dto';

/**Contoller
 * Recebo os dados e mando para quem vai tratar, manipular */

/** Gerencia as rotas da aplicação*/
@Controller('terms_relationships')
export class TermRelationshipsController {
  constructor(private readonly TermRelationshipsService: TermRelationshipsService) {}

  @Get('all')
   async findAll(): Promise<wp_term_relationships[]>{
    return this.TermRelationshipsService.findAll();
  }
}