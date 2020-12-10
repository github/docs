---
title: Restricting email notifications to an approved domain
intro: 'To prevent organization information from leaking into personal accounts, organization owners can restrict email notifications about organization activity to a verified domain.'
product: '{% data reusables.gated-features.restrict-email-domain %}'
redirect_from:
  - /articles/restricting-email-notifications-about-organization-activity-to-an-approved-email-domain/
  - /articles/restricting-email-notifications-to-an-approved-domain
versions:
  free-pro-team: '*'
---

When restricted email notifications are enabled in an organization, members can only receive email notifications about organization activity at an email address associated with the organization's verified domain. For more information, see "[Verifying your organization's domain](/articles/verifying-your-organization-s-domain)."

Outside collaborators are not subject to restrictions on email notifications for verified domains. For more information on outside collaborators, see "[Permission levels for an organization](/github/setting-up-and-managing-organizations-and-teams/permission-levels-for-an-organization#outside-collaborators)."

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.verified-domains %}
5. Under "Enforcement preferences", select **Restrict email notifications to domain email**. ![Checkbox to restrict email notifications to verified domain emails](/assets/images/help/organizations/restrict-email-notifications-to-domain.png)
6. Click **Save**.
