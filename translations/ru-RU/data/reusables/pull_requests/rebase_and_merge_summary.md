---
ms.openlocfilehash: f4e771b6d1f357f00e9e9f78d99646101618e2c4
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: "148098200"
---
При выборе параметра **"Перебазировать" и "Объединить** " в запросе на вытягивание {% данных variables.location.product_location %}все фиксации из ветви раздела (или головной ветви) добавляются в базовую ветвь по отдельности без фиксации слияния. Таким образом, поведение перебазирования и объединения напоминает [объединение с перемоткой вперед](https://git-scm.com/docs/git-merge#_fast_forward_merge) путем сохранения журнала линейных проектов. Однако повторное размещение достигается путем повторной записи журнала фиксаций в базовой ветви с новыми фиксациями.

Поведение повторного размещения и объединения для {% data variables.product.product_name %} немного отклоняется от `git rebase`. Повторное создание и объединение в {% data variables.product.prodname_dotcom %} всегда обновляет сведения об авторе фиксации и создает новые фиксации SHA, тогда как `git rebase` за пределами {% data variables.product.prodname_dotcom %} не изменяет сведения об авторе фиксации при повторном размещении поверх фиксации предка. Дополнительные сведения о процессе `git rebase` см. в разделе [git-rebase](https://git-scm.com/docs/git-rebase) в документации Git.

Для повторного размещения с объединением запросов на вытягивание необходимо иметь [разрешения на запись](/articles/repository-permission-levels-for-an-organization/) в репозитории, а для репозитория должно [быть разрешено слияние со сжатием](/articles/configuring-commit-rebasing-for-pull-requests/).

Визуальное представление `git rebase` см. в разделе ["Ветвление Git. Повторное размещение" из _книги_ Pro Git](https://git-scm.com/book/en/Git-Branching-Rebasing).
