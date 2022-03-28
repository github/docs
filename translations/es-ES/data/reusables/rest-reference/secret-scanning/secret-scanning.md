{% data reusables.secret-scanning.api-beta %}

La API del {% data variables.product.prodname_secret_scanning %} te permite {% ifversion fpt or ghec or ghes > 3.1 or ghae %}:

- Habilitar o inhabilitar el {% data variables.product.prodname_secret_scanning %} para un repositorio. Para obtener más información, consulta la sección "[Repositorios](/rest/reference/repos#update-a-repository)" en la documentación de REST.
- Retrieve and update {% data variables.product.prodname_secret_scanning_GHAS %} alerts from a repository. For further details, see the sections below.
{%- else %} retrieve and update {% data variables.product.prodname_secret_scanning %} alerts from a repository.{% endif %}

Para obtener más información acerca de las {% data variables.product.prodname_secret_scanning %}, consulta la sección "[Acerca del {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/about-secret-scanning)".
