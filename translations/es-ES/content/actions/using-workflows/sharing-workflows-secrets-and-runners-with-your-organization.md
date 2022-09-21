---
title: 'Compartir flujos de trabajo, secretos y ejecutores con tu organización'
shortTitle: Sharing workflows with your organization
intro: 'Aprende cómo puedes utilizar las características de la organización para colaborar con tu equipo al compartir flujos de trabajo, secretos y ejecutores auto-hospedados.'
redirect_from:
  - /actions/learn-github-actions/sharing-workflows-with-your-organization
  - /actions/learn-github-actions/sharing-workflows-secrets-and-runners-with-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
ms.openlocfilehash: bf80624fe1118d424a57f7c22efab6368c914819
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884265'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Información general

Si necesitas compartir flujos de trabajo y otras características de {% data variables.product.prodname_actions %} con tu equipo, entonces considera colaborar dentrod e una organización de {% data variables.product.prodname_dotcom %}. Una organización te permite almacenar centralmente y administrar secretos, artefactos y ejecutores auto-hospedados. También puede crear flujos de trabajo iniciales en el repositorio `.github` y compartirlos con otros usuarios en su organización.

## Uso compartido de {% ifversion internal-actions %}acciones y {% endif %}flujos de trabajo

{% ifversion internal-actions %} Puedes compartir acciones individuales y flujos de trabajo completos con tu organización, independientemente de si son accesibles públicamente. Puedes reutilizar las acciones y flujos de trabajo exactamente al referenciarlos en tu archivo de flujo de trabajo y puedes crear flujos de trabajo iniciales que proporcionen plantillas para flujos nuevos.
{% else %} Su organización puede compartir flujos de trabajo al reutilizarlos exactamente o creando flujos de trabajo que proporcionen plantillas para otros nuevos.
{% endif %}

{% ifversion internal-actions %}
### Compartir acciones con tu empresa

{% data reusables.actions.internal-actions-summary %} {% endif %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
### Reutilización de flujos de trabajo

{% data reusables.actions.reusable-workflows %} {% endif %}

### Utilizar flujos de trabajo iniciales

{% data reusables.actions.workflow-organization-templates %} Para obtener más información, vea "[Creación de flujos de trabajo de inicio para su organización](/actions/using-workflows/creating-starter-workflows-for-your-organization)".

## Compartir secretos dentro de una organización

Puedes admnistrar tus secretos centralmente dentro de una organización y hacerlos disponibles para repositorios específicos. Esto también significa que púedes actualizar un secreto en una ubicación y hacer que el cambio aplique a todos los flujos de trabajo del repositorio que lo utilicen.

Cuando creas un secreto en una organización, puedes utilizar una política para limitar el acceso de los repositorios a este. Por ejemplo, puedes otorgar acceso a todos los repositorios, o limitarlo a solo los repositorios privados o a una lista específica de estos.

{% data reusables.actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.actions.sidebar-secret %}
1. Haga clic en **New secret** (Nuevo secreto).
1. Escriba un nombre para su secreto en el cuadro de entrada **Name** (Nombre).
1. Introduzca el valor del secreto en **Value**.
1. En la lista desplegable **Repository access** (Acceso al repositorio), elija una directiva de acceso.
1. Haga clic en **Add Secret**.

## Compartir ejecutores auto-hospedados dentro de una organización

Los administradores de las organizaciones pueden agregar sus ejecutores auto-hospedados a grupos y luego crear políticas que controlen qué repositorios pueden acceder al grupo.

Para más información, vea "[Administración del acceso a ejecutores autohospedados mediante grupos](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)".


## Pasos siguientes

Para continuar el aprendizaje acerca de {% data variables.product.prodname_actions %}, vea "[Creación de flujos de trabajo de inicio para su organización](/actions/using-workflows/creating-starter-workflows-for-your-organization)".
