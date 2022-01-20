---
title: Acerca de GitHub Advanced Security
intro: '{% data variables.product.prodname_dotcom %} pone a disposición de los clientes medidas adicionales de seguridad mediante una licencia de {% data variables.product.prodname_advanced_security %}.{% ifversion fpt or ghec %} Estas características también se habilitan para los repositorios públicos en {% data variables.product.prodname_dotcom_the_website %}.{% endif %}'
product: '{% data reusables.gated-features.ghas %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Security
redirect_from:
  - /github/getting-started-with-github/about-github-advanced-security
  - /github/getting-started-with-github/learning-about-github/about-github-advanced-security
shortTitle: GitHub Advanced Security
---

## Acerca de {% data variables.product.prodname_GH_advanced_security %}

{% data variables.product.prodname_dotcom %} tiene muchas características que te ayudan a mejorar y mantener la calidad de tu código. Algunas de estas se incluyen en todos los planes{% ifversion not ghae %}, tales como la gráfica de dependencias y las {% data variables.product.prodname_dependabot_alerts %}{% endif %}. Otras características de seguridad requieren que la {% data variables.product.prodname_GH_advanced_security %}{% ifversion fpt or ghec %} se ejecute en otros repositorios aparte de aquellos públicos de {% data variables.product.prodname_dotcom_the_website %}{% endif %}.

{% ifversion ghes > 3.0 or ghec %}Para obtener más información sobre cómo comprar una licenca de {% data variables.product.prodname_GH_advanced_security %}, consulta la sección "[Acerca de la facturación de {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)".{% elsif ghae %} No se cobra por {% data variables.product.prodname_GH_advanced_security %} en {% data variables.product.prodname_ghe_managed %} durante el lanzamiento del beta.{% elsif fpt %}Para comprar una licencia de {% data variables.product.prodname_GH_advanced_security %}, debes utilizar {% data variables.product.prodname_enterprise %}. Para obtener más información sobre cómo mejorar a {% data variables.product.prodname_enterprise %} con {% data variables.product.prodname_GH_advanced_security %}, consulta las secciones "[Productos de GitHub](/get-started/learning-about-github/githubs-products)" y "[Acerca de la facturación de {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)".{% endif %}

## Acerca de las características de {% data variables.product.prodname_advanced_security %}

Una licencia de {% data variables.product.prodname_GH_advanced_security %} proporciona las siguientes características adicionales:

- **{% data variables.product.prodname_code_scanning_capc %}** - Busca vulnerabilidades de seguridad potenciales y errores dentro de tu código. Para obtener más información, consulta la sección "[Acerca de{% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning)".

- **{% data variables.product.prodname_secret_scanning_caps %}** - Detecta secretos, por ejemplo claves y tokens, que se han dado de alta en el repositorio. Para obtener más información, consulta la sección "[Acerca de {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/about-secret-scanning)".

{% ifversion fpt or ghes > 3.1 or ghec or ghae-issue-4864 %}
- **Revisión de dependencias** - Muestra todo el impacto de los cambios a las dependencias y vee los detalles de las versiones vulnerables antes de que fusiones una solicitud de cambios. Para obtener más información, consulta la sección "[Acerca de la revisión de dependencias](/code-security/supply-chain-security/about-dependency-review)".
{% endif %}

{% ifversion ghec or ghes > 3.1 %}
- **Resumen de seguridad** - Revisa la configuración de seguridad y las alertas para una organización e identifica los repositorios que tienen un riesgo mayor. Para obtener más información, consulta la sección "[Acerca del resumen de seguridad](/code-security/security-overview/about-the-security-overview)".
{% endif %}

Para obtener más información sobre las características de {% data variables.product.prodname_advanced_security %} que se encuentran en desarrollo, consulta la sección "[Plan de trabajo de {% data variables.product.prodname_dotcom %}](https://github.com/github/roadmap)". Para obtener un resumen de todas las características de seguridad, consulta la sección "[Características de seguridad de {% data variables.product.prodname_dotcom %}](/code-security/getting-started/github-security-features)".

{% ifversion fpt or ghec %}
Las características de la {% data variables.product.prodname_GH_advanced_security %} se encuentran habilitadas para todos los repositorios públicos de {% data variables.product.prodname_dotcom_the_website %}. Las organizaciones que utilizan {% data variables.product.prodname_ghe_cloud %} con la {% data variables.product.prodname_advanced_security %} pueden habilitar estas características adicionalmente para repositorios privados e internos. También tienen acceso a un resumen de seguridad a nivel organizacional. {% ifversion fpt %}Para obtener más información, consulta la [documentación de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/get-started/learning-about-github/about-github-advanced-security#enabling-advanced-security-features).{% endif %}
{% endif %}

{% ifversion ghes or ghec %}
## Desplegar GitHub Advanced Security en tu empresa

Para aprender más sobre lo que necesitas saber para planear tu despliegue de la {% data variables.product.prodname_GH_advanced_security %} en un nivel superior, consulta el "[Resumen del despliegue de {% data variables.product.prodname_GH_advanced_security %}](/admin/advanced-security/overview-of-github-advanced-security-deployment)".

Para revisar las fases de implementación, te recomendamos ver con más detalle la sección "[Desplegar la {% data variables.product.prodname_GH_advanced_security %} en tu empresa](/admin/advanced-security/deploying-github-advanced-security-in-your-enterprise)".
{% endif %}

{% ifversion not fpt %}
## Habilitar las características de la {% data variables.product.prodname_advanced_security %}

{%- ifversion ghes %}
El administrador de sitio debe habilitar la {% data variables.product.prodname_advanced_security %} para {% data variables.product.product_location %} antes de que puedas utilizar estas características. Para obtener más información, consulta la sección "[Configurar las características de la Seguridad Avanzada](/admin/configuration/configuring-advanced-security-features)".

Una vez que tu sistema se haya configurado, puedes habilitar e inhabilitar estas características a nivel de organización o de repositorio.

{%- elsif ghec %}
Para los repositorios públicos, estas características se encuentran activas permanentemente y solo se pueden inhabilitar si cambias la visibilidad del proyecto para que el código ya no sea público.

En el caso de otros repositorios, una vez que tengas una licencia para tu cuenta empresarial, puedes habilitar e inhabilitar estas características a nivel de repositorio u organización.

{%- elsif ghae %}
Puedes habilitar e inhabilitar estas características a nivel de repositorio u organización.
{%- endif %}
Para obtener más información, consulta las secciones "[Administrar la configuración de seguridad y análisis para tu organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)" y "[Administrar la configuración de seguridad y análisis para tu repositorio](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)".

{% ifversion ghec or ghes > 3.0 %}
Si tienes una cuenta empresarial, el uso de la licencia para toda la empresa se muestra en tu página de licencia empresarial. Para obtener más información, consulta la sección "[Visualizar tu uso de {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-licensing-for-github-advanced-security/viewing-your-github-advanced-security-usage)".
{% endif %}

{% endif %}

{% ifversion ghec or ghes > 3.0 or ghae  %}
## Leer más

- "[Requerir políticas para la {% data variables.product.prodname_advanced_security %} en tu cuenta empresarial](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise)"

{% endif %}
