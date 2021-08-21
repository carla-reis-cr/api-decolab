import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { TermsController } from './terms.controllers';
import { TermsProviders } from './terms.providers';
import { TermsService } from './terms.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...TermsProviders,
    TermsService,
  ],
  controllers:[TermsController]
})
export class UsersModule {}