import { Body, Controller, Get, Post } from '@nestjs/common';

import { CommitsService } from './commits.service';

@Controller('commits')
export class CommitsController {
  constructor(private readonly commitsService: CommitsService) {}

  @Get('auth')
  isAuthenticated() {
    return this.commitsService.isAuthenticated();
  }

  @Post('auth')
  authenticate(@Body() payload: { personalToken: string }) {
    return this.commitsService.authenticate(payload);
  }
}
