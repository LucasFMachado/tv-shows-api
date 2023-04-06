import { requiredMessage } from "@shared/messages";
import { number, object } from "yup";

export const getOneTvShowSchema = object().shape({
  params: object({
    id: number()
      .positive(requiredMessage("TV Show"))
      .required(requiredMessage("TV Show")),
  }),
});
