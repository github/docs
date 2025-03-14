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

When you build a {% data variables.product.prodname_copilot_extension_short %}, you have two options for the visibility of your {% data variables.product.prodname_github_app %}:

* **Public:** Any user or organization account with the link to your app's installation page can install it. Making your app public automatically creates a public installation page, but does not list the app on the {% data variables.product.prodname_marketplace %}.
* **Private:** Any user, organization, or enterprise can create an extension.  Any user or organization, and any organization in an enterprise can install an enterprise-created extension. Private extensions are not available to all users outside your organization or enterprise based on the level at which it was created.

If you make your app public, you can choose to publish it on the {% data variables.product.prodname_marketplace %}.

## Changing the visibility of your {% data variables.product.prodname_copilot_extension_short %}

{% data reusables.profile.access_org %}
{% data reusables.organizations.org-list %}
1. At the bottom of the sidebar, select **{% octicon "code" aria-hidden="true" %} Developer settings**, then click **{% data variables.product.prodname_github_apps %}**.
1. In the "{% data variables.product.prodname_github_apps %}" section, next to the name of your {% data variables.product.prodname_copilot_extension_short %}, click **Edit**.
1. In the sidebar, click **Advanced**. At the bottom of the "Danger Zone" section, you will see one of two options:
   * **Make public:** If you see the **Make public** option, your {% data variables.product.prodname_github_app %} is currently private, and can only be installed by the organization or user that created the app. You can click **Make public** to allow any other account with the link to your app's installation page to install your {% data variables.product.prodname_copilot_short %} extension. Leave the settings unchanged to keep your app private.
   * **Make private:** If you see the **Make private** option, your {% data variables.product.prodname_github_app %} is currently public, and can be installed by any account with the link to your app's installation page. You can click **Make private** to only allow installations by the organization or user that created the app, or organizations that are part of the enterprise that created the extension. Leave the settings unchanged to keep your app public.
1. Optionally, if your {% data variables.product.prodname_github_app %} is public, you can share the link to the installation page for your {% data variables.product.prodname_copilot_extension_short %}. In the sidebar, click **Public page** in the sidebar, then copy the link for your listing.

> [!NOTE] You can set a published marketplace extension to private, and it will remain accessible on the {% data variables.product.prodname_marketplace %}. However, it won't be accessible from the direct installation page.

## Listing your {% data variables.product.prodname_copilot_extension_short %} on the {% data variables.product.prodname_marketplace %}

 To list your {% data variables.product.prodname_copilot_extension_short %} on the {% data variables.product.prodname_marketplace %}, you must meet the following requirements:

* You must publish your app from an organization that is a verified publisher on the {% data variables.product.prodname_marketplace %}.
  * If your organization is not yet verified, see [AUTOTITLE](/apps/github-marketplace/github-marketplace-overview/applying-for-publisher-verification-for-your-organization).
  * If you need to transfer ownership of your app from your personal account to your organization account, see [AUTOTITLE](/apps/maintaining-github-apps/transferring-ownership-of-a-github-app).
* Your app must meet the requirements for all {% data variables.product.prodname_copilot_extension_short %} listings on the {% data variables.product.prodname_marketplace %}. See [AUTOTITLE](/apps/github-marketplace/creating-apps-for-github-marketplace/requirements-for-listing-an-app#requirements-for-github-copilot-extensions).

App managers cannot create, edit, or publish extensions on the {% data variables.product.prodname_marketplace %}. To manage a listing, you should be an organization owner for the publishing organization.

> [!NOTE] Paid plans are not supported for {% data variables.product.prodname_copilot_extensions_short %} during {% data variables.release-phases.public_preview %}. Any requests to publish with a paid plan attached will not be approved.

{% data reusables.profile.access_org %}
{% data reusables.organizations.org-list %}
1. At the bottom of the sidebar, select **{% octicon "code" aria-hidden="true" %} Developer settings**, then click **{% data variables.product.prodname_github_apps %}**.
1. Select the app you'd like to publish to the {% data variables.product.prodname_marketplace %}.
1. On the app settings landing page, scroll down to the Marketplace section, then click **List in Marketplace**. The Marketplace section is only visible if your app is public.
1. In the "Listing name" text box, type a name for your listing. This name is displayed on the {% data variables.product.prodname_marketplace %} page and in search results, and can be changed later. {% data variables.product.github %} recommends using any of the following naming conventions:
      * `YOUR-PRODUCT-NAME` (example: "{% data variables.product.prodname_copilot_short %}"): We recommend this convention if your extension stays within the scope of a single product and there are no other well-known products with the same name.
      * `YOUR-COMPANY-NAME` (example "{% data variables.product.github %}"): We recommend this convention if your extension spans multiple products.
      * `YOUR-COMPANY-PRODUCT-NAME` (example: "{% data variables.product.prodname_copilot %}"): We recommend this convention if your extension stays within the scope of one product, but there are other well-known products with the same name.

    > [!NOTE] The listing name is not the same as your {% data variables.product.prodname_github_app %}'s name or your {% data variables.product.prodname_copilot_extension_short %}'s slug. Changing the listing name will not affect the app name or slug.

1. In the "Primary category" section, select the dropdown menu, then click a category. You can change your selection or add a secondary category later.
1. To create a draft listing for your {% data variables.product.prodname_copilot_extension_short %}, click **Save and add more details**.
1. After you create a new draft listing, you'll see a view where you can manage your listing. Before you can submit your listing for review, you need to:
     * Fill out each of the required sections
     * Verify the organization account that owns the {% data variables.product.prodname_github_app %}
     * Accept the {% data variables.product.prodname_marketplace %} Developer Agreement
1. To submit your listing, click **Submit for review**. After your listing is reviewed, an onboarding expert will let you know if your submission was approved or denied.

> [!NOTE] {% data variables.product.github %} reviews all submissions to ensure they meet our standards for quality, performance, reliability, and security. {% data variables.product.github %} may deny submissions at its own discretion, and will provide reasons for denials. You are welcome to address any issues and resubmit your extension for review. You may also go through the [GitHub Appeal and Reinstatement Process](/free-pro-team@latest/site-policy/acceptable-use-policies/github-appeal-and-reinstatement).
