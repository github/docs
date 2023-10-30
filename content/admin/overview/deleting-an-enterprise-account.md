---
title: Deleting an enterprise account
intro: "You can delete an enterprise account to stop paying for {% data variables.product.prodname_enterprise %}."
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Enterprise
  - Fundamentals
permissions: Enterprise owners can delete an enterprise account if the company pays by credit card or PayPal.
shortTitle: Delete enterprise account
---

## About enterprise account deletion

Deleting your enterprise account cancels the enterprise license and removes the enterprise account from {% data variables.product.prodname_dotcom %}.

If there are any outstanding balances on your account, you will be charged a one-time payment when you initiate the deletion process. If you delete your enterprise account partway through a billing cycle, contact {% data variables.contact.contact_support %} to request a prorated refund for the remainder of the billing cycle.

When you delete your enterprise account, you lose the policies, billing settings, and user roles you've configured. You do not lose data like repositories or packages, unless you choose to delete the organizations that contain that data.

If you want to restore an enterprise account that you have deleted, you must contact {% data variables.contact.contact_support %}.

You can only delete your enterprise account if your company pays by credit card or PayPal. If your company pays via invoice and you want to stop paying for {% data variables.product.prodname_enterprise %} altogether, contact {% data variables.contact.contact_enterprise_sales %}.

## Prerequisites

You must remove, transfer, or delete all organizations in the enterprise before you can delete the enterprise account. For more information, see "[AUTOTITLE](/admin/managing-accounts-and-repositories/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#transferring-an-organization-between-enterprise-accounts)" and "[AUTOTITLE](/admin/managing-accounts-and-repositories/managing-organizations-in-your-enterprise/removing-organizations-from-your-enterprise)."

## Deleting an enterprise account on {% data variables.product.prodname_dotcom %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
1. Under {% octicon "gear" aria-hidden="true" %} **Settings**, click **Profile**.
1. In the "Danger Zone" section, click **Delete this enterprise**.
1. In the text box, type the enterprise slug to confirm the deletion, then click **Delete this enterprise**.
