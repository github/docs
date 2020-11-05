---
title: Git 数据库
allowTitleToDifferFromFilename: true
redirect_from:
  - /v3/git
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Git 数据库 API 使您能够在 {% data variables.product.product_name %} 上的 Git 数据库中读取和写入原始 Git 对象，并列出和更新您的引用（分支头部和标记）。 有关使用 Git 数据库 API 的更多信息，请参阅“[Git 数据库 API 入门指南](/rest/guides/getting-started-with-the-git-database-api)”。

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## Blob

Git Blob（二进制大对象）是用于将每个文件的内容存储在仓库中的对象类型。 文件的 SHA-1 哈希在 Blob 对象中计算和存储。 这些端点允许您在 {% data variables.product.product_name %} 上的 Git 数据库中读取和写入 [blob 对象](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects)。 Blob 使用[这些自定义媒体类型](#custom-media-types)。 您可以在[此处](/rest/overview/media-types)阅读有关 API 中媒体类型使用情况的更多信息。

### Blob 的自定义媒体类型

以下是 blob 支持的媒体类型。

    application/json
    application/vnd.github.VERSION.raw

更多信息请参阅“[媒体类型](/rest/overview/media-types)”。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'blobs' %}{% include rest_operation %}{% endif %}
{% endfor %}

## 提交

Git 提交是 Git 仓库中层次结构（[Git 树](/v3/git/trees)）和文件内容 (
Git blob</1) 的快照。 这些端点允许您在 {% data variables.product.product_name %} 上的 Git 数据库中读取和写入[提交对象](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects)。</p> 

{% for operation in currentRestOperations %}

{% if operation.subcategory == 'commits' %}{% include rest_operation %}{% endif %} 

{% endfor %}



## 引用

Git 引用 (`git ref`) 只是一个包含 Git 提交 SHA-1 哈希的文件。 当引用 Git 提交时，您可以使用 Git 引用，这是一个易于记住的名称，而不是哈希。 可以重写 Git 引用指向新的提交。 分支只是存储新 Git 提交哈希的 Git 引用。 这些端点允许您在 {% data variables.product.product_name %} 上的 Git 数据库中读取和写入[引用](https://git-scm.com/book/en/v1/Git-Internals-Git-References)。

{% for operation in currentRestOperations %}

{% if operation.subcategory == 'refs' %}{% include rest_operation %}{% endif %} 

{% endfor %}



## 标记

Git 标记类似于 [Git 引用](/v3/git/refs)，但它指向的 Git 提交永远不变。 当您想要指向特定发行版时，Git 标记非常有用。 这些端点允许您在 {% data variables.product.product_name %} 上的 Git 数据库中读取和写入[标记对象](https://git-scm.com/book/en/v1/Git-Internals-Git-References#Tags)。 Git 标记 API 只支持[标注的标记对象](https://git-scm.com/book/en/v1/Git-Internals-Git-References#Tags)，而不支持轻量级标记。

{% for operation in currentRestOperations %}

{% if operation.subcategory == 'tags' %}{% include rest_operation %}{% endif %} 

{% endfor %}



## 树

Git 树对象在 Git 仓库中的文件之间创建层次结构。 您可以使用 Git 树对象创建目录与其包含的文件之间的关系。 这些端点允许您在 {% data variables.product.product_name %} 上的 Git 数据库中读取和写入[树对象](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Tree-Objects)。

{% for operation in currentRestOperations %}

{% if operation.subcategory == 'trees' %}{% include rest_operation %}{% endif %} 

{% endfor %}
