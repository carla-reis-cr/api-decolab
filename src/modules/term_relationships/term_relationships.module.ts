import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { TermRelationshipsController } from './term_relationships.controllers';
import { TermRelationshipsProviders } from './term_relationships.providers';
import { TermRelationshipsService } from './term_relationships.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...TermRelationshipsProviders,
    TermRelationshipsService,
  ],
  controllers:[TermRelationshipsController]
})
export class UsersModule {}