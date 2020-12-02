---
title: Impor retenção legal a usuários ou organizações
intro: 'Você pode colocar uma retenção legal em um usuário ou organização para garantir que os repositórios que ele possui não possam ser removidos permanentemente da sua empresa.'
redirect_from:
  - /enterprise/admin/user-management/placing-a-legal-hold-on-a-user-or-organization
versions:
  enterprise-server: '*'
  github-ae: '*'
---

Geralmente, quando alguém exclui um repositório, ele continua disponível em disco por 90 dias e pode ser restaurado pelo painel de administração do site. Após esse período, o repositório é removido e excluído permanentemente. Ao impor uma retenção legal a um usuário ou organização, os repositórios desse usuário ou organização ficarão disponíveis para restauração por tempo indefinido.

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user-or-org %}
{% data reusables.enterprise_site_admin_settings.click-user-or-org %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
5. Clique em **Place legal hold** (Impor retenção legal). ![Botão Place legal hold (Impor retenção legal)](/assets/images/enterprise/site-admin-settings/place-legal-hold-button.png)
