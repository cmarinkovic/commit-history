import { Body, Controller, Get, Post } from '@nestjs/common';

import { CommitsService } from './commits.service';

@Controller('commits')
export class CommitsController {
  constructor(private readonly commitsService: CommitsService) {}

  @Get()
  getAll() {
    return this.commitsService.findAll();
  }

  @Get('auth')
  isAuthenticated() {
    return this.commitsService.isAuthenticated();
  }

  @Post('auth')
  authenticate(@Body() payload: { personalToken: string }) {
    return this.commitsService.authenticate(payload);
  }

  @Get('repository')
  getRepository() {
    return this.commitsService.getRepository();
  }

  @Post('repository')
  setRepository(@Body() payload: { repository: string }) {
    return this.commitsService.setRepository(payload);
  }
}
