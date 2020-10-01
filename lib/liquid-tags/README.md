# Liquid Tags

See also [contributing/liquid-helpers.md](../../contributing/liquid-helpers.md)

This directory contains custom Liquid tags for outputting dynamic content. These custom tags exist for a few reasons:

- Content and styling should be separated. Writers should not be concerned with writing or maintaining stylistic markup.
- Writers should be able to create links by specifying the minimum amount of identifying information (an article href) and leave it to the site to dynamically inject that page's metadata like `title`, `intro`, etc.
- Content should be localized to match the current language.
- Styling and markup should be DRY and reusable.

## Using tags

Tags can be used in:

- Articles and TOCs (`content/**/*.md`)
- Layout files (`layouts/*.html`)
- Include files (`includes/*.html`)

Tags always expect a single argument, a language agnostic href:

```html
{% link_with_intro /getting-started-with-github-desktop %}
```

where the reference must be in the parent file, `content/desktop/index.md`, as it points to `content/desktop/getting-started-with-github-desktop`.

The href can also be an absolute path:

```html
{% link_with_intro /desktop/getting-started-with-github-desktop %}
```

where the reference can be in any file.

**Note:** Every href, whether relative or absolute, must start with a slash (`/`). Do not include `content` in the href.

The tag above will output this HTML for English pages:

```html
<a class="link-with-intro Bump-link--hover no-underline" href="/en/desktop/getting-started-with-github-desktop">
  <h4 class="link-with-intro-title">Getting started with GitHub Desktop<span class="Bump-link-symbol">→</span></h4>
</a>
<p class="link-with-intro-intro">Get GitHub Desktop set up to manage your project work. Authenticate to GitHub.com or GitHub Enterprise Server, keep the app up-to-date, and review your preferred settings.</p>
```

and this HTML for Spanish pages:

```html
<a class="link-with-intro Bump-link--hover no-underline" href="/es/desktop/getting-started-with-github-desktop">
  <h4 class="link-with-intro-title">Comenzar con GitHub Desktop<span class="Bump-link-symbol">→</span></h4></a>
<p class="link-with-intro-intro">Configura GitHub Desktop para administrar tu proyecto de trabajo. Autentícate en GitHub.com o en el Servidor de GitHub Enterprise, mantén la app actualizada y revisa tu configuración preferida.</p>
```

Note that link tags will only render links that are available in the current page version (i.e. GitHub.com vs Enterprise), so it's not necessary to add Liquid conditionals around them.

## Supported tags

| Markup | Renders |
| -- | -- |
| `{% link /href %}` | The linked page's title, with no special styling.
| `{% link_with_intro /href %}` | The linked page's title and intro.
| `{% homepage_link_with_intro /href %}` | The linked page's title and intro, with homepage-specific styling.
| `{% link_in_list /href %}` | The linked page's title in a list item.
| `{% topic_link_in_list /href %}` | The linked map topic's title in a list item (used in category TOCs).
| `{% link_with_short_title /href %}` | The linked page's title, where the title is pulled from the page's `shortTitle` frontmatter.
| `{% indented_data_reference site.data.foo.bar spaces=NUMBER %}` | The data reference with the specified number of spaces prepended to each line.

## Creating tags

Each custom tag has the following:

- a JavaScript class in `lib/liquid-tags/`
- an HTML template in `includes/liquid-tags/`

The class and the template should have corresponding names, like `lib/liquid-tags/my-tag.js` and `includes/liquid-tags/my-tag.html`

You must also register the new tag in `lib/render-content.js` with a line like this:

```
renderContent.liquid.registerTag('my_tag', require('./liquid-tags/my-tag'))
```

## Further reading

- Liquid Docs: https://github.com/liquid-lang/liquid-node#registering-new-tags
