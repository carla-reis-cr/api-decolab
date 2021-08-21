import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { wp_users } from './users.entity';
import { UserRegisterDto } from './dto/usuario.register.dto';
import { ResultDto } from 'src/dto/result.dto';

/**Contoller
 * Recebo os dados e mando para quem vai tratar, manipular */

/** Gerencia as rotas da aplicação*/
@Controller('users')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

 
  @Get('all')
   async findAll(): Promise<wp_users[]>{
    return this.UsersService.findAll();
  }

  @Get('findAuthor/:id')
  async findOne(@Param() params): Promise<wp_users>{
   return this.UsersService.findOne(params.id);
 }
  @Post('register')
  async registerUser(@Body() data:UserRegisterDto): Promise<ResultDto>{
     return this.UsersService.register(data)
  }
}