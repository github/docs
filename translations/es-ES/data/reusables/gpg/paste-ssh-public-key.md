---
ms.openlocfilehash: dc6bad5b656bb5d755196146b017213b66d1730e
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: "147884724"
---
1. Para configurar tu clave de firma SSH en Git, pega el texto siguiente en sustitución del contenido del Portapapeles de la clave que quieras utilizar. Dado que la clave contiene espacios, debes ponerlo entre comillas:
  ```bash
  $ git config --global user.signingkey 'ssh-ed25519 AAAAC3(...) user@example.com'
  ```