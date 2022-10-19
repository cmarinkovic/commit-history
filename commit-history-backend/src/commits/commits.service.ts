import { Injectable } from '@nestjs/common';

@Injectable()
export class CommitsService {
  private octokit;

  private ownerData = {
    username: '',
    repository: '',
  };
}
