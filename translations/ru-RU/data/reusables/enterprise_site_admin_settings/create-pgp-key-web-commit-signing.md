---
ms.openlocfilehash: 8918ea0f8f1e80fdae507aa6a1824cfecf057e0b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "147062709"
---
1. В административной оболочке создайте ключ PGP. Запишите адрес электронной почты и идентификатор ключа.

    ```bash{:copy}
    gpg --full-generate-key --pinentry-mode=loopback
    ```
    
    - Используйте тип ключа по умолчанию и по крайней мере `4096` бит без истечения срока действия. 
    - Используйте `web-flow` в качестве имени пользователя. 
