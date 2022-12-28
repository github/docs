---
ms.openlocfilehash: fcdec13f55da7c5bd1aece4364b2ecb4098e8cf0
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: "148093788"
---
1. SSH в {% данных variables.location.product_location %}. Если экземпляр состоит из нескольких узлов, например, если настроен высокий уровень доступности или георепликация, передача осуществляется по SSH в основной узел. При использовании кластера можно использовать для передачи по SSH в любой узел. Дополнительные сведения о доступе к SSH см. в разделе [Доступ к административной оболочке (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh).

   ```shell
   $ ssh -p 122 admin@HOSTNAME
   ```
