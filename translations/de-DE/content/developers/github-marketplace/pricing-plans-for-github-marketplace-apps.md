---
title: Pricing plans for GitHub Marketplace apps
intro: 'Pricing plans allow you to provide your app with different levels of service or resources. You can offer up to 10 pricing plans in your {% data variables.product.prodname_marketplace %} listing.'
redirect_from:
  - /apps/marketplace/selling-your-app/github-marketplace-pricing-plans/
  - /marketplace/selling-your-app/github-marketplace-pricing-plans
versions:
  free-pro-team: '*'
---



{% data variables.product.prodname_marketplace %} pricing plans can be free, flat rate, or per-unit, and GitHub lists the price in US dollars. Customers purchase your app using a payment method attached to their {% data variables.product.product_name %} account, without having to leave GitHub.com. You don't have to write code to perform billing transactions, but you will have to handle [billing flows](/marketplace/integrating-with-the-github-marketplace-api/#billing-flows) for purchase events.

If the app you're listing on {% data variables.product.prodname_marketplace %} has multiple plan options, you can set up corresponding pricing plans. For example, if your app has two plan options, an open source plan and a pro plan, you can set up a free pricing plan for your open source plan and a flat pricing plan for your pro plan. Each {% data variables.product.prodname_marketplace %} listing must have an annual and a monthly price for every plan that's listed.

For more information on how to create a pricing plan, see "[Setting a {% data variables.product.prodname_marketplace %} listing's pricing plan](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/)."

{% note %}

**Note:** If you're listing an app on {% data variables.product.prodname_marketplace %}, you can't list your app with a free pricing plan if you offer a paid service outside of {% data variables.product.prodname_marketplace %}.

{% endnote %}

### Types of pricing plans

**Free pricing plans** are completely free for users. If you set up a free pricing plan, you cannot charge users that choose the free pricing plan for the use of your app. You can create both free and paid plans for your listing. Unverified free apps do not need to implement any billing flows. Free apps that are verified by Github need to implement billing flows for new purchases and cancellations, but do not need to implement billing flows for free trials, upgrades, and downgrades. If you add a paid plan to an app that you've already listed in {% data variables.product.prodname_marketplace %} as a free service, you'll need to resubmit the app for review.

**Flat rate pricing plans** charge a set fee on a monthly and yearly basis.

**Per-unit pricing plans** charge a set fee on either a monthly or yearly basis for a unit that you specify. A "unit" can be anything you'd like (for example, a user, seat, or person).

**Marketplace free trials** provide 14-day free trials of OAuth or GitHub Apps to customers. When you [set up a Marketplace pricing plan](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/), you can select the option to provide a free trial for flat-rate or per-unit pricing plans.

### Free trials

Customers can start a free trial for any available paid plan on a Marketplace listing, but will not be able to create more than one free trial for a Marketplace product.

Free trials have a fixed length of 14 days. Customers are notified 4 days before the end of their trial period (on day 11 of the free trial) that their plan will be upgraded. At the end of a free trial, customers will be auto-enrolled into the plan they are trialing if they do not cancel.

See "[New purchases and free trials](/marketplace/integrating-with-the-github-marketplace-api/handling-new-purchases-and-free-trials/)" for details on how to handle free trials in your app.

{% note %}

**Note:** GitHub expects you to delete any private customer data within 30 days of a cancelled trial, beginning at the receipt of the cancellation event.

{% endnote %}
