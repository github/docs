---
ms.openlocfilehash: 6dfaad4dc9dc813104183b2c9db41e480c9b27fb
ms.sourcegitcommit: 0a6e3eee6eea9b1e445aea1e4461d64cf6b63218
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/14/2022
ms.locfileid: "148163576"
---
1. Pour définir votre clé de signature SSH dans Git, collez le texte ci-dessous en remplaçant **/PATH/TO/KEY.PUB** par la clé publique que vous allez utiliser.
  ```bash
  $ git config --global user.signingkey /PATH/TO/.SSH/KEY.PUB
