---
title: Applying for publisher verification for your organization
intro: 'To offer paid plans for your app or to include a marketplace badge in your app listing, you must complete the publisher verification process for your organization.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
redirect_from:
  - /developers/github-marketplace/applying-for-publisher-verification-for-your-organization
  - /developers/github-marketplace/github-marketplace-overview/applying-for-publisher-verification-for-your-organization
shortTitle: Publisher verification
---

{% data reusables.marketplace.marketplace-apps-not-actions %}

Publisher verification ensures that {% data variables.product.prodname_dotcom %} has a way to contact you, that you've enabled two-factor authentication for your organization, and that your organization's domain has been verified.

Once your organization has been verified, you can publish paid plans for your app. For information, see "[AUTOTITLE](/apps/publishing-apps-to-github-marketplace/listing-an-app-on-github-marketplace/setting-pricing-plans-for-your-listing)."

To offer paid plans for your app, the app must be owned by an organization and you must have owner permissions in the organization. If your app is currently owned by a personal account, you'll need to transfer the ownership of the app to an organization. For more information, see "[AUTOTITLE](/apps/maintaining-github-apps/transferring-ownership-of-a-github-app)" or "[AUTOTITLE](/apps/oauth-apps/maintaining-oauth-apps/transferring-ownership-of-an-oauth-app)."

## Requesting publisher verification

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. At the bottom of the left sidebar, click **Developer settings**.
1. Under "Developer settings", click **Publisher Verification**.
1. Under "Publisher Verification", complete the information in the checklist:
   - Ensure that your basic profile information is present and accurate. Also, make sure that you've included the best email address for support and updates from {% data variables.product.company_short %}.
   - Ensure that Two-factor authentication is enabled for your organization. For more information, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization)."
   - Submit a verified domain and ensure that a "Verified" badge displays on your organization's profile page. For related information, see "[AUTOTITLE](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)."

1. Click **Request Verification**. {% data variables.product.company_short %} will review your details and let you know once your publisher verification is complete.

## Further reading

For information about the process of publishing apps, see "[AUTOTITLE](/apps/publishing-apps-to-github-marketplace/github-marketplace-overview/about-github-marketplace)."
