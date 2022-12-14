#!/usr/bin/env node
const packageJson = require("./package.json");
const welcome = require("cli-welcome");

welcome({
  title: packageJson.name,
  version: packageJson.version,
  description: packageJson.description,
  tagLine: "Hello, nice to meet ya!",
  bold: true,
  clear: true,
});

console.log(`
Amir Ahmadi - Software Engineer

Amir is a software engineer and open source programmer.
He started with PHP, When he came to a good understanding of programming ,
He realized that languages were just tools and turned more to programming concepts,
And since then, he continues to learn new concepts of programming every day.

    linkedin: https://www.linkedin.com/in/amir-ahmadi-dev/
    Github:   https://github.com/saanny
    Email:    AmirAhmadidev@gmail.com
    
`);
