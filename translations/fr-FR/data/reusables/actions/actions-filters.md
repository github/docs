---
ms.openlocfilehash: c9db6ca4a418e5107cb3714b70c8112457b1868c
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145103982"
---
Certains événements comportent des filtres qui vous permettent de mieux contrôler le moment où votre workflow devrait s’exécuter.

Par exemple, l’événement `push` comporte un filtre `branches` avec lequel votre workflow ne s’exécute que lorsqu’un envoi (push) vers une branche qui correspond au filtre `branches` se produit, et non lorsque n’importe quel envoi se produit.

```yaml
on:
  push:
    branches:
      - main
      - 'releases/**'
```
