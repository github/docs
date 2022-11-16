---
ms.openlocfilehash: 905d4497bb48d1c5bfab91a1bb06389e5cd197e1
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: "145067253"
---
`issue`|`object` | Сама [проблема](/rest/reference/issues).
`changes`|`object`| Изменения в проблеме, если выполнялось действие `edited`.
`changes[title][from]`|`string` | Предыдущая версия заголовка, если выполнялось действие `edited`.
`changes[body][from]`|`string` | Предыдущая версия текста, если действие было `edited`.
`assignee`|`object` | Необязательный пользователь, который получил или не получил назначение из проблемы.
`label`|`object` | Необязательная метка, которая была добавлена или удалена из проблемы.
