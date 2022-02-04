---
title: リリース
intro: 'The releases API allows you to create, modify, and delete releases and release assets.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

{% note %}

**注釈:** Releases API は Downloads API を置き換えるものです。 リリースを返し、アセットをリリースする、この API のエンドポイントからダウンロード数と ブラウザのダウンロード URL を取得できます。

{% endnote %}

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## Release assets

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'assets' %}{% include rest_operation %}{% endif %}
{% endfor %}
