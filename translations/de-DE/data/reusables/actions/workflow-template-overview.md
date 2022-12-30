---
ms.openlocfilehash: 51d4b7e23640eafc3bd7830b4ce8f4b6d209f40f
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "145089108"
---
{% data variables.product.prodname_dotcom %} bietet vordefinierte Startworkflows, die du anpassen kannst, um deinen eigenen Continuous Integration-Workflow zu erstellen. {% data variables.product.product_name %} analysiert deinen Code und zeigt dir einen CI-Startworkflow an, der für dein Repository nützlich sein könnte. Wenn Dein Repository beispielsweise Node.js-Code enthält, werden Vorschläge für Node.js-Projekte angezeigt. Du kannst Startworkflows als Ausgangspunkt verwenden, um deinen eigenen benutzerdefinierten Workflow zu erstellen, oder du kannst sie unverändert übernehmen.

Eine vollständige Liste aller Startworkflows findest du im {% ifversion fpt or ghec %}[actions/starter-workflows](https://github.com/actions/starter-workflows)-Repository{% else %} `actions/starter-workflows`-Repository in {% data variables.product.product_location %}{% endif %}.
