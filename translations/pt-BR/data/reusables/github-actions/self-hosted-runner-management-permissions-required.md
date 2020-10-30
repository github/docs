Um executor auto-hospedado pode estar localizado em sua organização ou em configurações do repositório no {% data variables.product.prodname_dotcom %}. Para gerenciar um executor auto-hospedado, você deve ter as seguintes permissões, dependendo de onde o executor auto-hospedado foi adicionado:
- **Repositório de Usuário**: Você deve ser o proprietário do repositório.
- **Organização**: Você deve ser um proprietário da organização.
- **Repositório da organização**: Você deve ser o proprietário da organização ou ter acesso de administrador ao repositório.
{% if currentVersion == "free-pro-team@latest" %}
- **Conta corporativa**: Você deve ser proprietário de uma empresa.
{% else if currentVersion != "free-pro-team@latest" and currentVersion ver_gt "enterprise-server@2.21" %}
- **Enterprise**: You must be a {% data variables.product.prodname_enterprise %} site administrator.
{% endif %}
