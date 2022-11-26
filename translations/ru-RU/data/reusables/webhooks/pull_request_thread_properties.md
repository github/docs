---
ms.openlocfilehash: 563e9f384acbc3e6e243db8d2dae5eb05d833d04
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: "147883775"
---
Ключ | Тип | Описание
----|------|------------
`action` | `string` | Действие, которое было выполнено. Возможные значения:<ul><li>`resolved` — ветвь обсуждения для запроса на включение внесенных изменений отмечена как завершенная.</li><li>`unresolved` — ранее завершенная ветвь обсуждения для запроса на включение внесенных изменений отмечена как незавершенная.</li></ul>
`pull_request` | `object` | [Запрос на включение внесенных изменений](/rest/reference/pulls), к которому относится ветвь.
`thread` | `object` | Затронутая ветвь.
