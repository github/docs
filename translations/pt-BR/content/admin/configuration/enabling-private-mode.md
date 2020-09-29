---
title: Habilitar o modo privado
intro: 'No modo privado, o {% data variables.product.prodname_ghe_server %} exige que todos os usuários façam login para acessar a instalação.'
redirect_from:
  - /enterprise/admin/articles/private-mode/
  - /enterprise/admin/guides/installation/security/
  - /enterprise/admin/guides/installation/securing-your-instance/
  - /enterprise/admin/installation/enabling-private-mode
  - /enterprise/admin/configuration/enabling-private-mode
versions:
  enterprise-server: '*'
---

Você deve habilitar o modo privado se a {% data variables.product.product_location_enterprise %} estiver acessível publicamente pela Internet. No modo privado, os usuários não podem clonar anonimamente repositórios em `git://`. Se a autenticação integrada também estiver habilitada, o administrador deverá convidar novos usuários para criar uma conta na instância. Para obter mais informações, consulte "[Usar autenticação integrada](/enterprise/{{ currentVersion }}/admin/guides/user-management/using-built-in-authentication)".

{% data reusables.enterprise_installation.image-urls-viewable-warning %}

Com o modo privado habilitado, você pode permitir que operações não autenticadas do Git (e qualquer pessoa com acesso de rede à {% data variables.product.product_location_enterprise %}) leia o código de um repositório público na sua instância com o acesso de leitura anônimo do Git habilitado. Para obter mais informações, consulte "[Permitir que administradores habilitem o acesso de leitura anônimo do Git a repositórios públicos](/enterprise/{{ currentVersion }}/admin/guides/user-management/allowing-admins-to-enable-anonymous-git-read-access-to-public-repositories)".

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.privacy %}
4. Selecione **Private mode** (Modo privado). ![Caixa de seleção para habilitar o modo privado](/assets/images/enterprise/management-console/private-mode-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}
