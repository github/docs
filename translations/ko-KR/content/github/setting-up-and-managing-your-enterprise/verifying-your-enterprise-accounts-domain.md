---
title: Verifying your enterprise account's domain
intro: 'You can confirm the identity of organizations owned by your enterprise account by verifying ownership of your domain names with {% data variables.product.company_short %}.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
versions:
  free-pro-team: '*'
permissions: Enterprise owners can verify an enterprise account's domain.
redirect_from:
  - /github/articles/verifying-your-enterprise-accounts-domain
  - /early-access/github/articles/verifying-your-enterprise-accounts-domain
topics:
  - 엔터프라이즈
---

### About domain verification

You can confirm that the websites and email addresses listed on the profiles of any organization owned by your enterprise account are controlled by your enterprise by verifying the domains. Verified domains for an enterprise account apply to every organization owned by the enterprise account, and organization owners can verify additional domains for their organizations. For more information, see "[Verifying your organization's domain](/organizations/managing-organization-settings/verifying-your-organizations-domain)."

After you verify ownership of your enterprise account's domains, a "Verified" badge will display on the profile of each organization that has the domain listed on its profile. {% data reusables.organizations.verified-domains-details %}

Organization owners will be able to verify the identity of organization members by viewing each member's email address within the verified domain.

After you verify domains for your enterprise account, you can restrict email notifications to verified domains for all the organizations owned by your enterprise account. For more information, see "[Restricting email notifications for your enterprise account to approved domains](/github/setting-up-and-managing-your-enterprise/restricting-email-notifications-for-your-enterprise-account-to-approved-domains)."

Even if you don't restrict email notifications for the enterprise account, if an organization owner has restricted email notifications for the organization, organization members will be able to receive notifications from any domains verified for the enterprise account, in addition to any domains verified for the organization. For more information about restricting notifications for an organization, see "[Restricting email notifications to an approved domain](/organizations/keeping-your-organization-secure/restricting-email-notifications-to-an-approved-domain)."

### Verifying your enterprise account's domain

To verify your enterprise account's domain, you must have access to modify domain records with your domain hosting service.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.verified-domains-tab %}
1. Click **Add a domain**. ![Add a domain button](/assets/images/help/enterprises/add-a-domain-button.png)
{% data reusables.organizations.add-domain %}
{% data reusables.organizations.add-dns-txt-record %}
1. Wait for your DNS configuration to change, which may take up to 72 hours. You can confirm your DNS configuration has changed by running the `dig` command on the command line, replacing `ENTERPRISE-ACCOUNT` with the name of your enterprise account, and `example.com` with the domain you'd like to verify. You should see your new TXT record listed in the command output.
   ```shell
   dig _github-challenge-<em>ENTERPRISE-ACCOUNT</em>.<em>example.com</em> +nostats +nocomments +nocmd TXT
   ```
{% data reusables.organizations.continue-verifying-domain %}
1. Optionally, after the "Verified" badge is visible on your organizations' profiles, delete the TXT entry from the DNS record at your domain hosting service. ![Verified badge](/assets/images/help/organizations/verified-badge.png)
