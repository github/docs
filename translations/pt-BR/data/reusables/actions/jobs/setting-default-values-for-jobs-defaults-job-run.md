---
ms.openlocfilehash: dae1f0d42b9b0b2e122bfcfc2a096d062efd8ee0
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145094345"
---
Use `jobs.<job_id>.defaults.run` para fornecer o `shell` e o `working-directory` padrão para todas as etapas `run` do trabalho. Não são permitidos contexto e expressão nesta seção.

Você pode fornecer as opções `shell` e `working-directory` padrão para todas as etapas [`run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun) de um trabalho. Também pode definir as configurações padrão para `run` em todo o fluxo de trabalho. Para obter mais informações, confira [`jobs.defaults.run`](/actions/using-workflows/workflow-syntax-for-github-actions#defaultsrun). Você não pode usar contextos ou expressões nesta palavra-chave.

{% data reusables.actions.defaults-override %}

#### Exemplo: definição das opções da etapa `run` padrão para um trabalho

```yaml
jobs:
  job1:
    runs-on: ubuntu-latest
    defaults:
      run:
        shell: bash
        working-directory: scripts
```
