---
ms.openlocfilehash: 1c0fc320bbd41add7105a53f1ed85a10c39fb021
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: "147883500"
---
<a name="allowing-select-actions-to-run"></a>
<a name="allowing-specific-actions-to-run"></a>
### Разрешение выполнения выбранных действий{% ifversion actions-workflow-policy %} и повторно используемых рабочих процессов{% endif %}

При выборе {% data reusables.actions.policy-label-for-select-actions-workflows %} разрешаются локальные действия{% ifversion actions-workflow-policy %} и повторно используемые рабочие процессы{% endif %}. Для разрешения других конкретных действий{% ifversion actions-workflow-policy %} и повторно используемых рабочих процессов{% endif %} доступны дополнительные параметры:

- **Разрешить действия, созданные с помощью {% data variables.product.prodname_dotcom %}:** все действия, созданные с помощью {% data variables.product.prodname_dotcom %}, можно разрешить использовать рабочими процессами. Действия, созданные с помощью {% data variables.product.prodname_dotcom %}, находятся в `actions` и в организациях `github`. Дополнительные сведения см. в [`actions`](https://github.com/actions) и организациях [`github`](https://github.com/github).
- **Разрешить действия Marketplace проверенным создателям:** {% ifversion ghes or ghae %}Этот параметр доступен, если у вас {% data variables.product.prodname_github_connect %} включен и настроен с помощью {% data variables.product.prodname_actions %}. Дополнительные сведения см. в разделе "[Включение автоматического доступа к действиям GitHub.com с помощью GitHub Подключение](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect)".{% endif %} Можно разрешить всем действиям {% data variables.product.prodname_marketplace %}, созданным проверенными создателями, для использования рабочими процессами. Когда GitHub проверит автора действия в качестве партнерской организации, рядом с действием в {% data variables.product.prodname_marketplace %} появится значок {% octicon "verified" aria-label="The verified badge" %}.
- **Разрешить указанные действия{% ifversion actions-workflow-policy %} и повторно используемые рабочие процессы{% endif %}:** можно ограничить использование действий{% ifversion actions-workflow-policy %} и повторно используемых рабочих процессов{% endif %} в рабочих процессах определенных организаций и репозиториев.

  Чтобы ограничить доступ к определенным тегам или зафиксировать SHA действия{% ifversion actions-workflow-policy %} или повторно используемого рабочего процесса{% endif %}, используйте синтаксис для выбора действия{% ifversion actions-workflow-policy %} или повторно используемого рабочего процесса{% endif %} в рабочих процессах.
  
  - Для действия используется синтаксис `<OWNER>/<REPO>@<TAG OR SHA>`. Например, используйте `actions/javascript-action@v1.0.1`, чтобы выбрать тег или `actions/javascript-action@172239021f7ba04fe7327647b213799853a9eb89` для выбора SHA. Дополнительные сведения см. в разделе "[Поиск и настройка действий](/actions/learn-github-actions/finding-and-customizing-actions#using-release-management-for-your-custom-actions)".
  {%- ifversion actions-workflow-policy %}
  - Для многократно используемого рабочего процесса используется синтаксис `<OWNER>/<REPO>/<PATH>/<FILENAME>@<TAG OR SHA>`. Например, `octo-org/another-repo/.github/workflows/workflow.yml@v1`. Дополнительные сведения см. в статье [Многократное использование рабочих процессов](/actions/using-workflows/reusing-workflows#calling-a-reusable-workflow).
  {%- endif %}

  Подстановочный знак `*` можно использовать для сопоставления шаблонов. Например, чтобы разрешить все действия{% ifversion actions-workflow-policy %} и повторно используемые рабочие процессы{% endif %} в организациях, начинающихся на `space-org`, можно указать `space-org*/*`. Чтобы разрешить все действия{% ifversion actions-workflow-policy %} и повторно используемые рабочие процессы{% endif %} в репозиториях, начинающихся на octocat, можно использовать `*/octocat**@*`. Дополнительные сведения об использовании подстановочного знака `*` см. в разделе «[Синтаксис рабочего процесса для GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)».

  {% ifversion fpt or ghec %} {% note %}

  **Примечание.** Параметр **Разрешить указанные действия{% ifversion actions-workflow-policy %} и повторно используемые рабочие процессы{% endif %}** доступен только в общедоступных репозиториях с планами {% data variables.product.prodname_free_user %}, {% data variables.product.prodname_pro %}, {% data variables.product.prodname_free_team %} для организаций или {% data variables.product.prodname_team %}.

  {% endnote %} {% endif %}

В этой процедуре показано, как добавить конкретные действия{% ifversion actions-workflow-policy %} и повторно используемые рабочие процессы{% endif %} в список разрешений.
