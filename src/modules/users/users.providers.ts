import { Connection, Repository } from 'typeorm';
import { wp_users } from './users.entity';

export const usersProviders = [
  {
    provide: 'USERS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(wp_users),
    inject: ['DATABASE_CONNECTION'],
  },
];