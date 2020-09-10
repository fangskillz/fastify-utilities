import chalk from 'chalk';

export const Log = (...optionalParams: any[]) => {
    let mainContent = optionalParams[0];
    optionalParams.shift();

    let currentTime = new Date();
    let timestamp = `${currentTime.toString().split(' ').slice(0, 2).join('-')} ${currentTime.toLocaleDateString().replace(/\//g, '-')}`;

    console.log(`${chalk.gray(`[${timestamp}]`)} : ${chalk.yellow('L')} : ${chalk.green(mainContent)}`, ...optionalParams);
}