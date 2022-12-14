---
title: Acerca del despliegue contínuo
intro: 'Puedes crear flujos de trabajo de despliegue continuo (DC) personalizados directamente en tu repositorio de {% data variables.product.prodname_dotcom %} con {% data variables.product.prodname_actions %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
redirect_from:
  - /actions/deployment/about-continuous-deployment
topics:
  - CD
shortTitle: About continuous deployment
ms.openlocfilehash: 379afa0088f7f10302f5bf8202f5259ac4777bec
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147060142'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Acerca del despliegue contínuo

_Implementación continua_ (CD) es el procedimiento de usar la automatización para publicar e implementar actualizaciones de software. Como parte del proceso habitual de DC, el código se compila y prueba automáticamente antes del despliegue.

El despliegue continuo a menudo se empareja con una integración continua. Para más información sobre la integración continua, vea "[Acerca de la integración continua](/actions/guides/about-continuous-integration)".

## Acerca del despliegue continuo utilizando {% data variables.product.prodname_actions %}

Puedes configurar un flujo de trabajo de {% data variables.product.prodname_actions %} para desplegar tu producto de software. Para verificar que tu producto funcione conforme lo esperado, este puede compilar el código en tu repositorio y ejecutar tus pruebas antes del despliegue.

Puedes configurar tu flujo de trabajo de DC para que se ejecute cuando ocurra un evento de {% data variables.product.product_name %} (por ejemplo, cuando se sube código nuevo a la rama predeterminada de tu repositorio), en un horario establecido o cuando ocurre un evento externo que utilice el webhook de despacho. Para más información sobre cuándo se puede ejecutar el flujo de trabajo, vea "[Eventos que desencadenan flujos de trabajo](/actions/reference/events-that-trigger-workflows)".

{% data variables.product.prodname_actions %} Proporciona características que te dan más control sobre los despliegues. Por ejemplo, puedes utilizar ambientes para requerir aprobaciones para que proceda un job, restringir que ramas pueden activar un flujo de trabajo o limitar el acceso a los secretos. Puedes utilizar la simultaneidad para limitar la canalización de CD a una implementación en curso y una pendiente como máximo. Para más información sobre estas características, consulta "[Implementación con Acciones de GitHub](/actions/deployment/deploying-with-github-actions)" y "[Uso de entornos para la implementación](/actions/deployment/using-environments-for-deployment)".

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

## Utilizar OpenID connect para acceder a los recursos en la nube

{% data reusables.actions.about-oidc-short-overview %}

{% endif %}

## Flujos de trabajo iniciales y acciones de terceros

{% data reusables.actions.cd-templates-actions %}

## Información adicional

- [Desplegar con GitHub Actions](/actions/deployment/deploying-with-github-actions)
- [Uso de entornos para la implementación](/actions/deployment/using-environments-for-deployment){% ifversion fpt or ghec %}
- "[Administración de la facturación para {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions)"{% endif %}

