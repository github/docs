---
ms.openlocfilehash: 8c155db26d97e1f845638c790dd3cf1114eac47a
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: "148159395"
---
O codespace ao qual você se conecta precisa estar executando um servidor SSH. A imagem de contêiner padrão inclui um servidor SSH, que é iniciado automaticamente. Se os codespaces não forem criados com base na imagem padrão, você poderá instalar e iniciar um servidor SSH adicionando o seguinte ao objeto `features` no arquivo `devcontainer.json`.

```json
"features": {
    ...
    "ghcr.io/devcontainers/features/sshd:1": {
        "version": "latest"
    },
    ...
}
```