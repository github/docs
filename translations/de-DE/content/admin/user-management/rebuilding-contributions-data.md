---
title: Beitragsdaten erneut erstellen
intro: 'Es ist ggf. erforderlich, Beitragsdaten neu zu erstellen, um vorhandene Commits mit einem Benutzerkonto zu verknüpfen.'
redirect_from:
  - /enterprise/admin/articles/rebuilding-contributions-data/
  - /enterprise/admin/user-management/rebuilding-contributions-data
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

Wenn ein Commit per Push-Vorgang an {% data variables.product.prodname_enterprise %} übertragen wird, wird er mit einem Benutzerkonto verknüpft, sofern sie beide derselben E-Mail-Adresse zugeordnet sind. Vorhandene Commits werden jedoch *nicht* retroaktiv verknüpft, wenn ein Benutzer eine neue E-Mail-Adresse registriert oder ein neues Konto erstellt.

1. Rufen Sie die Profilseite des Benutzers auf.
{% data reusables.enterprise_site_admin_settings.access-settings %}
3. Klicken Sie links auf der Seite auf **Admin** (Administrator). ![Registerkarte „Admin“ (Administrator)](/assets/images/enterprise/site-admin-settings/admin-tab.png)
4. Klicken Sie unter **Contributions data** (Beitragsdaten) auf **Rebuild** (Neu erstellen). ![Schaltfläche „Rebuild“ (Neu erstellen)](/assets/images/enterprise/site-admin-settings/rebuild-button.png)

{% data variables.product.prodname_enterprise %} startet nun Hintergrundaufträge, um Commits mit dem Konto dieses Benutzers neu zu verknüpfen.
  ![In die Warteschlange versetzte Neuerstellungsaufträge](/assets/images/enterprise/site-admin-settings/rebuild-jobs.png)
