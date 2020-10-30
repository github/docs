---
title: Usar CAS
redirect_from:
  - /enterprise/admin/articles/configuring-cas-authentication/
  - /enterprise/admin/articles/about-cas-authentication/
  - /enterprise/admin/user-management/using-cas
intro: 'O CAS é um protocolo de logon único (SSO) para vários aplicativos da web. Uma conta de usuário CAS não consome uma {% if currentVersion ver_gt "enterprise-server@2.16" %}licença de{% else %}usuário{% endif %} até o usuário fazer login.'
versions:
  enterprise-server: '*'
---

{% data reusables.enterprise_user_management.built-in-authentication %}

### Considerações de nome de usuário no CAS

{% data reusables.enterprise_management_console.username_normalization %}

{% data reusables.enterprise_management_console.username_normalization_sample %}

{% data reusables.enterprise_user_management.two_factor_auth_header %}
{% data reusables.enterprise_user_management.external_auth_disables_2fa %}

### Atributos CAS

Os atributos a seguir estão disponíveis.

| Nome do atributo | Tipo        | Descrição                                                                   |
| ---------------- | ----------- | --------------------------------------------------------------------------- |
| `username`       | Obrigatório | Nome do usuário no {% data variables.product.prodname_ghe_server %}. |

### Configurar o CAS
{% warning %}

**Aviso:** antes de configurar o CAS na {% data variables.product.product_location_enterprise %}, observe que os usuários não poderão usar seus nomes e senhas do CAS para autenticar solicitações de API ou operações do Git por HTTP/HTTPS. Para isso, eles deverão [criar tokens de acesso](/enterprise/{{ currentVersion }}/user/articles/creating-an-access-token-for-command-line-use).

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
3. Selecione **CAS**. ![Selecionar CAS](/assets/images/enterprise/management-console/cas-select.png)
4. {% data reusables.enterprise_user_management.built-in-authentication-option %} ![Selecionar caixa de autenticação integrada CAS](/assets/images/enterprise/management-console/cas-built-in-authentication.png)
5. No campo **Server URL** (URL do servidor), digite a URL completa do seu servidor CAS. Se o servidor CAS usar um certificado que não pode ser validado pelo {% data variables.product.prodname_ghe_server %}, você poderá usar o comando `ghe-ssl-ca-certificate-install` para instalá-lo como certificado confiável.
