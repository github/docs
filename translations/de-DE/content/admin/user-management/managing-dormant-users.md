---
title: Inaktive Benutzer verwalten
redirect_from:
  - /enterprise/admin/articles/dormant-users/
  - /enterprise/admin/articles/viewing-dormant-users/
  - /enterprise/admin/articles/determining-whether-a-user-account-is-dormant/
  - /enterprise/admin/user-management/managing-dormant-users
intro: Ein Benutzerkonto wird als inaktiv angesehen, wenn es mindestens einen Monat lang nicht aktiv war. You may choose to suspend dormant users to free up user licenses.
versions:
  enterprise-server: '*'
---

Zu den „Aktivitäten“ zählen u. a.
- die Anmeldung bei {% data variables.product.prodname_ghe_server %},
- das Kommentieren von Issues und Pull Requests,
- das Erstellen, Löschen, Beobachten und Darstellen von Repositorys,
- Pushing commits.{% if currentVersion ver_gt "enterprise-server@2.21" %}
- Accessing resources by using a personal access token or SSH key.{% endif %}

### Inaktive Benutzer anzeigen

Sie können eine Liste sämtlicher inaktiver Benutzer anzeigen, die nicht gesperrt wurden und keine Websiteadministratoren sind.

{% data reusables.enterprise_site_admin_settings.access-settings %}
3. Klicken Sie auf der linken Seitenleiste auf **Dormant users** (Inaktive Benutzer). ![Registerkarte „Dormant users“ (Inaktive Benutzer)](/assets/images/enterprise/site-admin-settings/dormant-users-tab.png)
4. Um alle inaktiven Benutzer in dieser Liste zu sperren, klicken Sie im oberen Bereich der Seite auf **Suspend all** (Alle sperren). ![Schaltfläche „Suspend all“ (Alle sperren)](/assets/images/enterprise/site-admin-settings/suspend-all.png)

### Bestimmen, ob ein Benutzerkonto inaktiv ist

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user %}
{% data reusables.enterprise_site_admin_settings.click-user %}
5. Im Abschnitt **User info** (Benutzerinformationen) gibt ein roter Punkt mit dem Wort „Dormant“ (Inaktiv) an, dass das Benutzerkonto inaktiv ist. Demgegenüber gibt ein grüner Punkt mit dem Wort „Active“ (Aktiv) an, dass das Benutzerkonto aktiv ist. ![Inaktives Benutzerkonto](/assets/images/enterprise/stafftools/dormant-user.png) ![Aktives Benutzerkonto](/assets/images/enterprise/stafftools/active-user.png)

### Inaktivitätsschwelle konfigurieren

{% data reusables.enterprise_site_admin_settings.dormancy-threshold %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% if currentVersion ver_gt "enterprise-server@2.21" %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
4. Verwenden Sie unter „Dormancy threshold“ (Inaktivitätsschwelle) das Dropdownmenü, und klicken Sie auf die gewünschte Inaktivitätsschwelle.![Dropdownmenü „Dormancy threshold“ (Inaktivitätsschwelle)](/assets/images/enterprise/site-admin-settings/dormancy-threshold-menu.png)
