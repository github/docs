---
ms.openlocfilehash: 8918ea0f8f1e80fdae507aa6a1824cfecf057e0b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147062705"
---
1. Dans l’interpréteur de commandes d’administration, créez une clé PGP. Notez l’adresse e-mail et l’ID de clé.

    ```bash{:copy}
    gpg --full-generate-key --pinentry-mode=loopback
    ```
    
    - Utilisez le type de clé par défaut et au moins `4096` bits sans expiration. 
    - Utilisez `web-flow` comme nom d’utilisateur. 
