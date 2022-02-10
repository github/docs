---
title: 秘密扫描
intro: 要检索和更新来自私有仓库的秘密警报，您可以使用秘密扫描 API。
versions:
  fpt: '*'
  ghes: '>=3.1'
  ghec: '*'
  ghae: '*'
miniTocMaxHeadingLevel: 3
---

{% data reusables.secret-scanning.api-beta %}

The {% data variables.product.prodname_secret_scanning %} API lets you{% ifversion fpt or ghec or ghes > 3.1 or ghae %}:

- Enable or disable {% data variables.product.prodname_secret_scanning %} for a repository. For more information, see "[Repositories](/rest/reference/repos#update-a-repository)" in the REST API documentation.
- Retrieve and update {% data variables.product.prodname_secret_scanning %} alerts from a {% ifversion fpt or ghec %}private {% endif %}repository. For futher details, see the sections below.
{%- else %} retrieve and update {% data variables.product.prodname_secret_scanning %} alerts from a {% ifversion fpt or ghec %}private {% endif %}repository.{% endif %}

有关 {% data variables.product.prodname_secret_scanning %} 的更多信息，请参阅“[关于 {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/about-secret-scanning)”。

{% include rest_operations_at_current_path %}
