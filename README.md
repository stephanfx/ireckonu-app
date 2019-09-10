# IreckonuApp

This is the assignment for [IRECKONU](https://www.ireckonu.com).

## Criteria

You can use this public API: https://profiles-list.firebaseio.com/Data.json

  * This API will return a list of profiles.
  * You will need to filter the data based on user’s search criteria.
  * Feel free to create your own “firebase” API if you would like!

### Scenario:

  * The user opens the search page and starts searching for profiles by first name, last name, email, this will filter the list of profiles returned from the API.
  * When the user clicks on a profile row, the app will route to the profile details page.
  * Profile details page should have tabs, the default open tab is the profile detail, bind the profile data to this tab only, the left panel shows quick facts that are not returned in the API so just put static text as shown in the screenshots.
  * The app needs to correctly handle the following:
    * No profile with this filter found
    * If API does not respond or no profiles returns, show a user friendly error massage.

### Expected technology stack:

  * Angular 6+
  * SASS
  * HTML5
  * Angular material https://material.angular.io/

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
