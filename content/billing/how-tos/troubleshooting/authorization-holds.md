---
title: Troubleshooting authorization holds
intro: If an authorization hold appears on your payment method, you can check what it means and what to do if the funds are not released.
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Authorization holds
contentType: how-tos
category:
  - Set up payment
---

An authorization hold verifies your payment method. No funds are taken from your account as it is not a charge.

## When you may see an authorization hold

We may place a temporary hold on your payment method when you start a subscription, update your payment method, or accrue significant usage of metered services. The amount usually ranges from $1 to the cost of the service you are purchasing.

## Where authorization holds appear

An authorization hold may appear on your bank statement as `Card Verify`. 

There may be more than one `Card Verify` entry if your payment method is verified multiple times, such as after repeated payment attempts or separate checks for metered usage.

## When the funds are available again

{% data variables.product.company_short %} does not hold the funds. {% data variables.product.company_short %} initiates the release immediately, but your bank or card issuer may take a few days to make the funds available again.

### Contacting your bank or card issuer

If the funds remain unavailable after 10 business days, contact your bank or card issuer and ask about the status of the `Card Verify` authorization. Your bank or card issuer can tell you when the funds will be available again.

## What happens if the hold fails

If your payment method can't be verified, you may not be able to complete the purchase. You can contact your bank or card issuer for details or try a different payment method. For more information, see [AUTOTITLE](/billing/how-tos/troubleshooting/locked-account#unlocking-an-accounts-features-due-to-a-failed-authorization-hold).
