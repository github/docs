Um executor auto-hospedado pode ser localizado no seu repositório, organização, ou {% ifversion fpt %}configurações da conta corporativa em {% data variables.product.prodname_dotcom %}{% elsif ghes or ghae %} configurações corporativas em {% data variables.product.product_location %}{% endif %}. Para gerenciar um executor auto-hospedado, você deve ter as seguintes permissões, dependendo de onde o executor auto-hospedado foi adicionado:
- **Repositório de Usuário**: Você deve ser o proprietário do repositório.
- **Organização**: Você deve ser um proprietário da organização.
- **Repositório da organização**: Você deve ser o proprietário da organização ou ter acesso de administrador ao repositório.
{% ifversion fpt %}
- **Conta corporativa**: Você deve ser proprietário de uma empresa.
{% elsif ghes or ghae %}
- **Empresa**: Você deve ser um administrador do site de {% data variables.product.prodname_enterprise %}
{% endif %}
