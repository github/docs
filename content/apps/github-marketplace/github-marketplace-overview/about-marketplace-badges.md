---
title: About marketplace badges
intro: 'Learn about the badges that you may see for some apps listings on {% data variables.product.prodname_marketplace %}.'
redirect_from:
  - /developers/github-marketplace/about-verified-creator-badges
  - /developers/github-marketplace/about-marketplace-badges
  - /developers/github-marketplace/github-marketplace-overview/about-marketplace-badges
  - /apps/publishing-apps-to-github-marketplace/github-marketplace-overview/about-marketplace-badges
versions:
  fpt: '*'
  ghec: '*'
---

{% data reusables.marketplace.marketplace-apps-not-actions %}

Certain apps on the {% data variables.product.prodname_marketplace %} have the {% octicon "verified" aria-label="The verified badge" %} badge and a tooltip that says "Publisher domain and email verified". This means that the app is owned by an organization that has:

* Verified ownership of their domain and has a verified badge on their profile
* Confirmed their email address so {% data variables.product.prodname_dotcom %} Support can reach the organization
* Required two-factor authentication for their organization. For more information, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization)."

![Screenshot of a marketplace badge for a {% data variables.product.prodname_github_app %}. The mouse pointer is hovering over an icon displaying the tooltip "Publisher domain and email verified."](/assets/images/marketplace/apps-with-verified-publisher-badge-tooltip.png)

> [!WARNING]
> {% data variables.product.prodname_dotcom %} does not analyze or inspect third party code. {% data variables.product.prodname_marketplace %} publishers are responsible for the upkeep and maintenance of any third-party apps. The marketplace badge {% octicon "verified" aria-label="The verified badge" %} only confirms that the publisher meets the requirements listed above.

To learn how you can add this badge to your app, see "[AUTOTITLE](/apps/github-marketplace/github-marketplace-overview/applying-for-publisher-verification-for-your-organization)."

Some apps on the {% data variables.product.prodname_marketplace %} have the {% octicon "verified" aria-label="The verified badge" %} badge and a tooltip that says "App meets the requirements for listing" instead of, "Publisher domain and email verified." This means that the app meets the listing requirements described in "[AUTOTITLE](/apps/github-marketplace/creating-apps-for-github-marketplace/requirements-for-listing-an-app)," but the publisher has not been verified, as described in "[AUTOTITLE](/apps/github-marketplace/github-marketplace-overview/applying-for-publisher-verification-for-your-organization)". Apps with this badge cannot change their pricing plan until the publisher successfully applies for verification.

![Screenshot of a marketplace badge for a {% data variables.product.prodname_github_app %}. The mouse pointer is hovering over an icon displaying the tooltip "App meets the requirements for listing."](/assets/images/marketplace/apps-with-unverified-publisher-badge-tooltip.png)

For more information about the requirements for listing an app on {% data variables.product.prodname_marketplace %}, see "[AUTOTITLE](/apps/github-marketplace/creating-apps-for-github-marketplace/requirements-for-listing-an-app)."

For information on finding apps to use, see "[AUTOTITLE](/search-github/searching-on-github/searching-github-marketplace)."
