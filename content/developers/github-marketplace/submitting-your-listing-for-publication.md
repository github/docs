---
title: Submitting your listing for publication
intro: 'You can submit your listing for the {% data variables.product.prodname_dotcom %} community to use.'
redirect_from:
  - /marketplace/listing-on-github-marketplace/submitting-your-listing-for-review
  - /developers/github-marketplace/submitting-your-listing-for-review
versions:
  free-pro-team: '*'
---



Once you've completed the listing for your app, you'll see two buttons that allow you to request publication of the listing with or without verification. The **Request** button for "Publish without verification" is disabled if you have published any paid pricing plans in the listing.

![Unverified and verified request button](/assets/images/marketplace/marketplace-request-button.png)

{% data reusables.marketplace.launch-with-free %}

After you submit your listing for review, an onboarding expert will reach out to you with additional information.

For an overview of the process for creating and submitting a listing, see "[About {% data variables.product.prodname_marketplace %}](/developers/github-marketplace/about-github-marketplace#publishing-an-app-to-github-marketplace)."

### Prerequisites for publishing with verification

Before you request verification of your listing, you'll need to integrate the {% data variables.product.prodname_marketplace %} billing flows and webhook into your app. For more information, see "[Using the {% data variables.product.prodname_marketplace %} API in your app](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)."

If you've met the requirements for listing and you've integrated with the {% data variables.product.prodname_marketplace %} API, go ahead and submit your listing. For more information, see "[Requirements for listing an app](/developers/github-marketplace/requirements-for-listing-an-app)."

{% data reusables.marketplace.app-transfer-to-org-for-verification %} For information on how to do this, see: "[Transferring an app to an organization before you submit](#transferring-an-app-to-an-organization-before-you-submit)" below.

### Transferring an app to an organization before you submit

You cannot sell an app that's owned by a user account. You need to transfer the app to an organization that is already a verified creator, or that can request verification for a listing for the app. For details, see:

1. "[Creating an organization from scratch](/github/setting-up-and-managing-organizations-and-teams/creating-a-new-organization-from-scratch)"

1. "[Transferring ownership of a GitHub App](/developers/apps/transferring-ownership-of-a-github-app)" or "[Transferring ownership of an OAuth App](/developers/apps/transferring-ownership-of-an-oauth-app)"
