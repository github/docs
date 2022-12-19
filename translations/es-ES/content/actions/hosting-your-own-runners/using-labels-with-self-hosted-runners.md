---
title: Uso de etiquetas con ejecutores autohospedados
intro: Puedes utilizar etiquetas para organizar tus ejecutores auto-hospedados según sus características.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
shortTitle: Label runners
ms.openlocfilehash: 3b26db5c8b6494ebb63cc3ce9cc9a0109bac4545
ms.sourcegitcommit: 929818065a8545476e4cf8e2cab6517f40345ef0
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163256'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

Para obtener información sobre cómo usar etiquetas a fin de enrutar trabajos a tipos específicos de ejecutores autohospedados, vea "[Uso de ejecutores autohospedados en un flujo de trabajo](/actions/hosting-your-own-runners/using-self-hosted-runners-in-a-workflow)". {% ifversion target-runner-groups %} También puedes enrutar los trabajos a los ejecutores de un grupo específico. Para más información, consulta "[Elegir un ejecutor para un job](/actions/using-jobs/choosing-the-runner-for-a-job#targeting-runners-in-a-group)". {% endif %}

{% data reusables.actions.self-hosted-runner-management-permissions-required %}

## Crear una etiqueta personalizada

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %} {% data reusables.actions.settings-sidebar-actions-runner-selection %}
 1. En la sección de "Etiquetas", haz clic en {% octicon "gear" aria-label="The Gear icon" %}.
 1. En el campo "Buscar o crear una etiqueta", escriba el nombre de la etiqueta nueva y haga clic en **Crear etiqueta**.
 La etiqueta personalizada se creará y asignará al ejecutor auto-hospedado. Las etiquetas personalizadas pueden eliminarse de los ejecutores auto-hospedados, pero actualmente no pueden eliminarse manualmente. {% data reusables.actions.actions-unused-labels %} {% elsif ghae or ghes < 3.4 %} {% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %} {% data reusables.actions.self-hosted-runner-list %} {% data reusables.actions.self-hosted-runner-list-group %} {% data reusables.actions.self-hosted-runner-labels-view-assigned-labels %}
1. En el campo "Filtrar etiquetas", escriba el nombre de la etiqueta nueva y haga clic en **Crear etiqueta**.
    ![Adición de la etiqueta de ejecutor](/assets/images/help/settings/actions-add-runner-label.png)
    
La etiqueta personalizada se creará y asignará al ejecutor auto-hospedado. Las etiquetas personalizadas pueden eliminarse de los ejecutores auto-hospedados, pero actualmente no pueden eliminarse manualmente. {% data reusables.actions.actions-unused-labels %} {% endif %}

## Asignar una etiqueta a un ejecutor auto-hospedado

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %} {% data reusables.actions.settings-sidebar-actions-runner-selection %} {% data reusables.actions.runner-label-settings %}
  1. Para asignar una etiqueta a tu ejecutor auto-hospedado, en el campo de "Encuentra o crea una etiqueta", haz clic en ella. {% elsif ghae or ghes < 3.4 %} {% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %} {% data reusables.actions.self-hosted-runner-list %} {% data reusables.actions.self-hosted-runner-list-group %} {% data reusables.actions.self-hosted-runner-labels-view-assigned-labels %}
1. Da clic en la etiqueta para asignarla a tu ejecutor auto-hospedado. {% endif %}

## Eliminar una etiqueta personalizada de un ejecutor auto-hospedado

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %} {% data reusables.actions.settings-sidebar-actions-runner-selection %} {% data reusables.actions.runner-label-settings %}
  1. En el campo "Buscar o crear una etiqueta", las etiquetas asignadas se marcan con el icono {% octicon "check" aria-label="The Check icon" %}. Haz clic en una etiqueta marcada para desasignarla de tu ejecutor auto-hospedado. {% elsif ghae or ghes < 3.4 %} {% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %} {% data reusables.actions.self-hosted-runner-list %} {% data reusables.actions.self-hosted-runner-list-group %} {% data reusables.actions.self-hosted-runner-labels-view-assigned-labels %}
1. Da clic en la etiqueta asignada para eliminarla de tu ejecutor auto-hospedado. {% data reusables.actions.actions-unused-labels %} {% endif %}

## Asignación de etiquetas mediante programación

Puedes asignar etiquetas a un ejecutor autohospedado mediante programación después de crearlo o durante su configuración inicial.

* Para asignar etiquetas a un ejecutor autohospedado existente mediante programación, debes usar la API REST. Para obtener más información, consulta la API REST de "[ejecutores autohospedados](/rest/actions/self-hosted-runners)".
* Para asignar etiquetas a un ejecutor autohospedado mediante programación durante la configuración inicial de este, puedes pasar nombres de etiqueta al script `config` mediante el parámetro `labels`.

  {% note %}
  
  **Nota:** No puedes usar el script `config` para asignar etiquetas a un ejecutor autohospedado existente.
  
  {% endnote %}

  Por ejemplo, este comando asigna una etiqueta denominada `gpu` al configurar un nuevo ejecutor autohospedado:

  ```
  ./config.sh --url <REPOSITORY_URL> --token <REGISTRATION_TOKEN> --labels gpu
  ```

  La etiqueta se creará si no existe. También puede usar este enfoque para asignar las etiquetas predeterminadas a los ejecutores, como `x64` o `linux`. Cuando se asignan etiquetas predeterminadas utilizando el script de configuración, {% data variables.product.prodname_actions %} las acepta como asignadas y no valida si el ejecutor está utilizando ese sistema operativo o arquitectura.

  Puedes utilizar separación por comas para asignar etiquetas múltiples. Por ejemplo:

  ```
  ./config.sh --url <REPOSITORY_URL> --token <REGISTRATION_TOKEN> --labels gpu,x64,linux
  ```

  {% note %}

  ** Nota:** Si reemplazaste un ejecutor existente, entonces deberás volver a asignar cualquier etiqueta personalizada.

  {% endnote %}
