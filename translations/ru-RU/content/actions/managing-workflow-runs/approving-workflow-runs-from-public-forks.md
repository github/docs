---
title: 'Утверждение рабочих процессов, запускаемых из общедоступных вилок'
intro: 'Когда сторонний участник отправляет запрос на вытягивание в общедоступный репозиторий, ответственному специалисту с доступом на запись может потребоваться утверждать все запуски рабочего процесса.'
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Approve public fork runs
ms.openlocfilehash: 74918a7d2e0081d6332ab267ef18ae148a2cff5e
ms.sourcegitcommit: 73b91dd4cdf592eadec4252319379d6fbe92858e
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/14/2022
ms.locfileid: '148164126'
---
## Сведения о запуске рабочих процессов из общедоступных вилок

{% data reusables.actions.workflow-run-approve-public-fork %}

Вы можете настроить требования к утверждению рабочих процессов для [репозитория](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-required-approval-for-workflows-from-public-forks), [отдела](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#configuring-required-approval-for-workflows-from-public-forks) или [организации](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-your-enterprise).

Запуски рабочих процессов, ожидающие утверждения более 30 дней, автоматически удаляются.

## Утверждение запусков рабочего процесса при запросе на вытягивание из общедоступной вилки

{% data reusables.actions.workflows.approve-workflow-runs %}
