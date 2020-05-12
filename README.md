# Icerock Site

This project uses Gatsby. We support **English** and **Russian** translations, markdown page markup and ReactJs for rendering. Gatsby uses GraphQl, but only for managing its own data, not performing any network queries.

### Installation

Clone this repo and run `yarn`, then `yarn start` and visit http://localhost:8000 to start development. GraphQl dashboard is available at http://localhost:8000/__graphql

### Deployment

Run `yarn deploy` and copy **public** folder to static assets folder.

### Translating content
Add new locale to `/src/constants/locales.js`, then copy `/src/i18n/locales/ru.json` file to your locale filename, translate
everything, then import that file at `/src/i18n/index.tsx`.