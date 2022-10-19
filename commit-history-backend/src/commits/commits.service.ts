import { BadRequestException, Injectable } from '@nestjs/common';
import { Octokit } from 'octokit';

import { OctokitResponse } from '@octokit/types';

@Injectable()
export class CommitsService {
  private octokit;

  private ownerData = {
    username: '',
    repository: '',
  };

  isAuthenticated(): { isAuthenticated: boolean; owner: string } {
    if (!this.octokit) return { isAuthenticated: false, owner: '' };

    return { isAuthenticated: true, owner: this.ownerData.username };
  }

  async authenticate(payload: {
    personalToken: string;
  }): Promise<{ owner: string }> {
    const { personalToken } = payload;
    const regex = new RegExp('^ghp_[A-Za-z0-9]{36}$');
    if (!regex.test(personalToken)) {
      throw new BadRequestException('Invalid token.');
    }

    const octokit = new Octokit({
      auth: personalToken,
    });
    if (!octokit) throw new BadRequestException('Invalid token.');

    const response: OctokitResponse<any> =
      await octokit.rest.users.getAuthenticated();
    if (!response) throw new BadRequestException('Invalid token.');

    this.ownerData.username = response.data.login;
    this.octokit = octokit;

    return { owner: this.ownerData.username };
  }
}
