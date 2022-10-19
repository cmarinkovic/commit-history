import { Commits } from "./Commits";

export interface Response {
  commits: Commits[] | [];
  isLoading: boolean;
  isError: string;
}
