---
title: Acerca de GitHub para empresas
intro: 'Las empresas pueden usar los productos empresariales de {% data variables.product.prodname_dotcom %} para mejorar todo su ciclo de vida de desarrollo de software.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
  - Fundamentals
ms.openlocfilehash: dbba8a55fd0ac20c97039de05aa629dea7048626
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192653'
---
## Acerca de {% data variables.product.prodname_dotcom %} para empresas

{% data variables.product.prodname_dotcom %} es una plataforma de desarrollo completa para compilar, escalar y ofrecer software seguro. Las empresas usan nuestro conjunto de productos para respaldar todo el ciclo de vida de desarrollo de software, lo que aumenta la velocidad de desarrollo y mejora la calidad del código.

Los desarrolladores pueden almacenar y controlar las versiones del código fuente en repositorios, mediante problemas y proyectos para planear y realizar un seguimiento de su trabajo. Pueden codificar en un entorno de desarrollo hospedado en la nube, {% data variables.product.prodname_github_codespaces %} y, después, revisar los cambios de código entre sí con solicitudes de incorporación de cambios, mediante características de seguridad de código para mantener los secretos y vulnerabilidades fuera del código base. Por último, puedes automatizar la canalización de compilación, prueba e implementación con {% data variables.product.prodname_actions %} y hospedar paquetes de software con {% data variables.product.prodname_registry %}.

Cuando las empresas adoptan {% data variables.product.prodname_enterprise %}, su rentabilidad de la inversión (ROI) es alta. Por ejemplo, sus desarrolladores ahorran 45 minutos al día, y el tiempo de incorporación y entrenamiento se reduce en un 40 %. Para obtener más información, consulta [Impacto económico total de {% data variables.product.prodname_enterprise %}](https://resources.github.com/forrester/).

Para simplificar la administración de todas las fases del ciclo de vida de desarrollo de software, proporcionamos un único punto de visibilidad y administración denominado cuenta empresarial. Las cuentas empresariales permiten administrar la facturación y la configuración, aplicar la directiva y auditar a las personas con acceso a los recursos de la empresa. Para obtener más información, consulta "[Acerca de las cuentas de empresa](/admin/overview/about-enterprise-accounts)".

Opcionalmente, puedes agregar características adicionales de seguridad de código con {% data variables.product.prodname_GH_advanced_security %} y opciones de soporte técnico mejoradas con {% data variables.contact.premium_support %}. Para obtener más información, consulta "[Acerca de {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security) y "[Acerca de {% data variables.contact.premium_support %}]({% ifversion ghae %}/enterprise-cloud@latest{% endif %}/support/learning-about-github-support/about-github-premium-support){% ifversion ghae %}" en la documentación de {% data variables.product.prodname_ghe_cloud %}.{% else %}."{% endif %}

## Acerca de las opciones de implementación

Al comprar {% data variables.product.prodname_enterprise %}, obtienes acceso a {% data variables.product.prodname_ghe_cloud %} y {% data variables.product.prodname_ghe_server %}. {% data variables.product.prodname_ghe_cloud %} es un conjunto de funciones avanzadas en {% data variables.product.prodname_dotcom_the_website %}, mientras que {% data variables.product.prodname_ghe_server %} es una plataforma autohospedada. Para obtener más información, consulta "[Acerca de {% data variables.product.prodname_ghe_server %}]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/overview/about-github-enterprise-server){% ifversion not ghes %}" en la documentación de {% data variables.product.prodname_ghe_server %}.{% else %}".{% endif %}

En el caso de {% data variables.product.prodname_ghe_cloud %}, puedes permitir a los desarrolladores crear y administrar sus propias cuentas personales, o bien puedes usar {% data variables.product.prodname_emus %}, lo que permite crear y administrar las cuentas de usuario para los desarrolladores. Para obtener más información, consulta "[Acerca de la autenticación para tu empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)".

{% data variables.product.prodname_ghe_managed %} se encuentra en disponibilidad limitada para los clientes seleccionados con estrictos requisitos de seguridad y cumplimiento. Para obtener más información, consulta "[Acerca de {% data variables.product.prodname_ghe_managed %}](/github-ae@latest/admin/overview/about-github-ae){% ifversion not ghae %}" en la documentación de {% data variables.product.prodname_ghe_managed %}.{% else %}".{% endif %}

Puedes beneficiarte de la potencia de {% data variables.product.prodname_dotcom_the_website %} aunque uses {% data variables.product.prodname_ghe_server %} o {% data variables.product.prodname_ghe_managed %}. Para ello, habilita {% data variables.product.prodname_github_connect %}, lo que te permite configurar características y flujos de trabajo adicionales, como {% data variables.product.prodname_dependabot_alerts %} para dependencias no seguras.{% ifversion ghec %}

- "[Acerca de {% data variables.product.prodname_github_connect %}](/enterprise-server@latest/admin/configuration/configuring-github-connect/about-github-connect)" en la documentación de {% data variables.product.prodname_ghe_server %}
- "[Acerca de {% data variables.product.prodname_github_connect %}](/github-ae@latest/admin/configuration/configuring-github-connect/about-github-connect)" en la documentación de {% data variables.product.prodname_ghe_managed %} {% else %}. Para obtener más información, consulta "[Acerca de {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect)".{% endif %}

## Información adicional

- [Comparación de {% data variables.product.prodname_dotcom %} con otras soluciones de DevOps](https://resources.github.com/devops/tools/compare/) en Recursos de {% data variables.product.company_short %}
