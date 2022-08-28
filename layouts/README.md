# Layouts

The files in this directory are layouts which can be wrapped around pages.

See also [includes](includes), which are snippets of HTML or Markdown that
can be reused in multiple layouts.

## Using Layouts

Be default, `layouts/default.html` will be used for all pages.

To use a custom layout, add a `layout` value to the page's frontmatter:

```
---
title: Hello World
layout: some-layout
---
```

The example above will use the `layouts/some-layout.html` layout.

To render a page with no layout, set `layout: false`.

## Writing Layouts

Layout files should have a `.html` or `.md` extension, and they
must include the string `{{ content}}` to specify where inner content should
be injected.
