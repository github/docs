---
title: Managing allowed IP addresses for your organization
intro: You can restrict access to your organization's assets by configuring a list of IP addresses that are allowed to connect.
product: '{{ site.data.reusables.gated-features.allowed-ip-addresses }}'
versions:
  free-pro-team: '*'
---

Organization owners can manage allowed IP addresses for an organization.

### About allowed IP addresses

You can restrict access to organization assets by configuring an allow list for specific IP addresses. {{ site.data.reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions }}

{{ site.data.reusables.identity-and-permissions.ip-allow-lists-cidr-notation }}

{{ site.data.reusables.identity-and-permissions.ip-allow-lists-enable }}

You can also configure allowed IP addresses for the organizations in an enterprise account. For more information, see "[Enforcing security settings in your enterprise account](/github/setting-up-and-managing-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account#managing-allowed-ip-addresses-for-organizations-in-your-enterprise-account)."

### Adding an allowed IP address

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.security }}
{{ site.data.reusables.identity-and-permissions.ip-allow-lists-add-ip }}
{{ site.data.reusables.identity-and-permissions.ip-allow-lists-add-description }}
{{ site.data.reusables.identity-and-permissions.ip-allow-lists-add-entry }}

### Enabling allowed IP addresses

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.security }}
3. Under "IP allow list", select **Enable IP allow list**.
  ![Checkbox to allow IP addresses](/assets/images/help/security/enable-ip-allowlist-organization-checkbox.png)
4. Click **Save**.

### Editing an allowed IP address

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.security }}
{{ site.data.reusables.identity-and-permissions.ip-allow-lists-edit-entry }}
{{ site.data.reusables.identity-and-permissions.ip-allow-lists-edit-ip }}
{{ site.data.reusables.identity-and-permissions.ip-allow-lists-edit-description }}
8. Click **Update**.

### Deleting an allowed IP address

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.security }}
{{ site.data.reusables.identity-and-permissions.ip-allow-lists-delete-entry }}
{{ site.data.reusables.identity-and-permissions.ip-allow-lists-confirm-deletion }}

### Using {{ site.data.variables.product.prodname_actions }} with an IP allow list

{{ site.data.reusables.github-actions.ip-allow-list-self-hosted-runners }}
