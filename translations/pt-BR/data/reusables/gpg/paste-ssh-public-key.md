---
ms.openlocfilehash: dc6bad5b656bb5d755196146b017213b66d1730e
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "147884717"
---
1. Para definir sua chave de assinatura SSH no Git, cole o texto abaixo, substituindo o conteúdo da sua área de transferência pela chave que gostaria de usar. Como a chave contém espaços, você deve colocá-la entre aspas:
  ```bash
  $ git config --global user.signingkey 'ssh-ed25519 AAAAC3(...) user@example.com'
  ```