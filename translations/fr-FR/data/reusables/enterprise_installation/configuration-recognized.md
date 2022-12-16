---
ms.openlocfilehash: 2fd5ca9c5a65bed4a656cb3fdbd37db7a23a9387
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/12/2022
ms.locfileid: "145102442"
---
1. Une fois que l’instance a entièrement redémarré et que vous pouvez l’atteindre, utilisez l’interpréteur de commandes d’administration SSH pour vérifier que la nouvelle configuration de ressource est reconnue :
```shell
$ ssh -p 122 admin@<em>HOSTNAME</em>
$ ghe-system-info
```
