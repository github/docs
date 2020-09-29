---
title: Desabilitar o acesso por SSH do Git no GitHub Enterprise Server
redirect_from:
  - /enterprise/admin/hidden/disabling-ssh-access-for-a-user-account/
  - /enterprise/admin/articles/disabling-ssh-access-for-a-user-account/
  - /enterprise/admin/hidden/disabling-ssh-access-for-your-appliance/
  - /enterprise/admin/articles/disabling-ssh-access-for-your-appliance/
  - /enterprise/admin/hidden/disabling-ssh-access-for-an-organization/
  - /enterprise/admin/articles/disabling-ssh-access-for-an-organization/
  - /enterprise/admin/hidden/disabling-ssh-access-to-a-repository/
  - /enterprise/admin/articles/disabling-ssh-access-to-a-repository/
  - /enterprise/admin/guides/installation/disabling-git-ssh-access-on-github-enterprise/
  - /enterprise/admin/installation/disabling-git-ssh-access-on-github-enterprise-server
  - /enterprise/admin/user-management/disabling-git-ssh-access-on-github-enterprise-server
intro: 'É possível impedir que as pessoas usem o Git por SSH para alguns ou todos os repositórios na {% data variables.product.product_location_enterprise %}.'
versions:
  enterprise-server: '*'
---

### Desabilitar o acesso por SSH do Git a repositórios específicos

{% data reusables.enterprise_site_admin_settings.override-policy %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.repository-search %}
{% data reusables.enterprise_site_admin_settings.click-repo %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
1. Em "Git SSH access" (Acesso por SSH do Git), use o menu suspenso e clique em **Disabled** (Desabilitado). ![Menu suspenso de acesso por SSH do Git com a opção Desabilitado](/assets/images/enterprise/site-admin-settings/git-ssh-access-repository-setting.png)

### Desabilitar o acesso por SSH do Git a todos os repositórios pertencentes a um usuário ou organização

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user-or-org %}
{% data reusables.enterprise_site_admin_settings.click-user-or-org %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
7. Em "Git SSH access" (Acesso por SSH do Git), use o menu suspenso e clique em **Disabled** (Desabilitado). Em seguida, selecione **Enforce on all repositories** (Aplicar a todos os repositórios). ![Menu suspenso de acesso por SSH do Git com a opção Desabilitado](/assets/images/enterprise/site-admin-settings/git-ssh-access-organization-setting.png)

### Desabilitar o acesso por SSH do Git a todos os repositórios no appliance

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% if currentVersion ver_gt "enterprise-server@2.21" %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
7. Em "Git SSH access" (Acesso por SSH do Git), use o menu suspenso e clique em **Disabled** (Desabilitado). Em seguida, selecione **Enforce on all repositories** (Aplicar a todos os repositórios). ![Menu suspenso de acesso por SSH do Git com a opção Desabilitado](/assets/images/enterprise/site-admin-settings/git-ssh-access-appliance-setting.png)
