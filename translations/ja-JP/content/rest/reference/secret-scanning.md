---
title: Secret scanning
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.1'
---

{% data reusables.secret-scanning.api-beta %}

{% data variables.product.prodname_secret_scanning %} APIを使うと、{% if currentVersion == "free-pro-team@latest" %}プライベート{% endif %}リポジトリからSecret Scanningアラートを取得して更新できます。 Secret Scanningに関する詳しい情報については、「[Secret Scanningについて](/code-security/secret-security/about-secret-scanning)」を参照してください。

{% include rest_operations_at_current_path %}
