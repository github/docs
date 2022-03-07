{% data reusables.secret-scanning.api-beta %}

{% data variables.product.prodname_secret_scanning %} API 可让您{% ifversion fpt or ghec or ghes > 3.1 or ghae %}：

- 对仓库启用或禁用 {% data variables.product.prodname_secret_scanning %}。 更多信息请参阅 REST API 文档中的“[仓库](/rest/reference/repos#update-a-repository)”。
- Retrieve and update {% data variables.product.prodname_secret_scanning_GHAS %} alerts from a repository. For further details, see the sections below.
{%- else %} retrieve and update {% data variables.product.prodname_secret_scanning %} alerts from a repository.{% endif %}

有关 {% data variables.product.prodname_secret_scanning %} 的更多信息，请参阅“[关于 {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/about-secret-scanning)”。
