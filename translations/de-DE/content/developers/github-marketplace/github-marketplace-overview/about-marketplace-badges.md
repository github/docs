---
title: About marketplace badges
intro: 'Learn about the badges that you may see for some apps and actions listings on {% data variables.product.prodname_marketplace %}.'
redirect_from:
  - /developers/github-marketplace/about-verified-creator-badges
  - /developers/github-marketplace/about-marketplace-badges
versions:
  free-pro-team: '*'
---

### For GitHub Apps

Certain apps on the {% data variables.product.prodname_marketplace %} have the {% octicon "verified" aria-label="The verified badge" %} badge and a tooltip that says "Publisher domain and email verified". This means that the app is owned by an organization that has:

- Verified ownership of their domain and has a verified badge on their profile
- Confirmed their email address so {% data variables.product.prodname_dotcom %} Support can reach the organization
- Required two-factor authentication for their organization. Weitere Informationen finden Sie unter „[Zwei-Faktor-Authentifizierung in Ihrer Organisation erzwingen](/organizations/keeping-your-organization-secure/requiring-two-factor-authentication-in-your-organization)“.

![Marketplace badge for GitHub Apps](/assets/images/marketplace/apps-with-verified-publisher-badge-tooltip.png)

{% note %}
{% data variables.product.prodname_dotcom %} does not analyze the app. The marketplace badge {% octicon "verified" aria-label="The verified badge" %} only confirms that the publisher meets the requirements listed above.
{% endnote %}

To learn how you can add this badge to your app, see "[Applying for publisher verification for your organization](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization)."

Some apps on the {% data variables.product.prodname_marketplace %} have the {% octicon "verified" aria-label="The verified badge" %} badge and a tooltip that says "App meets the requirements for listing" instead of, "Publisher domain and email verified." This means that the app meets the listing requirements described in "[Requirements for listing an app](/developers/github-marketplace/requirements-for-listing-an-app)," but the publisher has not been verified, as described in "[Applying for publisher verification for your organization](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization)". Apps with this badge cannot change their pricing plan until the publisher successfully applies for verification.

![Marketplace badge for GitHub Apps](/assets/images/marketplace/apps-with-unverified-publisher-badge-tooltip.png)

For more information about the requirements for listing an app on {% data variables.product.prodname_marketplace %}, see "[Requirements for listing an app on {% data variables.product.prodname_marketplace %}](/marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace/)."

For information on finding apps to use, see "[Searching {% data variables.product.prodname_marketplace %}](/github/searching-for-information-on-github/searching-github-marketplace)."

### For GitHub actions

Actions with the {% octicon "verified" aria-label="The verified badge" %}, or  verified creator  badge,  indicate that {% data variables.product.prodname_dotcom %} has verified the creator of the action as a partner organization.

![Verified creator badge for GitHub Actions](/assets/images/marketplace/verified-creator-badge-for-actions.png)

For information on how to publish a GitHub action to {% data variables.product.prodname_marketplace %}, see "[Publishing actions in GitHub Marketplace](/actions/creating-actions/publishing-actions-in-github-marketplace)."
