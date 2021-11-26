---
title: Uploading a new license to GitHub Enterprise Server
intro: 'You can upload your license file for {% data variables.product.prodname_enterprise %} to {% data variables.product.product_location_enterprise %} to validate your application.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Upload a new license
---

## About license files for {% data variables.product.prodname_enterprise %}

After you purchase or upgrade a license for {% data variables.product.prodname_enterprise %} from {% data variables.contact.contact_enterprise_sales %}, you must upload the new license file to {% data variables.product.product_location_enterprise %} to unlock your new user licenses. For more information about licenses for {% data variables.product.product_name %}, see "[About licenses for {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise)" and "[Downloading your license for {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise/downloading-your-license-for-github-enterprise)."

{% data reusables.enterprise-licensing.contact-sales-for-renewals-or-seats %}

## Uploading your license to {% data variables.product.product_location_enterprise %}

{% warning %}

**Warning:** Updating your license causes a small amount of downtime for {% data variables.product.product_location %}.

{% endwarning %}

1. 以站点管理员的身份登录 {% data variables.product.product_location_enterprise %} 。
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. 在“Quick links”下，单击 **Update license**。 ![更新许可链接](/assets/images/enterprise/business-accounts/update-license-link.png)
1. 要选择许可，请单击 **License file（许可文件）**，或将许可文件拖到 **License file（许可文件）**上。 ![上传许可文件](/assets/images/enterprise/management-console/upload-license.png)
1. 单击 **Upload（上传）**。 ![开始上传](/assets/images/enterprise/management-console/begin-upload.png)

