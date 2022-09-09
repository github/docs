---
ms.openlocfilehash: 9b9749a9b1d8405deadafdb29203b9537900813e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145096185"
---
Para solucionar problemas, primeiro decida se você realmente deseja usar um submódulo, que é um projeto do Git dentro de um projeto Git; às vezes, submódulos são criados acidentalmente.

Se você não quiser usar um submódulo, remova-o substituindo <em>PATH-TO-SUBMODULE</em> pelo caminho para o submódulo:
```shell
$ git submodule deinit <em>PATH-TO-SUBMODULE</em>
$ git rm <em>PATH-TO-SUBMODULE</em>
$ git commit -m "Remove submodule"
$ rm -rf .git/modules/<em>PATH-TO-SUBMODULE</em>
```
