import { MigrationInterface, QueryRunner } from 'typeorm';

export class ExampleMigrationCreatedForTheCli1670812311347
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('SELECT now()');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('SELECT now()');
  }
}
