import z from "zod";

const create = z.object({
  body: z
    .object({
      brand: z.string(),
      model: z.string(),
      year: z.string(),
      customerId: z.string(),
    })
    .strict(),
});

export const bikeValidationSchemas = {
  create,
};
