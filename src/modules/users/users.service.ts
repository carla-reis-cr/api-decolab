import { Injectable, Inject } from '@nestjs/common';
import { ResultDto } from 'src/dto/result.dto';
import { Repository } from 'typeorm';
import { UserRegisterDto } from './dto/usuario.register.dto';
import { wp_users } from './users.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: Repository<wp_users>,
  ) {}

  /** Lista todos os usuarios */
  async findAll(): Promise<wp_users[]> {
    return this.usersRepository.find();
  }

  async findOne(id:number): Promise<wp_users> {
    return this.usersRepository.findOne(id);
  }
  async register(data: UserRegisterDto): Promise<ResultDto>{
    let user = new wp_users()
    var date = new Date();

    user.ID;
    user.user_login = data.user_login;
    user.display_name = data.display_name;
    user.user_email = data.user_email;
    user.user_pass = bcrypt.hashSync(data.user_pass,8);
    user.user_nicename = data.user_nicename;
    user.user_registered = date;
    /** Demais dados não tratados */
    user.user_activation_key ='';
    user.user_status=0;
    user.user_url='';

    return this.usersRepository.save(user)
    .then((result)=>{
      return <ResultDto>{
        status: true,
        message:"Usuário cadastrado com sucesso"
      }
    })
    .catch((error)=>{
      return <ResultDto>{
        status: false,
        message:"Houve um erro ao cadastrar o usuário"
      }
    })
    
  }

   async findOneEmail(email: string): Promise<wp_users | undefined>{
      return this.usersRepository.findOne({user_email: email});
   }
}