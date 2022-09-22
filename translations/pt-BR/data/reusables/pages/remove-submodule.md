---
ms.openlocfilehash: 9b9749a9b1d8405deadafdb29203b9537900813e
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "147884968"
---
Para solucionar problemas, primeiro decida se você realmente deseja usar um submódulo, que é um projeto do Git dentro de um projeto Git; às vezes, submódulos são criados acidentalmente.

Se você não quiser usar um submódulo, remova-o substituindo <em>PATH-TO-SUBMODULE</em> pelo caminho para o submódulo:
```shell
$ git submodule deinit <em>PATH-TO-SUBMODULE</em>
$ git rm <em>PATH-TO-SUBMODULE</em>
$ git commit -m "Remove submodule"
$ rm -rf .git/modules/<em>PATH-TO-SUBMODULE</em>
```
