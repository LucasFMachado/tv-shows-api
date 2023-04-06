import { Episode } from "@modules/episodes/entities/Episode";
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("tv_shows")
class TvShow {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  genre: string;

  @CreateDateColumn()
  start_date: Date;

  @CreateDateColumn()
  end_date?: Date;

  @Column()
  network: string;

  @Column()
  description: string;

  episodes?: Episode[];
}

export { TvShow };
