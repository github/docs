---
title: Benutzermeldungen auf Ihrer Instanz anpassen
redirect_from:
  - /enterprise/admin/user-management/creating-a-custom-sign-in-message/
  - /enterprise/admin/user-management/customizing-user-messages-on-your-instance
intro: 'You can create custom messages that users will see on the sign in and sign out pages{% if currentVersion ver_gt "enterprise-server@2.21" %} or in an announcement banner at the top of every page{% endif %}.'
versions:
  enterprise-server: '*'
---

Mittels Markdown können Sie Ihre Meldung formatieren. Weitere Informationen finden Sie unter „[Informationen zum Schreiben und Formatieren bei {% data variables.product.prodname_dotcom %}](/articles/about-writing-and-formatting-on-github/)“.

{% note %}

**Hinweis:** Wenn Sie SAML zur Authentifizierung verwenden, wird die Anmeldeseite von Ihrem Identity Provider bereitgestellt und kann nicht über {% data variables.product.prodname_ghe_server %} angepasst werden.

{% endnote %}

### Benutzerdefinierte Meldung für Anmeldung erstellen

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.messages-tab %}
5. Klicken Sie unter „Sign in page“ (Anmeldeseite) auf **Add message** (Meldung hinzufügen) oder **Edit message** (Meldung bearbeiten). ![Schaltfläche „Edit message“ (Meldung bearbeiten)](/assets/images/enterprise/site-admin-settings/edit-message.png)
6. Geben Sie unter **Sign in message** (Meldung für Anmeldung) die Meldung an, die Benutzern angezeigt werden soll. ![Meldung für Anmeldung](/assets/images/enterprise/site-admin-settings/sign-in-message.png)
{% data reusables.enterprise_site_admin_settings.click-preview %}
  ![Schaltfläche „Preview“ (Vorschau)](/assets/images/enterprise/site-admin-settings/sign-in-message-preview-button.png)
8. Überprüfen Sie die dargestellte Meldung. ![Dargestellte Meldung für Anmeldung](/assets/images/enterprise/site-admin-settings/sign-in-message-rendered.png)
{% data reusables.enterprise_site_admin_settings.save-changes %}

### Benutzerdefinierte Meldung für Abmeldung erstellen

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.messages-tab %}
5. Klicken Sie unter „Sign out page“ (Abmeldeseite) auf **Add message** (Meldung hinzufügen) oder **Edit message** (Meldung bearbeiten). ![Schaltfläche „Add message“ (Meldung hinzufügen)](/assets/images/enterprise/site-admin-settings/sign-out-add-message-button.png)
6. Geben Sie unter **Sign out message** (Meldung für Abmeldung) die Meldung an, die Benutzern angezeigt werden soll. ![two_factor_auth_header-Meldung signieren](/assets/images/enterprise/site-admin-settings/sign-out-message.png)
{% data reusables.enterprise_site_admin_settings.click-preview %}
  ![Schaltfläche „Preview“ (Vorschau)](/assets/images/enterprise/site-admin-settings/sign-out-message-preview-button.png)
8. Überprüfen Sie die dargestellte Meldung. ![Dargestellte Meldung für Abmeldung](/assets/images/enterprise/site-admin-settings/sign-out-message-rendered.png)
{% data reusables.enterprise_site_admin_settings.save-changes %}

{% if currentVersion ver_gt "enterprise-server@2.21" %}
### Creating a global announcement banner

You can set a global announcement banner to be displayed to all users at the top of every page.

You can also set an announcement banner in the administrative shell using a command line utility. For more information, see "[Command-line utilities](/enterprise/admin/configuration/command-line-utilities#ghe-announce)."

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.messages-tab %}
1. Klicken Sie unter „Sign in page“ (Anmeldeseite) auf **Add message** (Meldung hinzufügen) oder **Edit message** (Meldung bearbeiten). ![Schaltfläche „Add message“ (Meldung hinzufügen)](/assets/images/enterprise/site-admin-settings/add-announcement-button.png)
1. Under "Announcement", in the text field, type the announcement you want displayed in a banner. ![Text field to enter announcement](/assets/images/enterprise/site-admin-settings/announcement-text-field.png)
1. Optionally, under "Expires on", use the calendar drop-down menu, and select an expiration date. ![Calendar drop-down menu to choose expiration date](/assets/images/enterprise/site-admin-settings/expiration-drop-down.png)
1. Optionally, to see what the banner will look like, click **Preview**. ![Schaltfläche „Preview“ (Vorschau)](/assets/images/enterprise/site-admin-settings/preview-announcement-button.png)
1. Klicke auf **Save changes** (Änderungen speichern). ![Schaltfläche „Edit message“ (Meldung bearbeiten)](/assets/images/enterprise/site-admin-settings/save-announcement-button.png)
{% endif %}
