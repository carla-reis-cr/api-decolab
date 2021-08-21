import { Connection, Repository } from 'typeorm';
import { wp_posts } from './posts.entity';

export const postsProviders = [
  {
    provide: 'POSTS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(wp_posts),
    inject: ['DATABASE_CONNECTION'],
  },
];