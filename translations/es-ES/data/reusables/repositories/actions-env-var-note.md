---
ms.openlocfilehash: 81a94e9dce7fe1354dc1a32f0540ef90a4fe8dcb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145118386"
---
Cuando se define más de una variable de ambiente con el mismo nombre, {% data variables.product.prodname_dotcom %} utiliza la más específica. Por ejemplo, una variable de ambiente definida en un paso anulará aquellas de los jobs y flujos de trabajo con el mismo nombre, mientras ejecuta el paso. Una variable definida para un trabajo anulará aquella de un flujo de trabajo si tienen el mismo nombre, mientras ejecuta el job.
