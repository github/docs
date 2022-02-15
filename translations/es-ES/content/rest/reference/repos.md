---
title: Repositories
intro: 'The Repos API allows to create, manage and control the workflow of public and private {% data variables.product.product_name %} repositories.'
allowTitleToDifferFromFilename: true
redirect_from:
  - /v3/repos
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

{% ifversion fpt or ghec or ghes > 3.2 or ghae-issue-4742 %}
## Autolinks

To help streamline your workflow, you can use the API to add autolinks to external resources like JIRA issues and Zendesk tickets. For more information, see "[Configuring autolinks to reference external resources](/github/administering-a-repository/configuring-autolinks-to-reference-external-resources)."

{% data variables.product.prodname_github_apps %} require repository administration permissions with read or write access to use the Autolinks API.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'autolinks' %}{% include rest_operation %}{% endif %}
{% endfor %}
{% endif %}


## Contents

These API endpoints let you create, modify, and delete Base64 encoded content in a repository. To request the raw format or rendered HTML (when supported), use custom media types for repository contents.

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

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'contents' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Forks

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'forks' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% ifversion fpt or ghae or ghes > 3.2 or ghec %}

## Git LFS

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'lfs' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

