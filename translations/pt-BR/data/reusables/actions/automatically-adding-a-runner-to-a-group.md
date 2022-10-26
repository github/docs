---
ms.openlocfilehash: 4e8c79051e378c800568f0fcf36c783a1bdd8811
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148107860"
---
Você pode usar o script de configuração para adicionar automaticamente um novo executor a um grupo. Por exemplo, esse comando registra um novo executor e usa o parâmetro `--runnergroup` para adicioná-lo a um grupo chamado `rg-runnergroup`.

```sh
./config.sh --url $org_or_enterprise_url --token $token --runnergroup rg-runnergroup
```

O comando irá falhar se o grupo do executor não existir:

```
Could not find any self-hosted runner group named "rg-runnergroup".
```
