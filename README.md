### Installation

Clone this repo and run `yarn`, then `yarn start` and visit http://localhost:8000 to start development. 

### Deployment

Run `yarn build` after commiting any changes to generate new static assets for github pages, then `git push`.

### Translating content
Add new locale to `/src/constants/locales.js`, then copy `/src/i18n/locales/ru.json` file to your locale filename, translate
everything, then import that file at `/src/i18n/index.tsx`.