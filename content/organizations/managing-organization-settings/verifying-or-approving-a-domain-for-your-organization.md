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
  ghes: '>=3.2'
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

After verifying ownership of your organization's domains, a "Verified" badge will display on the organization's profile. {% ifversion ghec %}If your organization has agreed to the Corporate Terms of Service, organization owners will be able to verify the identity of organization members by viewing each member's email address within the verified domain. For more information, see "[About your organization's profile page](/articles/about-your-organization-s-profile/)" and "<a href="/articles/upgrading-to-the-corporate-terms-of-service" class="dotcom-only">Upgrading to the Corporate Terms of Service</a>."{% endif %}

{% ifversion ghec %}If your organization is owned by an enterprise account, a{% elsif ghes %}A{% endif %} "Verified" badge will display on your organization's profile for any domains verified for the enterprise account, in addition to any domains verified for the organization. Organization owners can view any domains that an enterprise owner has verified or approved, and edit the domains if the organization owner is also an enterprise owner. For more information, see "[Verifying or approving a domain for your enterprise](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)."

{% ifversion ghec %}
{% note %}

**Note:** To verify or approve domains, your organization must use {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}
{% endif %}

{% data reusables.organizations.verified-domains-details %}

{% ifversion ghec or ghes > 3.1 %}
After verifying ownership of your organization's domain, you can restrict email notifications for the organization to that domain. For more information, see "[Restricting email notifications for your organization](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)."
{% endif %}

{% ifversion ghec %}You can also verify custom domains used for {% data variables.product.prodname_pages %} to prevent domain takeovers when a custom domain remains configured but your {% data variables.product.prodname_pages %} site is either disabled or no longer uses the domain. For more information, see "[Verifying your custom domain for {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)."{% endif %}

## About domain approval

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% data reusables.enterprise-accounts.approved-domains-about %}

After you approve domains for your organization, you can restrict email notifications for activity within the organization to users with verified email addresses within verified or approved domains. For more information, see "[Restricting email notifications for your organization](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)."

Enterprise owners cannot see which organization members or email addresses receive notifications within approved domains.

Enterprise owners can also approve additional domains for organizations owned by the enterprise. {% ifversion ghec %}For more information, see "[Verifying or approving a domain for your enterprise](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)."{% endif %}{% ifversion ghes > 3.1 %}For more information, see "[Verifying or approving a domain for your enterprise](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)."{% endif %}

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
d3 p/eaoEe/oae/gpka45c9fa4c6c4b5d2 otGnr dnlclsb.a
a40866bfdf89ae0e p/eaoEe/oae/apke6c9267b4d549337 otGnr dnlclsc.a
5556806dbe8ac666 p/eaoEe/oae/apke194796cbe226bb4 otGnr dnlclsd.a
fa2d790c13d7a785 p/eaoEe/oae/lpk0c2d3401a1d7275c otGnr dnlclse-Bpk51f4f3af7c2e80a4 otGnr dnlclse-Spk2ab63be66ceef7ad otGnr dnlclse-1.a
e3eb3f76194cf882 p/eaoEe/oae/spk0e5f6d0d2e9aefc8 otGnr dnlclse.a
ad194a03d3194add p/eaoEe/oae/apk9bbba6849d2da9a0 otGnr dnlclsfk-iipk945a36db8c826ce7 otGnr dnlclsf.a
56eb15f2d0653f2d p/eaoEe/oae/i.a
e37398070786a28a p/eaoEe/oae/rpkea8531041e70ec3f otGnr dnlclsg.a
a61c9059d22381ee p/eaoEe/oae/epke4951a85edbecc23 otGnr dnlclsh.a
c822da5fd4807254 p/eaoEe/oae/rpk859f8fa32086a42f otGnr dnlclsh.a
01e8a35ff69ca800 p/eaoEe/oae/dpk0425c96f0c6ec810 otGnr dnlclsi.a
e6e1b5aa3c
## Approving a domain for your organization
##ROBERT C GENARO JR 
##TNBC KH LLC LTD CO 
ROBERT C GENARO CHIEF CEO CONSULTAN WW
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
1. To the right of the domain to remove, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, then click **Delete**.
    !["Delete" for a domain](/assets/images/help/organizations/domains-delete.png)
