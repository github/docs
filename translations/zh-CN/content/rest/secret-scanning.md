---
title: 秘密扫描
intro: Use the Secret scanning API to retrieve and update secret alerts from a repository.
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/secret-scanning
---

{% data reusables.secret-scanning.api-beta %}

## About the Secret scanning API

{% data variables.product.prodname_secret_scanning %} API 可让您{% ifversion fpt or ghec or ghes > 3.1 or ghae %}：

- Enable or disable {% data variables.product.prodname_secret_scanning %}{% if secret-scanning-push-protection %} and push protection{% endif %} for a repository. 更多信息请参阅“[存储库](/rest/reference/repos#update-a-repository)”，并展开 REST API 文档中的“`security_and_analysis` 对象的属性”部分。
- Retrieve and update {% data variables.product.prodname_secret_scanning_GHAS %} alerts from a repository. For further details, see the sections below.
{%- else %} retrieve and update {% data variables.product.prodname_secret_scanning %} alerts from a repository.{% endif %}

有关 {% data variables.product.prodname_secret_scanning %} 的更多信息，请参阅“[关于 {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/about-secret-scanning)”。
