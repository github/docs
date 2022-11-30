---
ms.openlocfilehash: 55d2a154539d7cc6b73f248c5616bd0016a561aa
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: "145087440"
---
Ключ | Тип | Описание
----|------|-------------
`pages`|`array` | Обновленные страницы.
`pages[][page_name]`|`string` | Имя страницы.
`pages[][title]`|`string` |  Заголовок текущей страницы.
`pages[][action]`|`string` |  Действие, выполненное на странице. Может иметь значение `created` или `edited`.
`pages[][sha]`|`string` | Последняя фиксация SHA страницы.
`pages[][html_url]`|`string` | Указывает на вики-страницу HTML.
