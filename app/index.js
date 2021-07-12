'use strict';

const Generator = require('yeoman-generator');
const path = require('path');

module.exports = class extends Generator {

    async prompting() {
        this.answers = await this.prompt([
          {
            type: "input",
            name: "name",
            message: "Your project name",
            default: this.appname // Default to current folder name
          },
          {
            type: "input",
            name: "description",
            message: "Project Description",
            default: ""
          },
          {
            type: "input",
            name: "author",
            message: "Author?",
            default: ""
          },          
          {
            type: "input",
            name: "version",
            message: "Your Version",
            default: "1.0.0"
          }          
        ]);
        //this.log("app name", answers.name);
        //this.log("cool feature", answers.cool);
      }

    async writing() {
      this.fs.copyTpl(this.templatePath("**/*"), this.destinationPath(this.answers.name), this.answers);
    }


}