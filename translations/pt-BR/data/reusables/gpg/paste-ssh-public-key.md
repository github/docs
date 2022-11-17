---
ms.openlocfilehash: 6dfaad4dc9dc813104183b2c9db41e480c9b27fb
ms.sourcegitcommit: 0a6e3eee6eea9b1e445aea1e4461d64cf6b63218
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/14/2022
ms.locfileid: "148163574"
---
1. Para definir a chave de assinatura SSH no Git, cole o texto abaixo, substituindo **/PATH/TO/KEY.PUB** pela chave pública que deseja usar.
  ```bash
  $ git config --global user.signingkey /PATH/TO/.SSH/KEY.PUB
