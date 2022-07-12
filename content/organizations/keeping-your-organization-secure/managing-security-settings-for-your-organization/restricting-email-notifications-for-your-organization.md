---
title: Restricting email notifications for your organization
intro: 'To prevent organization information from leaking into personal email accounts, you can restrict the domains where members can receive email notifications about organization activity.'
permissions: Organization owners can restrict email notifications for an organization.
redirect_from:
  - /articles/restricting-email-notifications-about-organization-activity-to-an-approved-email-domain
  - /articles/restricting-email-notifications-to-an-approved-domain
  - /github/setting-up-and-managing-organizations-and-teams/restricting-email-notifications-to-an-approved-domain
  - /organizations/keeping-your-organization-secure/restricting-email-notifications-to-an-approved-domain
  - /organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization
versions:
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Enterprise
  - Notifications
  - Organizations
  - Policy
shortTitle: Restrict email notifications
---

## About email restrictions

When restricted email notifications are enabled in an organization, members can only use an email address associated with a verified or approved domain to receive email notifications about organization activity. For more information, see "[Verifying or approving a domain for your organization](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)."

{% ifversion ghec %}
{% note %}

**Note:** To restrict email notifications, your organization must use {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}
{% endif %}

{% data reusables.notifications.email-restrictions-verification %}

Outside collaborators are not subject to restrictions on email notifications for verified or approved domains. For more information about outside collaborators, see "[Roles in an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators)."

If your organization is owned by an enterprise account, organization members will be able to receive notifications from any domains verified or approved for the enterprise account, in addition to any domains verified or approved for the organization. For more information, see "[Verifying or approving a domain for your enterprise](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)."

## Restricting email notifications

Before you can restrict email notifications for your organization, you must verify or approve at least one domain for the organization, or an enterprise owner must have verified or approved at least one domain for the enterprise account.

For more information about verifying and approving domains for an organization, see "[Verifying or approving a domain for your organization](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)."

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.verified-domains %}
{% data reusables.organizations.restrict-email-notifications %}
6. Click **Save**.
