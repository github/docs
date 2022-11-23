---
ms.openlocfilehash: a314ace9dc0cc07e1119fa2a02c5ea45ef3a90fe
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: "147876817"
---
Der Auftrag oder die Workflowausführung erfordert eine Einstellung `permissions` mit [`id-token: write`](/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token). Du kannst das OIDC JWT-ID-Token nicht anfordern, wenn die Einstellung `permissions` für `id-token` auf `read` oder `none` festgelegt ist.

Mit der Einstellung `id-token: write` kann der JWT von {% data variables.product.prodname_dotcom %}-OIDC-Anbieter mit einer der folgenden Ansätze angefordert werden:

- Verwenden von Umgebungsvariablen auf dem Runner (`ACTIONS_ID_TOKEN_REQUEST_URL` und `ACTIONS_ID_TOKEN_REQUEST_TOKEN`).
- Verwenden von `getIDToken()` aus dem Actions-Toolkit.

Wenn du ein OIDC-Token für einen Workflow abrufen musst, können die Berechtigungen auf Workflowebene festgelegt werden. Beispiel:

```yaml{:copy}
permissions:
  id-token: write # This is required for requesting the JWT
  contents: read  # This is required for actions/checkout
```

Wenn Du nur ein OIDC-Token für einen einzelnen Auftrag abrufen musst, kann diese Berechtigung innerhalb dieses Auftrags festgelegt werden. Beispiel:

```yaml{:copy}
permissions:
  id-token: write # This is required for requesting the JWT
```

Möglicherweise musst Du hier zusätzliche Berechtigungen angeben, abhängig von den Anforderungen Deines Workflows. 
