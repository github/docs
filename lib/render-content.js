const renderContent = require('@github-docs/render-content')
const { ExtendedMarkdown, tags } = require('./liquid-tags/extended-markdown')

// Include custom tags like {% link_with_intro /article/foo %}
renderContent.liquid.registerTag('liquid_tag', require('./liquid-tags/liquid-tag'))
renderContent.liquid.registerTag('link', require('./liquid-tags/link'))
renderContent.liquid.registerTag('link_with_intro', require('./liquid-tags/link-with-intro'))
renderContent.liquid.registerTag('homepage_link_with_intro', require('./liquid-tags/homepage-link-with-intro'))
renderContent.liquid.registerTag('link_in_list', require('./liquid-tags/link-in-list'))
renderContent.liquid.registerTag('topic_link_in_list', require('./liquid-tags/topic-link-in-list'))
renderContent.liquid.registerTag('link_with_short_title', require('./liquid-tags/link-with-short-title'))
renderContent.liquid.registerTag('indented_data_reference', require('./liquid-tags/indented-data-reference'))
renderContent.liquid.registerTag('data', require('./liquid-tags/data'))
renderContent.liquid.registerTag('octicon', require('./liquid-tags/octicon'))

for (const tag in tags) {
  // Register all the extended markdown tags, like {% note %} and {% warning %}
  renderContent.liquid.registerTag(tag, ExtendedMarkdown)
}

module.exports = renderContent
