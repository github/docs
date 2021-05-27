---
title: Inhabilitar el acceso por SSH a git en tu empresa
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
  - /admin/user-management/disabling-git-ssh-access-on-github-enterprise-server
intro: Puedes prevenir que las personas utilicen git a través de SSH para ciertos repositorios o para todos ellos en tu empresa.
versions:
  enterprise-server: '*'
  github-ae: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Security
  - SSH
---

### Inhabilitar el acceso SSH de Git para un repositorio específico

{% data reusables.enterprise_site_admin_settings.override-policy %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.repository-search %}
{% data reusables.enterprise_site_admin_settings.click-repo %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
1. En "Acceso SSH de Git", usa el menú desplegable y haz clic en **Disabled** (Inhabilitado). ![Menú desplegable del acceso SSH de Git con la opción de inhabilitación seleccionada](/assets/images/enterprise/site-admin-settings/git-ssh-access-repository-setting.png)

### Inhabilitar el acceso SSH de Git para todos los repositorios que le pertenecen a un usuario o a una organización

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user-or-org %}
{% data reusables.enterprise_site_admin_settings.click-user-or-org %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
7. En "Acceso SSH de Git", usa el menú desplegable y haz clic en **Disabled** (Inhabilitado). Luego selecciona **Enforce on all repositories** (Aplicar en todos los repositorios). ![Menú desplegable del acceso SSH de Git con la opción de inhabilitación seleccionada](/assets/images/enterprise/site-admin-settings/git-ssh-access-organization-setting.png)

### Inhabilitar el acceso a Git por SSH para todos los repositorios de tu empresa

{% data reusables.enterprise-accounts.access-enterprise %}
{% if currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
7. En "Acceso SSH de Git", usa el menú desplegable y haz clic en **Disabled** (Inhabilitado). Luego selecciona **Enforce on all repositories** (Aplicar en todos los repositorios). ![Menú desplegable del acceso SSH de Git con la opción de inhabilitación seleccionada](/assets/images/enterprise/site-admin-settings/git-ssh-access-appliance-setting.png)
