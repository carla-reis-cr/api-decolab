import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'mysql',
      host: 'http://ceted.feevale.br',
      port: 3306,
      username: 'redesocial_tmpuser',
      password: 'redesocial_tmp*123A*',
      database: 'redesocial_tmp',
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: true,
    }),
  },
];