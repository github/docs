---
title: Configuring custom footers
intro: 'You can give users easy access to enterprise-specific links by adding custom footers to {% data variables.product.product_name %}.'
versions:
  ghec: '*'
  ghes: '>=3.4'
  ghae: issue-5487
type: how_to
topics:
  - Enterprise
  - Fundamentals
shortTitle: Configure custom footers
---

Enterprise owners can configure {% data variables.product.product_name %} to show custom footers with up to five additional links.

![Custom footer](/assets/images/enterprise/custom-footer/octodemo-footer.png)

El pie de página personalizado se muestra sobre el pie de página de {% data variables.product.prodname_dotcom %} {% ifversion ghes or ghae %}para todos los usuarios, en todas las páginas de {% data variables.product.product_name %}{% elsif ghec %}para todos los miembros y colaboradores de la empresa, en todas las páginas de organización y repositorios y en aquellas organizaciones que pertenezcan a la empresa{% endif %}.

## Configuring custom footers for your enterprise

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}

1. Under "Settings", click **Profile**.
{%- ifversion ghec %}
![Enterprise profile settings](/assets/images/enterprise/custom-footer/enterprise-profile-ghec.png)
{%- else %}
![Enterprise profile settings](/assets/images/enterprise/custom-footer/enterprise-profile-ghes.png)
{%- endif %}

1. At the top of the Profile section, click **Custom footer**. ![Custom footer section](/assets/images/enterprise/custom-footer/custom-footer-section.png)

1. Add up to five links in the fields shown. ![Add footer links](/assets/images/enterprise/custom-footer/add-footer-links.png)

1. Click **Update custom footer** to save the content and display the custom footer. ![Update custom footer](/assets/images/enterprise/custom-footer/update-custom-footer.png)
