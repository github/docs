---
title: Adding a sales tax certificate
intro: 'If you''re a customer in the United States with a {% data variables.product.github %} Customer Agreement and you''re exempt from sales tax, you can upload a certificate to ensure the correct sales tax amount is calculated.'
redirect_from:
  - /billing/managing-your-github-billing-settings/adding-a-sales-tax-certificate
  - /billing/using-the-billing-platform/adding-a-sales-tax-certificate
  - /billing/managing-your-billing/adding-a-sales-tax-certificate
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
product: 'US-based organization and enterprise accounts that use the {% data variables.product.github %} Customer Agreement, see {% ifversion fpt or ghec %}[AUTOTITLE](/organizations/managing-organization-settings/upgrading-to-the-github-customer-agreement){% elsif ghes %}[AUTOTITLE](/enterprise-cloud@latest/organizations/managing-organization-settings/upgrading-to-the-github-customer-agreement) in the {% data variables.product.prodname_ghe_cloud %} documentation{% endif %}'
topics:
  - Billing
  - Organizations
  - User account
shortTitle: Add sales tax certificate
contentType: how-tos
---

If you're a {% data variables.product.github %} customer in the United States, you need to ensure that your account is set up to calculate sales tax correctly. If you're exempt from sales tax, you can upload a certificate to your account in JPEG (`.jpg`, `.jpeg`), PNG (`.png`), or PDF (`.pdf`) format.

## Adding a sales tax exemption certificate to your account

Enterprise owners, organization owners, and billing managers can upload a sales tax exemption certificate to an enterprise account if the account uses the {% data variables.product.company_short %} Customer Agreement.

1. In the upper-right corner of any page on {% data variables.product.github %}, click your profile picture.

1. Select the account you want to view and then access the "Billing & Licensing" pages:

   * **Organizations**: Click **Your organizations**, then next to the organization, click **Settings**. In the organization sidebar, click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing & Licensing**.
   * For **enterprises**, click **Your enterprises**, then click the enterprise name. Click the **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing & Licensing** tab at the top of the page.

1. From the list of "Billing & licensing" pages, click **Payment information**.
1. Review your "Billing information" and update any incorrect data. You must ensure that the address fields are correct and that the "City" and "Postal/Zip code" fields are accepted. If there is any missing information or any errors are reported, the option to upload a sales tax certificate is hidden.
1. At the bottom of the page in the "Sales Tax" section, click **Upload certificate**, and select the certificate file you want to upload. If "Sales Tax" is missing, check that your billing information defines your country as "United States of America."

Your account is marked as tax exempt while your certificate is reviewed. If your certificate is not approved, you will need to upload a new one.
