---
ms.openlocfilehash: 4c39c079fb88a8a1b86ed9359ebe55be268389bb
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: "145114747"
---
Если вы указываете типы действий или фильтры для события и триггеры рабочего процесса для нескольких событий, необходимо настроить каждое событие отдельно. Необходимо добавить двоеточие (`:`) ко всем событиям, включая события без конфигурации.

Например, рабочий процесс со следующим значением `on` будет выполняться в следующих случаях:

- создание метки;
- отправка в ветвь `main` в репозитории;
- отправка в ветвь с поддержкой {% data variables.product.prodname_pages %}.

```yaml
on:
  label:
    types:
      - created
  push:
    branches:
      - main
  page_build:
```
