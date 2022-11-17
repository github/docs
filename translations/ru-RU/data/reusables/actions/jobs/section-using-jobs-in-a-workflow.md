---
ms.openlocfilehash: 2bdab95a93e5eff4bc68d8da73fd9d7d9a93580a
ms.sourcegitcommit: 96bbb6b8f3c9172209d80cb1502017ace3019807
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879706"
---
Запуск рабочего процесса состоит из одного или нескольких `jobs`, которые по умолчанию выполняются параллельно. Для последовательного выполнения заданий можно определить зависимости в других заданиях с помощью ключевого слова `jobs.<job_id>.needs`.

Каждое задание выполняется в среде средства выполнения тестов, указанной в параметре `runs-on`.

Вы можете выполнять неограниченное количество заданий, если вы не превышаете лимиты по использованию рабочих процессов. Дополнительные сведения см. в разделе {% ifversion fpt or ghec or ghes %}[Лимиты использования и выставления счетов](/actions/reference/usage-limits-billing-and-administration) для средств выполнения тестов, размещенных в {% data variables.product.prodname_dotcom %} и {% endif %}"[Сведения о средствах выполнения тестов локального размещения](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits){% ifversion fpt or ghec or ghes %}, где описываются лимиты по использованию средства выполнения тестов локального размещения.{% elsif ghae %}.{% endif %}

Если требуется найти уникальный идентификатор задания, выполняемого в ходе выполнения рабочего процесса, можно использовать API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}. Дополнительные сведения см. в разделе [Задания рабочего процесса](/rest/reference/actions#workflow-jobs).
