import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getUsuarios(): any{
    let objeto = {
      id:1,
      nome:"Leandro"
    }
    return objeto
  }
  getPost(): any{
    let objeto = {
      id:1,
      nome:"Leandro"
    }
    return objeto
  }
}
