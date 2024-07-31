---
title: Adding a sales tax certificate
intro: If you're a customer in the United States with a {% data variables.product.company_short %} Customer Agreement and you're exempt from sales tax, you can upload a certificate to ensure the correct sales tax amount is calculated.
versions:
  feature: us-sales-tax
type: how_to
topics:
  - Organizations
  - User account
shortTitle: Add a sales tax certificate
---

{% data reusables.billing.us-sales-tax-note %} {% ifversion fpt or ghec %}For more information about updating your billing information, see "[AUTOTITLE](/billing/managing-your-github-billing-settings/adding-or-editing-a-payment-method)."{% endif %}

If you're a {% data variables.product.company_short %} customer in the United States, you need to ensure that your account is set up to calculate sales tax correctly. If you're exempt from sales tax, you can upload a certificate to your account. The format of the certificate you upload must be one of the following:

* JPEG (`.jpg`, `.jpeg`)
* PNG (`.png`)
* PDF (`.pdf`)

Your account is marked as tax exempt, while your certificate is reviewed. If your certificate is not approved, you will need to upload a new one.

## Adding a sales tax exemption certificate to your organization account

You can upload a sales tax exemption certificate to your organization account if your account uses the {% data variables.product.company_short %} Customer Agreement.

{% ifversion fpt or ghec %}

> [!NOTE]
> This option is not available for accounts that use the {% data variables.product.company_short %} Standard Terms of Service. For information about updating your organization, see "[AUTOTITLE](/organizations/managing-organization-settings/upgrading-to-the-github-customer-agreement)."

{% endif %}

{% data reusables.organizations.billing-settings %}
1. At the top of the page, click **Payment information**.

   ![Screenshot of the "Billing Summary" section of the settings page. A link, labeled "Payment information," is highlighted with an orange outline.](/assets/images/help/settings/payment-info-link.png)
{% data reusables.billing.verify-address %}
{% data reusables.billing.sales-tax-certificate-upload %}
{% data reusables.billing.remove-sales-tax-certificate %}

{% ifversion ghec or ghes %}

## Adding a sales tax exemption certificate to your enterprise account

Enterprise owners and billing managers can upload a sales tax exemption certificate to an enterprise account if the account uses the {% data variables.product.company_short %} Customer Agreement.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. At the top of the page, click **Payment information**.

   ![Screenshot of the "Billing Summary" section of the settings page. A link, labeled "Payment information," is highlighted with an orange outline.](/assets/images/help/settings/payment-info-link.png)

{% data reusables.billing.verify-address %}
1. At the bottom of the page, in the "Sales Tax" section, click **Upload certificate**, and select the certificate file you want to upload.
{% data reusables.billing.remove-sales-tax-certificate %}

{% endif %}
