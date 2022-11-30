---
title: Borrar una ejecución de flujo de trabajo
intro: Puedes borrar una ejecución de flujo de trabajo que se haya completado o que tenga más de dos semanas de antigüedad.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 54e494b2cff73650c0b9d5e46c8ce2772926831f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145117193'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %}
1. Para eliminar una ejecución de flujo de trabajo, use el menú desplegable {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} y seleccione **Eliminar ejecución de flujo de trabajo**.

    ![Borrar una ejecución de flujo de trabajo](/assets/images/help/settings/workflow-delete-run.png)
2. Revise el mensaje de confirmación y haga clic en **Sí, eliminar permanentemente esta ejecución de flujo de trabajo**.

    ![Borrar una confirmación de ejecución de flujo de trabajo](/assets/images/help/settings/workflow-delete-run-confirmation.png)
