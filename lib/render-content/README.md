Markdown and Liquid rendering pipeline.

## Usage

```js
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

You can add a header to code blocks by adding the `{:copy}` annotation after the code fences:

    ```js{:copy}
    const copyMe = true
    ```

This renders:

![Screenshot of a code block showing the clipboard icon that is displayed when you use `{:copy}` annotation.](/assets/images/internal-docs/copy-block-header.png)

The un-highlighted text is available as `button.js-btn-copy`'s `data-clipboard-text` attribute.
