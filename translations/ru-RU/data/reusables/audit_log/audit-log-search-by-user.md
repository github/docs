---
ms.openlocfilehash: 7193be487b701029df5604b7253f683b5675c086
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: "145113739"
---
### Поиск по пользователю

Квалификатор `actor` может ограничивать события в зависимости от того, кто выполнил действие. Пример:

  * `actor:octocat` находит все события, выполненные пользователем `octocat`.
  * `actor:octocat actor:hubot` находит все события, выполненные пользователями `octocat` и `hubot`.
  * `-actor:hubot` исключает все события, выполненные пользователем `hubot`.

Обратите внимание, что можно использовать только имя пользователя {% data variables.product.product_name %}; фактическое имя использовать нельзя.
