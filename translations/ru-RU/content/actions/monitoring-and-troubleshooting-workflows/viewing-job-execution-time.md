---
title: Просмотр времени выполнения задания
shortTitle: View job execution time
intro: 'Вы можете просмотреть время выполнения задания, включая оплачиваемые минуты, начисленные для задания.'
redirect_from:
  - /actions/managing-workflow-runs/viewing-job-execution-time
versions:
  fpt: '*'
  ghec: '*'
ms.openlocfilehash: 2248c40de279e7b9f88775e98cf5a92d467eded5
ms.sourcegitcommit: d6838593f16c4b800e83cac82f6d398a14f7516d
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/14/2022
ms.locfileid: '148045725'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

Оплачиваемые минуты выполнения заданий отображаются только для заданий, выполняемых в частных репозиториях, которые используют средства выполнения, размещенные в {% data variables.product.prodname_dotcom %}, и эти минуты округляются до следующей минуты. Плата за минуты не взимается при использовании {% data variables.product.prodname_actions %} в общедоступных репозиториях или для заданий, выполняемых в локальных средствах выполнения.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}
1. В сводке задания можно просмотреть время выполнения задания. Чтобы просмотреть сведения о времени выполнения оплачиваемого задания, в левой боковой панели в разделе "Сведения о выполнении" щелкните **{% octicon "stopwatch" aria-label="Значок стоп-часы" %} Использование**.

   ![Ссылка на сведения о времени запуска и времени для выставления счетов](/assets/images/help/repository/view-run-billable-time.png)

   {% note %}

   **Примечание.** Показанное оплачиваемое время не включает в себя никакие множители минут. О том, как просмотреть общий объем потребления {% data variables.product.prodname_actions %}, включая множители минут, см. в разделе[Просмотр сведений о потреблении {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/viewing-your-github-actions-usage).

   {% endnote %}
