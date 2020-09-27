---
title: Verwaltung erlaubter IP-Adressen für Deine Organisation
intro: 'Du kannst den Zugriff auf die Objekte Deiner Organisation einschränken, indem Du eine Liste von IP-Adressen konfigurierst, die zu einer Verbindung berechtigt sind.'
product: '{{ site.data.reusables.gated-features.allowed-ip-addresses }}'
versions:
  free-pro-team: '*'
---

Organisationsinhaber können erlaubte IP-Adressen für eine Organisation verwalten.

### Informationen zu zulässigen IP-Adressen

Du kannst den Zugriff auf Organisations-Objekte beschränken, indem Du eine Genehmigungsliste für bestimmte IP-Adressen konfigurierst. {{ site.data.reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions }}

{{ site.data.reusables.identity-and-permissions.ip-allow-lists-cidr-notation }}

{{ site.data.reusables.identity-and-permissions.ip-allow-lists-enable }}

Du kannst erlaubte IP-Adressen auch für die Organisationen in einem Enterprise-Konto konfigurieren. Weiter Informationen findest Du unter „[Sicherheitseinstellungen für Dein Enterprise-Konto erzwingen](/github/setting-up-and-managing-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account#managing-allowed-ip-addresses-for-organizations-in-your-enterprise-account)."

### Eine zulässige IP-Adresse hinzufügen

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.security }}
{{ site.data.reusables.identity-and-permissions.ip-allow-lists-add-ip }}
{{ site.data.reusables.identity-and-permissions.ip-allow-lists-add-description }}
{{ site.data.reusables.identity-and-permissions.ip-allow-lists-add-entry }}

### Zulässige IP-Adressen aktivieren

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.security }}
3. Wähle unter „IP allow list“ (Liste der zulässigen IP-Adressen) **Enable IP allow list** (Liste der zulässigen IP-Adressen aktivieren) aus. ![Kontrollkästchen, um IP-Adressen zuzulassen](/assets/images/help/security/enable-ip-allowlist-organization-checkbox.png)
4. Klicke auf **Save** (Speichern).

### Eine zulässige IP-Adresse bearbeiten

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.security }}
{{ site.data.reusables.identity-and-permissions.ip-allow-lists-edit-entry }}
{{ site.data.reusables.identity-and-permissions.ip-allow-lists-edit-ip }}
{{ site.data.reusables.identity-and-permissions.ip-allow-lists-edit-description }}
8. Klicke auf **Update** (Aktualisieren).

### Eine zulässige IP-Adresse löschen

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.security }}
{{ site.data.reusables.identity-and-permissions.ip-allow-lists-delete-entry }}
{{ site.data.reusables.identity-and-permissions.ip-allow-lists-confirm-deletion }}

### {{ site.data.variables.product.prodname_actions }} mit einer IP-Zulassungsliste verwenden

{{ site.data.reusables.github-actions.ip-allow-list-self-hosted-runners }}
