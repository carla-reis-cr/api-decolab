import { Connection, Repository } from 'typeorm';
import { wp_terms } from './terms.entity';

export const TermsProviders = [
  {
    provide: 'TERMS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(wp_terms),
    inject: ['DATABASE_CONNECTION'],
  },
];