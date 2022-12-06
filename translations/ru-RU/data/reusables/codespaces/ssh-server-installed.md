---
ms.openlocfilehash: 8c155db26d97e1f845638c790dd3cf1114eac47a
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: "148160216"
---
На сервере codespace, к которому вы подключаетесь, должен быть запущен SSH-сервер. Образ контейнера по умолчанию включает сервер SSH, который запускается автоматически. Если codespaces не создаются из образа по умолчанию, можно установить и запустить сервер SSH, добавив следующую команду в `features` объект в `devcontainer.json` файле.

```json
"features": {
    ...
    "ghcr.io/devcontainers/features/sshd:1": {
        "version": "latest"
    },
    ...
}
```