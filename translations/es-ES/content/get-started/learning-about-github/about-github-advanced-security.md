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
ms.openlocfilehash: 49a58dd78c906982c8c8b9702d55cd11662cb12e
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159185'
---
## Acerca de {% data variables.product.prodname_GH_advanced_security %}

{% data variables.product.prodname_dotcom %} tiene muchas características que te ayudan a mejorar y mantener la calidad de tu código. Algunas de ellas se incluyen en todos los planes{% ifversion not ghae %}, como el gráfico de dependencias y las {% data variables.product.prodname_dependabot_alerts %}{% endif %}. Otras características de seguridad requieren una licencia de {% data variables.product.prodname_GH_advanced_security %}{% ifversion fpt or ghec %} para ejecutarse en otros repositorios aparte de los públicos de {% data variables.product.prodname_dotcom_the_website %}{% endif %}.

{% ifversion ghes or ghec %}Para obtener información sobre la compra de una licencia de {% data variables.product.prodname_GH_advanced_security %}, consulte "[Acerca de la facturación de {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)."{% elsif ghae %}{% data variables.product.prodname_GH_advanced_security %} es gratuito {% data variables.product.prodname_ghe_managed %} durante la versión beta.{% elsif fpt %}Para comprar una licencia de {% data variables.product.prodname_GH_advanced_security %}, debe usar {% data variables.product.prodname_enterprise %}. Para obtener información sobre cómo actualizar a {% data variables.product.prodname_enterprise %} con {% data variables.product.prodname_GH_advanced_security %}, consulte "[Productos de GitHub](/get-started/learning-about-github/githubs-products)" y "[Acerca de la facturación de {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)".{% endif %}

## Acerca de las características de {% data variables.product.prodname_advanced_security %}

Una licencia de {% data variables.product.prodname_GH_advanced_security %} proporciona las siguientes características adicionales:

- **{% data variables.product.prodname_code_scanning_capc %}** : busque posibles vulnerabilidades de seguridad y errores de codificación en su código. Para obtener más información, consulte "[Acerca de {% data variables.product.prodname_code_scanning %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning)".

- **{% data variables.product.prodname_secret_scanning_caps %}** : detecta secretos, como claves y tokens, que se hayan registrado en el repositorio.{% ifversion secret-scanning-push-protection %} Si la protección contra inserciones está habilitada, también se detectarán secretos al insertarlos en el repositorio. Para obtener más información, consulte "[Acerca de {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/about-secret-scanning)" y "[Protección de inserciones con{% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)".{% else %} Para obtener más información, consulte "[Acerca de los datos {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/about-secret-scanning)."{% endif %}

- **Revisión de dependencias:** muestre el impacto total de los cambios en las dependencias y consulte los detalles de las versiones vulnerables antes de combinar una solicitud de incorporación de cambios. Para obtener más información, consulte "[Acerca de la revisión de dependencias](/code-security/supply-chain-security/about-dependency-review)".

{% ifversion ghes < 3.7 or ghae %}
<!-- Ref: ghae > 3.6 remove GHAE versioning from this section when the `security-overview-displayed-alerts` flag is toggled for GHAE -->
- **Información general sobre seguridad:** revise la configuración de seguridad y las alertas de una organización e identifique los repositorios con mayor riesgo. Para obtener más información, consulta "[Acerca de la introducción de seguridad](/code-security/security-overview/about-the-security-overview)".
{% endif %}

{% ifversion fpt or ghec %} En la siguiente tabla se resume la disponibilidad de las características de {% data variables.product.prodname_GH_advanced_security %} para los repositorios públicos y privados.

|                   | Repositorio público           | Repositorio privado sin {% data variables.product.prodname_advanced_security %} | Repositorio privado con {% data variables.product.prodname_advanced_security %} |
| :-----------------: | :---------------------------: | :--------------------------------------------: | :-----------------------------------------: |
| Análisis de código     | Sí                         | No                                           | Sí                                        |
| Análisis de secretos   | Sí **(solo funcionalidad limitada)** | No                                           | Sí                                       |
| Revisión de dependencias | Sí                         | No                                           | Sí                                       |
{% endif %}

