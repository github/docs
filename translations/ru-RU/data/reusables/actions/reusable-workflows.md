---
ms.openlocfilehash: e7d27a9fd46a625eafc5bebb1eb151b8e3c4b6e4
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: "147878787"
---
{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}

{% ifversion ghes or ghec or ghae %}Рабочие процессы можно совместно использовать в организации, публично или в частном порядке, вызвав{% else %} Можно вызвать{% endif %} один рабочий процесс из другого рабочего процесса. Это позволяет повторно использовать рабочие процессы, избегая дублирования и упрощая обслуживание рабочих процессов. Дополнительные сведения см. в статье [Многократное использование рабочих процессов](/actions/learn-github-actions/reusing-workflows).
{% endif %}
