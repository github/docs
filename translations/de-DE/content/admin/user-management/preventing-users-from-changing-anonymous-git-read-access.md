---
title: Benutzerbedingte Änderung des anonymen Git-Lesezugriffs verhindern
intro: 'Sie können Repository-Administratoren daran hindern, den anonymen Git-Lesezugriff auf ein Repository{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.14" %} oder auf alle Repositorys{% endif %} zu ändern.'
redirect_from:
  - /enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access-to-a-repository/
  - /enterprise/admin/user-management/preventing-users-from-changing-anonymous-git-read-access
versions:
  enterprise-server: '*'
---

{% data reusables.enterprise_user_management.disclaimer-for-git-read-access %}

Um Repository-Administratoren daran zu hindern, die Einstellungen für den anonymen Git-Lesezugriff für ein bestimmtes Repository zu ändern, können Sie die Zugriffseinstellungen für das Repository sperren. Nachdem Sie die Einstellung für den Git-Lesezugriff eines Repositorys gesperrt haben, kann nur ein Websiteadministrator die Einstellung ändern.

Ein Repository-Administrator kann den anonymen Git-Lesezugriff auf ein öffentliches Repository ändern, falls es kein Fork ist. Weitere Informationen finden Sie unter „[Administratoren das Aktivieren des anonymen Git-Lesezugriffs auf öffentliche Repositorys erlauben](/enterprise/{{ currentVersion }}/admin/guides/user-management/allowing-admins-to-enable-anonymous-git-read-access-to-public-repositories)“.

{% data reusables.enterprise_site_admin_settings.list-of-repos-with-anonymous-git-read-access-enabled %}

### Benutzerbedingte Änderung des anonymen Git-Lesezugriffs für ein Repository verhindern

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.repository-search %}
{% data reusables.enterprise_site_admin_settings.click-repo %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
6. Aktivieren Sie unter „Danger Zone“ (Gefahrenzone) die Option **Prevent repository admins from enabling anonymous Git read access** (Repository-Administratoren daran hindern, den anonymen Git-Lesezugriff zu aktivieren). ![Durch die Aktivierung des Kontrollkästchens wird verhindert, dass die Einstellung für den anonymen Git-Lesezugriff auf das Repository geändert werden kann](/assets/images/enterprise/site-admin-settings/lock-repo-from-changing-anonymous-git-read-access.png)

### Benutzerbedingte Änderung des anonymen Git-Lesezugriffs für alle Repositorys verhindern

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.options-tab %}
3. Bestätigen Sie unter „Anonymous Git read access“ (Anonymer Git-Lesezugriff), dass die Einstellung aktiviert ist. Aktivieren Sie anschließend **Prevent repository admins from changing anonymous Git read access** (Repository-Administratoren daran hindern, den anonymen Git-Lesezugriff zu ändern). ![Durch die Aktivierung des Kontrollkästchens wird global verhindert, dass die Einstellung für den anonymen Git-Lesezugriff auf das Repository geändert werden kann](/assets/images/enterprise/site-admin-settings/globally-lock-repos-from-changing-anonymous-git-read-access.png)

