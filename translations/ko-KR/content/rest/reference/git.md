---
title: Git database
allowTitleToDifferFromFilename: true
redirect_from:
  - /v3/git
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---

The Git Database API gives you access to read and write raw Git objects to your Git database on {% data variables.product.product_name %} and to list and update your references (branch heads and tags). For more information about using the Git Database API, see "[Getting started with the Git data API](/rest/guides/getting-started-with-the-git-database-api)."

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## Blobs

A Git blob (binary large object) is the object type used to store the contents of each file in a repository. The file's SHA-1 hash is computed and stored in the blob object. These endpoints allow you to read and write [blob objects](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects) to your Git database on {% data variables.product.product_name %}. Blobs leverage [these custom media types](#custom-media-types). You can read more about the use of media types in the API [here](/rest/overview/media-types).

### Custom media types for blobs

These are the supported media types for blobs.

    application/json
    application/vnd.github.VERSION.raw

For more information, see "[Media types](/rest/overview/media-types)."

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'blobs' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Commits

A Git commit is a snapshot of the hierarchy ([Git tree](/rest/reference/git#trees)) and the contents of the files ([Git blob](/rest/reference/git#blobs)) in a Git repository. These endpoints allow you to read and write [commit objects](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects) to your Git database on {% data variables.product.product_name %}.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'commits' %}{% include rest_operation %}{% endif %}
{% endfor %}

## References

A Git reference (`git ref`) is just a file that contains a Git commit SHA-1 hash. When referring to a Git commit, you can use the Git reference, which is an easy-to-remember name, rather than the hash. The Git reference can be rewritten to point to a new commit. A branch is just a Git reference that stores the new Git commit hash. These endpoints allow you to read and write [references](https://git-scm.com/book/en/v1/Git-Internals-Git-References) to your Git database on {% data variables.product.product_name %}.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'refs' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Tags

A Git tag is similar to a [Git reference](/rest/reference/git#refs), but the Git commit that it points to never changes. Git tags are helpful when you want to point to specific releases. These endpoints allow you to read and write [tag objects](https://git-scm.com/book/en/v1/Git-Internals-Git-References#Tags) to your Git database on {% data variables.product.product_name %}. The Git tags API only supports [annotated tag objects](https://git-scm.com/book/en/v1/Git-Internals-Git-References#Tags), not lightweight tags.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'tags' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Trees

A Git tree object creates the hierarchy between files in a Git repository. You can use the Git tree object to create the relationship between directories and the files they contain. These endpoints allow you to read and write [tree objects](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Tree-Objects) to your Git database on {% data variables.product.product_name %}.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'trees' %}{% include rest_operation %}{% endif %}
{% endfor %}
