---
title: Repository-Erstellung auf Ihrer Instanz einschränken
intro: 'Du kannst wählen, ob Organisationsmitglieder auf Deinem {{ site.data.variables.product.prodname_ghe_server }}-Gerät Repositorys erstellen können und welche Arten von Repositorys Mitglieder erstellen können.'
redirect_from:
  - /enterprise/admin/user-management/restricting-repository-creation-in-your-instance
versions:
  enterprise-server: '*'
---

{{ site.data.reusables.organizations.repo-creation-constants }}

{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.business }}
{{ site.data.reusables.enterprise-accounts.policies-tab }}
{{ site.data.reusables.enterprise-accounts.repositories-tab }}
5. Überprüfen Sie unter „Repository creation“ (Repository-Erstellung) die Informationen zum Ändern der Einstellung. {{ site.data.reusables.enterprise-accounts.view-current-policy-config-orgs }}
{% if currentVersion ver_gt "enterprise-server@2.19" %}
{{ site.data.reusables.enterprise-accounts.repo-creation-policy }}
{{ site.data.reusables.enterprise-accounts.repo-creation-types }}
{% else %}
6. Wählen Sie im Dropdownmenü unter „Repository creation“ (Repository-Erstellung) eine Richtlinie aus. ![Dropdownmenü mit Richtlinien zur Repository-Erstellung](/assets/images/enterprise/site-admin-settings/repository-creation-drop-down.png)
{% endif %}
