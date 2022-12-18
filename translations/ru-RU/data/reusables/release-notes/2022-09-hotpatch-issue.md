---
ms.openlocfilehash: cd8183729f7721845c6d750dc237c2207c42de69
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: "148098356"
---
Обновление hotpatch до GitHub Enterprise Server {% ifversion ghes = 3.4 %}3.4.9{% elsif ghes = 3.5 %}3.5.6{% elsif ghes = 3.6 %}3.6.2{% endif %} может завершиться ошибкой. Обновления с полной `.pkg` версией не затрагиваются. Если обновление не удается выполнить для вашего экземпляра, устраните эту проблему, подключився к административной оболочке (ssh) и выполнив следующую неинтерактивную команду:

```
echo "grub-pc grub-pc/install_devices_empty boolean true" | sudo debconf-set-selections
```

Если вам не удается обновить или вам нужна дополнительная помощь, обратитесь в службу поддержки GitHub. Дополнительные сведения см. в разделе [Создание запроса в службу поддержки](/support/contacting-github-support/creating-a-support-ticket). [Обновлено: 2022-10-14]
