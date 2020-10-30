---
title: Administratoren das Aktivieren des anonymen Git-Lesezugriffs auf öffentliche Repositorys erlauben
intro: 'Sie können festlegen, dass Repository-Administratoren den anonymen Git-Lesezugriff auf öffentliche Repositorys auf {% data variables.product.product_location_enterprise %} aktivieren können, um die Funktionsweise von benutzerdefinierten Tools auf Ihrer Instanz zu vereinfachen und Authentifizierungsanforderungen zu umgehen.'
redirect_from:
  - /enterprise/admin/user-management/allowing-admins-to-enable-anonymous-git-read-access-to-public-repositories
versions:
  enterprise-server: '*'
---

{% data reusables.enterprise_user_management.disclaimer-for-git-read-access %}

Wenn der private Modus aktiviert ist, können Sie festlegen, dass Repository-Administratoren den anonymen Git-Lesezugriff für öffentliche Repositorys auf {% data variables.product.product_location_enterprise %} aktivieren können. Weitere Informationen zum privaten Modus finden Sie unter „[Privaten Modus aktivieren](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-private-mode/)“.

Wenn Sie den anonymen Git-Lesezugriff zulassen, können Sie die Authentifizierung für benutzerdefinierte Tools auf Ihrer Instanz umgehen. Wenn Sie oder ein Repository-Administrator diese Zugriffseinstellung für ein Repository aktiviert, verfügen nicht authentifizierte Git-Vorgänge (und jeder mit Netzwerkzugriff auf {% data variables.product.prodname_ghe_server %}) über Lesezugriff auf das Repository, ohne dass eine Authentifizierung erforderlich ist.

Darüber hinaus können Sie Repository-Administratoren daran hindern, die Einstellungen für den anonymen Git-Zugriff für alle Repositorys oder für ein spezifisches Repository auf {% data variables.product.product_location_enterprise %} zu ändern. Weitere Informationen finden Sie unter „[Änderung des anonymen Git-Lesezugriffs durch Benutzer verhindern](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)“.

{% data reusables.enterprise_site_admin_settings.list-of-repos-with-anonymous-git-read-access-enabled %}

{% data reusables.enterprise_user_management.exceptions-for-enabling-anonymous-git-read-access %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.options-tab %}
4. Klicken Sie unter „Anonymous Git read access“ (Anonymer Git-Lesezugriff) auf das Dropdownmenü, und klicken Sie auf **Enabled** (Aktiviert). ![Dropdownmenü „Anonymous Git read access“ (Anonymer Git-Lesezugriff) mit den angezeigten Menüoptionen „Enabled“ (Aktiviert) und „Disabled“ (Deaktiviert)](/assets/images/enterprise/site-admin-settings/enable-anonymous-git-read-access.png)
3. Aktivieren Sie optional **Prevent repository admins from changing anonymous Git read access** (Repository-Administratoren daran hindern, den anonymen Git-Lesezugriff zu ändern), um Repository-Administratoren daran zu hindern, die Einstellungen für den anonymen Git-Lesezugriff in allen Repositorys auf Ihrer Instanz zu ändern. ![Durch die Aktivierung des Kontrollkästchens werden Repository-Administratoren daran gehindert, die Einstellungen für den anonymen Git-Lesezugriff für alle Repositorys auf Ihrer Instanz zu ändern](/assets/images/enterprise/site-admin-settings/globally-lock-repos-from-changing-anonymous-git-read-access.png)

### Anonymen Git-Lesezugriff für ein spezifisches Repository aktivieren

{% data reusables.enterprise_user_management.exceptions-for-enabling-anonymous-git-read-access %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.repository-search %}
{% data reusables.enterprise_site_admin_settings.click-repo %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
6. Klicken Sie unter „Danger Zone“ (Gefahrenzone) neben „Enable Anonymous Git read access“ (Anonymen Git-Lesezugriff aktivieren) auf **Enable** (Aktivieren). ![Schaltfläche „Enabled“ (Aktiviert) unter „Enable anonymous Git read access“ (Anonymen Git-Lesezugriff aktivieren) in der „Danger Zone“ (Gefahrenzone) der Websiteadministratoreinstellungen eines Repositorys ](/assets/images/enterprise/site-admin-settings/site-admin-enable-anonymous-git-read-access.png)
7. Überprüfen Sie die Änderungen. Klicken Sie zur Bestätigung auf **Yes, enable anonymous Git read access** (Ja, anonymen Git-Lesezugriff aktivieren). ![Bestätigung der Einstellung für anonymen Git-Lesezugriff in einem Popup-Fenster](/assets/images/enterprise/site-admin-settings/confirm-anonymous-git-read-access-for-specific-repo-as-site-admin.png)
8. Aktivieren Sie optional **Prevent repository admins from changing anonymous Git read access** (Repository-Administratoren daran hindern, den anonymen Git-Lesezugriff zu ändern), um Repository-Administratoren daran zu hindern, diese Einstellung für dieses Repository zu ändern. ![Durch die Aktivierung des Kontrollkästchens werden Repository-Administratoren daran gehindert, den anonymen Git-Lesezugriff für dieses Repository zu ändern](/assets/images/enterprise/site-admin-settings/lock_anonymous_git_access_for_specific_repo.png)
