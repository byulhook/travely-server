import { Request, Response, NextFunction } from "express";
import { ResponseDTO } from "./ResponseDTO";

export const checkRequiredFields = (fields: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    for (const field of fields) {
      if (!(field in req.body)) {
        res.status(400).json(ResponseDTO.fail(`${field} is required`));
        return;
      }
    }
    next();
  };
};

export const checkRequiredFieldsQuery = (fields: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    for (const field of fields) {
      if (!(field in req.body)) {
        res.status(400).json(ResponseDTO.fail(`${field} is required`));
        return;
      }
    }
    next();
  };
};

export const checkRequiredFieldsParams = (fields: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    for (const field of fields) {
      if (!(field in req.body)) {
        res.status(400).json(ResponseDTO.fail(`${field} is required`));
        return;
      }
    }
    next();
  };
};
