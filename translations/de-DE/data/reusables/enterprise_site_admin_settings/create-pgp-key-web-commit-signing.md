---
ms.openlocfilehash: 8918ea0f8f1e80fdae507aa6a1824cfecf057e0b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "147062706"
---
1. Erstelle in der Verwaltungsshell einen PGP-Schlüssel. Notiere dir die E-Mail-Adresse und die Schlüssel-ID.

    ```bash{:copy}
    gpg --full-generate-key --pinentry-mode=loopback
    ```
    
    - Verwende den Standardschlüsseltyp und mindestens `4096` Bits ohne Ablauf. 
    - Verwende `web-flow` als Benutzernamen. 
