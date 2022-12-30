---
title: Configuración de la revisión de dependencias para el dispositivo
shortTitle: Configuring dependency review
intro: 'Para ayudar a los usuarios a comprender los cambios de dependencias al revisar las solicitudes de incorporación de cambios, puedes habilitar, configurar y deshabilitar la revisión de dependencias para {% data variables.location.product_location %}.'
product: '{% data reusables.gated-features.dependency-review %}'
miniTocMaxHeadingLevel: 3
versions:
  feature: dependency-review-action-ghes
type: how_to
topics:
  - Advanced Security
  - Enterprise
  - Dependency review
  - Security
ms.openlocfilehash: 613f2f2bd69a90027533ff063ea0f0a44bc1f5d2
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107761'
---
## Acerca de la revisión de dependencias

{% data reusables.dependency-review.feature-overview %}  

Algunas características adicionales, como las comprobaciones de licencia, el bloqueo de las solicitudes de incorporación de cambios y la integración de CI/CD, están disponibles con la [acción de revisión de dependencias](https://github.com/actions/dependency-review-action).

## Verificar si tu licencia incluye a la {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.check-for-ghas-license %}

## Requisitos previos para la revisión de dependencias

- Una licencia para {% data variables.product.prodname_GH_advanced_security %}{% ifversion ghes %} (consulta "[Acerca de la facturación de {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)").{% endif %}

- Gráfico de dependencias habilitado para la instancia. Los administradores del sitio pueden habilitar el gráfico de dependencias a través de la consola de administración o el shell administrativo (consulta "[Habilitación del gráfico de dependencias para tu empresa](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)").
  
- {% data variables.product.prodname_github_connect %} habilitado para descargar y sincronizar vulnerabilidades de {% data variables.product.prodname_advisory_database %}. Normalmente, esto se configura como parte de la configuración de {% data variables.product.prodname_dependabot %} (consulta "[Habilitación de Dependabot para tu empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)").

## Habilitación y deshabilitación de la revisión de dependencias

Para habilitar o deshabilitar la revisión de dependencias, debes habilitar o deshabilitar el gráfico de dependencias de la instancia.

Para obtener más información, consulte "[Habilitación del gráfico de dependencias para la empresa](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)".

## Ejecución de la revisión de dependencias con {% data variables.product.prodname_actions %}

{% data reusables.dependency-review.dependency-review-action-beta-note %}

La acción de revisión de la dependencia se incluye en tu instalación de {% data variables.product.prodname_ghe_server %}. Está disponible para todos los repositorios que tienen habilitado {% data variables.product.prodname_GH_advanced_security %} y gráfico de dependencias.

{% data reusables.dependency-review.dependency-review-action-overview %}  

Los usuarios ejecutan la acción de revisión de dependencias mediante un flujo de trabajo {% data variables.product.prodname_actions %} Si aún no has configurado los ejecutores para {% data variables.product.prodname_actions %}, debes hacerlo para permitir que los usuarios ejecuten flujos de trabajo. Puedes aprovisionar ejecutores auto-hospedados a nivel de repositorio, organización o empresa. Para obtener más información, consulta "[Acerca de los ejecutores autohospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)" y "[Agregar ejecutores autohospedados](/actions/hosting-your-own-runners/adding-self-hosted-runners)".

