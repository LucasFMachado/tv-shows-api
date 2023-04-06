import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateEpisodes1680776366553 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "episodes",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isUnique: true,
            isGenerated: true,
            generationStrategy: "increment",
            isNullable: false,
          },
          {
            name: "season",
            type: "int",
            isNullable: false,
          },
          {
            name: "episode",
            type: "int",
            isNullable: false,
          },
          {
            name: "name",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "air_date",
            type: "timestamp",
            isNullable: false,
          },
          {
            name: "tv_show_id",
            type: "int",
            isNullable: false,
          },
          {
            name: "delete",
            type: "boolean",
            default: false,
            isNullable: false,
          },
        ],
        foreignKeys: [
          {
            name: "fk_tv_show",
            referencedTableName: "tv_shows",
            referencedColumnNames: ["id"],
            columnNames: ["tv_show_id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("episodes");
  }
}
