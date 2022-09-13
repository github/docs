---
ms.openlocfilehash: 95ea94c1f81a3b586d60d96dbd5a882dcdbe89fc
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145094344"
---
Você pode usar `defaults.run` para fornecer as opções `shell` e `working-directory` padrão para todas as etapas do [`run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun) em um fluxo de trabalho. Você também pode definir configurações padrão para `run` as quais só estão disponíveis para um trabalho. Para obter mais informações, confira [`jobs.<job_id>.defaults.run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_iddefaultsrun). Você não pode usar contextos ou expressões nesta palavra-chave.

{% data reusables.actions.defaults-override %}

#### Exemplo: Defina o shell padrão e o diretório de trabalho

```yaml
defaults:
  run:
    shell: bash
    working-directory: scripts
```
