---
ms.openlocfilehash: 8c155db26d97e1f845638c790dd3cf1114eac47a
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: "148160340"
---
El codespace al que te conectes debe ejecutar un servidor SSH. La imagen de contenedor predeterminada incluye un servidor SSH, que se inicia automáticamente. Si los codespaces no se crean a partir de la imagen predeterminada, puedes instalar e iniciar un servidor SSH agregando lo siguiente al objeto `features` en el archivo `devcontainer.json`.

```json
"features": {
    ...
    "ghcr.io/devcontainers/features/sshd:1": {
        "version": "latest"
    },
    ...
}
```