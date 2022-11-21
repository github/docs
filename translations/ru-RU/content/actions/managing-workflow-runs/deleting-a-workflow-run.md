---
title: Удаление выполнения рабочего процесса
shortTitle: Delete a workflow run
intro: 'Можно удалить выполнение рабочего процесса, которое было завершено или которому более двух недель.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 00e2a8b56ee3f7fbcf08c2f97da5b9b7f38a3f7f
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/05/2022
ms.locfileid: '148010084'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %}
1. Чтобы удалить выполнение рабочего процесса, в раскрывающемся меню {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} выберите **Удалить рабочий процесс**.

    ![Удаление выполнения рабочего процесса](/assets/images/help/settings/workflow-delete-run.png)
2. Просмотрите запрос подтверждения и щелкните **Да, окончательно удалить этот рабочий процесс**.

    ![Подтверждение удаления выполнения рабочего процесса](/assets/images/help/settings/workflow-delete-run-confirmation.png)
