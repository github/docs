---
title: Restricting email notifications for your enterprise
intro: You can prevent your enterprise's information from leaking into personal email accounts by restricting the domains where members can receive email notifications about activity in organizations owned by your enterprise.
product: '{% data reusables.gated-features.restrict-email-domain %}'
versions:
  ghec: '*'
  ghes: '*'
permissions: Enterprise owners can restrict email notifications for an enterprise.
type: how_to
topics:
  - Enterprise
  - Notifications
  - Organizations
  - Policies
redirect_from:
  - /admin/policies/restricting-email-notifications-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/restricting-email-notifications-for-your-enterprise-account-to-approved-domains
  - /github/setting-up-and-managing-your-enterprise/restricting-email-notifications-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/restricting-email-notifications-for-your-enterprise-account
shortTitle: Restrict email notifications
---

## About email restrictions for your enterprise

When you restrict email notifications, enterprise members can only use an email address in a verified or approved domain to receive email notifications about activity in organizations owned by your enterprise.

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

The domains can be inherited from the enterprise or configured for the specific organization. For more information, see "[Verifying or approving a domain for your enterprise](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)" and "[Restricting email notifications for your organization](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)."

{% data reusables.notifications.email-restrictions-verification %}

If email restrictions are enabled for an enterprise, organization owners cannot disable email restrictions for any organization owned by the enterprise. If changes occur that result in an organization having no verified or approved domains, either inherited from an enterprise that owns the organization or for the specific organization, email restrictions will be disabled for the organization.

## Restricting email notifications for your enterprise

Before you can restrict email notifications for your enterprise, you must verify or approve at least one domain for the enterprise. {% ifversion ghec %} For more information, see "[Verifying or approving a domain for your enterprise](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)."{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.verified-domains-tab %}
{% data reusables.organizations.restrict-email-notifications %}
1. Click **Save**.
