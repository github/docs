---
title: Deleting a Stripe Connect account
shortTitle: Delete Stripe account
intro: 'Learn how to delete a Stripe Connect account that you connected to {% data variables.product.prodname_sponsors %}.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Sponsors payments
---

## Prerequisites

You can delete your Stripe Connect account yourself if the following conditions are true:

* Your Sponsors profile is **not published**, that is, the status is `pending`, `draft`, or `disabled`.
* The Stripe Connect account has **never received funds** from {% data variables.product.github %}.

>[!NOTE]
> Deleting a Stripe Connect account is permanent and cannot be undone.

## Steps to delete your Stripe Connect account

1. Open the settings page for your Sponsors Dashboard at `https://github.com/sponsors/USERNAME/dashboard/settings`.
1. In the "Stripe Connect accounts" section, click the {% octicon "trash" aria-label="Delete Stripe Connect account" %} icon associated with the account you want to delete.

   ![Screenshot of Stripe Connect accounts section including "Delete Stripe Connect account" icon.](/assets/images/help/sponsors/delete-stripe-account.png)

1. In the dialog box displayed, confirm that you want to delete the account.

   If your Sponsors profile is still published, or you have received funds at any time to the Stripe Connect account you wish to delete, a warning message is displayed. You cannot delete the account yourself.

   Contact {% data variables.contact.github_support %} and ask for help deleting the account.
