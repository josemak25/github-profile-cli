import { Octokit } from "@octokit/core";
import { Answers } from "inquirer";
import { IUser } from "typings/types";

/**
 *
 * @description Fetch github user profile details
 * @function fetchUser
 * @property payload
 * @returns user
 */

export const fetchUser = async (payload: Answers) => {
  const octokit = new Octokit({ auth: payload.personal_access_token });
  const { data } = await octokit.request("/user");
  return data as IUser;
};
