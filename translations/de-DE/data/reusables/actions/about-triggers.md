---
ms.openlocfilehash: 27c764ba249fba171877221492b486d59bde7230
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145104039"
---
Workflowtrigger sind Ereignisse, die dazu führen, dass ein Workflow ausgeführt wird. Dabei kann es sich um folgende Ereignisse handeln:

- Ereignisse, die im Repository deines Workflows auftreten
- Ereignisse, die außerhalb von {% data variables.product.product_name %} auftreten und ein `repository_dispatch`-Ereignis in {% data variables.product.product_name %} auslösen
- Geplante Zeiten
- Manuell

Du kannst deinen Workflow so konfigurieren, dass er ausgeführt wird, wenn ein Push an den Standardzweig deines Repositorys durchgeführt, ein Release erstellt oder ein Issue geöffnet wird.
