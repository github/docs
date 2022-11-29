---
ms.openlocfilehash: 8918ea0f8f1e80fdae507aa6a1824cfecf057e0b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147062703"
---
1. No shell administrativo, crie uma chave PGP. Anote o endereço de email e a ID da chave.

    ```bash{:copy}
    gpg --full-generate-key --pinentry-mode=loopback
    ```
    
    - Use o tipo de chave padrão e pelo menos `4096` bits sem expiração. 
    - Use `web-flow` como o nome de usuário. 
