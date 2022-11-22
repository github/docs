---
ms.openlocfilehash: 8c155db26d97e1f845638c790dd3cf1114eac47a
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: "148159754"
---
Le codespace auquel vous vous connectez doit exécuter un serveur SSH. L’image conteneur par défaut inclut un serveur SSH, qui est démarré automatiquement. Si vos codespaces ne sont pas créés à partir de l’image par défaut, vous pouvez installer et démarrer un serveur SSH en ajoutant ce qui suit à l’objet `features` dans votre fichier `devcontainer.json`.

```json
"features": {
    ...
    "ghcr.io/devcontainers/features/sshd:1": {
        "version": "latest"
    },
    ...
}
```