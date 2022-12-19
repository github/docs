---
title: Monitorear tus jobs actuales
intro: 'Supervisa cómo los ejecutores hospedados en {% data variables.product.prodname_dotcom %} están procesando trabajos en tu organización o empresa e identifica las restricciones relacionadas.'
versions:
  feature: github-runner-dashboard
shortTitle: Monitoring your current jobs
ms.openlocfilehash: 86f1551e1908106126516b489c436922b15ce60d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145121065'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Visualización de trabajos activos en la organización o la empresa

Puede obtener una lista de todos los trabajos que se ejecutan actualmente en ejecutores hospedados en {% data variables.product.prodname_dotcom %} en la organización o la empresa.

{% data reusables.actions.github-hosted-runners-navigate-to-repo-org-enterprise %} {% data reusables.actions.github-hosted-runners-table-entry %}
1. Revise la sección "Trabajos activos", que contiene una lista de todos los trabajos que se ejecutan actualmente en ejecutores hospedados en {% data variables.product.prodname_dotcom %}.

  ![Captura de pantalla de la lista de trabajos activos](/assets/images/help/settings/actions-runner-active-jobs.png)

## Visualización de trabajos en cola en la organización o la empresa

Los ejecutores hospedados en {% data variables.product.prodname_dotcom %} permiten ejecutar trabajos simultáneamente y el número máximo de trabajos simultáneos variará en función del plan. Si alcanza el número máximo de trabajos simultáneos, los nuevos trabajos comenzarán a entrar en una cola. Para más información sobre el número de trabajos simultáneos disponibles en el plan, vea "[Límites de uso, facturación y administración](/actions/learn-github-actions/usage-limits-billing-and-administration)".

En el procedimiento siguiente se muestra cómo comprobar el número máximo de trabajos simultáneos que se pueden ejecutar.

{% data reusables.actions.github-hosted-runners-navigate-to-repo-org-enterprise %} {% data reusables.actions.github-hosted-runners-table-entry %}
1. Revise la sección "Todo el uso de trabajos", en la que se enumera el número de trabajos activos y el número máximo de trabajos que puede ejecutar. En este ejemplo, hay `9` trabajos en ejecución, de un máximo de `180`.
  ![Captura de pantalla de los trabajos máximos para una cuenta](/assets/images/help/settings/github-hosted-runners-max-jobs.png)
