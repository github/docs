Um executor auto-hospedado pode estar localizado no seu repositório, organização ou {% if currentVersion == "free-pro-team@latest" %}configurações da conta corporativa em {% data variables.product.prodname_dotcom %}{% else se currentVersion ! "free-pro-team@latest" e currentVersion ver_gt "enterprise-server@2. 1" %} configurações empresariais em {% data variables.product.product_location %}{% endif %}. Para gerenciar um executor auto-hospedado, você deve ter as seguintes permissões, dependendo de onde o executor auto-hospedado foi adicionado:
- **Repositório de Usuário**: Você deve ser o proprietário do repositório.
- **Organização**: Você deve ser um proprietário da organização.
- **Repositório da organização**: Você deve ser o proprietário da organização ou ter acesso de administrador ao repositório.
{% if currentVersion == "free-pro-team@latest" %}
- **Conta corporativa**: Você deve ser proprietário de uma empresa.
{% else if currentVersion != "free-pro-team@latest" and currentVersion ver_gt "enterprise-server@2.21" %}
- **Empresa**: Você deve ser um administrador do site de {% data variables.product.prodname_enterprise %}
{% endif %}
