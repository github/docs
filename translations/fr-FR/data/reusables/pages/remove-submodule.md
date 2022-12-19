---
ms.openlocfilehash: 9b9749a9b1d8405deadafdb29203b9537900813e
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "147884970"
---
Pour résoudre les problèmes, commencez par décider si vous voulez utiliser un sous-module, qui est un projet Git à l’intérieur d’un projet Git. Les sous-modules sont parfois créés accidentellement.

Si vous ne voulez pas utiliser de sous-module, supprimez le sous-module, en remplaçant <em>PATH-TO-SUBMODULE</em> par le chemin du sous-module :
```shell
$ git submodule deinit <em>PATH-TO-SUBMODULE</em>
$ git rm <em>PATH-TO-SUBMODULE</em>
$ git commit -m "Remove submodule"
$ rm -rf .git/modules/<em>PATH-TO-SUBMODULE</em>
```
