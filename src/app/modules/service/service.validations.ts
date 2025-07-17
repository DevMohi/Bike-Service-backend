import { z } from "zod";

const create = z.object({
  body: z.object({
    bikeId: z.string().uuid(),
    serviceDate: z.string(),
    description: z.string(),
    status: z.enum(["pending", "in-progress", "done"]),
  }),
});

const complete = z.object({
  body: z
    .object({
      completionDate: z.string().optional(), // optional ISO datetime string
    })
    .optional(),
});

export const serviceValidationSchemas = {
  create,
  complete,
};
