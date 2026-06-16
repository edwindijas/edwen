import { Request, Response } from 'express';

export const getServerStatus = (req: Request, res: Response) => {
  res.success({ status: 'Server running correctly' }, 200, 'Server running correctly');
};
