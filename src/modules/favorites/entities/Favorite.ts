import { Episode } from "@modules/episodes/entities/Episode";
import { TvShow } from "@modules/tvShows/entities/TvShow";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("favorites")
class Favorite {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tv_show_id: number;

  @ManyToOne(() => TvShow)
  @JoinColumn({ name: "tv_show_id" })
  tv_show: TvShow;

  @Column()
  delete: boolean;

  @CreateDateColumn()
  created_at: Date;
}

export { Favorite };
