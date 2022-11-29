---
ms.openlocfilehash: 27c764ba249fba171877221492b486d59bde7230
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: "145114888"
---
Триггеры рабочего процесса — это события, которые приводят к запуску рабочего процесса. Эти события могут быть следующими:

- События, происходящие в репозитории рабочего процесса
- События, происходящие за пределами {% data variables.product.product_name %} и запускающие событие `repository_dispatch` в {% data variables.product.product_name %}
- Запланированное время
- Вручную

Например, можно настроить рабочий процесс для запуска при отправке в ветвь по умолчанию репозитория, при создании выпуска или при открытии проблемы.
