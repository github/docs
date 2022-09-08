---
ms.openlocfilehash: 0ee285efb8b386c47d2782151fdf6a2bb24589fc
ms.sourcegitcommit: 872c4751a3fc255671295a5dea6a2081c66b7b71
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 08/30/2022
ms.locfileid: "145093667"
---
1. Para iniciar a replicação dos armazenamentos de dados, use o comando `ghe-repl-start`.
  ```shell
  $ ghe-repl-start
  ```
    {% warning %}

    **Aviso:** `ghe-repl-start` causa uma breve interrupção no servidor primário, durante o qual os usuários podem receber erros internos do servidor. Para fornecer uma mensagem mais amigável, execute `ghe-maintenance -s` no nó primário antes de executar `ghe-repl-start` no nó de réplica a fim de colocar o dispositivo no modo de manutenção. Quando a replicação for iniciada, desabilite o modo de manutenção com `ghe-maintenance -u`. A replicação do Git não progredirá enquanto o nó primário estiver no modo de manutenção.

    {% endwarning %}
