---
title: Verifying or approving a domain for your organization
intro: 'You can verify your ownership of domains with {% data variables.product.company_short %} to confirm your organization''s identity.{% ifversion ghec or ghes %} You can also approve domains that {% data variables.product.company_short %} can send email notifications to for members of your organization.{% endif %}'
redirect_from:
  - /articles/verifying-your-organization-s-domain
  - /articles/verifying-your-organizations-domain
  - /github/setting-up-and-managing-organizations-and-teams/verifying-your-organizations-domain
  - /organizations/managing-organization-settings/verifying-your-organizations-domain
permissions: Organization owners can verify or approve a domain for an organization.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Enterprise
  - Notifications
  - Organizations
  - Policy
shortTitle: Verify or approve a domain
---

## About domain verification

After verifying ownership of your organization's domains, a "Verified" badge will display on the organization's profile. {% ifversion ghec %}If your organization has agreed to the {% data variables.product.company_short %} Customer Agreement, organization owners will be able to verify the identity of organization members by viewing each member's email address within the verified domain. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-organizations-profile)" and "[AUTOTITLE](/organizations/managing-organization-settings/upgrading-to-the-github-customer-agreement)."{% endif %}

{% ifversion ghec or ghes %}
{% ifversion ghec %}If your organization is owned by an enterprise account, a{% else %}A{% endif %} "Verified" badge will display on your organization's profile for any domains verified for the enterprise account, in addition to any domains verified for the organization. Organization owners can view any domains that an enterprise owner has verified or approved, and edit the domains if the organization owner is also an enterprise owner. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)."
{% endif %}

{% data reusables.organizations.verified-domains-details %}

{% ifversion ghec or ghes %}
After verifying ownership of your organization's domain, you can restrict email notifications for the organization to that domain. For more information, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/restricting-email-notifications-for-your-organization)."
{% endif %}

{% ifversion ghec %}
{% note %}

**Note:** To restrict email notifications to a verified domain, your organization must use {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}
{% endif %}

{% ifversion ghec %}You can also verify custom domains used for {% data variables.product.prodname_pages %} to prevent domain takeovers when a custom domain remains configured but your {% data variables.product.prodname_pages %} site is either disabled or no longer uses the domain. For more information, see "[AUTOTITLE](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)."{% endif %}

{% ifversion fpt or ghec or ghes %}
If you confirm your organization’s identity by verifying your domain and restricting email notifications to only verified email domains, you can help prevent sensitive information from being exposed. For more information see "[AUTOTITLE](/code-security/getting-started/best-practices-for-preventing-data-leaks-in-your-organization)."
{% endif %}

{% ifversion ghec or ghes %}

## About domain approval

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% data reusables.enterprise-accounts.approved-domains-about %}

After you approve domains for your organization, you can restrict email notifications for activity within the organization to users with verified email addresses within verified or approved domains. For more information, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/restricting-email-notifications-for-your-organization)."

Enterprise owners cannot see which organization members or email addresses receive notifications within approved domains.

Enterprise owners can also approve additional domains for organizations owned by the enterprise. {% ifversion ghec %}For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)."{% endif %}{% ifversion ghes %}For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)."{% endif %}
{% endif %}

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
   dig _github-challenge-ORGANIZATION-org.example.com +nostats +nocomments +nocmd TXT
   ```

1. After confirming your TXT record is added to your DNS, follow steps one through three above to navigate to your organization's approved and verified domains.
{% data reusables.organizations.continue-verifying-domain %}
1. Optionally, once the "Verified" badge is visible on your organization's profile page, you can delete the TXT entry from the DNS record at your domain hosting service.

## Approving a domain for your organization

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

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
1. To the right of the domain to remove, select the {% octicon "kebab-horizontal" aria-label="Show more options" %} dropdown menu, then click **Delete**.

   ![Screenshot of the "Verified & approved domains" page. To the right of a domain, a kebab icon is outlined in dark orange.](/assets/images/help/organizations/continue-verifying-domain.png)
