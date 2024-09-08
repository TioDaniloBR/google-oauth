import { Controller, Get, UseGuards, Request, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { GoogleOauthGuard } from './auth/guards/google.oauth.guard';
import { middleware } from './auth/middleware/auth.middleware';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';

@Controller('auth')
export class AppController {
  constructor(private jwtService: JwtService) {}

  @Get('/healthcheck')
  @UseGuards(GoogleOauthGuard)
  getHello(): string {
    return 'API is Alive';
  }

  @Get()
  @UseGuards(GoogleOauthGuard)
  async googleAuth(@Request() req) {}

  @Get('/google/callback')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req, @Res() res: Response) {
    const user = req.user;

    const token = this.jwtService.sign({ user });

    res.redirect(`${process.env.URL_CALLBACK_FE}?token=${token}`);
  }
}
