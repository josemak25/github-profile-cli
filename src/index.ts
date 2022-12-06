import chalk from "chalk";
import inquirer from "inquirer";
import { fetchUser } from "./helpers/fetch-user.helpers";

import { questions } from "./questions";

console.info("Hi welcome to the github profile cli");
console.info(
  "The idea of this project is to help build the understanding of cli tooling on nodejs using the github open API"
);

// Run CLI APP
const runApp = async () => {
  try {
    const answers = await inquirer.prompt(questions);
    const { bio, ...user } = await fetchUser(answers);
    console.log(chalk.blue("Login successful"));
    console.log(`bio: ${chalk.green(bio)}`);
    console.table(user);
  } catch (error: any) {
    console.log(
      `${chalk.red(
        error.response.data.message
      )}: Please confirm if your personal access token is correct`
    );

    //Restart app
    runApp();
  }
};

//Start app
runApp();
