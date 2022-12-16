---
ms.openlocfilehash: 142794535bf66481cbdf5ec8430ed18ff9a0034d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147079656"
---
Les workflows réutilisables provenant de référentiels publics peuvent être référencés à l’aide d’un SHA, d’une étiquette de mise en production ou d’un nom de branche. Pour plus d’informations, consultez [« Appel d’un workflow réutilisable ».](/actions/using-workflows/reusing-workflows#calling-a-reusable-workflow) 

Lorsque vous réexécutez un workflow qui utilise un workflow réutilisable et que la référence n’est pas un SHA, il existe des comportements à prendre en compte :

* La réexécution de tous les travaux dans un workflow utilise le workflow réutilisable à partir de la référence spécifiée. Pour plus d’informations sur la réexécution de tous les travaux d’un workflow, consultez [« Ré-exécution de tous les travaux dans un workflow ».](/actions/managing-workflow-runs/re-running-workflows-and-jobs#re-running-all-the-jobs-in-a-workflow)
* La réexécution des travaux ayant échoué ou d’un travail spécifique dans un workflow utilise le workflow réutilisable à partir du même SHA de validation que lors de la première tentative. Pour plus d’informations sur la réexécution des travaux ayant échoué dans un workflow, consultez [« Réexécution des travaux ayant échoué dans un workflow ».](/actions/managing-workflow-runs/re-running-workflows-and-jobs#re-running-failed-jobs-in-a-workflow) Pour plus d’informations sur la réexécution d’un travail spécifique dans un workflow, consultez [« Réexécution d’un travail spécifique dans un workflow ».](/actions/managing-workflow-runs/re-running-workflows-and-jobs#re-running-a-specific-job-in-a-workflow)
