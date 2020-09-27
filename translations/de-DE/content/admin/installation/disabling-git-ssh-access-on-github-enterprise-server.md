---
title: Git-SSH-Zugriff auf GitHub Enterprise Server aktivieren
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
intro: 'Sie können Personen daran hindern, für bestimmte oder alle Repositorys auf {{ site.data.variables.product.product_location_enterprise }} Git über SSH zu verwenden.'
versions:
  enterprise-server: '*'
---

### Git-SSH-Zugriff auf ein bestimmtes Repository deaktivieren

{{ site.data.reusables.enterprise_site_admin_settings.override-policy }}

{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.repository-search }}
{{ site.data.reusables.enterprise_site_admin_settings.click-repo }}
{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.admin-top-tab }}
{{ site.data.reusables.enterprise_site_admin_settings.admin-tab }}
1. Verwenden Sie unter „Git SSH access“ (Git-SSH-Zugriff) das Dropdownmenü, und klicken Sie auf **Disabled** (Deaktiviert). ![Dropdownmenü „Git SSH access“ (Git-SSH-Zugriff) mit ausgewählter Option „Disabled“ (Deaktiviert)](/assets/images/enterprise/site-admin-settings/git-ssh-access-repository-setting.png)

### Git-SSH-Zugriff auf alle einem Benutzer oder einer Organisation gehörenden Repositorys deaktivieren

{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.search-user-or-org }}
{{ site.data.reusables.enterprise_site_admin_settings.click-user-or-org }}
{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.admin-top-tab }}
{{ site.data.reusables.enterprise_site_admin_settings.admin-tab }}
7. Verwenden Sie unter „Git SSH access“ (Git-SSH-Zugriff) das Dropdownmenü, und klicken Sie auf **Disabled** (Deaktiviert). Wählen Sie anschließend **Enforce on all repositories** (Auf allen Repositorys erzwingen) aus. ![Dropdownmenü „Git SSH access“ (Git-SSH-Zugriff) mit ausgewählter Option „Disabled“ (Deaktiviert)](/assets/images/enterprise/site-admin-settings/git-ssh-access-organization-setting.png)

### Git-SSH-Zugriff auf alle Repositorys auf einer Appliance deaktivieren

{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.business }}
{{ site.data.reusables.enterprise-accounts.settings-tab }}
{{ site.data.reusables.enterprise-accounts.options-tab }}
7. Verwenden Sie unter „Git SSH access“ (Git-SSH-Zugriff) das Dropdownmenü, und klicken Sie auf **Disabled** (Deaktiviert). Wählen Sie anschließend **Enforce on all repositories** (Auf allen Repositorys erzwingen) aus. ![Dropdownmenü „Git SSH access“ (Git-SSH-Zugriff) mit ausgewählter Option „Disabled“ (Deaktiviert)](/assets/images/enterprise/site-admin-settings/git-ssh-access-appliance-setting.png)
