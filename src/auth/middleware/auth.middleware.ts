import { Request } from '@nestjs/common';
export function middleware(req: Request) {
  const user = req;
  if (!user) 'User not found on middleware';
  return 'user logged';
}
