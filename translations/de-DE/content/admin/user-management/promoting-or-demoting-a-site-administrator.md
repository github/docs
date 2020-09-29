---
title: Websiteadministrator hoch- oder zurückstufen
redirect_from:
  - /enterprise/admin/articles/promoting-a-site-administrator/
  - /enterprise/admin/articles/demoting-a-site-administrator/
  - /enterprise/admin/user-management/promoting-or-demoting-a-site-administrator
intro: Websiteadministratoren können normale Benutzerkonten auf einen Websiteadministrator hochstufen und andere Websiteadministratoren auf normale Benutzer zurückstufen.
versions:
  enterprise-server: '*'
---

{% tip %}

**Hinweis:** Wenn die [LDAP-Synchronisierung aktiviert ist](/enterprise/{{ currentVersion }}/admin/guides/user-management/using-ldap#enabling-ldap-sync) und das Attribut `Administrators group` festgelegt ist, wenn [der LDAP-Zugriff für Benutzer konfiguriert wird](/enterprise/{{ currentVersion }}/admin/guides/user-management/using-ldap#configuring-ldap-with-your-github-enterprise-server-instance), besitzen diese Benutzer automatisch Websiteadministratorzugriff auf Ihre Instanz. In diesem Fall ist es nicht möglich, Benutzer mit den folgenden Schritten manuell hochzustufen. Sie müssen sie zur Gruppe mit den LDAP-Administratoren hinzufügen.

{% endtip %}

Weitere Informationen zum Hochstufen eines Benutzers auf einen Organisationsinhaber finden Sie im Abschnitt `ghe-org-admin-promote` unter „[Befehlszeilenprogramme](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities#ghe-org-admin-promote)“.

### Benutzer über die Enterprise-Einstellungen hochstufen

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.enterprise-accounts.administrators-tab %}
5. Klicken Sie in der oberen rechte Ecke der Seite auf **Add owner** (Inhaber hinzufügen). ![Schaltfläche zum Hinzufügen eines Administrators](/assets/images/help/business-accounts/business-account-add-admin-button.png)
6. Geben Sie im Suchfeld den Namen des Benutzers ein, und klicken Sie auf **Add** (Hinzufügen). ![Suchfeld zum Hinzufügen eines Administrators](/assets/images/help/business-accounts/business-account-search-to-add-admin.png)

### Websiteadministrator über die Enterprise-Einstellungen zurückstufen

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.enterprise-accounts.administrators-tab %}
1. Geben Sie in der oberen linken Ecke der Seite im Suchfeld „Find an administrator“ (Administrator suchen) den Benutzernamen der Person ein, die Sie zurückstufen möchten. ![Suchfeld zum Auffinden eines Administrators](/assets/images/help/business-accounts/business-account-search-for-admin.png)

1. In the search results, find the username of the person you want to demote, then use the {% octicon "gear" %} drop-down menu, and select **Remove owner**. ![Option „Remove from enterprise“ (Aus Enterprise entfernen)](/assets/images/help/business-accounts/demote-admin-button.png)

### Benutzer an der Befehlszeile hochstufen

1. [Stellen Sie eine SSH-Verbindung](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-administrative-shell-ssh/) zu Ihrer Appliance her.
2. Führen Sie [ghe-user-promote](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities#ghe-user-promote) mit dem Benutzernamen aus, der hochgestuft werden soll.
  ```shell
  $ ghe-user-promote <em>username</em>
  ```

### Websiteadministrator an der Befehlszeile zurückstufen

1. [Stellen Sie eine SSH-Verbindung](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-administrative-shell-ssh/) zu Ihrer Appliance her.
2. Führen Sie [ghe-user-demote](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities#ghe-user-demote) mit dem Benutzernamen aus, der zurückgestuft werden soll.
  ```shell
  $ ghe-user-demote <em>username</em>
  ```
