---
ms.openlocfilehash: 8c155db26d97e1f845638c790dd3cf1114eac47a
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: "148160217"
---
Der Codespace, mit dem du eine Verbindung herstellst, muss einen SSH-Server ausführen. Das Standardcontainerimage enthält einen SSH-Server, der automatisch gestartet wird. Wenn deine Codespaces nicht mithilfe des Standardimages erstellt werden, kannst du einen SSH-Server installieren und starten, indem du dem `features`-Objekt in deiner `devcontainer.json`-Datei Folgendes hinzufügst:

```json
"features": {
    ...
    "ghcr.io/devcontainers/features/sshd:1": {
        "version": "latest"
    },
    ...
}
```