import { requiredMessage } from "@shared/messages";
import { number, object } from "yup";

export const createFavoriteSchema = object().shape({
  params: object({
    tv_show_id: number()
      .positive(requiredMessage("Tv Show"))
      .required(requiredMessage("Tv Show")),
  }),
});
