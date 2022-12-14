---
ms.openlocfilehash: 9b1f61261d2e59fe30703a3bebfdaed7a25667e6
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: "145089274"
---
* `{owner}/{repo}/.github/workflows/{filename}@{ref}`{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6000 %} для повторно используемых рабочих процессов в общедоступных {% ifversion ghes or ghec or ghae %}или внутренних репозиториях{% endif %}.
* `./.github/workflows/{filename}` для повторно используемых рабочих процессов в одном репозитории.{% endif %}

`{ref}` может быть SHA, тегом выпуска или именем ветви. Использование SHA фиксации является самым надежным методом для обеспечения стабильности и безопасности. Дополнительные сведения см. в разделе [Усиление безопасности для GitHub Actions](/actions/learn-github-actions/security-hardening-for-github-actions#reusing-third-party-workflows). {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6000 %}Если вы используете второй вариант синтаксиса (без `{owner}/{repo}` и `@{ref}`), вызываемый рабочий процесс находится в той же фиксации, что и вызывающий рабочий процесс.{% endif %}
