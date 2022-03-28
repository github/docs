{% data reusables.secret-scanning.api-beta %}

The {% data variables.product.prodname_secret_scanning %} API lets you{% ifversion fpt or ghec or ghes > 3.1 or ghae %}:

- Enable or disable {% data variables.product.prodname_secret_scanning %} for a repository. For more information, see "[Repositories](/rest/reference/repos#update-a-repository)" in the REST API documentation.
- Retrieve and update {% data variables.product.prodname_secret_scanning_GHAS %} alerts from a repository. For further details, see the sections below.
{%- else %} retrieve and update {% data variables.product.prodname_secret_scanning %} alerts from a repository.{% endif %}

{% data variables.product.prodname_secret_scanning %} の詳細については、「[{% data variables.product.prodname_secret_scanning %} について](/code-security/secret-security/about-secret-scanning)」を参照してください。
