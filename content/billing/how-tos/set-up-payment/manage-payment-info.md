---
title: Managing your payment and billing information
intro: 'Learn how to view and manage your payment information and billing contacts using the new billing platform.'
versions:
  feature: enhanced-billing-platform
redirect_from:
  - /billing/setting-up-paid-accounts-for-procurement-companies/setting-up-enterprise-accounts-for-procurement-companies/renewing-your-clients-enterprise-account
  - /billing/how-tos/manage-for-client/renew-client-enterprise
  - /billing/using-the-enhanced-billing-platform-for-enterprises/managing-your-payment-and-billing-information
  - /billing/using-the-billing-platform/adding-or-editing-a-payment-method
  - /billing/using-the-billing-platform/viewing-your-payment-history-and-receipts
  - /billing/using-the-billing-platform/adding-information-to-your-receipts
  - /billing/using-the-billing-platform/setting-your-billing-email
  - /billing/using-the-new-billing-platform/managing-your-payment-and-billing-information
  - /billing/managing-your-github-billing-settings/adding-or-editing-a-payment-method
  - /billing/managing-your-github-billing-settings/adding-information-to-your-receipts
  - /billing/managing-your-github-billing-settings/setting-your-billing-email
  - /billing/managing-your-github-billing-settings/viewing-your-payment-history-and-receipts
  - /billing/managing-your-billing/managing-your-payment-and-billing-information
topics:
  - Billing
  - Enterprise
  - Team
  - Receipts
permissions: '{% data reusables.permissions.enhanced-billing-platform %}'
shortTitle: Manage payment info
contentType: how-tos
---

The payment methods available depend on your account type. Enterprise and organization accounts have more payment options than personal accounts. Invoiced enterprise accounts make their payments using other methods. For more information, see [AUTOTITLE](/billing/reference/supported-payment-methods).

## Managing payment information

{% data reusables.billing.manage-payment-info %}

### Troubleshooting payment method issues

If you encounter issues when adding or updating a payment method, you can try the following:

1. Retry adding your payment method.
1. Try adding a new payment method.
1. Contact {% data variables.contact.github_support %} or your customer representative for additional assistance.

## Viewing payment history

You can view your payment history, including the date, amount, and payment method. You can also download past payments.

1. Display the **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing & Licensing** pages.
1. Click **Payment history** to show details of payments.
1. To view the receipt for a payment, click {% octicon "eye" aria-label="View receipt" %}.
1. To download a receipt or invoice, click {% octicon "download" aria-label="Download" %} under "Receipt" or "Invoice".

## Managing billing contacts

Organizations and enterprises can add contacts to receive emails with billing notifications for payments and budget threshold alerts. One of the contacts is defined as the primary contact.

### Organization billing contacts

1. Display the **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing & Licensing** page for the organization.
1. Click **Additional billing details**.
1. In the table of "Email recipients":
   * Click **Add**, enter an email address, and click **Add** to add a new billing contact.
   * Use the **Edit** drop-down for an existing contact to remove the contact or make that contact the primary billing contact.
   * Click **Edit** to update the email address for the primary billing contact.

### Enterprise billing contacts

1. Display the **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing and Licensing** page for the enterprise.
1. Click **Billing contacts**.
1. In the table of "Email recipients":
   * Click **Add**, enter an email address, and click **Add** to add a new billing contact.
   * Use the **{% octicon "kebab-horizontal" aria-label="Show options for ..." %}** drop-down for an existing contact to remove the contact or make that contact the primary billing contact.
   * Click {% octicon "pencil" aria-label="Edit primary email address" %} to update the email address for the primary billing contact.
