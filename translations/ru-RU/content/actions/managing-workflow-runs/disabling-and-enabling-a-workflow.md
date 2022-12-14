---
title: Отключение и включение рабочего процесса
intro: 'Вы можете отключить и повторно включить рабочий процесс с помощью пользовательского интерфейса {% data variables.product.prodname_dotcom %}, REST API или {% data variables.product.prodname_cli %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Disable & enable a workflow
ms.openlocfilehash: 38b6f4b4cf006d8c49a904a3dd9c2d75d8addaff
ms.sourcegitcommit: d6838593f16c4b800e83cac82f6d398a14f7516d
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/14/2022
ms.locfileid: '148045701'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

Отключение рабочего процесса позволяет остановить активацию рабочего процесса без удаления файла из репозитория. Вы можете снова включить рабочий процесс на {% data variables.product.prodname_dotcom %}.

Временное отключение рабочего процесса может пригодиться во многих сценариях. Ниже приведено несколько примеров, в которых полезно отключить рабочий процесс:

- Из-за ошибки в рабочем процессе возникает слишком много запросов или неправильные запросы, которые отрицательно влияют на внешние службы.
- Рабочий процесс, который не является критическим и занимает слишком много времени в вашей учетной записи.
- Рабочий процесс, отправляющий запросы в службу, которая не работает.
- Рабочие процессы в разветвленном репозитории, которые не нужны (например, запланированные рабочие процессы).

{% warning %}

**Предупреждение.** {% data reusables.actions.scheduled-workflows-disabled %}

{% endwarning %}

Вы также можете отключить и включить рабочий процесс с помощью REST API. Дополнительные сведения см. в разделе [Действия](/rest/reference/actions#workflows) документации по REST API.

## Отключение рабочего процесса

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %}
1. На левой боковой панели щелкните нужный рабочий процесс.

   {% ifversion workflow-nav-2022 -%} ![ Действия выбирают рабочий процесс](/assets/images/help/repository/actions-select-workflow-2022.png) {%- else -%} ![Actions select workflow](/assets/images/help/repository/actions-select-workflow.png) {%- endif %}
1. Щелкните {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.

   {% ifversion workflow-nav-2022 -%} ![ меню](/assets/images/help/repository/actions-workflow-menu-kebab-2022.png) действий кебаба {%- else -%} ![Действия кебаб меню](/assets/images/help/repository/actions-workflow-menu-kebab.png) {%- endif %}
1. Щелкните **Отключить рабочий процесс**.

   {% ifversion workflow-nav-2022 -%} ![ действия отключения рабочего процесса](/assets/images/help/repository/actions-disable-workflow-2022.png) {%- else -%} ![отключают рабочий процесс](/assets/images/help/repository/actions-disable-workflow.png)

   Отключенный рабочий процесс помечается {% octicon "stop" aria-label="Значок остановки" %} для указания его состояния.

   ![список действий отключенного рабочего процесса](/assets/images/help/repository/actions-find-disabled-workflow.png) {%- endif %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Чтобы отключить рабочий процесс, используйте подкоманду `workflow disable`. Замените `workflow` на имя, идентификатор или имя файла рабочего процесса, который требуется отключить. Например, `"Link Checker"`, `1234567` или `"link-check-test.yml"`. Если не указать рабочий процесс, {% data variables.product.prodname_cli %} отобразит интерактивное меню для выбора рабочего процесса.

```shell
gh workflow disable WORKFLOW
```

{% endcli %}

## Включение рабочего процесса

{% webui %}

Можно повторно включить рабочий процесс, который был ранее отключен.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %}
1. На левой боковой панели щелкните нужный рабочий процесс.

   {% ifversion workflow-nav-2022 -%} ![ Действия выбирают отключенный рабочий процесс](/assets/images/help/repository/actions-select-disabled-workflow-2022.png) {%- else -%} ![Действия выбирают отключенный рабочий процесс](/assets/images/help/repository/actions-select-disabled-workflow.png) {%- endif %}
1. Щелкните **Включить рабочий процесс**.

   {% ifversion workflow-nav-2022 -%} ![ Действия позволяют рабочему процессу](/assets/images/help/repository/actions-enable-workflow-2022.png) {%- else -%} ![Действия включить рабочий процесс](/assets/images/help/repository/actions-enable-workflow.png) {%- endif %}

{% endwebui %}

{% cli %}

Чтобы включить рабочий процесс, используйте подкоманду `workflow enable`. Замените `workflow` на имя, идентификатор или имя файла рабочего процесса, который требуется включить. Например, `"Link Checker"`, `1234567` или `"link-check-test.yml"`. Если не указать рабочий процесс, {% data variables.product.prodname_cli %} отобразит интерактивное меню для выбора рабочего процесса.

```shell
gh workflow enable WORKFLOW
```

{% endcli %}
