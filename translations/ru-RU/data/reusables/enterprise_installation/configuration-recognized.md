---
ms.openlocfilehash: 0eeab4f4dcb143add852e22c7c47c20e857cf007
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: "148009207"
---
1. После полного перезапуска экземпляра и доступа к нему используйте административную оболочку SSH, чтобы убедиться, что новая конфигурация ресурса распознана:
```shell
$ ssh -p 122 admin@HOSTNAME
$ ghe-system-info
```
