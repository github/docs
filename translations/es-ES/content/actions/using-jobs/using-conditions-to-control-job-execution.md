---
title: Utilizar condiciones para controlar la ejecución de jobs
shortTitle: Using conditions to control job execution
intro: Prevenir que un job se ejecute a menos de que tus condiciones se cumplan.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 4
ms.openlocfilehash: 2f39111eb4dca06231b582d0d955d2ea68088926
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145120986'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Información general

{% note %}

**Nota**: Si se omite un trabajo, notificará su estado como "Correcto". No impedirá que una solicitud de incorporación de cambios se combine, incluso si es una comprobación necesaria.

{% endnote %}

{% data reusables.actions.jobs.section-using-conditions-to-control-job-execution %}

Verías el siguiente estado en un trabajo omitido:

![Detalles de una ejecución requerida que se ha omitido](/assets/images/help/repository/skipped-required-run-details.png)
