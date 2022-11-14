---
ms.openlocfilehash: adefefb787099214cf17f7b2276a8f44f3fe8e56
ms.sourcegitcommit: f54d01e643f994ce48f0774dbc680ad77dd6193f
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/10/2022
ms.locfileid: "148160576"
---
1. Para configurar tu clave de firma SSH en Git, pega el texto siguiente sustituyendo **/PATH/TO/KEY.PUB** por la ruta de la clave pública que quieras utilizar.
  ```bash
  $ git config --global user.signingkey=/PATH/TO/.SSH/KEY.PUB