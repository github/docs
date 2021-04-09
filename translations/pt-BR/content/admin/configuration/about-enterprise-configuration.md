---
title: Sobre a configuração corporativa
intro: 'Você pode usar o painel de administração do site{% if enterpriseServerVersions contains currentVersion %}, {% data variables.enterprise.management_console %} e o shell administrativo (SSH) {% elsif currentVersion == "github-ae@latest" %} e as configurações corporativas ou entrar em contato com o suporte{% endif %} para gerenciar a sua empresa.'
versions:
  enterprise-server: '*'
  github-ae: '*'
topics:
  - enterprise
---

{% if enterpriseServerVersions contains currentVersion %}
{% data reusables.enterprise_site_admin_settings.about-the-site-admin-dashboard %} Para obter mais informações, consulte "[Painel de administração do site](/admin/configuration/site-admin-dashboard)".

{% data reusables.enterprise_site_admin_settings.about-the-management-console %} Para obter mais informações, consulte "[Acessar o console de gerenciamento](/admin/configuration/accessing-the-management-console)".

{% data reusables.enterprise_site_admin_settings.about-ssh-access %} Para obter mais informações, consulte "[Acessar o shell administrativo (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)".
{% endif %}

{% if currentVersion == "github-ae@latest" %}
A primeira vez que você acessar sua empresa, você irá definir uma configuração inicial para fazer com que
{% data variables.product.product_name %} esteja pronto para usar. A configuração inicial inclui conectar a sua empresa a um idP, efetuar a autenticação com o SSO SAML e configurar políticas para repositórios e organizações da sua empresa. Para obter mais informações, consulte "[Inicializar {% data variables.product.prodname_ghe_managed %}](/admin/configuration/initializing-github-ae)".

Para os usuários receberem qualquer e-mail de {% data variables.product.product_name %} após a configuração inicial, você precisa pedir que {% data variables.contact.github_support %} configure o suporte a email de saída com o seu servidor SMTP. Para obter mais informações, consulte "[Configurar e-mail para notificações](/admin/configuration/configuring-email-for-notifications).

Posteriormente, você poderá usar o painel de administração do site e as configurações corporativas para configurar ainda mais sua empresa, gerenciar usuários, organizações e repositórios e definir políticas que reduzem o risco e aumentam a qualidade.

Todas as empresas estão configuradas com isolamento de subdomínio e suporte para TLS 1.2 e posterior apenas para tráfego criptografado.
{% endif %}

### Leia mais

- "[Gerenciar usuários, organizações e repositórios](/admin/user-management)"
- "[Configurar políticas para a sua empresa](/admin/policies)"
