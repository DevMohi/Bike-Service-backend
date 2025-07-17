import z from "zod";

const create = z.object({
  body: z.object({
    name: z.string(),
    email: z.string(),
    phone: z.string(),
  }),
});

const update = z.object({
  body: z
    .object({
      name: z.string().optional(),
      email: z.string().optional(),
      phone: z.string().optional(),
    })
    .strict(),
});

export const customerValidationSchemas = {
  create,
  update,
};
