---
title: Media types
intro: Learn about media types for specifying the format of the data you want to consume.
redirect_from:
  - /v3/media
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
---


Custom media types are used in the API to let consumers choose the format
of the data they wish to receive. This is done by adding one or more of
the following types to the `Accept` header when you make a request. Media types
are specific to resources, allowing them to change independently and support
formats that other resources don't.

All {% data variables.product.product_name %} media types look like this:

    application/vnd.github[.version].param[+json]

The most basic media types the API supports are:

    application/json
    application/vnd.github+json

Neither of these specify a [version][versions], so you will always get the
current default JSON representation of resources.

{% note %}

**Important:** The default version of the API may change in the
future. If you're building an application and care about the stability of
the API, be sure to request a specific version in the `Accept`
header as shown in the examples below.

{% endnote %}

You can specify a version like so:

    application/vnd.github.v3+json

If you're specifying a property (such as full/raw/etc defined below),
put the version before the property:

    application/vnd.github.v3.raw+json

You can check the current version through every response's headers.  Look
for the `X-GitHub-Media-Type` header:

```shell
$ curl {% data variables.product.api_url_pre %}/users/technoweenie -I
> HTTP/2 200
> X-GitHub-Media-Type: github.v3

$ curl {% data variables.product.api_url_pre %}/users/technoweenie -I \
$  -H "Accept: application/vnd.github.full+json"
> HTTP/2 200
> X-GitHub-Media-Type: github.v3; param=full; format=json

$ curl {% data variables.product.api_url_pre %}/users/technoweenie -I \
$  -H "Accept: application/vnd.github.v3.full+json"
> HTTP/2 200
> X-GitHub-Media-Type: github.v3; param=full; format=json
```

## Comment body properties

The body of a comment can be written in [GitHub Flavored Markdown][gfm], [issues](/rest/reference/issues), [issue comments](/rest/reference/issues#comments), [pull request comments](/rest/reference/pulls#comments), and the [gist comments](/rest/reference/gists#comments) APIs all accept these same media types:

### Raw

    application/vnd.github.VERSION.raw+json

Return the raw markdown body. Response will include `body`. This is the
default if you do not pass any specific media type.

### Text

    application/vnd.github.VERSION.text+json

Return a text only representation of the markdown body. Response will
include `body_text`.

### HTML

    application/vnd.github.VERSION.html+json

Return HTML rendered from the body's markdown. Response will include
`body_html`.

### Full

    application/vnd.github.VERSION.full+json

Return raw, text and HTML representations. Response will include `body`,
`body_text`, and `body_html`:

## Git blob properties

The following media types are allowed when [getting a blob](/rest/reference/git#get-a-blob):

### JSON

    application/vnd.github.VERSION+json
    application/json

Return JSON representation of the blob with `content` as a base64
encoded string. This is the default if nothing is passed.

### Raw

    application/vnd.github.VERSION.raw

Return the raw blob data.

## Commits, commit comparison, and pull requests

The [commits API](/rest/reference/repos#commits) and [pull requests API](/rest/reference/pulls) support
[diff][git-diff] and [patch][git-patch] formats:

### diff

    application/vnd.github.VERSION.diff

### patch

    application/vnd.github.VERSION.patch

### sha

    application/vnd.github.VERSION.sha

## Repository contents

### Raw

    application/vnd.github.VERSION.raw

Return the raw contents of a file. This is the default if you do not pass any specific media type.

### HTML

    application/vnd.github.VERSION.html

For markup files such as Markdown or AsciiDoc, you can retrieve the rendered HTML using the `.html` media type. Markup languages are rendered to HTML using our open-source [Markup library](https://github.com/github/markup).

## Gists

### Raw

    application/vnd.github.VERSION.raw

Return the raw contents of a gist. This is the default if you do not pass any specific media type.

### base64

    application/vnd.github.VERSION.base64

The gist contents are base64-encoded before being sent out. This can be useful if your gist contains any invalid UTF-8 sequences.

[gfm]:http://github.github.com/github-flavored-markdown/
[git-diff]: http://git-scm.com/docs/git-diff
[git-patch]: http://git-scm.com/docs/git-format-patch
[hypermedia]: /rest#hypermedia
[versions]: /developers/overview/about-githubs-apis
