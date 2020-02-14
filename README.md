## Project Title

The project is a Weather App entitled simply 'Weather App' 

## Table of Contents 


* [Prerequistes](#Prerequistes)
* [Installation](#Installation)
* [Built With](#Built With)
* [Run The App](#Run The App)
* [Authors](#Authors)
* [Project Comments](#Project Comments)
* [Acknowledgements](#Acknowledgements)



## Prerequisites

* An IDE of your choice
* Node.js(this project uses version 13.7.0)
* Latest version of Angular(this project uses Angular: 9.0.1) 


## Installation
* Follow the installations step by step
* To Install Angular npm i -g @angular/cli 
* To Install Angular/Materials npm install --save @angular/material @angular/cdk @angular/animations
* To Install @ngrx/store run npm install @ngrx/store --save
* To Install 'moment(formatting dates) run npm i moment


## Built With

* [Angular](https://angular.io/) - The web framework used
* Using VScode https://code.visualstudio.com/
* and using https://openweathermap.org. 

## Run The App

* NG Serve is used in the CLI to run the application. Once it has finished compiling you will able to view the application at  http://localhost:4200/


## Authors
* DeVon Thompson - *Debugging*
* Tishana Trainor - *Debugging*
* Gemma Curl - *Debugging*
* Antwon Allen - *Debugging*
* John Au-Yeung - *tutorial guide* - https://medium.com/better-programming/how-to-use-the-openweathermap-api-to-make-a-weather-app-f8d67b22c3ca


## Project Comments

* This was my first time using the Angular framework, given the time frame, I think I chose the best way to complete the task to the best of my ability. 
* The tutorial that I found through extensive research and educating myself on Angular, I felt and feel was also the best of what I saw presented. 
While going through the initial set up of the project and initial installations I did not have any problems. However there were literally two major bugs that were encountered, which are outlined below.

*  Major Bug 1
* When initially running the build, there was an issue with the weather.service.ts file pulling information from the environment.ts file. The error message read "Property 'apiUrl' does not exist on type '{ production: boolean; }'"
* The work around to the problem was hard coding the apiURL and apiKey in the weather.service.ts file

*  Major Bug 2
* There was an error with with 'from @angular/materials and overall issue with the app.module.ts file. This issue seems wide spread and from my personal searches as well as those listed above who helped with debugging, there wasn't a conclusive fix. Here is a GitHub link detailing the bug https://github.com/angular/components/issues/17503


## Acknowledgments

* Thank you to John Au-Yeung, Gemma, Tishana and Antwon
* Thank you to a wonderful twitter and slack community, 
* As always google is much appreciated as well as stackoverflow
* Finally thank you to the people behind this opportunity
