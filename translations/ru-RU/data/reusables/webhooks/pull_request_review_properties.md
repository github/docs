---
ms.openlocfilehash: 6b8d3bb77c6a40a43ab22ffd0e60e61cd049fa61
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879026"
---
Ключ | Тип | Описание
----|------|------------
`action` | `string` | Действие, которое было выполнено. Возможные значения:<ul><li>`submitted` — проверка запроса на вытягивание переведена в состояние, отличное от "в ожидании".</li><li>`edited` — текст отзыва был изменен.</li><li>`dismissed` — отзыв был отклонен.</li></ul>
`pull_request` | `object` | [Запрос на вытягивание](/rest/reference/pulls), к которому относится проверка.
`review` | `object` | Затрагиваемая проверка.
`changes[body][from]`|`string` | Предыдущая версия текста, если действие было `edited`.
