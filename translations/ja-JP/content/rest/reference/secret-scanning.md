---
title: Secret scanning
intro: プライベートリポジトリからのシークレットアラートを取得して更新するには、Secret Scanning APIが利用できます。
versions:
  fpt: '*'
  ghes: '>=3.1'
  ghec: '*'
  ghae: '*'
miniTocMaxHeadingLevel: 3
---

{% data reusables.secret-scanning.api-beta %}

{% data variables.product.prodname_secret_scanning %} APIを使うと、{% ifversion fpt or ghec %}プライベート{% endif %}リポジトリからSecret Scanningアラートを取得して更新できます。 Secret Scanningに関する詳しい情報については、「[Secret Scanningについて](/code-security/secret-security/about-secret-scanning)」を参照してください。

{% include rest_operations_at_current_path %}
