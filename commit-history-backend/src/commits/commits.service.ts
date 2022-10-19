import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { Octokit } from 'octokit';

import { OctokitResponse } from '@octokit/types';
import { Commits } from 'src/interfaces/Commits';

@Injectable()
export class CommitsService {
  private octokit;

  private ownerData = {
    username: '',
    repository: '',
  };

  async findAll(): Promise<OctokitResponse<Commits[]>> {
    const { isAuthenticated } = this.isAuthenticated();
    const { repository } = this.ownerData;

    if (!isAuthenticated) {
      throw new UnauthorizedException('Repository owner is not authenticated.');
    }

    if (!repository) {
      throw new BadRequestException('Repository is not specified.');
    }

    let response: OctokitResponse<any>;

    try {
      response = await this.octokit.request(
        'GET /repos/{owner}/{repo}/commits',
        {
          owner: this.ownerData.username,
          repo: this.ownerData.repository,
        },
      );
    } catch (e) {
      throw new NotFoundException('Repository not found.');
    }

    return response;
  }

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

  getRepository(): { repository: string } {
    const { repository } = this.ownerData;

    if (!repository) return { repository: '' };

    return { repository: repository };
  }

  setRepository(payload: { repository: string }): { repository: string } {
    const { repository } = payload;
    if (!repository || repository.length < 1)
      throw new BadRequestException('Invalid repository.');

    this.ownerData.repository = repository;

    return { repository: repository };
  }
}
