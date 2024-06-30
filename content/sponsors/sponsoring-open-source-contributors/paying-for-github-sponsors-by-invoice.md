---
title: Paying for GitHub Sponsors by invoice
shortTitle: Paying by invoice
intro: 'Organizations can set up invoicing to sponsor accounts.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Sponsors
  - Open Source
redirect_from:
  - /sponsors/sponsoring-open-source-contributors/paying-for-github-sponsors-via-invoice
---

## About paying for {% data variables.product.prodname_sponsors %} by invoice

Organizations can use an invoice method to participate in the {% data variables.product.prodname_sponsors %} program.

When an organization pays by invoice, they will not be charged the 3% credit card processing fee that applies to sponsorships from organization accounts. The 3% {% data variables.product.company_short %} service processing fee still applies to invoiced billing. For more information about sponsorship fees, see "[AUTOTITLE](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor#sponsorship-fees)."

Organizations paying by invoice are invoiced separately for their {% data variables.product.prodname_sponsors %} payments and their other payments to {% data variables.product.company_short %}. Organizations can be invoiced for sponsorships and pay via credit card for other payments to {% data variables.product.company_short %}.

When setting up a sponsorship, organizations paying by invoice have the option to pay at the start of the next billing cycle. This means they won't have to pay the prorated amount when setting up the sponsorship, and will be charged the full amount on the next billing date.

### Requirements

* The organization needs to sign the sponsorship agreement which is a 3 year commitment. The {% data variables.product.company_short %} Invoiced Sponsor Agreement is separate from other services.
* The organization needs a minimum spend of 5,000 US dollars (USD) per year on sponsoring.
* The organization needs to pay the invoice within 30 days.

Once the organization reaches the yearly minimum spend, they can opt out of being invoiced for the rest of the year.

## Switching to paying by invoice

If your organization currently pays for {% data variables.product.prodname_sponsors %} by credit card, you can switch to paying by invoice. Switching to paying by invoice will not affect the billing schedule for other {% data variables.product.company_short %} products like {% data variables.product.prodname_actions %} or {% data variables.product.prodname_registry %}.

{% note %}

**Note:** Changing your payment method to invoiced billing will cancel your current sponsorships and your current sponsored projects will receive a cancellation email. You will need to set up your sponsorships again after switching to paying by invoice. You can view your recently canceled sponsorships in your past sponsorships list. Additionally, {% data variables.product.prodname_dotcom %} will email you a list of your active sponsorships prior to switching to invoiced billing. You can re-sponsor projects by importing that list into the bulk sponsorship tool. For more information, see "[AUTOTITLE](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor#sponsoring-accounts-in-bulk)."

{% endnote %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Access" section of the sidebar, click **{% octicon "credit-card" aria-hidden="true" %} Billing and plans**.
1. Scroll to the "{% data variables.product.prodname_sponsors %}" section and click **Switch to invoiced billing**.
1. Compare credit card and invoice billing on the next page. To proceed with changing to invoiced billing, click **Switch to invoiced billing**.
1. Fill out the form and click **Submit**.

When the process is complete, all organization owners will receive an email with a link to create an invoice.

## Creating a new invoice

To add money to your balance, you need to create an invoice. You can then use your balance to pay for sponsorships. The minimum amount for an invoice is $5,000 USD. A 3% {% data variables.product.company_short %} service processing fee is subtracted from the invoice amount.

1. Navigate to the organization you want to create an invoice for.
{% data reusables.organizations.navigate-to-sponsoring %}
1. In the sidebar, click **{% octicon "credit-card" aria-hidden="true" %} Invoices**.
1. To create a new invoice, click **Create an invoice**.

   ![Screenshot of the "Invoices" page for {% data variables.product.prodname_sponsors %}. A button, labeled "Create an invoice," is outlined in dark orange.](/assets/images/help/sponsors/sponsors-create-an-invoice.png)

1. Enter the amount you want to add to your balance. The PO number is optional.
1. Click **Create invoice**.

Click on the invoice amount to view and pay the invoice. The invoice will also be sent to the billing email address for your organization.

## Paying for {% data variables.product.prodname_sponsors %} by invoice

Once you have paid the invoice, you can use your balance to sponsor accounts. The process for sponsoring accounts is the same as for organizations paying by credit card. The only difference is that you will see "Invoice balance" listed as the payment method. For more information, see "[AUTOTITLE](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)."

## Viewing your {% data variables.product.company_short %} Invoiced Sponsor Agreement

You can view your {% data variables.product.company_short %} Invoiced Sponsor Agreement and the expiration date at any time. The {% data variables.product.company_short %} Invoiced Sponsor Agreement lasts for 3 years before it needs to be renewed.

1. Navigate to the organization.
{% data reusables.organizations.navigate-to-sponsoring %}
1. In the sidebar, click {% octicon "graph" aria-label="The graph icon" %} **Insights**.
1. Under your balance, click **{% data variables.product.company_short %} Invoiced Sponsor Agreement** to view the agreement.

## Understanding your {% data variables.product.prodname_sponsors %} invoice

Payments to {% data variables.product.prodname_sponsors %} are invoiced through Stripe. Organizations will receive an invoice by email from Stripe, Inc. This invoice is separate from the one you receive for {% data variables.product.product_name %} services, and may have a different payment date.
