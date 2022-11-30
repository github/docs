---
ms.openlocfilehash: 4efb2b0e214ee93dc8815055b005e11ea29534bb
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: "148107677"
---
Wenn du einen **HTTP-Proxyserver** auf {% data variables.location.product_location %} konfiguriert hast:

  - Du musst der **HTTP-Proxyausschluss**-Liste `localhost` und `127.0.0.1` hinzufügen.
  - Wenn dein externer Speicherort nicht routingfähig ist, musst du der Ausschlussliste auch die URL zu deinem externen Speicher hinzufügen.

  Weitere Informationen zum Ändern der Proxyeinstellungen findest du unter [Konfigurieren eines ausgehenden Webproxyservers](/admin/configuration/configuring-an-outbound-web-proxy-server).
