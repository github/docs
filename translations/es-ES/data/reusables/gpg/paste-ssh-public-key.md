---
ms.openlocfilehash: 6dfaad4dc9dc813104183b2c9db41e480c9b27fb
ms.sourcegitcommit: 0a6e3eee6eea9b1e445aea1e4461d64cf6b63218
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/14/2022
ms.locfileid: "148163581"
---
1. Para configurar tu clave de firma SSH en Git, pega el texto siguiente sustituyendo **/PATH/TO/KEY.PUB** por la ruta de la clave pública que quieras utilizar.
  ```bash
  $ git config --global user.signingkey /PATH/TO/.SSH/KEY.PUB
