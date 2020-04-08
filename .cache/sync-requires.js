const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-philpl-gatsby-theme-mdx-deck-src-templates-deck-js": hot(preferDefault(require("/Users/joeyhua/bitprj/covid-mdx-updated/node_modules/@philpl/gatsby-theme-mdx-deck/src/templates/deck.js"))),
  "component---node-modules-philpl-gatsby-theme-mdx-deck-src-templates-decks-js": hot(preferDefault(require("/Users/joeyhua/bitprj/covid-mdx-updated/node_modules/@philpl/gatsby-theme-mdx-deck/src/templates/decks.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/joeyhua/bitprj/covid-mdx-updated/.cache/dev-404-page.js")))
}

