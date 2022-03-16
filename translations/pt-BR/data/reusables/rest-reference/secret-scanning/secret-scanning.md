{% data reusables.secret-scanning.api-beta %}

A API de {% data variables.product.prodname_secret_scanning %} permite que você{% ifversion fpt or ghec or ghes > 3.1 or ghae %}:

- Habilitar ou desabilitar {% data variables.product.prodname_secret_scanning %} para um repositório. Para obter mais informações, consulte "[Repositórios](/rest/reference/repos#update-a-repository)" na documentação da API REST.
- Retrieve and update {% data variables.product.prodname_secret_scanning_GHAS %} alerts from a repository. For further details, see the sections below.
{%- else %} retrieve and update {% data variables.product.prodname_secret_scanning %} alerts from a repository.{% endif %}

Para obter mais informações sobre {% data variables.product.prodname_secret_scanning %}, consulte "[Sobre {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/about-secret-scanning)."
