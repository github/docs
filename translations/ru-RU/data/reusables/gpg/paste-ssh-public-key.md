---
ms.openlocfilehash: 6dfaad4dc9dc813104183b2c9db41e480c9b27fb
ms.sourcegitcommit: 0a6e3eee6eea9b1e445aea1e4461d64cf6b63218
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/14/2022
ms.locfileid: "148163580"
---
1. Чтобы задать ключ подписывания SSH в Git, вставьте приведенный ниже текст, заменив **/PATH/TO/KEY. PUB** с путем к открытому ключу, который вы хотите использовать.
  ```bash
  $ git config --global user.signingkey /PATH/TO/.SSH/KEY.PUB
