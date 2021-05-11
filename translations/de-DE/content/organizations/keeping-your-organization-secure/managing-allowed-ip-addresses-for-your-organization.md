---
title: Verwaltung erlaubter IP-Adressen für Deine Organisation
intro: 'Du kannst den Zugriff auf die Objekte Deiner Organisation einschränken, indem Du eine Liste von IP-Adressen konfigurierst, die zu einer Verbindung berechtigt sind.'
product: '{% data reusables.gated-features.allowed-ip-addresses %}'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-allowed-ip-addresses-for-your-organization
versions:
  free-pro-team: '*'
  github-ae: '*'
topics:
  - Organizations
  - Teams
---

Organisationsinhaber können erlaubte IP-Adressen für eine Organisation verwalten.

### Informationen zu zulässigen IP-Adressen

Du kannst den Zugriff auf Organisations-Objekte beschränken, indem Du eine Genehmigungsliste für bestimmte IP-Adressen konfigurierst. {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %}

{% data reusables.identity-and-permissions.ip-allow-lists-enable %}

Du kannst erlaubte IP-Adressen auch für die Organisationen in einem Enterprise-Konto konfigurieren. For more information, see {% if currentVersion == "github-ae@latest" %}"[Restricting network traffic to your enterprise](/admin/configuration/restricting-network-traffic-to-your-enterprise)." {% else %}"[Enforcing security settings in your enterprise account](/github/setting-up-and-managing-your-enterprise/enforcing-security-settings-in-your-enterprise-account#managing-allowed-ip-addresses-for-organizations-in-your-enterprise-account)."{% endif %}

### Eine zulässige IP-Adresse hinzufügen

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-description %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-entry %}

### Zulässige IP-Adressen aktivieren

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
3. Wähle unter „IP allow list“ (Liste der zulässigen IP-Adressen) **Enable IP allow list** (Liste der zulässigen IP-Adressen aktivieren) aus. ![Kontrollkästchen, um IP-Adressen zuzulassen](/assets/images/help/security/enable-ip-allowlist-organization-checkbox.png)
4. Klicke auf **Save** (Speichern).

### Eine zulässige IP-Adresse bearbeiten

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
8. Klicke auf **Update** (Aktualisieren).

### Eine zulässige IP-Adresse löschen

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

### {% data variables.product.prodname_actions %} mit einer IP-Zulassungsliste verwenden

{% if currentVersion == "github-ae@latest" %}

{% data reusables.github-actions.ip-allow-list-hosted-runners %}

{% else %}

{% data reusables.github-actions.ip-allow-list-self-hosted-runners %}

{% endif %}
