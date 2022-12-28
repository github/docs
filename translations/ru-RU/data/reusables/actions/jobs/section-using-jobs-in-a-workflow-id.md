---
ms.openlocfilehash: dd25f74bf039724130494c7bd4d55e44760f620b
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: "145114227"
---
Используйте `jobs.<job_id>`, чтобы назначить заданию уникальный идентификатор. Ключ `job_id` представляет собой строку, а значение ключа представляет собой карту данных конфигурации задания. Необходимо заменить `<job_id>` строкой, уникальной для объекта `jobs`. `<job_id>` должен начинаться с буквы или `_` и может включать только буквенно-цифровые символы `-` или `_`.

#### Пример. Создание заданий

В этом примере были созданы два задания, и их `job_id` равны `my_first_job` и `my_second_job`.

```yaml
jobs:
  my_first_job:
    name: My first job
  my_second_job:
    name: My second job
```
