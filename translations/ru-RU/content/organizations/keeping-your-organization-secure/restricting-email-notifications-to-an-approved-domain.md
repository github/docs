---
title: Restricting email notifications to an approved domain
intro: 'To prevent organization information from leaking into personal accounts, organization owners can restrict email notifications about organization activity to a verified domain.'
product: '{% data reusables.gated-features.restrict-email-domain %}'
redirect_from:
  - /articles/restricting-email-notifications-about-organization-activity-to-an-approved-email-domain/
  - /articles/restricting-email-notifications-to-an-approved-domain
  - /github/setting-up-and-managing-organizations-and-teams/restricting-email-notifications-to-an-approved-domain
versions:
  free-pro-team: '*'
topics:
  - organizations
  - teams
---

### About email restrictions

When restricted email notifications are enabled in an organization, members can only use an email address associated with the organization's verified domains to receive email notifications about organization activity. For more information, see "[Verifying your organization's domain](/articles/verifying-your-organization-s-domain)."

Outside collaborators are not subject to restrictions on email notifications for verified domains. For more information on outside collaborators, see "[Permission levels for an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/permission-levels-for-an-organization#outside-collaborators)."

If your organization is owned by an enterprise account, organization members will be able to receive notifications from any domains verified for the enterprise account, in addition to any domains verified for the organization. For more information, see "[Verifying your enterprise account's domain](/github/setting-up-and-managing-your-enterprise/verifying-your-enterprise-accounts-domain)."

### Restricting email notifications to an approved domain

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.verified-domains %}
{% data reusables.organizations.restrict-email-notifications %}
6. Click **Save**.
