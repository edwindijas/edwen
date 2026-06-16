import { ApiError } from '@ed-ai/shared/src/types/api';
import { Request, Response, NextFunction } from 'express';

export const responseFormatter = (req: Request, res: Response, next: NextFunction): void => {
  res.success = function <T>(data: T, statusCode = 200, textResponse?: string) {
    const accept = req.headers.accept ?? 'application/json';

    if (accept.includes('application/json') || !textResponse) {
      return res.status(statusCode).json({
        success: true,
        data,
      });
    }

    return res.status(statusCode).send(textResponse);
  };

  res.fail = function (error: ApiError, statusCode = 400) {
    return res.status(statusCode).json({
      success: false,
      error,
    });
  };

  next();
};
