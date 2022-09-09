---
ms.openlocfilehash: 5a6618e9b13483c7d3c647a8cb5d635225e59280
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145114418"
---
Cuando se ejecuta un trabajo de flujo de trabajo que hace referencia a un entorno, crea un objeto de implementación con la propiedad `environment` establecida en el nombre del entorno. A medida que avanza el flujo de trabajo, también crea objetos de estado de implementación con la propiedad `environment` establecida en el nombre del entorno, la propiedad `environment_url` establecida en la URL del entorno (si se ha especificado en el flujo de trabajo) y la propiedad `state` establecida en el estado del trabajo.
