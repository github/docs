---
ms.openlocfilehash: 59b68e124208e167e58e295905ff993ecf0530ef
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: "145088989"
---
Ключ | Тип | Описание
----|------|-------------
`action` |`string` | Действие, которое было выполнено. Это может быть `created`, `closed`, `opened` (закрытая веха, открытая повторно), `edited` или `deleted`.
`milestone`  |`object` | Сама веха.
`changes`|`object`| Изменения в вехе, если выполнялось действие `edited`.
`changes[description][from]`|`string` | Предыдущая версия описания, если выполнялось действие `edited`.
`changes[due_on][from]`|`string` | Предыдущая версия даты выполнения, если выполнялось действие `edited`.
`changes[title][from]`|`string` | Предыдущая версия заголовка, если выполнялось действие `edited`.
