import { TvShow } from "@modules/tvShows/entities/TvShow";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("episodes")
class Episode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  season: number;

  @Column()
  episode: number;

  @Column()
  name: string;

  @CreateDateColumn()
  air_date: Date;

  @Column()
  tv_show_id: number;

  @ManyToOne(() => TvShow)
  @JoinColumn({ name: "tv_show_id" })
  tv_show: TvShow;
}

export { Episode };
