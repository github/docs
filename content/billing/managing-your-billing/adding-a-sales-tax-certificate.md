---
title: Adding a sales tax certificate
intro: If you're a customer in the United States with a {% data variables.product.company_short %} Customer Agreement and you're exempt from sales tax, you can upload a certificate to ensure the correct sales tax amount is calculated.
redirect_from:
  - /billing/managing-your-github-billing-settings/adding-a-sales-tax-certificate
  - /billing/using-the-billing-platform/adding-a-sales-tax-certificate
versions:
  feature: us-sales-tax
type: how_to
topics:
  - Organizations
  - User account
shortTitle: Add a sales tax certificate
---

If you're a {% data variables.product.company_short %} customer in the United States, you need to ensure that your account is set up to calculate sales tax correctly. If you're exempt from sales tax, you can upload a certificate to your account. The format of the certificate you upload must be one of the following:

* JPEG (`.jpg`, `.jpeg`)
* PNG (`.png`)
* PDF (`.pdf`)

Your account is marked as tax exempt while your certificate is reviewed. If your certificate is not approved, you will need to upload a new one.

## Adding a sales tax exemption certificate to your organization account

You can upload a sales tax exemption certificate to your organization account if your account uses the {% data variables.product.company_short %} Customer Agreement.

{% ifversion fpt or ghec %}

> [!NOTE]
> This option is not available for accounts that use the {% data variables.product.company_short %} Standard Terms of Service. For information about updating your organization, see [AUTOTITLE](/organizations/managing-organization-settings/upgrading-to-the-github-customer-agreement).
{% endif %}

{% data reusables.organizations.billing-settings %}
1. In the sidebar, under **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing and licensing**, click **Payment information**.
1. Review your "Billing information" and update any incorrect data. You must ensure that the address fields are correct and that the "City" and "Postal/Zip code" fields are accepted. If there is any missing information or any errors are reported, the option to upload a sales tax certificate is hidden.
1. At the bottom of the page in the "Additional information" section next to "Sales Tax", click **Upload certificate**, and select the certificate file you want to upload. If "Sales Tax" is missing, check that your billing information defines your country as "United States of America".
1. To remove a sales tax certificate, click {% octicon "trash" aria-label="Delete sales tax certificate" %} next to the certificate you want to remove.

{% ifversion ghec or ghes %}

## Adding a sales tax exemption certificate to your enterprise account

Enterprise owners and billing managers can upload a sales tax exemption certificate to an enterprise account if the account uses the {% data variables.product.company_short %} Customer Agreement.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.billing-tab %}
1. In the sidebar, under **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing and licensing**, click **Payment information**.
1. Review your "Billing information" and update any incorrect data. You must ensure that the address fields are correct and that the "City" and "Postal/Zip code" fields are accepted. If there is any missing information or any errors are reported, the option to upload a sales tax certificate is hidden.
1. At the bottom of the page, next to "Sales Tax", click **Upload certificate**, and select the certificate file you want to upload. If "Sales Tax" is missing, check that your billing information defines your country as "United States of America".
1. To remove a sales tax certificate, click {% octicon "trash" aria-label="Delete sales tax certificate" %} next to the certificate you want to remove.

{% endif %}
