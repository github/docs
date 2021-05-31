---
title: Visualizar tu uso de GitHub Advanced Security
intro: 'You can view usage of your {% data variables.product.prodname_GH_advanced_security %} license.'
permissions: 'Enterprise owners can view usage for {% data variables.product.prodname_GH_advanced_security %}.'
product: '{% data reusables.gated-features.ghas %}'
versions:
  enterprise-server: '>=3.1'
topics:
  - Enterprise
---

{% data reusables.advanced-security.about-ghas-license-seats %} For more information, see "[About licensing for {% data variables.product.prodname_GH_advanced_security %}](/admin/advanced-security/about-licensing-for-github-advanced-security)."

### Viewing license usage for {% data variables.product.prodname_GH_advanced_security %}

You can check how many seats your license includes and how many seats are currently in use.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
   La sección de "{% data variables.product.prodname_GH_advanced_security %}" muestra los detalles del uso actual. You can see the total number of seats used, as well as a table with the number of committers and unique committers for each organization. ![{% data variables.product.prodname_GH_advanced_security %} section of Enterprise license](/assets/images/help/billing/ghas-orgs-list-enterprise-ghes.png)
5. Opcionalmente, haz clic en el nombre de una organización que te pertenezca para mostrar la configuración de seguridad y análisis para la organización. ![Organización que te pertenece en la sección de {% data variables.product.prodname_GH_advanced_security %} de la configuración de facturación empresarial](/assets/images/help/billing/ghas-orgs-list-enterprise-click-org.png)
6. En la página de configuración de "Seguridad & análisis", desplázate hacia la sección de "repositorios de {% data variables.product.prodname_GH_advanced_security %}" para ver un resumen detallado del uso de este repositorio en esta organización. ![{% data variables.product.prodname_GH_advanced_security %} repositories section](/assets/images/help/enterprises/settings-security-analysis-ghas-repos-list.png) Para obtener más información, consulta la sección "[Administrar la configuración de seguridad y análisis de tu organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".
