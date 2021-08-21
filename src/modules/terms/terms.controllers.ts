import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {  TermsService } from './terms.service';
import { wp_terms } from './terms.entity';
import { CreateNewTermsDto } from './dto/terms.create.dto';
import { ResultDto } from 'src/dto/result.dto';

/**Contoller
 * Recebo os dados e mando para quem vai tratar, manipular */

/** Gerencia as rotas da aplicação*/
@Controller('terms')
export class TermsController {
  constructor(private readonly TermsService: TermsService) {}

 
  @Get('all')
   async findAll(): Promise<wp_terms[]>{
    return this.TermsService.findAll();
  }

  @Post('create')
  async createTerms(@Body() data:CreateNewTermsDto): Promise<ResultDto>{
    console.log(data);
     return this.TermsService.createNew(data)
  }
}