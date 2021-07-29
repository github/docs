---
title: Verifying or approving a domain for your organization
intro: 'You can verify your ownership of domains with {% data variables.product.company_short %} to confirm your organization''s identity. You can also approve domains that {% data variables.product.company_short %} can send email notifications to for members of your organization.'
redirect_from:
  - /articles/verifying-your-organization-s-domain
  - /articles/verifying-your-organizations-domain
  - /github/setting-up-and-managing-organizations-and-teams/verifying-your-organizations-domain
  - /organizations/managing-organization-settings/verifying-your-organizations-domain
permissions: Organization owners can verify or approve a domain for an organization.
versions:
  fpt: '*'
  ghes: '>=3.2'
type: how_to
topics:
  - Enterprise
  - Notifications
  - Organizations
  - Policy
shortTitle: Verify or approve a domain
---

## About domain verification

After verifying ownership of your organization's domains, a "Verified" badge will display on the organization's profile. If your organization is on {% data variables.product.prodname_ghe_cloud %} and has agreed to the Corporate Terms of Service, organization owners will be able to verify the identity of organization members by viewing each member's email address within the verified domain. For more information, see "[About your organization's profile page](/articles/about-your-organization-s-profile/)" and "[Upgrading to the Corporate Terms of Service](/articles/upgrading-to-the-corporate-terms-of-service)."

If your organization is owned by an enterprise account, a "Verified" badge will display on your organization's profile for any domains verified for the enterprise account, in addition to any domains verified for the organization. Organization owners can view any domains that an enterprise owner has verified or approved, and edit the domains if the organization owner is also an enterprise owners. For more information, see "[Verifying or approving a domain for your enterprise account](/github/setting-up-and-managing-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise-account)."

{% data reusables.organizations.verified-domains-details %}

On {% data variables.product.prodname_ghe_cloud %}, after verifying ownership of your organization's domain, you can restrict email notifications for the organization to that domain. For more information, see "[Restricting email notifications for your organization](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)."

## About domain approval

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% data reusables.enterprise-accounts.approved-domains-about %}

After you approve domains for your organization, you can restrict email notifications for activity within the organization to users with verified email addresses within verified or approved domains. For more information, see "[Restricting email notifications for your organization](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)."

Enterprise owners cannot see which organization members or email addresses receive notifications within approved domains.

Enterprise owners can also approve additional domains for organizations owned by the enterprise. For more information, see "[Verifying or approving a domain for your enterprise account](/github/setting-up-and-managing-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise-account)."

## Verifying a domain for your organization

To verify a domain, you must have access to modify domain records with your domain hosting service.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.verified-domains %}
{% data reusables.organizations.add-a-domain %}
{% data reusables.organizations.add-domain %}
{% data reusables.organizations.add-dns-txt-record %}
1. Wait for your DNS configuration to change, which may take up to 72 hours. You can confirm your DNS configuration has changed by running the `dig` command on the command line, replacing `ORGANIZATION` with the name of your organization and `example.com` with the domain you'd like to verify. You should see your new TXT record listed in the command output.
   ```shell
   $ dig _github-challenge-<em>ORGANIZATION</em>.<em>example.com</em> +nostats +nocomments +nocmd TXT
   ```
1. After confirming your TXT record is added to your DNS, follow steps one through three above to navigate to your organization's approved and verified domains.
{% data reusables.organizations.continue-verifying-domain %}
11. Optionally, once the "Verified" badge is visible on your organization's profile page, you can delete the TXT entry from the DNS record at your domain hosting service.
![Verified badge](/assets/images/help/organizations/verified-badge.png)

## Approving a domain for your organization

{% ifversion fpt or ghes > 3.1 %}

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.verified-domains %}
{% data reusables.organizations.add-a-domain %}
{% data reusables.organizations.add-domain %}
{% data reusables.organizations.domains-approve-it-instead %}
{% data reusables.organizations.domains-approve-domain %}

## Removing an approved or verified domain

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.verified-domains %}
1. To the right of the domain to remove, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, then click **Delete**.
    !["Delete" for a domain](/assets/images/help/organizations/domains-delete.png)
