---
ms.openlocfilehash: de2ab71ca5c93229329c2887dc71685aa92e199d
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "147883059"
---
Vous pouvez spécifier un événement unique ou plusieurs événements. Par exemple, un workflow avec la valeur `on` suivante s’exécute quand une poussée (push) est effectuée dans une branche du dépôt ou quand quelqu’un duplique (fork) le dépôt :

```yaml
on: [push, fork]
```

Si vous spécifiez plusieurs événements, un seul de ces événements a besoin de se produire pour déclencher votre workflow. Si plusieurs événements déclencheurs se produisent pour votre workflow en même temps, plusieurs exécutions de workflow sont déclenchées.
