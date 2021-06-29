---
title: 秘密扫描
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.1'
---

{% data reusables.secret-scanning.api-beta %}

{% data variables.product.prodname_secret_scanning %} API 可让您从 {% if currentVersion == "free-pro-team@latest" %}私有 {% endif %}仓库检索和更新密钥扫描警报。 有关密钥扫描更多信息，请参阅“[关于密钥扫描](/code-security/secret-security/about-secret-scanning)”。

{% include rest_operations_at_current_path %}
