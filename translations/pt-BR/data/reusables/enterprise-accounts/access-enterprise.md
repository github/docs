{% if currentVersion == "free-pro-team@latest" %}

1. No canto superior direito de {% data variables.product.product_name %}, clique na sua foto de perfil e, em seguida, clique em **Suas empresas**. !["Suas empresas" no menu suspenso para a foto do perfil em {% data variables.product.product_name %}](/assets/images/help/enterprises/your-enterprises.png)

1. Na lista de empresas, clique na empresa que você deseja visualizar. ![Nome de uma empresa na lista das suas empresas](/assets/images/help/enterprises/your-enterprises-list.png)

{% endif %}

{% if currentVersion ver_lt "enterprise-server@2.22" %}

1. Acesse a conta corporativa visitando {% raw %}<code>https://<em>HOSTNAME</em>/enterprises/<em>ENTERPRISE-NAME</em></code>{% endraw %}, substituindo `HOSTNAME` pelo nome de host da sua instância e  `ENTERPRISE-NAME` pelo nome da conta da sua empresa.

{% elsif enterpriseServerVersions contains currentVersion %}

1. No canto superior direito de {% data variables.product.product_name %}, clique na sua foto de perfil e, em seguida, clique em **Configurações da empresa**. !["Configurações da empresa" no menu suspenso para foto do perfil em {% data variables.product.product_name %}](/assets/images/enterprise/settings/enterprise-settings.png)

{% endif %}
