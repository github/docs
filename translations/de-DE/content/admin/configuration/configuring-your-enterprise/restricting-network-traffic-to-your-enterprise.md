---
title: Restricting network traffic to your enterprise
shortTitle: Restricting network traffic
intro: You can use an IP allow list to restrict access to your enterprise to connections from specified IP addresses.
versions:
  github-ae: '*'
type: how_to
topics:
  - Access management
  - Enterprise
  - Fundamentals
  - Networking
  - Security
redirect_from:
  - /admin/configuration/restricting-network-traffic-to-your-enterprise
---
### About IP allow lists
By default, authorized users can access your enterprise from any IP address. Enterprise-Inhaber können den Zugriff auf Objekte im Besitz von Organisationen in Enterprise-Konten einschränken, indem sie eine Zulassungsliste für spezifische IP-Adressen konfigurieren. {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %}

{% data reusables.identity-and-permissions.ip-allow-lists-enable %}

Du kannst auch zugelassene IP-Adressen für eine einzelne Organisation konfigurieren. Weitere Informationen findest Du auf „[Zugelassene IP-Adressen für Deine Organisation verwalten](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization)."

By default, Azure network security group (NSG) rules leave all inbound traffic open on ports 22, 80, 443, and 25. Enterprise owners can contact {% data variables.contact.github_support %} to configure access restrictions for your instance.

For instance-level restrictions using Azure NSGs, contact {% data variables.contact.github_support %} with the IP addresses that should be allowed to access your enterprise instance. Specify address ranges using the standard CIDR (Classless Inter-Domain Routing) format. {% data variables.contact.github_support %} will configure the appropriate firewall rules for your enterprise to restrict network access over HTTP, SSH, HTTPS, and SMTP. For more information, see "[Receiving help from {% data variables.contact.github_support %}](/admin/enterprise-support/receiving-help-from-github-support)."

### Eine zulässige IP-Adresse hinzufügen

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-description %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-entry %}

### Zulässige IP-Adressen aktivieren

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. Wähle unter „IP allow list“ (Liste der zulässigen IP-Adressen) **Enable IP allow list** (Liste der zulässigen IP-Adressen aktivieren) aus. ![Kontrollkästchen, um IP-Adressen zuzulassen](/assets/images/help/security/enable-ip-allowlist-enterprise-checkbox.png)
4. Klicke auf **Save** (Speichern).

### Eine zulässige IP-Adresse bearbeiten

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
8. Klicke auf **Update** (Aktualisieren).

### Eine zulässige IP-Adresse löschen

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

### {% data variables.product.prodname_actions %} mit einer IP-Zulassungsliste verwenden

{% data reusables.github-actions.ip-allow-list-hosted-runners %}
