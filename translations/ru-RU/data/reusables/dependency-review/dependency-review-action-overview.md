---
ms.openlocfilehash: 7e62876e5b30bfe98ea0f74229caf91a8328f4a4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "147773213"
---
{% data variables.product.prodname_dependency_review_action %} сканирует запросы на вытягивание, проверяет изменение зависимостей и создает ошибку, если какие-либо новые зависимости имеют известные уязвимости. Для этого действие использует конечную точку API, которая сравнивает зависимости между двумя редакциями и сообщает о любых различиях.

Дополнительные сведения об этом действии и конечной точке API см. в документации по [`dependency-review-action`](https://github.com/actions/dependency-review-action) и разделе [Проверка зависимостей](/rest/dependency-graph/dependency-review) в документации по API.
