---
title: Setting up GitHub Sponsors for your organization
intro: 'Your organization can join {% data variables.product.prodname_sponsors %} to receive payments for your work.'
redirect_from:
  - /articles/setting-up-github-sponsorship-for-your-organization
  - /articles/receiving-sponsorships-as-a-sponsored-organization
permissions: 'Organization owners can set up {% data variables.product.prodname_sponsors %} for an organization.'
versions:
  free-pro-team: '*'
topics:
  - sponsors
---

### Joining {% data variables.product.prodname_sponsors %}

{% data reusables.sponsors.you-can-be-a-sponsored-organization %} {% data reusables.sponsors.stripe-supported-regions %}

After you receive an invitation for your organization to join {% data variables.product.prodname_sponsors %}, you can complete the steps below to become a sponsored organization.

To join {% data variables.product.prodname_sponsors %} as an individual contributor outside an organization, see "[Setting up {% data variables.product.prodname_sponsors %} for your user account](/github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-user-account)."

{% data reusables.sponsors.navigate-to-github-sponsors %}
{% data reusables.sponsors.view-eligible-accounts %}
3. To the right of your organization, click **Join the waitlist**.
{% data reusables.sponsors.contact-info %}
{% data reusables.sponsors.accept-legal-terms %}

### Completing your sponsored organization profile

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-profile-tab %}
{% data reusables.sponsors.short-bio %}
{% data reusables.sponsors.add-introduction %}
{% data reusables.sponsors.meet-the-team %}
{% data reusables.sponsors.edit-featured-work %}
{% data reusables.sponsors.opt-in-to-being-featured %}
{% data reusables.sponsors.save-profile %}

### Creating sponsorship tiers

{% data reusables.sponsors.tier-details %}

{% data reusables.sponsors.maximum-tier %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-sponsor-tiers-tab %}
{% data reusables.sponsors.click-add-tier %}
{% data reusables.sponsors.tier-price-description %}
{% data reusables.sponsors.save-tier-draft %}
{% data reusables.sponsors.review-and-publish-tier %}
{% data reusables.sponsors.enable-custom-amounts %}
{% data reusables.sponsors.add-more-tiers %}

### Submitting your bank information

As a sponsored organization, you must receive payouts to a dedicated bank account for your organization in a supported region. You can get a business bank account through services like [Open Collective](https://opencollective.com/) and [Stripe Atlas](https://stripe.com/atlas). The region your organization legally operates in and the region of your bank account must match. The person setting up {% data variables.product.prodname_sponsors %} for the organization must live in the same supported region, too. {% data reusables.sponsors.stripe-supported-regions %}

{% data reusables.sponsors.double-check-stripe-info %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.create-stripe-account %}

For more information about setting up Stripe Connect using Open Collective, see [Setting up {% data variables.product.prodname_sponsors %}](https://docs.opencollective.com/help/collectives/github-sponsors) in the Open Collective Docs.

### Submitting your tax information

{% data reusables.sponsors.tax-form-information-org %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.settings-tab %}
{% data reusables.sponsors.country-of-residence %}
{% data reusables.sponsors.overview-tab %}
{% data reusables.sponsors.tax-form-link %}

### Enabling two-factor authentication (2FA) on your {% data variables.product.prodname_dotcom %} account

Before your organization can become a sponsored organization, you must enable 2FA on your {% data variables.product.product_name %} account. For more information, see "[Configuring two-factor authentication](/articles/configuring-two-factor-authentication)."

### Submitting your application to {% data variables.product.prodname_dotcom %} for approval

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.request-approval %}

{% data reusables.sponsors.github-review-app %}

### 더 읽을거리
- "[About {% data variables.product.prodname_sponsors %}](/articles/about-github-sponsors)"
- "[Receiving sponsorships through {% data variables.product.prodname_sponsors %}](/github/supporting-the-open-source-community-with-github-sponsors/receiving-sponsorships-through-github-sponsors)"
