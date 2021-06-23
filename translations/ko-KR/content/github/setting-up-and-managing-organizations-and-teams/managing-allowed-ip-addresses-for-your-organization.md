---
title: Managing allowed IP addresses for your organization
intro: You can restrict access to your organization's assets by configuring a list of IP addresses that are allowed to connect.
product: '{% data reusables.gated-features.allowed-ip-addresses %}'
versions:
  free-pro-team: '*'
  github-ae: '*'
topics:
  - organizations
  - teams
---

Organization owners can manage allowed IP addresses for an organization.

### About allowed IP addresses

You can restrict access to organization assets by configuring an allow list for specific IP addresses. {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %}

{% data reusables.identity-and-permissions.ip-allow-lists-enable %}

You can also configure allowed IP addresses for the organizations in an enterprise account. For more information, see {% if currentVersion == "github-ae@latest" %}"[Restricting network traffic to your enterprise](/admin/configuration/restricting-network-traffic-to-your-enterprise)." {% else %}"[Enforcing security settings in your enterprise account](/github/setting-up-and-managing-your-enterprise/enforcing-security-settings-in-your-enterprise-account#managing-allowed-ip-addresses-for-organizations-in-your-enterprise-account)."{% endif %}

### Adding an allowed IP address

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-description %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-entry %}

### Enabling allowed IP addresses

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
3. Under "IP allow list", select **Enable IP allow list**. ![Checkbox to allow IP addresses](/assets/images/help/security/enable-ip-allowlist-organization-checkbox.png)
4. Click **Save**.

### Editing an allowed IP address

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
8. Click **Update**.

### Deleting an allowed IP address

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

### Using {% data variables.product.prodname_actions %} with an IP allow list

{% if currentVersion == "github-ae@latest" %}

{% data reusables.github-actions.ip-allow-list-hosted-runners %}

{% else %}

{% data reusables.github-actions.ip-allow-list-self-hosted-runners %}

{% endif %}
