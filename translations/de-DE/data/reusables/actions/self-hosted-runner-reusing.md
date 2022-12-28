---
ms.openlocfilehash: a92a36101675ea033048f97465a87571b23ee9ef
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "145091303"
---
Wenn du keinen Zugriff auf das Repository {% ifversion fpt %} oder die Organisation {% elsif ghes or ghec or ghae %}, Organisation oder Enterprise {% endif %} in {% data variables.product.product_name %} hast, um einen Runner zu entfernen, aber den Runner-Computer wieder verwenden möchtest, kannst du alternativ die `.runner`-Datei im Verzeichnis der selbst gehosteten Runner-Anwendung löschen. Dadurch kann der Runner registriert werden, ohne die Anwendung für selbst-gehostete Runner erneut herunterladen zu müssen.
