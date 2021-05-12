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
---

### About IP allow lists
By default, authorized users can access your enterprise from any IP address. Enterprise owners can restrict access to assets owned by organizations in an enterprise account by configuring an allow list for specific IP addresses. {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %}

{% data reusables.identity-and-permissions.ip-allow-lists-enable %}

You can also configure allowed IP addresses for an individual organization. For more information, see "[Managing allowed IP addresses for your organization](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization)."

By default, Azure network security group (NSG) rules leave all inbound traffic open on ports 22, 80, 443, and 25. Enterprise owners can contact {% data variables.contact.github_support %} to configure access restrictions for your instance.

For instance-level restrictions using Azure NSGs, contact {% data variables.contact.github_support %} with the IP addresses that should be allowed to access your enterprise instance. Specify address ranges using the standard CIDR (Classless Inter-Domain Routing) format. {% data variables.contact.github_support %} will configure the appropriate firewall rules for your enterprise to restrict network access over HTTP, SSH, HTTPS, and SMTP. For more information, see "[Receiving help from {% data variables.contact.github_support %}](/admin/enterprise-support/receiving-help-from-github-support)."

### Adding an allowed IP address

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-description %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-entry %}

### Enabling allowed IP addresses

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. Under "IP allow list", select **Enable IP allow list**.
  ![Checkbox to allow IP addresses](/assets/images/help/security/enable-ip-allowlist-enterprise-checkbox.png)
4. Click **Save**.

### Editing an allowed IP address

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
8. Click **Update**.

### Deleting an allowed IP address

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

### Using {% data variables.product.prodname_actions %} with an IP allow list

{% data reusables.github-actions.ip-allow-list-hosted-runners %}
