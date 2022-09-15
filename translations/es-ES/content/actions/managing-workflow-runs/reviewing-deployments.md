---
title: Revisar los despliegues
intro: Puedes aprobar o rechazar jobs que estén esperando una revisión.
product: '{% data reusables.gated-features.environments %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 6a01d89c0ad5355bd5e6774b1bdf5f19dd471df2
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147718105'
---
## Acerca de las revisiones requeridas en los flujos de trabajo

Los jobs que referencian un ambiente configurado con revisores requeridos esperarán por una aprobación antes de comenzar. Mientras que un job espera su revisión, tendrá un estado de "Waiting". Si un job no se aprueba dentro de 30 días, la ejecución del flujo de trabajo se cancelará automáticamente.

Para más información sobre los entornos y las aprobaciones necesarias, consulta "[Uso de entornos para la implementación](/actions/deployment/using-environments-for-deployment)". Para información sobre cómo revisar las implementaciones con la API REST, consulta "[Ejecuciones de flujo de trabajo](/rest/reference/actions#workflow-runs)".

## Aprobar o rechazar un job

1. Navega a la ejecución de flujo de trabajo que requiere revisión. Para obtener más información sobre cómo desplazarse por una ejecución de flujo de trabajo, consulte "[Visualizar el historial de ejecución del flujo de trabajo](/actions/managing-workflow-runs/viewing-workflow-run-history)".
2. Haga clic en **Review deployments** (Revisar implementaciones). 
   ![Revisión de implementaciones](/assets/images/actions-review-deployments.png)
3. Selecciona el(los) ambiente(s) para aprobar o rechazar. Opcionalmente, deja un comentario.
   ![Aprobación de implementaciones](/assets/images/actions-approve-deployments.png)
4. Aprueba o rechaza:
   - Para aprobar el trabajo, haga clic en **Approve and deploy** (Aprobar e implementar). Una vez que el job se apruebe (y que cualquier otra regla de protección del ambiente haya pasado), el job procederá. En este punto, el job puede acceder a cualquier secreto que esté almacenado en el ambiente.
   - Para rechazar el trabajo, haga clic en **Reject** (Rechazar). Si se rechaza un job, el flujo de trabajo fallará.
