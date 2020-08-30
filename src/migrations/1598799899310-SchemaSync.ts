import {MigrationInterface, QueryRunner} from "typeorm";

export class SchemaSync1598799899310 implements MigrationInterface {
    name = 'SchemaSync1598799899310'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffee" RENAME COLUMN "title" TO "name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffee" RENAME COLUMN "name" TO "title"`);
    }

}
