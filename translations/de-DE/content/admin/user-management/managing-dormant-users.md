---
title: Inaktive Benutzer verwalten
redirect_from:
  - /enterprise/admin/articles/dormant-users/
  - /enterprise/admin/articles/viewing-dormant-users/
  - /enterprise/admin/articles/determining-whether-a-user-account-is-dormant/
  - /enterprise/admin/user-management/managing-dormant-users
intro: 'A user account is considered to be dormant if it has not been active for at least a month.{% if enterpriseServerVersions contains currentVersion %} You may choose to suspend dormant users to free up user licenses.{% endif %}'
versions:
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Unternehmen
---

Zu den „Aktivitäten“ zählen u. a.
- die Anmeldung bei {% data variables.product.product_name %},
- das Kommentieren von Issues und Pull Requests,
- das Erstellen, Löschen, Beobachten und Darstellen von Repositorys,
- Pushing commits.{% if currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
- Accessing resources by using a personal access token or SSH key.{% endif %}

### Inaktive Benutzer anzeigen

Sie können eine Liste sämtlicher inaktiver Benutzer anzeigen, die nicht gesperrt wurden und keine Websiteadministratoren sind.

{% data reusables.enterprise_site_admin_settings.access-settings %}
3. Klicken Sie auf der linken Seitenleiste auf **Dormant users** (Inaktive Benutzer). ![Dormant users tab](/assets/images/enterprise/site-admin-settings/dormant-users-tab.png){% if enterpriseServerVersions contains currentVersion %}
4. Um alle inaktiven Benutzer in dieser Liste zu sperren, klicken Sie im oberen Bereich der Seite auf **Suspend all** (Alle sperren). ![Suspend all button](/assets/images/enterprise/site-admin-settings/suspend-all.png){% endif %}

### Bestimmen, ob ein Benutzerkonto inaktiv ist

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user %}
{% data reusables.enterprise_site_admin_settings.click-user %}
5. Im Abschnitt **User info** (Benutzerinformationen) gibt ein roter Punkt mit dem Wort „Dormant“ (Inaktiv) an, dass das Benutzerkonto inaktiv ist. Demgegenüber gibt ein grüner Punkt mit dem Wort „Active“ (Aktiv) an, dass das Benutzerkonto aktiv ist. ![Inaktives Benutzerkonto](/assets/images/enterprise/stafftools/dormant-user.png) ![Aktives Benutzerkonto](/assets/images/enterprise/stafftools/active-user.png)

### Inaktivitätsschwelle konfigurieren

{% data reusables.enterprise_site_admin_settings.dormancy-threshold %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% if currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
4. Verwenden Sie unter „Dormancy threshold“ (Inaktivitätsschwelle) das Dropdownmenü, und klicken Sie auf die gewünschte Inaktivitätsschwelle.![Dropdownmenü „Dormancy threshold“ (Inaktivitätsschwelle)](/assets/images/enterprise/site-admin-settings/dormancy-threshold-menu.png)
