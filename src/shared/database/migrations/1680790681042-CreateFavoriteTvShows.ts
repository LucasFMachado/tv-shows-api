import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateFavoriteTvShows1680790681042 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "favorites",
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
            name: "tv_show_id",
            type: "int",
            isNullable: false,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
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
    await queryRunner.dropTable("favorites");
  }
}
