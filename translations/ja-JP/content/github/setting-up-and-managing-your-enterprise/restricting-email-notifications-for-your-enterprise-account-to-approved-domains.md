---
title: Restricting email notifications for your enterprise account to approved domains
intro: You can prevent your enterprise's information from leaking into personal accounts by restricting email notifications about activity in organizations owned by your enterprise account to verified domains.
product: '{% data reusables.gated-features.enterprise-accounts %}'
versions:
  free-pro-team: '*'
permissions: Enterprise owners can restrict email notifications for an enterprise account.
topics:
  - Enterprise
---

### About email restrictions for your enterprise account

When you restrict email notifications to verified domains, enterprise members can only use an email address associated with a verified domain to receive email notifications about activity in organizations owned by your enterprise account. The domains can be inherited from the enterprise account or configured for the specific organization. For more information about email restrictions for organizations, see "[Restricting email notifications to an approved domain](/organizations/keeping-your-organization-secure/restricting-email-notifications-to-an-approved-domain)."

If email restrictions are enabled for an enterprise account, organization owners cannot disable email restrictions for any organization owned by the enterprise account. If changes occur that result in an organization having no verified domains, either inherited from an enterprise account that owns the organization or for the specific organization, email restrictions will be disabled for the organization.

### Restricting email notifications for your enterprise account

Before you can restrict email notifications for your enterprise account, you must verify at least one domain for the enterprise account. 詳しい情報については、「[Enterprise アカウントのドメインを検証する](/github/setting-up-and-managing-your-enterprise/verifying-your-enterprise-accounts-domain)」を参照してください。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.verified-domains-tab %}
{% data reusables.organizations.restrict-email-notifications %}
1. [**Save**] をクリックします。
