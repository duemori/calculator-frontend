# Calculator - Frontend

App created to manage calculator operations. UI views expectations:
- Login (and “sign out” button anywhere available for all session-required screens)
  - A simple username and password input form
- New Operation
  - An input form providing all fields to request a new operation on behalf of the current user
- User Records
  - Datatable of all operation records from the current user
  - Datatable should have pagination (page number and per-page option) and sorting
  - Datatable should have a filter/search input field for partial matches
  - Delete button to delete records

**Important:** The development is not finished. Expectation was to integrate with  authentication server and manage login/logout. For now, the userId is informed in every single operation. Since the initial credit was required to execute the operations, created a page specific for that.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

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