Para obtener información sobre las características de {% data variables.product.prodname_advanced_security %} que se encuentran en desarrollo, consulte "[Plan de desarrollo público de {% data variables.product.prodname_dotcom %}](https://github.com/github/roadmap)". Para obtener información general sobre todas las características de seguridad, consulte "[ Características de seguridad de {% data variables.product.prodname_dotcom %}](/code-security/getting-started/github-security-features)".

{% ifversion fpt or ghec %} Las características de la {% data variables.product.prodname_GH_advanced_security %} se encuentran habilitadas para todos los repositorios públicos de {% data variables.product.prodname_dotcom_the_website %}. Las organizaciones que utilizan {% data variables.product.prodname_ghe_cloud %} con la {% data variables.product.prodname_advanced_security %} pueden habilitar estas características adicionalmente para repositorios privados e internos. {% ifversion fpt %}Para obtener más información, consulta la [documentación de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/get-started/learning-about-github/about-github-advanced-security#enabling-advanced-security-features).
{% endif %}

{% ifversion ghes or ghec or ghae %}
## Desplegar GitHub Advanced Security en tu empresa

Para obtener información sobre lo que necesita saber para planificar la implementación de {% data variables.product.prodname_GH_advanced_security %} a alto nivel y para revisar las fases de lanzamiento que recomendamos, consulta "[Adopción de {% data variables.product.prodname_GH_advanced_security %} a gran escala](/code-security/adopting-github-advanced-security-at-scale)".

{% endif %}

{% ifversion not fpt %}
## Habilitar las características de la {% data variables.product.prodname_advanced_security %}

{%- ifversion ghes %} El administrador del sitio debe habilitar {% data variables.product.prodname_advanced_security %} para {% data variables.location.product_location %} con el fin de poder usar estas características. Para obtener más información, consulte [Configuración de características de seguridad avanzada](/admin/configuration/configuring-advanced-security-features).

Una vez que tu sistema se haya configurado, puedes habilitar e inhabilitar estas características a nivel de organización o de repositorio.

{%- elsif ghec %} En los repositorios públicos, estas características se encuentran activas de manera permanente y solo se pueden deshabilitar si cambia la visibilidad del proyecto para que el código deje de ser público.

En el caso de otros repositorios, una vez que tengas una licencia para tu cuenta empresarial, puedes habilitar e inhabilitar estas características a nivel de repositorio u organización.

{%- elsif ghae %} Puede habilitar y deshabilitar estas características a nivel de repositorio u organización.
{%- endif %} Para obtener más información, consulte"[Administración de la configuración de seguridad y análisis de la organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)" o "[Administración de la configuración de seguridad y análisis del repositorio](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)".

{% ifversion ghec or ghes %} Si tiene una cuenta empresarial, el uso de la licencia para toda la empresa se muestra en la página de licencia Enterprise. Para obtener más información, consulte "[Visualización del uso de {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-licensing-for-github-advanced-security/viewing-your-github-advanced-security-usage)".
{% endif %}

{% endif %}

{% ifversion fpt or ghec %}
## Acerca de los flujos de trabajo iniciales para {% data variables.product.prodname_advanced_security %}

{% data reusables.advanced-security.starter-workflows-beta %} {% data reusables.advanced-security.starter-workflow-overview %}

Para obtener más información sobre los flujos de trabajo de inicio, consulte "[Configuración de {% data variables.product.prodname_code_scanning %} mediante flujos de trabajo de inicio](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository#setting-up-code-scanning-using-starter-workflows)" y "[Uso de flujos de trabajo de inicio](/actions/using-workflows/using-starter-workflows)".

{% endif %}

{% ifversion ghec or ghes or ghae %}
## Información adicional

- "[Aplicación de directivas para {% data variables.product.prodname_advanced_security %} en su cuenta de Enterprise](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise)".

{% endif %} {% endif %}
