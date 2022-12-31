---
title: Acerca de las GitHub Actions para las empresas
shortTitle: About GitHub Actions
intro: 'Las {% data variables.product.prodname_actions %} pueden mejorar la productividad de los desarrolladores al automatizar el ciclo de desarrollo de software de tu empresa.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Actions
  - Enterprise
ms.openlocfilehash: 682e5c4bc4b17105df59c4e5474bf46ec11fe211
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160748'
---
## Acerca de {% data variables.product.prodname_actions %} para empresas

{% data reusables.actions.about-actions-for-enterprises %}

| Tarea | Más información |
| ---- | ---------------- |
| Prueba y crea tu aplicación automáticamente | "[Acerca de la integración continua](/actions/automating-builds-and-tests/about-continuous-integration)" | 
| Implementación de aplicación | "[Acerca de la implementación continua](/actions/deployment/about-deployments/about-continuous-deployment)" |
| Empaca código segura y automáticamente en los artefactos y contenedores | "[Acerca del empaquetado con {% data variables.product.prodname_actions %}](/actions/publishing-packages/about-packaging-with-github-actions)" |
| Automatiza tus tareas de administración de proyectos | "[Uso de {% data variables.product.prodname_actions %} para la administración de proyectos](/actions/managing-issues-and-pull-requests/using-github-actions-for-project-management)" |

Las {% data variables.product.prodname_actions %} ayudan a que tu equipo trabaje más rápido a escala. Cuando los repositorios grandes comienzan a utilizar {% data variables.product.prodname_actions %}, los equipos fusionan significativamente más solicitudes de cambios por día y estas también se fusionan significativamente más rápido. Para más información, vea "[Escritura y envío de código más rápido](https://octoverse.github.com/2021/writing-code-faster/#scale-through-automation)" en el estado de Octoverse.

Puedes crear tus propias automatizaciones únicas o puedes utilizar y adaptar flujos de trabajo desde nuestro ecosistema de más de 10,000 acciones creadas por los líderes de la industria y por la comunidad de código abierto. {% ifversion ghec %}Para obtener más información, consulta "[Búsqueda y personalización de acciones](/actions/learn-github-actions/finding-and-customizing-actions)".{% else %}Puedes restringir a los desarrolladores a que usen acciones que existan en {% data variables.location.product_location %}, o bien puedes permitir que los desarrolladores accedan a acciones en {% data variables.product.prodname_dotcom_the_website %}. Para más información, vea "[Acerca del uso de acciones en la empresa](/admin/github-actions/managing-access-to-actions-from-githubcom/about-using-actions-in-your-enterprise)".{% endif %}

{% data variables.product.prodname_actions %} es amigable para los desarrolladores, ya que se integra directamente en la experiencia familiar de {% data variables.product.product_name %}.

{% ifversion ghec %}Puedes disfrutar la convivencia de los ejecutores hospedados en {% data variables.product.company_short %}, los cuales mantiene y mejora {% data variables.product.company_short %}, o puedes{% else %}Puedes{% endif %} controlar tu propia infraestructura de IC/DC utilizando ejecutores auto-hospedados. Los ejecutores auto-hospedados te permiten determinar el ambiente y recursos exactos que completan tus compilaciones, pruebas y despliegues sin exponer tu ciclo de desarrollo de software a la internet. Para más información, vea {% ifversion ghec %}"[Acerca de los ejecutores hospedados en {% data variables.product.company_short %}](/actions/using-github-hosted-runners/about-github-hosted-runners)" y{% endif %} "[Acerca de los ejecutores hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)".

Las {% data variables.product.prodname_actions %} proprocionan un control mayor sobre los despliegues. Por ejemplo, puedes usar entornos a fin de requerir aprobación para que un trabajo pueda continuar, restringir qué ramas pueden desencadenar un flujo de trabajo o limitar el acceso a los secretos.{% ifversion ghec or ghes > 3.4 %} Si tus flujos de trabajo necesitan acceder a los recursos desde un proveedor de servicios en la nube que sea compatible con OpenID Connect (OIDC), puedes configurar tus flujos de trabajo para que se autentiquen directamente con dicho proveedor. OIDC proporciona beneficios de seguridad tales como el eliminar la necesidad de almacenar credenciales como secretos de larga duración. Para más información, vea "[Acerca del fortalecimiento de la seguridad con OpenID Connect](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)".{% endif %}

Las {% data variables.product.prodname_actions %} también incluyen herramientas para regir el ciclo de desarrollo de software de tu empresa y satisfacer las obligaciones de cumplimiento. Para más información, vea "[Aplicación de directivas para {% data variables.product.prodname_actions %} en la empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise)".

## Acerca de comenzar con las {% data variables.product.prodname_actions %}

{% data reusables.actions.introducing-enterprise %}

{% data reusables.actions.migrating-enterprise %}

{% ifversion ghes %} {% data reusables.actions.ghes-actions-not-enabled-by-default %} Cuando termine la planificación, puede seguir las instrucciones para habilitar {% data variables.product.prodname_actions %}. Por ejemplo, podrías necesitar actualizar los recursos de CPU y memoria para {% data variables.location.product_location %}. Para más información, vea "[Introducción a {% data variables.product.prodname_actions %} para {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server)".

{% else %} Cuando termine la planificación, puede seguir las instrucciones para empezar a usar {% data variables.product.prodname_actions %}. Para más información, vea {% ifversion ghec %}"[Introducción a {% data variables.product.prodname_actions %} para {% data variables.product.prodname_ghe_cloud %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-cloud)".{% elsif ghae %}"[Introducción a {% data variables.product.prodname_actions %} para {% data variables.product.prodname_ghe_managed %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-ae)".{% endif %} {% endif %}

## Información adicional

- "[Descripción de {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions)"{% ifversion ghec %}
- "[Acerca de la facturación para {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)"{% endif %}
