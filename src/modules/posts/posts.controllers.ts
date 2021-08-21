import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { UsersService } from '../users/users.service'
import { wp_posts } from './posts.entity';
import { CreateNewPostDto } from './dto/posts.createnew.dto';
import { ResultDto } from 'src/dto/result.dto';

/**Contoller
 * Recebo os dados e mando para quem vai tratar, manipular */

/** Gerencia as rotas da aplicação*/
@Controller('posts')
export class PostsController {
  constructor(private readonly PostsService: PostsService) {}

 
  @Get('all')
   async findAll(): Promise<wp_posts[]>{
    return this.PostsService.findAll();
  }

  @Get('allPostFormat')
  async findAllPostFormat(): Promise<wp_posts[]>{
   return this.PostsService.findAllPostFormat();
 }
 @Get('hashtagsPosts')
 async findTermsPost(): Promise<wp_posts[]>{
   return this.PostsService.findTermsPost();
 }

  @Get(':id')
   async findOne(@Param() params): Promise<wp_posts[]>{
    return this.PostsService.findOne(params.id);
  }

  @Post('create')
  async createPost(@Body() data:CreateNewPostDto): Promise<ResultDto>{
    console.log(data);
     return this.PostsService.createNew(data)
  }
}