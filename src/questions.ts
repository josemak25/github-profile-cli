import { QuestionCollection } from "inquirer";

export const questions: QuestionCollection = [
  {
    mask: "*",
    type: "password",
    name: "personal_access_token",
    message: "Enter your github personal access token?:",
    validate: (value: string) => (value ? true : "password is required"),
  },
];
