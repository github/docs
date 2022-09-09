---
ms.openlocfilehash: 2fd5ca9c5a65bed4a656cb3fdbd37db7a23a9387
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145093722"
---
1. Uma vez que a instância tenha sido totalmente reiniciada e você possa alcançá-la, use o shell administrativo SSH para verificar se a nova configuração de recurso é reconhecida:
```shell
$ ssh -p 122 admin@<em>HOSTNAME</em>
$ ghe-system-info
```
