---
title: Gists
redirect_from:
  - /v3/gists
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Authentication

You can read public gists {% if currentVersion == "github-ae@latest" or enterpriseServerVersions contains currentVersion %}and create them for anonymous users without a token.{% else %} anonymously, but you must be signed into GitHub to create gists.{% endif %} To read or write gists on a user's behalf, you need the gist OAuth scope and a token. For more information, see "[Scopes for OAuth Apps](/developers/apps/scopes-for-oauth-apps)."

<!-- When an OAuth client does not have the gists scope, the API will return a 404 "Not Found" response regardless of the validity of the credentials. The API will return a 401 "Bad credentials" response if the gists scope was given to the application but the credentials are invalid. -->

### Truncation

The Gist API provides up to one megabyte of content for each file in the gist. Each file returned for a gist through the API has a key called `truncated`. If `truncated` is `true`, the file is too large and only a portion of the contents were returned in `content`.

If you need the full contents of the file, you can make a `GET` request to the URL specified by `raw_url`. Be aware that for files larger than ten megabytes, you'll need to clone the gist via the URL provided by `git_pull_url`.

In addition to a specific file's contents being truncated, the entire files list may be truncated if the total number exceeds 300 files. If the top level `truncated` key is `true`, only the first 300 files have been returned in the files list. If you need to fetch all of the gist's files, you'll need to clone the gist via the URL provided by `git_pull_url`.

### Custom media types for gists

These are the supported media types for fetching gist contents.

    application/vnd.github.VERSION.raw
    application/vnd.github.VERSION.base64

For more information, see "[Media types](/rest/overview/media-types)."

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## Comments

### Custom media types for Gist comments

These are the supported media types for gist comments.

    application/vnd.github.VERSION.raw
    application/vnd.github.VERSION.base64

For more information about media types, see "[Custom media types](/rest/overview/media-types)."

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'comments' %}{% include rest_operation %}{% endif %}
{% endfor %}
