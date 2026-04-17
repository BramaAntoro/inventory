import type { NextFunction, Request, Response } from "express";
import type { ZodType } from "zod";

export default function validate(schema: ZodType) {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      return next({
        statusCode: 400,
        message: "Validation error",
        detail: result.error.issues,
      });
    }

    req.body = result.data;
    next();
  };
}
