{% data reusables.secret-scanning.api-beta %}

A API de {% data variables.product.prodname_secret_scanning %} permite que você{% ifversion fpt or ghec or ghes > 3.1 or ghae %}:

- Enable or disable {% data variables.product.prodname_secret_scanning %}{% if secret-scanning-push-protection %} and push protection{% endif %} for a repository. For more information, see "[Repositories](/rest/reference/repos#update-a-repository)" and expand the "Properties of the `security_and_analysis` object" section in the REST API documentation.
- Retrieve and update {% data variables.product.prodname_secret_scanning_GHAS %} alerts from a repository. For further details, see the sections below.
{%- else %} retrieve and update {% data variables.product.prodname_secret_scanning %} alerts from a repository.{% endif %}

Para obter mais informações sobre {% data variables.product.prodname_secret_scanning %}, consulte "[Sobre {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/about-secret-scanning)."
