# Concepts

- This project presents a simple aplication of SOLID and TDD concepts applied to Frontend development with React and NextJs.
- From E2E tests, this project uses Cypress.

## Technologies

- React
- NextJs
- Typescript
- Node V21.0.0
- Jest
- Cypress

## Commands

- `npm run dev` or `yarn test` - Run the project in development mode
- `npm run test` or `yarn test` - Run the tests
- `npm run test:watch` or `yarn test:watch` - Run the tests in watch mode
- `npm run test:e2e` or `yarn test:e2e` - Run the E2E tests with cypress on terminal mode

## Architecture

| Folder                       | Description                                                                                                                                  |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| src                          | Contains the source code of the project                                                                                                      |
| src/app                      | Contains the system page and app dynamic routes                                                                                              |
| src/app/layout               | Contains the shared props, context, components and others...                                                                                 |
| src/app/pageName/functions   | Contains the page specific functions                                                                                                         |
| src/app/pageName/hooks       | Contains the page specific hooks and business ruless                                                                                         |
| src/app/pageName/template    | Contains the layout renderization and componentes. Here you insert props,hooks, tests and componentes from page                              |
| src/components               | Contains the components of the project imported from Design System                                                                           |
| --                           |
| src/contexts                 | Contains the shared contextApi                                                                                                               |
| src/domain                   | Contains the domain rules and business rules                                                                                                 |
| src/domain                   | Contains the domain rules and business rules                                                                                                 |
| src/domain/pageName/models   | Contains the domain interfaces and types                                                                                                     |
| src/domain/pageName/services | Contains the useCase services to api request                                                                                                 |
| --                           |
| src/infra                    | Contains the infrastructure from project with axios and external packages, this is a adapter                                                 |
| src/shared                   | Contains the utils layer from project, here you insert all shared functions, mocks, format functions, date functions and others from project |

## Observations:

- This project uses the new resources from Node21 how test runner and others.
