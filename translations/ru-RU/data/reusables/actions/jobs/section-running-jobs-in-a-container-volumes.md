---
ms.openlocfilehash: 286ed6049cd19b1d7f4c5c7dfb4d737dd0f68475
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: "145089490"
---
Используйте `jobs.<job_id>.container.volumes` для задания `array` томов, которые будет использовать контейнер. Тома можно использовать для совместного использования данных между службами или другими этапами в задании. Можно указать именованные тома Docker, анонимные тома Docker или подключения привязок на узле.

Чтобы указать том, укажите путь к источнику и назначению:

`<source>:<destinationPath>`.

`<source>` — это имя тома или абсолютный путь на хост-компьютере, а `<destinationPath>` — это абсолютный путь в контейнере.

#### Пример. Подключение томов в контейнере

```yaml
volumes:
  - my_docker_volume:/volume_mount
  - /data/my_data
  - /source/directory:/destination/directory
```
