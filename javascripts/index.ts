// Import our SCSS files so webpack will process them
import '../stylesheets/index.scss'
import displayPlatformSpecificContent from './display-platform-specific-content'
import displayToolSpecificContent from './display-tool-specific-content'
import wrapCodeTerms from './wrap-code-terms'
import localization from './localization'
import experiment from './experiment'
import copyCode from './copy-code'
import initializeEvents from './events'
import toggleImages from './toggle-images'

document.addEventListener('DOMContentLoaded', async () => {
  displayPlatformSpecificContent()
  displayToolSpecificContent()
  wrapCodeTerms()
  localization()
  copyCode()
  initializeEvents()
  experiment()
  toggleImages()
})
