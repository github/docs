---
title: Bloquear pushes forçados em um repositório
redirect_from:
  - /enterprise/admin/articles/blocking-force-pushes-to-a-repository/
  - /enterprise/admin/articles/block-force-pushes/
  - /enterprise/admin/developer-workflow/blocking-force-pushes-to-a-repository
intro: Você pode bloquear pushes forçados (`git push --force`) em todos os branches (ou somente no branch padrão) de um repositório.
versions:
  enterprise-server: '*'
---

{% data reusables.enterprise_site_admin_settings.override-policy %}

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.repository-search %}
{% data reusables.enterprise_site_admin_settings.click-repo %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
4. Selecione **Block** (Bloquear) ou **Block to the default branch** (Bloquear no branch padrão) em **Push and Pull** (Operações de push e pull). ![Bloquear pushes forçados](/assets/images/enterprise/site-admin-settings/repo/repo-block-force-pushes.png)

As alterações entram em vigor de imediato. Se mudar de ideia depois, você poderá permitir os pushes forçados novamente.

## Leia mais

- [Bloquear pushes forçados em repositórios pertencentes a uma organização ou conta de usuário](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization)
- "[Bloquear pushes forçados no appliance](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/blocking-force-pushes-on-your-appliance)"
