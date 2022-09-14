---
ms.openlocfilehash: c9db6ca4a418e5107cb3714b70c8112457b1868c
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145094492"
---
Alguns eventos têm filtros que dão mais controle sobre quando seu fluxo de trabalho deve ser executado.

Por exemplo, o evento `push` tem um filtro `branches` que faz com que seu fluxo de trabalho seja executado somente quando ocorrer um push para um branch que corresponde ao filtro `branches`, em vez de quando ocorrer qualquer push.

```yaml
on:
  push:
    branches:
      - main
      - 'releases/**'
```
