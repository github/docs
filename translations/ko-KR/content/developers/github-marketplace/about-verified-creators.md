---
title: About verified creators
intro: 'Each organization that wants to sell apps on {% data variables.product.prodname_marketplace %} must follow a verification process. Their identity is checked and their billing process reviewed.'
versions:
  free-pro-team: '*'
---

### About verified creators

A verified creator is an organization that {% data variables.product.company_short %} has checked. Anyone can share their apps with other users on {% data variables.product.prodname_marketplace %} but only organizations that are verified by {% data variables.product.company_short %} can sell apps. For more information about organizations, see "[About organizations](/github/setting-up-and-managing-organizations-and-teams/about-organizations)."

The verification process aims to protect users. For example, it verifies the seller's identity, checks that their {% data variables.product.product_name %} organization is set up securely, and that they can be contacted for support.

After passing the verification checks, any apps that the organization lists on {% data variables.product.prodname_marketplace %} are shown with a verified creator badge {% octicon "verified" aria-label="Verified creator badge" %}. The organization can now add paid plans to any of their apps. Each app with a paid plan also goes through a financial onboarding process to check that it's set up to handle billing correctly.

![verified creator badges](/assets/images/marketplace/marketplace_verified_creator_badges_apps.png)

In addition to the verified creator badge, you'll also see badges for unverified and verified apps. These apps were published using the old method for verifying individual apps.

![Green verified and grey unverified badge](/assets/images/marketplace/marketplace_verified_badges.png)

For information on finding apps to use, see "[Searching {% data variables.product.prodname_marketplace %}](/github/searching-for-information-on-github/searching-github-marketplace)."

### About the verification process

The first time you request verification for a listing of one of your apps, you will enter the verification process.  An onboarding expert will guide you through the process. This includes checking:

- Profile information - The basic profile information is populated accurately and appropriately.
- Security - The organization has enabled two-factor authentication.
- Verified domain - The organization has verified the domain of the site URL.
- Purchase webhook event - The event is handled correctly by the app.

When your organization is verified, all your apps are shown with a verified creator badge. You are now able to offer paid plans for any of your apps.

For more information about the requirements for listing an app on {% data variables.product.prodname_marketplace %}, see "[Requirements for listing an app on {% data variables.product.prodname_marketplace %}](/marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace/)."

{% data reusables.marketplace.app-transfer-to-org-for-verification %} For information on how to do this, see: "[Submitting your listing for publication](/developers/github-marketplace/submitting-your-listing-for-publication#transferring-an-app-to-an-organization-before-you-submit)."

{% note %}

**Note:** This verification process for apps replaces the previous process where individual apps were verified. The current process is similar to the verification process for actions. If you have apps that were verified under the old process, these will not be affected by the changes. The {% data variables.product.prodname_marketplace %} team will contact you with details of how to migrate to organization-based verification.

{% endnote %}
