---
ms.openlocfilehash: 5466f29d4bb496b6451846f80a90f7b0471f8cda
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "145066211"
---
Jede Person kann ihre Autorisierung einer GitHub-App über ihre [Seite mit GitHub-Kontoeinstellungen](https://github.com/settings/apps/authorizations) widerrufen. Durch Widerrufen der Autorisierung einer GitHub-App wird die GitHub-App nicht deinstalliert. Du solltest deine GitHub-App so programmieren, dass sie nach dem Empfang dieses Webhooks die API nicht mehr im Auftrag der Person aufruft, die das Token widerrufen hat. Wenn deine GitHub-App ein widerrufenes Zugriffstoken weiterhin verwendet, erhält sie den Fehler `401 Bad Credentials`.
