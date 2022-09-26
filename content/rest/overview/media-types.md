---
title: Media types
intro: Learn about media types for specifying the format of the data you want to consume.
redirect_from:
  - /v3/media
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
---


Custom media types are used in the API to let consumers choose the format
of the data they wish to receive. This is done by adding one or more of
the following types to the `Accept` header when you make a request. Media types
are specific to resources, allowing them to change independently and support
formats that other resources don't.

All {% data variables.product.product_name %} media types look like this:

    application/vnd.github.param[+json]

The most basic media types the API supports are:

    application/vnd.github+json
    application/json

{% note %}

**Note:** In the past, we recommended including `v3` in your `Accept` header. This is no longer required and will have no impact on your API requests.

{% endnote %}

If you're specifying a property (such as full/raw/etc defined below),
put it after `github`:

    application/vnd.github.raw+json

## Comment body properties

The body of a comment can be written in [GitHub Flavored Markdown][gfm], [issues](/rest/reference/issues), [issue comments](/rest/reference/issues#comments), [pull request comments](/rest/reference/pulls#comments), and the [gist comments](/rest/reference/gists#comments) APIs all accept these same media types:

### Raw

    application/vnd.github.raw+json

Return the raw markdown body. Response will include `body`. This is the
default if you do not pass any specific media type.

### Text

    application/vnd.github.text+json

Return a text only representation of the markdown body. Response will
include `body_text`.

### HTML

    application/vnd.github.html+json

Return HTML rendered from the body's markdown. Response will include
`body_html`.

### Full

    application/vnd.github.full+json

Return raw, text and HTML representations. Response will include `body`,
`body_text`, and `body_html`:

## Git blob properties

The following media types are allowed when [getting a blob](/rest/reference/git#get-a-blob):

### JSON

    application/vnd.github+json
    application/json

Return JSON representation of the blob with `content` as a base64
encoded string. This is the default if nothing is passed.

### Raw

    application/vnd.github.raw

Return the raw blob data.

## Commits, commit comparison, and pull requests

The [commits API](/rest/reference/repos#commits) and [pull requests API](/rest/reference/pulls) support
[diff][git-diff] and [patch][git-patch] formats:

### diff

    application/vnd.github.diff

### patch

    application/vnd.github.patch

### sha

    application/vnd.github.sha

## Repository contents

### Raw

    application/vnd.github.raw

Return the raw contents of a file. This is the default if you do not pass any specific media type.

### HTML

    application/vnd.github.html

For markup files such as Markdown or AsciiDoc, you can retrieve the rendered HTML using the `.html` media type. Markup languages are rendered to HTML using our open-source [Markup library](https://github.com/github/markup).

## Gists

### Raw

    application/vnd.github.raw

Return the raw contents of a gist. This is the default if you do not pass any specific media type.

### base64

    application/vnd.github.base64

The gist contents are base64-encoded before being sent out. This can be useful if your gist contains any invalid UTF-8 sequences.

[gfm]:http://github.github.com/github-flavored-markdown/
[git-diff]: http://git-scm.com/docs/git-diff
[git-patch]: http://git-scm.com/docs/git-format-patch
[hypermedia]: /rest#hypermedia
[versions]: /developers/overview/about-githubs-apis
