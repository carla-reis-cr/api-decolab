import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/** Gerencia as rotas da aplicação*/
@Controller()
export class AppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly appService: AppService) {}

}
