---
title: Bloquear pushes forçados em repositórios pertencentes a uma organização ou conta de usuário
redirect_from:
  - /enterprise/admin/articles/blocking-force-pushes-for-a-user-account/
  - /enterprise/admin/articles/blocking-force-pushes-for-an-organization/
  - /enterprise/admin/articles/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization/
  - /enterprise/admin/developer-workflow/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization
intro: Você pode bloquear pushes forçados (`git push --force`) em todos os branches ou somente no branch padrão dos repositórios pertencentes a uma organização ou conta de usuário.
versions:
  enterprise-server: '*'
---

Os repositórios herdam as configurações de push forçado da conta do usuário ou da organização à qual pertencem. Por sua vez, as organizações e contas de usuário herdam suas configurações de push forçado a partir das configurações de push forçado para todo o appliance.

Você pode substituir as configurações padrão herdadas definindo as configurações da conta de usuário ou da organização.

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user-or-org %}
{% data reusables.enterprise_site_admin_settings.click-user-or-org %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
5. Em "Repository default settings" (Configurações padrão do repositório) na seção "Force pushes" (Pushes forçados), selecione
    - **Block** (Bloquear) para bloquear os pushes forçados em todos os branches.
    - **Block to the default branch** (Bloquear no branch padrão) para bloquear os pushes forçados apenas no branch padrão. ![Bloquear pushes forçados](/assets/images/enterprise/site-admin-settings/user/user-block-force-pushes.png)
6. Você também pode selecionar a opção **Enforce on all repositories** (Forçar em todos os repositórios), que substituirá as configurações específicas do repositório. Observe que essa ação **não** substitui políticas no nível do appliance. ![Block force pushes](/assets/images/enterprise/site-admin-settings/user/user-block-all-force-pushes.png) A alteração entra em vigor de imediato. Se mudar de ideia depois, você poderá permitir os pushes forçados novamente.

### Further reading

- [Bloquear pushes forçados em um repositório](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/blocking-force-pushes-to-a-repository)
- "[Bloquear pushes forçados no appliance](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/blocking-force-pushes-on-your-appliance)"
