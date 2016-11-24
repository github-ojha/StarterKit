/* eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production'; //this is improt as .babelrs and other libraries configure some dev specific settings

console.log(chalk.blue('Generating minified bundle for production.this will take a moment...'))
webpack(webpackConfig).run((err, stats) => { // these states would provide details fro webpack build
if(err){
  console.log(chalk.red(err));
  return 1
}

const jsonStats = stats.toJson();

if(jsonStats.hasErrors){
  return jsonStats.erros.map(error => console.log(chalk.red(error)));
}

if(jsonStats.hasWarnings){
  console.log(chalk.yellow('webpack genrated the following warnings:'));
  jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
}

console.log(`webpack stats: ${stats}`);
console.log(chalk.green(`Your app has been built for production and out to /dist folder`));
return 0;
});


