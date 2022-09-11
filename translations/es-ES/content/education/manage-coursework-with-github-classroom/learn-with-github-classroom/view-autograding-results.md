---
title: Ver los resultados de calificaciones automáticas
intro: Puedes ver los resultados de las calificaciones automáticas dentro del repositorio de tu tarea.
versions:
  fpt: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/reviewing-auto-graded-work-students
  - /education/manage-coursework-with-github-classroom/view-autograding-results
ms.openlocfilehash: ea4de9b0122e39f5ecb4d960d4f0ee8c94ba2ee5
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145119553'
---
## Acerca de las calificaciones automáticas

Tu maestro puede configurar las pruebas que verifican tu trabajo automáticamente cuando subres información a un repositorio de tarea en {% data variables.product.product_location %}.

Si eres un alumno y tu instructor configuró las calificaciones automáticas para tu tarea en {% data variables.product.prodname_classroom %}, encontrarás los resultados de las pruebas de calificación automática a lo largo de tu repositorio de tareas. Si todas las pruebas de una confirmación son exitosas, verás una marca verde. Si cualquiera de las pruebas de una confirmación falla, verás una X roja. Puedes ver las bitácoras detalladas si das clic en la marca verde o en la X roja.

## Visualizr los resultados de calificaciones automáticas para un repositorio de tarea

{% data variables.product.prodname_classroom %} utiliza {% data variables.product.prodname_actions %} para ejecutar las pruebas de calificación automática. Para obtener más información sobre cómo ver los registros de una prueba de evaluación automática, vea "[Usar registros de ejecución de flujo de trabajo](/actions/managing-workflow-runs/using-workflow-run-logs#viewing-logs-to-diagnose-failures)".

La pestaña **Actions** (Acciones) muestra el historial completo de series de pruebas.

![Pestaña "Actions" (Acciones) con la opción "All workflows" (Todos los flujos de trabajo) seleccionada](/assets/images/help/classroom/autograding-actions-tab.png)

Puedes dar clic en una ejecución de prueba específica para revisar la bitácora de salida, como en los errores de compilación y fallos de pruebas.

![Los registros de resultados de las pruebas de "Flujo de trabajo de evaluación automática de {% data variables.product.prodname_classroom %} en {% data variables.product.prodname_actions %} ](/assets/images/help/classroom/autograding-actions-logs.png)

## Información adicional

- "[Acerca de las comprobaciones de estado](/github/collaborating-with-issues-and-pull-requests/about-status-checks)"
