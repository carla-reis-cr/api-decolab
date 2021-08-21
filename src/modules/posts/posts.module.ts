import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { UsersModule } from '../users/users.module';
import { PostsController } from './posts.controllers';
import { postsProviders } from './posts.providers';
import { PostsService } from './posts.service';

@Module({
  imports: [DatabaseModule,
            UsersModule],
  providers: [
    ...postsProviders,
    PostsService,
  ],
  controllers:[PostsController]
})
export class PostsModule {}