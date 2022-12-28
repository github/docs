---
ms.openlocfilehash: ef1965dfec0f00d60c0653d7b8bf1f799c0a08bd
ms.sourcegitcommit: f768d3fb6d31898dc524b5827bfed5679d202b3b
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/06/2022
ms.locfileid: "148010124"
---
Клавиши | Тип | Описание
----|------|-------------
`action`|`string` | Действие, которое было выполнено. Может быть одним из `requested`{% ifversion actions-workflow-run-in-progress %}, `in_progress`,{% endif %} или `completed`.
`workflow_run`| `object` | Выполнение рабочего процесса. Содержит такую информацию, как `artifacts_url`, `check_suite_id`, `conclusion`, `head_branch` и `head_sha`.
