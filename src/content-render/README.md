# Render content

In this directory is the main pipeline that converts our content from Liquid, Markdown and YAML into HTML. This directory _does not include React components_.

## Usage

```javascript
const renderContent = require('.')

const html = await renderContent(`
# Beep
{{ foo }}
`, {
  foo: 'bar'
})
```

Creates:

```html
<h1 id="beep"><a href="#beep">Beep</a></h1>
<p>bar</p>
```

## API

### renderContent(markdown, context = {}, options = {})

Render a string of `markdown` with optional `context`. Returns a `Promise`.

Liquid will be looking for includes in `${process.cwd()}/includes`.

Options:

- `fileName`: File name for debugging purposes.
- `textOnly`: Output text instead of html using [cheerio](https://ghub.io/cheerio).

### .liquid

The [Liquid](https://ghub.io/liquidjs) instance used internally.

### Code block headers

You can add a header to code blocks by adding the ` copy` annotation after the code fences, and a specified language:

    ```js copy
    const copyMe = true
    ```

The un-highlighted text is available as `button.js-btn-copy`'s `data-clipboard-text` attribute.

## Liquid tags

See also [contributing/liquid-helpers.md](../../contributing/liquid-helpers.md)

This directory contains custom Liquid tags for outputting dynamic content. These custom tags exist for a few reasons:

- Content and styling should be separated. Writers should not be concerned with writing or maintaining stylistic markup.
- Content should be localized to match the current language.
- Styling and markup should be DRY and reusable.

## Using tags

Tags can be used in:

- Articles and TOCs (`content/**/*.md`)
- Include files (`includes/*.html`)

Tags always expect a single argument, a language agnostic href:

```html
{% data variables.product.product_name %}
```

## Supported tags

| Markup | Renders |
| -- | -- |
| `{% indented_data_reference foo.bar spaces=NUMBER %}` | A data reference with the specified number of spaces prepended to each line. Defaults to 2 spaces if no spaces included. For example: `{% indented_data_reference reusables.pages.wildcard-dns-warning spaces=3 %}`

## Creating tags

Each custom tag has the following:

- a JavaScript class in `lib/liquid-tags/`
- an HTML template in `includes/liquid-tags/`

The class and the template should have corresponding names, like `lib/liquid-tags/my-tag.js` and `includes/liquid-tags/my-tag.html`

You must also register the new tag in `src/content-render/liquid/engine.js` with a line like this:

```
engine.registerTag('my_tag', require('./liquid-tags/my-tag'))
```

## Further reading

- Liquid Docs: https://github.com/liquid-lang/liquid-node#registering-new-tags
