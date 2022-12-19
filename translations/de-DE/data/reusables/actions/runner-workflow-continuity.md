---
ms.openlocfilehash: d810c1d04e070750ead1b64ff62e54842a86feb1
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "145068058"
---
Wenn {% data variables.product.prodname_actions %}-Dienste vorübergehend nicht verfügbar sind, wird eine Workflowausführung verworfen, wenn sie nicht innerhalb von 30 Minuten nach dem Auslösen in die Warteschlange gestellt wurde. Wenn beispielsweise ein Workflow ausgelöst wird und die {% data variables.product.prodname_actions %}-Dienste für 31 Minuten (oder länger) nicht verfügbar sind, wird die Workflowausführung nicht verarbeitet.
