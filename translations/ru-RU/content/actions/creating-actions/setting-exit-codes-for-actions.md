---
title: Настройка кодов выхода для действий
shortTitle: Set exit codes
intro: 'Можно использовать коды выхода для настройки состояния действия. {% data variables.product.prodname_dotcom %} отображает состояния, указывающие на действия, которые прошли и не прошли проверку.'
redirect_from:
  - /actions/building-actions/setting-exit-codes-for-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
ms.openlocfilehash: 394b17dc03c4998797df222fe7c81c3269003ec9
ms.sourcegitcommit: d3929a033c42c99b153910685256d079d7d87467
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/27/2022
ms.locfileid: '148114280'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Сведения о кодах выхода

{% data variables.product.prodname_dotcom %} использует код выхода, чтобы задать состояние выполнения проверки для действия, которое может иметь значение `success` или `failure`.

Состояние выхода | Состояние проверки выполнения | Описание
------------|------------------|------------
`0` | `success` | Действие успешно завершено, и могут начаться другие задачи, которые от него зависят.
Ненулевое значение (любое целое число, кроме 0)| `failure` | Любой другой код выхода указывает на сбой действия. При сбое действия все параллельные действия отменяются, а будущие действия пропускаются. Выполнение проверки и набор проверки получают состояние `failure`.

## Задание кода выхода при сбое в действии JavaScript

При создании действия JavaScript можно использовать пакет [`@actions/core`](https://github.com/actions/toolkit/tree/main/packages/core) набора средств действий для записи сообщения в журнал и задания кода выхода при сбое (failure). Пример:

```javascript
try {
  // something
} catch (error) {
  core.setFailed(error.message);
}
```

Дополнительные сведения см. в разделе [Создание действия JavaScript](/articles/creating-a-javascript-action).

## Задание кода выхода при сбое в действии контейнера Docker

Если вы создаете действие контейнера Docker, в скрипте `entrypoint.sh` можно задать код выхода при сбое. Пример:

```
if <condition> ; then
  echo "Game over!"
  exit 1
fi
```

Дополнительные сведения см. в разделе [Создание действия контейнера Docker](/articles/creating-a-docker-container-action).
