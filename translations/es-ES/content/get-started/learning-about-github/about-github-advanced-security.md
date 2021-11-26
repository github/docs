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

{% data variables.product.prodname_dotcom %} tiene muchas características que te ayudan a mejorar y mantener la calidad de tu código. Algunas de estas se incluyen en todos los planes{% ifversion not ghae %}, tales como la gráfica de dependencias y las {% data variables.product.prodname_dependabot_alerts %}{% endif %}. Otras características de seguridad requieren una licencia para que la {% data variables.product.prodname_GH_advanced_security %} se ejecute en los repositorios independientemente de aquellos públicos en {% data variables.product.prodname_dotcom_the_website %}.

{% ifversion fpt or ghes > 3.0 or ghec %}For more information about purchasing {% data variables.product.prodname_GH_advanced_security %}, see "[About billing for {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)."{% elsif ghae %}There is no charge for {% data variables.product.prodname_GH_advanced_security %} on {% data variables.product.prodname_ghe_managed %} during the beta release.{% endif %}

## Acerca de las características de {% data variables.product.prodname_advanced_security %}

Una licencia de {% data variables.product.prodname_GH_advanced_security %} proporciona las siguientes características adicionales:

- **{% data variables.product.prodname_code_scanning_capc %}** - Busca vulnerabilidades de seguridad potenciales y errores dentro de tu código. Para obtener más información, consulta la sección "[Acerca de{% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning)".

- **{% data variables.product.prodname_secret_scanning_caps %}** - Detecta secretos, por ejemplo claves y tokens, que se han dado de alta en el repositorio. Para obtener más información, consulta la sección "[Acerca de {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/about-secret-scanning)".

{% ifversion fpt or ghes > 3.1 or ghec or ghae-issue-4864 %}
- **Revisión de dependencias** - Muestra todo el impacto de los cambios a las dependencias y vee los detalles de las versiones vulnerables antes de que fusiones una solicitud de cambios. Para obtener más información, consulta la sección "[Acerca de la revisión de dependencias](/code-security/supply-chain-security/about-dependency-review)".
{% endif %}

Para obtener más información sobre las características de {% data variables.product.prodname_advanced_security %} que se encuentran en desarrollo, consulta la sección "[Plan de trabajo de {% data variables.product.prodname_dotcom %}](https://github.com/github/roadmap)". Para obtener un resumen de todas las características de seguridad, consulta la sección "[Características de seguridad de {% data variables.product.prodname_dotcom %}](/code-security/getting-started/github-security-features)".

{% ifversion ghes or ghec %}

## Deploying GitHub Advanced Security in your enterprise

To learn about what you need to know to plan your {% data variables.product.prodname_GH_advanced_security %} deployment at a high level, see "[Overview of {% data variables.product.prodname_GH_advanced_security %}](/admin/advanced-security/overview-of-github-advanced-security-deployment)."

To review the rollout phases we recommended in more detail, see "[Deploying {% data variables.product.prodname_GH_advanced_security %} in your enterprise](/admin/advanced-security/deploying-github-advanced-security-in-your-enterprise)."

{% endif %}

{% ifversion ghes or ghae %}
## Habilitar las características de {% data variables.product.prodname_advanced_security %} en {% data variables.product.product_name %}

{% ifversion ghes %}
El administrador de sitio debe habilitar la {% data variables.product.prodname_advanced_security %} para {% data variables.product.product_location %} antes de que puedas utilizar estas características. Para obtener más información, consulta la sección "[Configurar las características de la Seguridad Avanzada](/admin/configuration/configuring-advanced-security-features)".
{% endif %}

Una vez que tu sistema se haya configurado, puedes habilitar e inhabilitar estas características a nivel de organización o de repositorio. Para obtener más información, consulta las secciones "[Administrar la configuración de seguridad y análisis para tu organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)" y "[Administrar la configuración de seguridad y análisis para tu repositorio](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)".

{% endif %}

{% ifversion not ghae %}
## Habilitar las características de {% data variables.product.prodname_advanced_security %} en {% data variables.product.prodname_dotcom_the_website %}

Para los repositorios públicos en {% data variables.product.prodname_dotcom_the_website %}, estas características se encuentran activas permanentemente y solo se pueden inhabilitar si cambias la visibilidad del proyecto para que el código ya no sea público.

En el caso de otros repositorios, una vez que tengas una licencia para tu cuenta empresarial, puedes habilitar e inhabilitar estas características a nivel de repositorio u organización. {% ifversion fpt or ghes > 3.0 or ghec %}For more information, see "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)" and "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)."{% endif %}

{% endif %}

{% ifversion fpt or ghec %}
Si tienes una cuenta empresarial, el uso de la licencia para toda la empresa se muestra en tu página de licencia empresarial. Para obtener más información, consulta la sección "[Visualizar tu uso de {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-licensing-for-github-advanced-security/viewing-your-github-advanced-security-usage)".

{% endif %}

{% ifversion ghec or ghes > 3.0 or ghae-next  %}

## Leer más

- "[Enforcing policies for {% data variables.product.prodname_advanced_security %} in your enterprise account](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise)"

{% endif %}
