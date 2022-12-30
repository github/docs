---
ms.openlocfilehash: 142794535bf66481cbdf5ec8430ed18ff9a0034d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "147080435"
---
Se puede hacer referencia a flujos de trabajo reutilizables de repositorios públicos mediante SHA, una etiqueta de versión o un nombre de rama. Para más información, consulte ["Llamar a un flujo de trabajo reutilizable".](/actions/using-workflows/reusing-workflows#calling-a-reusable-workflow) 

Cuando se vuelve a ejecutar un flujo de trabajo que usa un flujo de trabajo reutilizable y la referencia no es SHA, hay algunos comportamientos que se deben tener en cuenta:

* Al volver a ejecutar todos los trabajos de un flujo de trabajo, se usará el flujo de trabajo reutilizable de la referencia especificada. Para más información sobre cómo volver a ejecutar todos los trabajos de un flujo de trabajo, consulte ["Volver a ejecutar todos los jobs en un flujo de trabajo"](/actions/managing-workflow-runs/re-running-workflows-and-jobs#re-running-all-the-jobs-in-a-workflow).
* Volver a ejecutar trabajos con errores o un trabajo específico en un flujo de trabajo usará el flujo de trabajo reutilizable desde el mismo SHA de confirmación del primer intento. Para más información sobre cómo volver a ejecutar los trabajos fallidos de un flujo de trabajo, consulta ["Volver a ejecutar todos los jobs fallidos en un flujo de trabajo"](/actions/managing-workflow-runs/re-running-workflows-and-jobs#re-running-failed-jobs-in-a-workflow). Para más información sobre cómo volver a ejecutar un trabajo específico en un flujo de trabajo, consulta ["Volver a ejecutar un job específico en un flujo de trabajo"](/actions/managing-workflow-runs/re-running-workflows-and-jobs#re-running-a-specific-job-in-a-workflow).
