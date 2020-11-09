A self-hosted runner can be located in either your repository, organization, or {% if currentVersion == "free-pro-team@latest" %}enterprise account settings on {% data variables.product.prodname_dotcom %}{% elsif enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" %} enterprise settings on {% data variables.product.product_location %}{% endif %}. Para gerenciar um executor auto-hospedado, você deve ter as seguintes permissões, dependendo de onde o executor auto-hospedado foi adicionado:
- **Repositório de Usuário**: Você deve ser o proprietário do repositório.
- **Organização**: Você deve ser um proprietário da organização.
- **Repositório da organização**: Você deve ser o proprietário da organização ou ter acesso de administrador ao repositório.
{% if currentVersion == "free-pro-team@latest" %}
- **Conta corporativa**: Você deve ser proprietário de uma empresa.
{% elsif enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" %}
- **Empresa**: Você deve ser um administrador do site de {% data variables.product.prodname_enterprise %}
{% endif %}
