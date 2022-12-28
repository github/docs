---
ms.openlocfilehash: 43e874e29bca10faa81fd0f24e4098fe20eab90c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: "145067259"
---
Ключ | Тип | Описание
----|------|------------
`action` | `string` | Действие, которое было выполнено. Может быть либо `added`, либо `removed`.
`repository_selection` | `string` | Варианты репозиториев, в которые выполняется установка. Может быть либо `selected`, либо `all`.
`repositories_added` | `array` | Массив объектов репозитория, которые были добавлены в установку.
`repositories_removed` | `array` | Массив объектов репозитория, которые были удалены из установки.
