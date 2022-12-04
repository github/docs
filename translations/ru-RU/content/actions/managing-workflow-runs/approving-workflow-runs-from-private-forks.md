---
title: Утверждение запусков рабочих процессов из частных вилок
intro: 'Когда пользователь, не имеющий доступа на запись, отправляет запрос на вытягивание в частный репозиторий, может потребоваться утвердить любой запуск рабочего процесса.'
permissions: Maintainers with write access to a repository can approve workflow runs.
versions:
  feature: actions-private-fork-workflow-approvals
shortTitle: Approve private fork runs
ms.openlocfilehash: 79b486123b62ee590e833e5c39bb7333a38c49d2
ms.sourcegitcommit: fdc4466e89467a7b13239e26c6042dc1428946b6
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163843'
---
## Сведения о выполнении рабочего процесса из частных вилок

{% data reusables.actions.private-repository-forks-overview %} Дополнительные сведения см. в разделе [Применение политики для вилки запросов на вытягивание в частных репозиториях](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-private-repositories).

## Утверждение выполнения рабочего процесса в запросе на вытягивание из частной вилки

{% data reusables.actions.workflows.approve-workflow-runs %}
