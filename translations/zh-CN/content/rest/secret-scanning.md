---
title: 秘密扫描
intro: 使用机密扫描 API 从存储库中检索和更新机密警报。
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

## 关于机密扫描 API

{% data variables.product.prodname_secret_scanning %} API 可让您{% ifversion fpt or ghec or ghes > 3.1 or ghae %}：

- 启用或禁用仓库的 {% data variables.product.prodname_secret_scanning %}{% ifversion secret-scanning-push-protection %} 和推送保护{% endif %}。 更多信息请参阅“[存储库](/rest/reference/repos#update-a-repository)”，并展开 REST API 文档中的“`security_and_analysis` 对象的属性”部分。
- 从仓库中检索和更新 {% data variables.product.prodname_secret_scanning_GHAS %} 警报。 有关更多详细信息，请参阅以下部分。
{%- else %} 从仓库检索和更新 {% data variables.product.prodname_secret_scanning %} 警报。{% endif %}

有关 {% data variables.product.prodname_secret_scanning %} 的更多信息，请参阅“[关于 {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/about-secret-scanning)”。
