---
title: Pricing plans for GitHub Marketplace apps
intro: 'Pricing plans allow you to provide your app with different levels of service or resources. You can offer up to 10 pricing plans in your {% data variables.product.prodname_marketplace %} listing.'
redirect_from:
  - /apps/marketplace/selling-your-app/github-marketplace-pricing-plans/
  - /marketplace/selling-your-app/github-marketplace-pricing-plans
versions:
  free-pro-team: '*'
topics:
  - marktplatz
---



{% data variables.product.prodname_marketplace %} pricing plans can be free, flat rate, or per-unit. Prices are set, displayed, and processed in US dollars. Paid plans are restricted to apps published by verified publishers. For more information about becoming a verified publisher, see "[Applying for publisher verification for your organization](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization)."

Customers purchase your app using a payment method attached to their {% data variables.product.product_name %} account, without having to leave {% data variables.product.prodname_dotcom_the_website %}. You don't have to write code to perform billing transactions, but you will have to handle events from the {% data variables.product.prodname_marketplace %} API. For more information, see "[Using the {% data variables.product.prodname_marketplace %} API in your app](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)."

If the app you're listing on {% data variables.product.prodname_marketplace %} has multiple plan options, you can set up corresponding pricing plans. For example, if your app has two plan options, an open source plan and a pro plan, you can set up a free pricing plan for your open source plan and a flat pricing plan for your pro plan. Each {% data variables.product.prodname_marketplace %} listing must have an annual and a monthly price for every plan that's listed.

For more information on how to create a pricing plan, see "[Setting a {% data variables.product.prodname_marketplace %} listing's pricing plan](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/)."

{% data reusables.marketplace.free-plan-note %}

### Types of pricing plans

#### Free pricing plans

{% data reusables.marketplace.free-apps-encouraged %}

Free plans are completely free for users. If you set up a free pricing plan, you cannot charge users that choose the free pricing plan for the use of your app. You can create both free and paid plans for your listing.

All apps need to handle events for new purchases and cancellations. Apps that only have free plans do not need to handle events for free trials, upgrades, and downgrades. For more information, see: "[Using the {% data variables.product.prodname_marketplace %} API in your app](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)."

If you add a paid plan to an app that you've already listed in {% data variables.product.prodname_marketplace %} as a free service, you'll need to request verification for the app and go through financial onboarding.

#### Paid pricing plans

There are two types of paid pricing plan:

- Flat rate pricing plans charge a set fee on a monthly and yearly basis.

- Per-unit pricing plans charge a set fee on either a monthly or yearly basis for a unit that you specify. A "unit" can be anything you'd like (for example, a user, seat, or person).

You may also want to offer free trials. These provide free, 14-day trials of OAuth or GitHub Apps to customers. When you set up a Marketplace pricing plan, you can select the option to provide a free trial for flat-rate or per-unit pricing plans.

### Free trials

Customers can start a free trial for any paid plan on a Marketplace listing that includes free trials. However, customers cannot create more than one free trial per marketplace product.

Free trials have a fixed length of 14 days. Customers are notified 4 days before the end of their trial period (on day 11 of the free trial) that their plan will be upgraded. At the end of a free trial, customers will be auto-enrolled into the plan they are trialing if they do not cancel.

For more information, see: "[Handling new purchases and free trials](/developers/github-marketplace/handling-new-purchases-and-free-trials/)."

{% note %}

**Note:** GitHub expects you to delete any private customer data within 30 days of a cancelled trial, beginning at the receipt of the cancellation event.

{% endnote %}
