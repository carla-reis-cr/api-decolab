import { Connection, Repository } from 'typeorm';
import { wp_term_relationships } from './term_relationships.entity';

export const TermRelationshipsProviders = [
  {
    provide: 'TERM_RELATIONSHIPS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(wp_term_relationships),
    inject: ['DATABASE_CONNECTION'],
  },
];