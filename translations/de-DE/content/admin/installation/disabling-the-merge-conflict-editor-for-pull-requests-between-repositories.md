---
title: Editor für Mergekonflikte für Pull Request zwischen Repositorys deaktivieren
intro: 'Sie können festlegen, dass Mergekonflikte lokal aufgelöst werden müssen. Deaktivieren Sie dazu den Editor für Mergekonflikte auf {% data variables.product.prodname_ghe_server %} für Pull Requests, bei denen sich der Basis-Branch und der Head-Branch in unterschiedlichen Repositorys befinden.'
redirect_from:
  - /enterprise/admin/installation/disabling-the-merge-conflict-editor-for-pull-requests-between-repositories
versions:
  enterprise-server: '*'
---

Indem Sie festlegen, dass Benutzer Mergekonflikte lokal auf ihren Computern auflösen müssen, können Sie verhindern, dass sie über ein Fork versehentlich in ein vorgelagertes Repository schreiben.

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.options-tab %}
1. Verwenden Sie unter „Merge Conflict editor for pull requests between repositories“ (Editor für Mergekonflikte für Pull Requests zwischen Repositorys) das Dropdownmenü, und klicken Sie auf **Disabled** (Deaktiviert). ![Dropdownmenü mit der Option zum Deaktivieren des Editors für Mergekonflikte](/assets/images/enterprise/settings/conflict-editor-settings.png)
