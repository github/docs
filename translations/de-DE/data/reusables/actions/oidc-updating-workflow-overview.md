---
ms.openlocfilehash: a2d715cc94af2755d4161ef0715314caa0e82047
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "145089395"
---
Zum Hinzufügen der OIDC-Integration zu deinen Cloudbereitstellungsworkflows musst du die folgenden Codeänderungen vornehmen:

- Erteile die Berechtigung zum Abrufen von Token vom OIDC-Anbieter für {% data variables.product.prodname_dotcom %}:
  - Der Workflow benötigt eine `permissions`-Einstellung mit einem definierten `id-token`-Wert. Dadurch kannst du OIDC-Token aus jedem Auftrag im Workflow abrufen. Wenn du nur ein OIDC-Token für einen einzelnen Auftrag abrufen musst, kann diese Berechtigung innerhalb dieses Auftrags festgelegt werden.
- Fordere das JSON-Webtoken (JWT) vom OIDC-Anbieter für {% data variables.product.prodname_dotcom %} an, und übergib es an deinen Cloudanbieter, um ein Zugriffstoken zu erhalten:
  - Du kannst das Actions-Toolkit verwenden, um die Token in deinem Auftrag abzurufen, oder du kannst die offizielle Aktion verwenden, die von deinem Cloudanbieter erstellt wurde, um das JWT abzurufen und das Zugriffstoken aus der Cloud zu empfangen.
