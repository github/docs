---
ms.openlocfilehash: 5a6618e9b13483c7d3c647a8cb5d635225e59280
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "145103804"
---
Wenn ein Workflowauftrag, der auf eine Umgebung verweist, erstellt er ein Bereitstellungsobjekt mit der Eigenschaft `environment`, die auf den Namen Deiner Umgebung festgelegt ist. Im Verlauf des Workflows werden außerdem Bereitstellungsstatusobjekte erstellt, deren Eigenschaft `environment` auf den Namen Deiner Umgebung, deren Eigenschaft `environment_url` auf die URL der Umgebung (falls im Workflow angegeben) und deren Eigenschaft `state` auf den Status des Auftrags gesetzt ist.
