// Import our SCSS files so webpack will process them
import '../stylesheets/index.scss'
import displayPlatformSpecificContent from './display-platform-specific-content'
import explorer from './explorer'
import search from './search'
import nav from './nav'
import browserDateFormatter from 'browser-date-formatter'
import googleAnalytics from './google-analytics'
import deprecationBanner from './deprecation-banner'
import sidebar from './sidebar'
import wrapCodeTerms from './wrap-code-terms'
import print from './print'
import localization from './localization'
import helpfulness from './helpfulness'
import experiment from './experiment'
import { fillCsrf } from './get-csrf'
import initializeEvents from './events'

document.addEventListener('DOMContentLoaded', async () => {
  displayPlatformSpecificContent()
  explorer()
  search()
  nav()
  browserDateFormatter()
  googleAnalytics()
  deprecationBanner()
  sidebar()
  wrapCodeTerms()
  print()
  localization()
  await fillCsrf() // this must complete before any POST calls
  helpfulness()
  experiment()
  initializeEvents()
})
