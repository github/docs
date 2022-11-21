---
ms.openlocfilehash: c9db6ca4a418e5107cb3714b70c8112457b1868c
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "145103983"
---
Einige Ereignisse verfügen über Filter, die Ihnen mehr Kontrolle darüber geben, wann Ihr Workflow ausgeführt werden soll.

Das `push`-Ereignis verfügt beispielsweise über einen `branches`-Filter. Dieser führt dazu, dass der Workflow nicht bei jedem beliebigen Push, sondern nur bei einem Push an einen Branch ausgeführt wird, der mit dem `branches`-Filter übereinstimmt.

```yaml
on:
  push:
    branches:
      - main
      - 'releases/**'
```
