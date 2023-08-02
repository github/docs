---
title: Customer experience best practices for apps
intro: Guidelines for creating an app that will be easy to use and understand.
shortTitle: Customer experience best practice
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
redirect_from:
  - /developers/github-marketplace/customer-experience-best-practices-for-apps
  - /developers/github-marketplace/creating-apps-for-github-marketplace/customer-experience-best-practices-for-apps
---

{% data reusables.marketplace.marketplace-apps-not-actions %}

If you follow these best practices it will help you to provide a good customer experience.

## Customer communication

- Marketing materials for the app should accurately represent the app's behavior.
- Apps should include links to user-facing documentation that describe how to set up and use the app.
- Customers should be able to see what type of plan they have in the billing, profile, or account settings section of the app.
- Customers should be able to install and use your app on both a personal account and an organization account. They should be able to view and manage the app on those accounts separately.
- Apps should provide customers with a way to delete their account, without having to email or call a support person. Apps should delete all {% data variables.product.company_short %} user data within 30 days of receiving a request from the user, or within 30 days of the end of the user's legal relationship with {% data variables.product.company_short %}.

## Plan management

{% data reusables.marketplace.marketplace-billing-ui-requirements %}

## Further reading

- "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/best-practices-for-creating-a-github-app)"
- "[AUTOTITLE](/apps/oauth-apps/building-oauth-apps/best-practices-for-creating-an-oauth-app)"
- "[AUTOTITLE](/apps/publishing-apps-to-github-marketplace/creating-apps-for-github-marketplace/security-best-practices-for-apps)"
