import 'reflect-metadata';
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

const DataSourceTypeOrm = new DataSource({
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: Number(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USER,
  password: process.env.TYPEORM_PASS,
  database: process.env.TYPEORM_DB,
  synchronize: false,
  logging: true,
  entities: ['build/database/entity/*.js'],
  migrations: ['build/database/migrations/*.js'],
  migrationsRun: true,
  migrationsTransactionMode: 'all',
});

DataSourceTypeOrm.initialize()
  .then(() =>
    console.log('[TypeORM]: Connection with database initing with success.'),
  )
  .catch((error) =>
    console.log(
      '[TypeORM]: Error on initing connection with database: ' + error,
    ),
  );

export { DataSourceTypeOrm };
