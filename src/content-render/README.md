# Content render

The content-render subject is the main pipeline that converts content from Liquid, Markdown, and YAML into HTML. It handles template processing, Markdown parsing, custom Liquid tags, and unified (remark/rehype) transformations. This directory does not include React components.

## Purpose & Scope

This subject is responsible for:
- Rendering Liquid templates with context variables
- Converting Markdown to HTML with unified (remark/rehype)
- Custom Liquid tags for content and data references
- Code block syntax highlighting and headers
- Link rewriting (local paths, assets, anchors)
- Image transformations and wrapping
- Alert/note callout rendering
- Table accessibility improvements
- Text-only extraction for search indexing

## Architecture & Key Assets

### Key capabilities and their locations

- `index.ts` - `renderContent()`: Main entry point for content rendering
- `liquid/engine.ts` - Liquid engine with custom tag registration
- `unified/processor.ts` - Unified pipeline with remark/rehype plugins
- `liquid/*.ts` - Custom Liquid tags (data, ifversion, octicon, etc.)
- `unified/*.ts` - Content transformation plugins

## Setup & Usage

### Basic usage

```javascript
import { renderContent } from '@/content-render'

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

### API

#### renderContent(markdown, context = {}, options = {})

Render a string of `markdown` with optional `context`. Returns a `Promise`.

Liquid will look for includes in `${process.cwd()}/includes`.

Options:
- `fileName`: File name for debugging purposes
- `textOnly`: Output text instead of HTML using cheerio (for search indexing)

#### .liquid

The Liquid instance used internally for direct access.

### Code block headers

Add a header to code blocks with the `copy` annotation:

    ```js copy
    const copyMe = true
    ```

The un-highlighted text is available as `button.js-btn-copy`'s `data-clipboard-text` attribute.

## Data & External Dependencies

### Data inputs
- Markdown content with Liquid templates
- Context object with variables and functions
- Data from `data/` directory (reusables, variables, features)
- Content includes from `includes/` directory

### Dependencies
- **LiquidJS** - Template engine for Liquid processing
- **unified/remark/rehype** - Markdown to HTML transformation
- **cheerio** - HTML parsing for text-only mode
- **highlight.js** - Syntax highlighting for code blocks
- Custom plugins for GitHub-specific transformations

### Transformation pipeline

1. **Liquid rendering** - Process Liquid tags and variables
2. **Markdown parsing** - Convert to syntax tree (remark)
3. **Unified plugins** - Apply transformations
4. **HTML generation** - Convert to final HTML (rehype)
5. **Post-processing** - Additional cleanup if needed

## Cross-links & Ownership

### Related subjects
- [`src/frame`](../frame/README.md) - Page rendering uses renderContent
- [`src/data-directory`](../data-directory/README.md) - Data accessed via {% data %} tags
- [`src/versions`](../versions/README.md) - {% ifversion %} tag logic
- All content in `content/` - Source of Markdown to render
- Includes in `includes/` - Reusable Liquid includes

### Internal documentation
- [Liquid helpers guide](../../contributing/liquid-helpers.md)
- [Content style guide](../../contributing/) - Using Liquid tags in content

### Ownership
- Team: Docs Engineering

## Current State & Next Steps

### Supported Liquid tags

Custom tags implemented:

| Tag | Purpose |
|-----|---------|
| `{% data variables.product.product_name %}` | Access data variables |
| `{% ifversion fpt %}...{% endif %}` | Conditional content by version |
| `{% octicon "check" %}` | Render Octicons |
| `{% indented_data_reference foo.bar spaces=2 %}` | Data reference with indentation |
| `{% tool name %}` | Tool-specific content |
| `{% prompt %}` | Command prompt styling |

See [contributing/liquid-helpers.md](../../contributing/liquid-helpers.md) for complete list.

### Using tags

Tags can be used in:
- Articles and TOCs (`content/**/*.md`)
- Include files (`includes/*.html`)

Tags expect language-agnostic hrefs or data paths:

```liquid
{% data variables.product.product_name %}
{% ifversion ghes > 3.9 %}...{% endif %}
```

### Creating new Liquid tags

1. Create TypeScript class in `liquid/my-tag.ts` and implement the rendering logic directly in the class (using inline HTML or template strings).
2. Register in `liquid/engine.ts`:
   ```typescript
   import MyTag from './my-tag'
   engine.registerTag('my_tag', MyTag)
   ```
3. Add tests in `tests/`
4. Document in `contributing/liquid-helpers.md`

See [LiquidJS docs](https://liquidjs.com/tutorials/register-filters-tags.html) for tag API.

### Unified plugins

Plugins transform the Markdown AST:
- `rewrite-local-links` - Rewrites internal `/en/...` links
- `rewrite-asset-urls` - Handles `/assets/...` paths
- `heading-links` - Adds anchor links to headings
- `alerts` - Converts `> [!NOTE]` to styled alerts
- `code-header` - Adds copy buttons to code blocks
- And many more...

### Adding new unified plugins

1. Create plugin in `unified/my-plugin.ts`
2. Add to processor in `unified/processor.ts`
3. Add tests
4. Consider impact on performance (plugins run on every render)

### Known limitations
- Liquid rendering happens before Markdown parsing (can't use Markdown in Liquid output easily)
- Some transformations are performance-sensitive (cached where possible)
- Text-only mode used for search has different output than HTML mode
- Custom Liquid tags must be registered manually

### Performance considerations
- Rendering is cached at the page level
- Liquid includes are resolved on every render
- Heavy transformations should be avoided in hot paths
- Use `textOnly` mode for search indexing (faster)
