---
ms.openlocfilehash: 6dfaad4dc9dc813104183b2c9db41e480c9b27fb
ms.sourcegitcommit: 0a6e3eee6eea9b1e445aea1e4461d64cf6b63218
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/14/2022
ms.locfileid: "148163577"
---
1. Um deinen SSH-Signaturschlüssel in Git festzulegen, füge den folgenden Text ein und ersetze **/PATH/TO/KEY.PUB** durch den Pfad zu dem öffentlichen Schlüssel, den du verwenden möchtest.
  ```bash
  $ git config --global user.signingkey /PATH/TO/.SSH/KEY.PUB
