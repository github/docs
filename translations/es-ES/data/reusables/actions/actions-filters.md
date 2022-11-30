---
ms.openlocfilehash: c9db6ca4a418e5107cb3714b70c8112457b1868c
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: "145114777"
---
Algunos eventos tienen filtros que te dan más control sobre qué flujo de trabajo debería ejecutarse.

Por ejemplo, el evento `push` tiene un filtro `branches` que hace que el flujo de trabajo solo se ejecute cuando se realice una inserción en una rama que coincida con el filtro `branches`, en lugar de cuando se produzca cualquier inserción.

```yaml
on:
  push:
    branches:
      - main
      - 'releases/**'
```
