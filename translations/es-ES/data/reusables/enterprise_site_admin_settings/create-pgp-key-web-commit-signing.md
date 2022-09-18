---
ms.openlocfilehash: 8918ea0f8f1e80fdae507aa6a1824cfecf057e0b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "147062710"
---
1. En el shell administrativo, crea una clave PGP. Anota la dirección de correo electrónico y el identificador de clave.

    ```bash{:copy}
    gpg --full-generate-key --pinentry-mode=loopback
    ```
    
    - Usa el tipo de clave predeterminado y al menos `4096` bits sin expiración. 
    - Usa `web-flow` como nombre de usuario. 
