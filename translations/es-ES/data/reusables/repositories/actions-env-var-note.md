---
ms.openlocfilehash: 81a94e9dce7fe1354dc1a32f0540ef90a4fe8dcb
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: "145118386"
---
Cuando se define más de una variable de ambiente con el mismo nombre, {% data variables.product.prodname_dotcom %} utiliza la más específica. Por ejemplo, una variable de ambiente definida en un paso anulará aquellas de los jobs y flujos de trabajo con el mismo nombre, mientras ejecuta el paso. Una variable definida para un trabajo anulará aquella de un flujo de trabajo si tienen el mismo nombre, mientras ejecuta el job.
