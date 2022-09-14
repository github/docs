---
ms.openlocfilehash: 27c764ba249fba171877221492b486d59bde7230
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "145114889"
---
Los activadores de los flujos de trabajo son eventos que ocasionan que se ejecute un flujo de trabajo. Estos eventos pueden ser:

- Eventos que ocurren en el repositorio de tu flujo de trabajo
- Eventos que se producen fuera de {% data variables.product.product_name %} y desencadenan un evento `repository_dispatch` en {% data variables.product.product_name %}
- Tiempos programados
- Manual

Por ejemplo, puedes configurar tu flujo de trabajo para que se ejecute cuando se realiza una subida a la rama predeterminada de tu repositorio, cuando se crea un lanzamiento o cuando se abre una propuesta.
