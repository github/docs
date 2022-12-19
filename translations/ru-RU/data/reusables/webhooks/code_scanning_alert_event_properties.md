---
ms.openlocfilehash: 0d90cfeda767e8df43964320baab50350a1d8ae4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "145087536"
---
Ключ | Тип | Описание
----|------|-------------
`action` | `string` | Действие, которое было выполнено. Можно выбрать `created`, `reopened_by_user`, `closed_by_user`, `fixed`, `appeared_in_branch` или `reopened`.
`alert` | `object` | Оповещение о проверке кода, связанное с событием.
`ref` | `string` | Ссылка Git на оповещение о проверке кода. Если действие имеет ключ `reopened_by_user` или `closed_by_user`, событие было активировано `sender` и это значение будет пустым.
`commit_oid` | `string` | SHA фиксации для оповещения о проверке кода. Если действие имеет ключ `reopened_by_user` или `closed_by_user`, событие было активировано пользователем `sender` и это значение будет пустым.
