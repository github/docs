---
ms.openlocfilehash: c9db6ca4a418e5107cb3714b70c8112457b1868c
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: "145114776"
---
Некоторые события имеют фильтры, позволяющие лучше контролировать выполнение рабочего процесса.

Например, событие `push` имеет фильтр `branches`, из-за которого рабочий процесс выполняется только при отправке в ветвь, которая соответствует фильтру `branches`, а не при любой отправке.

```yaml
on:
  push:
    branches:
      - main
      - 'releases/**'
```
