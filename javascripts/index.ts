// Import our SCSS files so webpack will process them
import '../stylesheets/index.scss'
import displayPlatformSpecificContent from './display-platform-specific-content'
import displayToolSpecificContent from './display-tool-specific-content'
import explorer from './explorer'
import scrollUp from './scroll-up'
import search from './search'
import wrapCodeTerms from './wrap-code-terms'
import print from './print'
import localization from './localization'
import experiment from './experiment'
import copyCode from './copy-code'
import initializeEvents from './events'
import toggleImages from './toggle-images'

document.addEventListener('DOMContentLoaded', async () => {
  displayPlatformSpecificContent()
  displayToolSpecificContent()
  explorer()
  scrollUp()
  search()
  wrapCodeTerms()
  print()
  localization()
  copyCode()
  initializeEvents()
  experiment()
  toggleImages()
})
