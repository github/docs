---
title: Bloquear pushes forçados no appliance
redirect_from:
  - /enterprise/admin/articles/blocking-force-pushes-on-your-appliance/
  - /enterprise/admin/developer-workflow/blocking-force-pushes-on-your-appliance
intro: 'Qualquer administrador do site pode bloquear todos os pushs forçados em um appliance do {% data variables.product.prodname_ghe_server %}'
versions:
  enterprise-server: '*'
---

Cada repositório herda uma configuração padrão de push forçado das configurações da conta de usuário ou da organização à qual pertence. Da mesma forma, cada organização e conta de usuário herda uma configuração padrão de push forçado a partir da configuração de push forçado para todo o appliance. Se você alterar a configuração de push forçado no appliance, ela será alterada em todos os repositórios pertencentes a qualquer usuário ou organização.

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.options-tab %}
4. Em "Force pushes" (Pushes forçados), use o menu suspenso e clique em **Allow** (Permitir), **Block** (Bloquear) ou **Block to the default branch** (Bloquear no branch padrão). ![Menu suspenso pushes forçados](/assets/images/enterprise/site-admin-settings/force-pushes-dropdown.png)
5. Você também pode selecionar a opção **Enforce on all repositories** (Forçar em todos os repositórios), que substituirá as configurações no nível da organização e do repositório por push forçados.

### Further reading

- [Bloquear pushes forçados em repositórios pertencentes a uma organização ou conta de usuário](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization)
- [Bloquear pushes forçados em um repositório](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/blocking-force-pushes-to-a-repository)
