const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const locales = require('./src/constants/locales')

// overrides page url for language
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  return new Promise(resolve => {
    deletePage(page)

    Object.keys(locales).map(lang => {
      const localizedPath = locales[lang].default
        ? page.path
        : `/${locales[lang].path}${page.path}`

      console.log('PAGE', lang, page.path)

      const pageMatchPath =
        !locales[lang].default && page.path.match(/^\/404\/$/)
          ? { matchPath: `/${lang}/*` }
          : {}

      return createPage({
        ...page,
        ...pageMatchPath,
        path: localizedPath,
        context: {
          locale: lang,
        },
      })
    })

    resolve()
  })
}