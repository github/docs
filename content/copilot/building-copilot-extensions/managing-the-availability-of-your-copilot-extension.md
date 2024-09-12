---
title: Managing the availability of your Copilot Extension
intro: 'After you build your {% data variables.product.prodname_copilot_extension_short %}, you can change it''s visibility or publish it on the {% data variables.product.prodname_marketplace %}.'
versions:
  feature: copilot-extensions
topics:
  - Copilot
shortTitle: Manage Extension availability
type: how_to
---

{% data reusables.copilot.copilot-extensions.beta-note %}

When you build a {% data variables.product.prodname_copilot_extension_short %}, you have two options for the visibility of your {% data variables.product.prodname_github_app %}:

* **Public**: Any user or organization account with the link to your app's installation page can install it. Making your app public automatically creates a public installation page, but does not list the app on the {% data variables.product.prodname_marketplace %}.
* **Private**: Only the user or organization account that created the app can install it.

If you make your app public, you can choose to publish it on the {% data variables.product.prodname_marketplace %}. To list your {% data variables.product.prodname_copilot_extension_short %} on the {% data variables.product.prodname_marketplace %}, you must meet the following requirements:

* You must publish your app from an organization that is a verified publisher on the {% data variables.product.prodname_marketplace %}.
  * If your organization is not yet verified, see "[AUTOTITLE](/apps/github-marketplace/github-marketplace-overview/applying-for-publisher-verification-for-your-organization)."
  * If you need to transfer ownership of your app from your personal account to your organization account, see "[AUTOTITLE](/apps/maintaining-github-apps/transferring-ownership-of-a-github-app)."
* Your app must meet the requirements for all listings on the {% data variables.product.prodname_marketplace %}. See "[AUTOTITLE](/apps/github-marketplace/creating-apps-for-github-marketplace/requirements-for-listing-an-app#requirements-for-all-github-marketplace-listings)."

## Changing the visibility of your {% data variables.product.prodname_copilot_extension_short %}

{% data reusables.profile.access_org %}
{% data reusables.organizations.org-list %}
1. At the bottom of the sidebar, select {% octicon "code" aria-hidden="true" %} **Developer settings**, then click **{% data variables.product.prodname_github_apps %}**.
1. In the "{% data variables.product.prodname_github_apps %}" section, next to the name of your {% data variables.product.prodname_copilot_extension_short %}, click **Edit**.
1. In the sidebar, click **Advanced**. At the bottom of the "Danger Zone" section, you will see one of two options:
   * **Make public**: If you see the **Make public** option, your {% data variables.product.prodname_github_app %} is currently private, and can only be installed by the organization or user that created the app. You can click **Make public** to allow any other account with the link to your app's installation page to install your {% data variables.product.prodname_copilot_extension_short %}, or leave your settings as they are to keep your app private.
   * **Make private**: If you see the **Make private** option, your {% data variables.product.prodname_github_app %} is currently public, and can be installed by any account with the link to your app's installation page. You can click **Make private** to only allow the organization or user that created the app to install it, or leave your settings as they are to keep your app public.
1. Optionally, if your {% data variables.product.prodname_github_app %} is public, you can share the link to the installation page for your {% data variables.product.prodname_copilot_extension_short %}. In the sidebar, click **Public page** in the sidebar, then copy the link for your listing.

## Listing your {% data variables.product.prodname_copilot_extension_short %} on the {% data variables.product.prodname_marketplace %}

Once your public app is owned by a verified publisher, you can apply to list it on the {% data variables.product.prodname_marketplace %}.

{% data reusables.profile.access_org %}
{% data reusables.organizations.org-list %}
1. At the bottom of the sidebar, select {% octicon "code" aria-hidden="true" %} **Developer settings**, then click **{% data variables.product.prodname_github_apps %}**.
1. Select the app you'd like to add to {% data variables.product.prodname_marketplace %}.
1. On the app settings landing page, scroll down to the Marketplace section, then click **List in Marketplace**. The Marketplace section is only visible if your app is public.
1. Once you've created a new draft listing, you'll see an overview of the sections that you'll need to visit before your {% data variables.product.prodname_marketplace %} listing will be complete. Complete the required sections.
   1. When naming your listing for your {% data variables.product.prodname_copilot_extension_short %}, use any of the following naming conventions:
      * `YOUR-PRODUCT-NAME` (example: "{% data variables.product.prodname_copilot_short %}")
      * `YOUR-COMPANY-NAME` (example: "{% data variables.product.github %}")
      * `YOUR-COMPANY-AND-PRODUCT-NAMES` (example: "{% data variables.product.prodname_copilot %}")
      * `YOUR-COMPANY-OR-PRODUCT-NAME for {% data variables.product.prodname_copilot %}` (example: "Docker for {% data variables.product.prodname_copilot %}")
   1. When choosing the slug users will type to invoke your {% data variables.product.prodname_copilot_extension_short %}, use the name of your listing, substituting dashes for spaces. If that slug is taken, try appending `-app`.
1. In the sidebar, click **Overview**, then read and accept the {% data variables.product.prodname_marketplace %} Developer Agreement.
1. To submit your listing, click **Submit for review**. After you submit your app for review, an onboarding expert will contact you with additional information about the onboarding process.

> [!NOTE] {% data variables.product.github %} reviews all {% data variables.product.prodname_copilot_extension_short %} submissions to ensure they meet our standards for quality, performance, reliability, and security. We may deny submissions at our discretion, but we will provide reasons for any rejections. You are welcome to address any issues and resubmit your extension for review.
