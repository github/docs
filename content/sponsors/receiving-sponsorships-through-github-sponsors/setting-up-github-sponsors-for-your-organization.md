---
title: Setting up GitHub Sponsors for your organization
intro: 'Your organization can join {% data variables.product.prodname_sponsors %} to receive payments for your work.'
redirect_from:
  - /articles/setting-up-github-sponsorship-for-your-organization
  - /articles/receiving-sponsorships-as-a-sponsored-organization
  - /github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-organization
permissions: 'Organization owners can set up {% data variables.product.prodname_sponsors %} for an organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Organizations
  - Sponsors profile
  - Open Source
shortTitle: Set up for organization
---

## Joining {% data variables.product.prodname_sponsors %}

{% data reusables.sponsors.you-can-be-a-sponsored-organization %} {% data reusables.sponsors.stripe-supported-regions %}

After you receive an invitation for your organization to join {% data variables.product.prodname_sponsors %}, you can complete the steps below to become a sponsored organization.

To join {% data variables.product.prodname_sponsors %} as an individual contributor outside an organization, see "[AUTOTITLE](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)."

{% data reusables.sponsors.navigate-to-github-sponsors %}
{% data reusables.sponsors.view-eligible-accounts %}
1. To the right of your organization, click **Join the waitlist**.
{% data reusables.sponsors.contact-info %}
{% data reusables.sponsors.payout-choice %}
{% data reusables.sponsors.accept-legal-terms %}

## Completing your sponsored organization profile

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-profile-tab %}
{% data reusables.sponsors.short-bio %}
{% data reusables.sponsors.add-introduction %}
{% data reusables.sponsors.meet-the-team %}
{% data reusables.sponsors.edit-featured-work %}
{% data reusables.sponsors.opt-in-to-being-featured %}
{% data reusables.sponsors.save-profile %}

## Creating sponsorship tiers

{% data reusables.sponsors.tier-details %}

{% data reusables.sponsors.maximum-tier %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-sponsor-tiers-tab %}
{% data reusables.sponsors.click-add-tier %}
{% data reusables.sponsors.tier-price-description %}
{% data reusables.sponsors.add-welcome-message %}
{% data reusables.sponsors.save-tier-draft %}
{% data reusables.sponsors.review-and-publish-tier %}
{% data reusables.sponsors.add-more-tiers %}

## Submitting your bank information

As a sponsored organization, you will receive payouts to a bank account in a supported region or via a fiscal host.

{% data reusables.sponsors.bank-info-fiscal-host-reminder %} For more information about setting up and using fiscal hosts, see "[AUTOTITLE](/sponsors/receiving-sponsorships-through-github-sponsors/using-a-fiscal-host-to-receive-github-sponsors-payouts)."

If you choose to receive payouts to a bank account, your bank account can be a dedicated bank account for your organization or a personal bank account. You can get a business bank account through services like [Stripe Atlas](https://stripe.com/atlas). The person setting up {% data variables.product.prodname_sponsors %} for the organization must live in the same supported region, too. {% data reusables.sponsors.stripe-supported-regions %}

{% data reusables.sponsors.double-check-stripe-info %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.create-stripe-account %}

## Submitting your tax information

{% data reusables.sponsors.tax-form-information-org %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.overview-tab %}
{% data reusables.sponsors.tax-form-link %}

## Enabling two-factor authentication (2FA) on your {% data variables.product.prodname_dotcom %} account

Before your organization can become a sponsored organization, you must enable 2FA for your account on {% data variables.location.product_location %}. For more information, see "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)."

## Submitting your application to {% data variables.product.prodname_dotcom %} for approval

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.request-approval %}

{% data reusables.sponsors.github-review-app %}

## Further reading

- "[AUTOTITLE](/sponsors/getting-started-with-github-sponsors/about-github-sponsors)"
- "[AUTOTITLE](/sponsors/receiving-sponsorships-through-github-sponsors)"
