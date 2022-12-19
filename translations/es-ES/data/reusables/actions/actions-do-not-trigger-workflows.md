---
ms.openlocfilehash: 9c62e7c7c015ddaf1fb84d7c27eadce9e1a42487
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145114778"
---
Al usar `GITHUB_TOKEN` del repositorio para realizar tareas, los eventos desencadenados por `GITHUB_TOKEN` no crearán una ejecución de flujo de trabajo. Esto impide que crees ejecuciones de flujo de trabajo recursivas por accidente. Por ejemplo, si una ejecución de flujo de trabajo inserta código mediante `GITHUB_TOKEN` del repositorio, un nuevo flujo de trabajo no se ejecutará incluso cuando el repositorio contenga un flujo de trabajo configurado para ejecutarse cuando se produzcan eventos `push`.
