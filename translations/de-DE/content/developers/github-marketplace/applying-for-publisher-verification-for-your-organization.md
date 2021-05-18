---
title: Applying for publisher verification for your organization
intro: 'To offer paid plans for your app or to include a marketplace badge in your app listing, you must complete the publisher verification process for your organization.'
versions:
  free-pro-team: '*'
topics:
  - Marketplace
---

Publisher verification ensures that {% data variables.product.prodname_dotcom %} has a way to contact you, that you've enabled two-factor authentication for your organization, and that your organization's domain has been verified.

Once your organization has been verified, you can publish paid plans for your app. For information, see "[Setting pricing plans for your listing](/developers/github-marketplace/setting-pricing-plans-for-your-listing)."

To offer paid plans for your app, the app must be owned by an organization and you must have owner permissions in the organization. If your app is currently owned by a user account, you'll need to transfer the ownership of the app to an organization. For more information, see "[Transferring ownership of a GitHub App](/developers/apps/transferring-ownership-of-a-github-app)" or "[Transferring ownership of an OAuth App](/developers/apps/transferring-ownership-of-an-oauth-app)."

### Requesting publisher verification


{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. Klicke auf der linken Seitenleiste auf **Developer settings** (Entwicklereinstellungen). ![Developer settings option in the organization settings sidebar](/assets/images/marketplace/developer-settings-in-org-settings.png)
1. Under "Developer settings", click **Publisher Verification**. ![Publisher verification option in the organization settings sidebar](/assets/images/marketplace/publisher-verification-settings-option.png)
1. Under "Publisher Verification", complete the information in the checklist:
   - Ensure that your basic profile information is present and accurate. Also, make sure that you've included the best email address for support and updates from {% data variables.product.company_short %}.
   - Ensure that Two-factor authentication is enabled for your organization. Weitere Informationen finden Sie unter „[Zwei-Faktor-Authentifizierung in Ihrer Organisation erzwingen](/organizations/keeping-your-organization-secure/requiring-two-factor-authentication-in-your-organization)“.
   - Submit a verified domain and ensure that a "Verified" badge displays on your organization's profile page. For related information, see "[Verifying or approving a domain for your organization](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)."

  ![Publisher Verification checklist](/assets/images/marketplace/publisher-verification-checklist.png)

2. Click **Request Verification**. {% data variables.product.company_short %} will review your details and let you know once your publisher verification is complete.

### Weiterführende Informationen

For information about the process of publishing apps, see "[About GitHub Marketplace](/developers/github-marketplace/about-github-marketplace)."
