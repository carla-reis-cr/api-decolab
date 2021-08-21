import { Injectable, Inject } from '@nestjs/common';
import { ResultDto } from 'src/dto/result.dto';
import { Repository } from 'typeorm';
import { CreateNewTermsDto } from './dto/terms.create.dto';
import { wp_terms } from './terms.entity';

@Injectable()
export class TermsService {
  [x: string]: any;
  constructor(
    @Inject('POSTS_REPOSITORY')
    private termsRepository: Repository<wp_terms>,
  ) {}

  /** Lista todos os posts */
  async findAll(): Promise<wp_terms[]> {
    return this.termsRepository.find()
  }

  async createNew(data: CreateNewTermsDto): Promise<ResultDto>{
    let term = new wp_terms()

    term.term_id = data.term_id;
    term.term_group  = data.term_group;
    term.name = data.name;
    term.slug= data.slug;

    /**Demais campos não tratados */


    return this.termsRepository.save(term)
    .then((result)=>{
      return <ResultDto>{
        status: true,
        message:"Hashtag cadastrada com sucesso"
      }
    })
    .catch((error)=>{
      console.log(error)
      return <ResultDto>{
        status: false,
        message:"Houve um erro ao cadastrar Hashtag"
      }
    })
    
  }
}