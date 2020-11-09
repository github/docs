---
title: Benutzer sperren und entsperren
redirect_from:
  - /enterprise/admin/articles/suspending-a-user/
  - /enterprise/admin/articles/unsuspending-a-user/
  - /enterprise/admin/articles/viewing-suspended-users/
  - /enterprise/admin/articles/suspended-users/
  - /enterprise/admin/articles/suspending-and-unsuspending-users/
  - /enterprise/admin/user-management/suspending-and-unsuspending-users
intro: 'Wenn ein Benutzer das Unternehmen verlässt oder in eine andere Abteilung wechselt, sollten Sie dessen Zugriffsmöglichkeit auf {% data variables.product.product_location %} entfernen oder ändern.'
versions:
  enterprise-server: '*'
---

Wenn Mitarbeiter das Unternehmen verlassen, kannst Du ihre {% data variables.product.prodname_ghe_server %}-Konten sperren, um Benutzerlizenzen in Deiner {% data variables.product.prodname_enterprise %}-Lizenz freizugeben und gleichzeitig die von ihnen erstellten Problemtickets, Kommentare, Repositorys, „Gists“ (Ideen) und anderen Daten beizubehalten. Gesperrte Benutzer können sich weder bei Ihrer Instanz anmelden noch Code per Push-Vorgang übertragen oder abrufen.

Wenn Sie einen Benutzer sperren, wird die Änderung sofort wirksam, ohne dass der Benutzer benachrichtigt wird. Wenn der Benutzer versucht, Inhalte aus einem Repository abzurufen oder dorthin per Push-Vorgang zu übertragen, wird der folgende Fehler angezeigt:

```shell
$ git clone git@[hostname]:john-doe/test-repo.git
Cloning into 'test-repo'...
ERROR: Your account is suspended. Please check with your installation administrator.
fatal: The remote end hung up unexpectedly
```

Vor dem Sperren von Websiteadministratoren müssen Sie diese auf gewöhnliche Benutzer zurückstufen. Weitere Informationen finden Sie unter „[Websiteadministrator hoch- oder zurückstufen](/enterprise/admin/user-management/promoting-or-demoting-a-site-administrator)“.

{% tip %}

**Hinweis:** Bei [aktivierter LDAP-Synchronisierung](/enterprise/{{ page.version }}/admin/guides/user-management/using-ldap#enabling-ldap-sync) für {% data variables.product.product_location %} werden Benutzer automatisch gesperrt, wenn sie aus dem LDAP-Verzeichnisserver entfernt werden. Wenn die LDAP-Synchronisierung für Ihre Instanz aktiviert wird, werden die normalen Methoden zur Benutzersperrung deaktiviert.

{% endtip %}

### Benutzer im Benutzeradministrator-Dashboard sperren

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user %}
{% data reusables.enterprise_site_admin_settings.click-user %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
5. Klicken Sie unter „Account suspension“ (Kontosperre) im roten Feld „Danger Zone“ (Gefahrenzone) auf **Suspend** (Sperren). ![Schaltfläche „Suspend“ (Sperren)](/assets/images/enterprise/site-admin-settings/suspend.png)
6. Geben Sie an, weshalb der Benutzer gesperrt wird.![Grund für die Sperre](/assets/images/enterprise/site-admin-settings/suspend-reason.png)

### Benutzer im Benutzeradministrator-Dashboard entsperren

Wie beim Sperren eines Benutzers wird das Entsperren eines Benutzers sofort wirksam. Der Benutzer wird nicht benachrichtigt.

{% data reusables.enterprise_site_admin_settings.access-settings %}
3. Klicken Sie auf der linken Seitenleiste auf **Suspended users** (Gesperrte Benutzer). ![Registerkarte „Suspended users“ (Gesperrte Benutzer)](/assets/images/enterprise/site-admin-settings/user/suspended-users-tab.png)
2. Klicken Sie auf den Namen des Benutzerkontos, das entsperrt werden soll. ![Gesperrter Benutzer](/assets/images/enterprise/site-admin-settings/user/suspended-user.png)
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
4. Klicken Sie unter „Account suspension“ (Kontosperre) im roten Feld „Danger Zone“ (Gefahrenzone) auf **Unsuspend** (Entsperren). ![Schaltfläche „Unsuspend“ (Entsperren)](/assets/images/enterprise/site-admin-settings/unsuspend.png)
5. Geben Sie an, weshalb der Benutzer entsperrt wird.![Grund für Aufhebung der Sperre](/assets/images/enterprise/site-admin-settings/unsuspend-reason.png)

### Benutzer an der Befehlszeile sperren

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Führen Sie [ghe-user-suspend](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities#ghe-user-suspend) mit dem Benutzernamen aus, der gesperrt werden soll.
  ```shell
  $ ghe-user-suspend <em>username</em>
  ```

### Benutzerdefinierte Meldung für gesperrte Benutzer erstellen

Sie können eine benutzerdefinierte Meldung erstellen, die gesperrten Benutzern angezeigt wird, wenn sie versuchen, sich anzumelden.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.messages-tab %}
5. Klicken Sie auf **Add message** (Meldung hinzufügen). ![„Add message“ (Meldung hinzufügen)](/assets/images/enterprise/site-admin-settings/add-message.png)
6. Geben Sie Ihre Meldung in das Feld **Suspended user message** (Meldung für gesperrten Benutzer) ein. Sie können Markdown eingeben oder die Markdown-Symbolleiste zum Formatieren Ihrer Meldung verwenden. ![Meldung für gesperrten Benutzer](/assets/images/enterprise/site-admin-settings/suspended-user-message.png)
7. Klicken Sie auf die Schaltfläche **Preview** (Vorschau) unter dem Feld **Suspended user message** (Meldung für gesperrten Benutzer), um die dargestellte Meldung anzuzeigen. ![Schaltfläche „Preview“ (Vorschau)](/assets/images/enterprise/site-admin-settings/suspended-user-message-preview-button.png)
8. Überprüfen Sie die dargestellte Meldung. ![Dargestellte Meldung für gesperrten Benutzer](/assets/images/enterprise/site-admin-settings/suspended-user-message-rendered.png)
{% data reusables.enterprise_site_admin_settings.save-changes %}

### Benutzer an der Befehlszeile entsperren

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Führen Sie [ghe-user-unsuspend](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities#ghe-user-unsuspend) mit dem Benutzernamen aus, der entsperrt werden soll.
  ```shell
  $ ghe-user-unsuspend <em>username</em>
  ```

### Weiterführende Informationen
- "[Suspend a user](/enterprise/{{ currentVersion }}/v3/enterprise-admin/users/#suspend-a-user)"
