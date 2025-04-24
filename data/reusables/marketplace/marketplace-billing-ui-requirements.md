* Customers who cancel a paid plan purchased from {% data variables.product.prodname_marketplace %} should be automatically downgraded to the app's free plan if it exists. {% data reusables.marketplace.cancellation-clarification %} It's highly recommended to allow customers to re-enable their previous plan.
* Customers should be able to upgrade from your app's user interface if you provide an [upgrade URL](/apps/publishing-apps-to-github-marketplace/using-the-github-marketplace-api-in-your-app/handling-plan-changes#about-upgrade-urls) in this format: `https://www.github.com/marketplace/<LISTING_NAME>/upgrade/<LISTING_PLAN_NUMBER>/<CUSTOMER_ACCOUNT_ID>`
* Customers should be able to modify which users have access to your app from your app's website if they purchased seats (per-unit pricing plan) or the plan offers unlimited collaborators.
* Customers should be able to see the following changes to their account immediately in the billing, profile, or account settings section of the app's website:
  * Current plan and price.
  * New plans purchased.
  * Upgrades, downgrades, cancellations, and the number of remaining days in a free trial.
  * Changes to billing cycles (monthly or yearly).
  * Usage and remaining resources for flat-rate and per-unit plans. For example, if the pricing plan is per-unit, your app's site should show units used and units available.
