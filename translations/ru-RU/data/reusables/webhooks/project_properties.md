---
ms.openlocfilehash: f41668ecc39ec7b3efc30deaf59bdf406a60d0cb
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/09/2022
ms.locfileid: "147878573"
---
Ключ | Тип | Описание
----|------|-------------
`action`|`string` | Действие, выполненное для проекта. Это может быть `created`, `edited`, `closed`, `reopened` или `deleted`.
`changes`|`object` | Изменения в проекте, если выполнялось действие `edited`.
`changes[name][from]` |`string` | Предыдущая версия имени, если действие было `edited`.
`changes[body][from]` |`string` | Предыдущая версия текста, если действие было `edited`.
`project`|`object` | Сам [проект](/rest/reference/projects).
