---
title: Мониторинг текущих заданий
shortTitle: Monitor current jobs
intro: 'Отслеживайте, как средства выполнения тестов, размещенные в {% data variables.product.prodname_dotcom %}, обрабатывают задания в вашей организации или предприятии, и определите все связанные ограничения.'
versions:
  feature: github-runner-dashboard
ms.openlocfilehash: 57fe17f4204082e78af65d837a6c5a7e060fd597
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/05/2022
ms.locfileid: '148010095'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Просмотр активных заданий в вашей организации или предприятии

Вы можете получить список всех заданий в вашей организации или предприятии, выполняющихся в настоящее время в средствах выполнения, размещенных в {% data variables.product.prodname_dotcom %}.

{% data reusables.actions.github-hosted-runners-navigate-to-repo-org-enterprise %} {% data reusables.actions.github-hosted-runners-table-entry %}
1. Просмотрите раздел "Активные задания", содержащий список всех заданий, которые в настоящее время выполняются в средствах выполнения, размещенных в {% data variables.product.prodname_dotcom %}.

  ![Снимок экрана: список активных заданий](/assets/images/help/settings/actions-runner-active-jobs.png)

## Просмотр заданий, находящихся в очереди, в вашей организации или предприятии

Средства выполнения, размещенные в {% data variables.product.prodname_dotcom %}, позволяют параллельно выполнять задания, а максимальное количество одновременных заданий зависит от вашего плана. Если достигнуто максимальное количество одновременных заданий, все новые задания начнут поступать очередь. Дополнительные сведения о количестве одновременных заданий, доступных для вашего плана, см. в разделе [Ограничения использования, выставление счетов и администрирование](/actions/learn-github-actions/usage-limits-billing-and-administration).

Следующая процедура показывает, как проверить максимальное количество одновременных заданий, которые вы можете выполнять.

{% data reusables.actions.github-hosted-runners-navigate-to-repo-org-enterprise %} {% data reusables.actions.github-hosted-runners-table-entry %}
1. Проверьте раздел "Все задания использования", в котором указано количество активных заданий и максимальное количество заданий, которое вы можете запустить. В этом примере в настоящее время выполняется `9` заданий из максимального количества `180`.
  ![Снимок экрана: максимальное количество заданий для учетной записи](/assets/images/help/settings/github-hosted-runners-max-jobs.png)
