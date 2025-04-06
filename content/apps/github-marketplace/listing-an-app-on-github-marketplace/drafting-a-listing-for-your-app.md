---
title: Drafting a listing for your app
intro: 'When you create a {% data variables.product.prodname_marketplace %} listing, GitHub saves it in draft mode until you submit the app for approval. Your listing shows customers how they can use your app.'
redirect_from:
  - /apps/adding-integrations/listing-apps-on-github-marketplace/listing-an-app-on-github-marketplace
  - /apps/marketplace/listing-apps-on-github-marketplace/listing-an-app-on-github-marketplace
  - /apps/marketplace/getting-started-with-github-marketplace-listings/listing-an-app-on-github-marketplace
  - /apps/marketplace/creating-and-submitting-your-app-for-approval/listing-an-app-on-github-marketplace
  - /apps/adding-integrations/managing-listings-on-github-marketplace/removing-a-listing-from-github-marketplace
  - /apps/marketplace/managing-github-marketplace-listings/removing-a-listing-from-github-marketplace
  - /apps/adding-integrations/managing-listings-on-github-marketplace/editing-a-github-marketplace-listing
  - /apps/marketplace/managing-github-marketplace-listings/editing-a-github-marketplace-listing
  - /apps/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing
  - /marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing
  - /developers/github-marketplace/drafting-a-listing-for-your-app
  - /developers/github-marketplace/listing-an-app-on-github-marketplace/drafting-a-listing-for-your-app
  - /apps/publishing-apps-to-github-marketplace/listing-an-app-on-github-marketplace/drafting-a-listing-for-your-app
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Draft an app listing
---

{% data reusables.marketplace.marketplace-apps-not-actions %}

## Create a new draft {% data variables.product.prodname_marketplace %} listing

You can only create draft listings for apps that are public. Before creating your draft listing, you can read the following guidelines for writing and configuring settings in your {% data variables.product.prodname_marketplace %} listing:

* [Writing {% data variables.product.prodname_marketplace %} listing descriptions](/apps/github-marketplace/listing-an-app-on-github-marketplace/writing-a-listing-description-for-your-app)
* [AUTOTITLE](/apps/github-marketplace/listing-an-app-on-github-marketplace/setting-pricing-plans-for-your-listing)
* [Configuring the {% data variables.product.prodname_marketplace %} Webhook](/apps/github-marketplace/listing-an-app-on-github-marketplace/configuring-a-webhook-to-notify-you-of-plan-changes)

To create a {% data variables.product.prodname_marketplace %} listing:

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
1. In the left sidebar, click either **OAuth Apps** or **GitHub Apps** depending on the app you're adding to {% data variables.product.prodname_marketplace %}.

   {% note %}

   **Note**: You can also add a listing by navigating to https://github.com/marketplace/new, viewing your available apps, and clicking **Create draft listing**.

   {% endnote %}

   ![Screenshot of the sidebar on the "Developer Settings" page of {% data variables.product.prodname_dotcom %}. Options labeled "{% data variables.product.prodname_github_apps %}" and "{% data variables.product.prodname_oauth_apps %}" are outlined in dark orange.](/assets/images/settings/apps-choose-app.png)

1. Select the app you'd like to add to {% data variables.product.prodname_marketplace %}.
{% data reusables.user-settings.edit_marketplace_listing %}
1. Once you've created a new draft listing, you'll see an overview of the sections that you'll need to visit before your {% data variables.product.prodname_marketplace %} listing will be complete.

   ![Screenshot of a draft {% data variables.product.prodname_marketplace %} listing. In a section labeled "Publish your app to Marketplace," unfinished action items such as "Add your contact info" are marked with orange circles.](/assets/images/marketplace/marketplace-listing-overview.png)

{% note %}

**Note:** In the "Contact info" section of your listing, we recommend using individual email addresses, rather than group emails addresses like support@domain.com. GitHub will use these email addresses to contact you about updates to {% data variables.product.prodname_marketplace %} that might affect your listing, new feature releases, marketing opportunities, payouts, and information on conferences and sponsorships.

{% endnote %}

## Editing your listing

Once you've created a {% data variables.product.prodname_marketplace %} draft listing, you can come back to modify information in your listing anytime. If your app is already approved and in {% data variables.product.prodname_marketplace %}, you can edit the information and images in your listing, but you will not be able to change existing published pricing plans. See "[AUTOTITLE](/apps/github-marketplace/listing-an-app-on-github-marketplace/setting-pricing-plans-for-your-listing)."

## Submitting your app

Once you've completed your {% data variables.product.prodname_marketplace %} listing, you can submit your listing for review from the **Overview** page. You'll need to read and accept the "[AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-marketplace-developer-agreement)," and then you can click **Submit for review**. After you submit your app for review, an onboarding expert will contact you with additional information about the onboarding process.
