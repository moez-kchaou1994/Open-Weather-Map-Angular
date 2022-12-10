# Projet

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Notice
1. The API documentation page is accessible http://openweathermap.org/api
2. Using openweathermap requires registration in order to obtain an API key
The OpenWeatherMap service provides a current weather API, as well as several forecast types with different depths and measurement steps. In this project, we will use 2 APIs:
*Current weather data:
http://api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
*Forecast in 3 hour steps for 5 days
http://api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}
