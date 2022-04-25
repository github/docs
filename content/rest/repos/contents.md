---
title: Contents
intro: 'These API endpoints let you create, modify, and delete Base64 encoded content in a repository.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

To request the raw format or rendered HTML (when supported), use custom media types for repository contents.

### Custom media types for repository contents

[READMEs](/rest/reference/repos#get-a-repository-readme), [files](/rest/reference/repos#get-repository-content), and [symlinks](/rest/reference/repos#get-repository-content) support the following custom media types:

    application/vnd.github.VERSION.raw
    application/vnd.github.VERSION.html

Use the `.raw` media type to retrieve the contents of the file.

For markup files such as Markdown or AsciiDoc, you can retrieve the rendered HTML using the `.html` media type. Markup languages are rendered to HTML using our open-source [Markup library](https://github.com/github/markup).

[All objects](/rest/reference/repos#get-repository-content) support the following custom media type:

    application/vnd.github.VERSION.object

Use the `object` media type parameter to retrieve the contents in a consistent object format regardless of the content type. For example, instead of an array of objects
for a directory, the response will be an object with an `entries` attribute containing the array of objects.

You can read more about the use of media types in the API [here](/rest/overview/media-types).