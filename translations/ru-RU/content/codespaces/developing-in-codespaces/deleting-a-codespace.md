---
title: Удаление codespace
intro: 'Codespace можно удалить, если он больше не требуется.'
redirect_from:
  - /github/developing-online-with-github-codespaces/deleting-a-codespace
  - /github/developing-online-with-codespaces/deleting-a-codespace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Delete a codespace
ms.openlocfilehash: 24b53cc0cead2b6b15894ada4c799abc8e1c6e7a
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188259'
---
Кодовое пространство можно удалить различными способами: в терминале с помощью {% data variables.product.prodname_cli %}, в {% data variables.product.prodname_vscode %} или в веб-браузере. Используйте вкладки в этой статье, чтобы отобразить инструкции для каждого из этих способов удаления codespace.

{% note %}

**Примечание**. Вы не можете удалить codespace из шлюза JetBrains, клиентского приложения JetBrains или из JupyterLab.

{% endnote %}

За хранение сред codespace взимается плата. Поэтому следует удалить среды codespace, которые вам больше не нужны. Дополнительные сведения см. в статье [Сведения о выставлении счетов за {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces).

{% data reusables.codespaces.max-number-codespaces %}

## Удаление codespace

{% webui %}

{% data reusables.codespaces.your-codespaces-procedure-step %}
1. Справа от среды codespace, которую требуется удалить, щелкните {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, а затем щелкните **{% octicon "trash" aria-label="The trash icon" %} Удалить**.

   ![Кнопка "Удалить"](/assets/images/help/codespaces/delete-codespace.png)

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.deleting-a-codespace-in-vscode %}

{% endvscode %}


{% cli %}

{% data reusables.cli.cli-learn-more %}

Чтобы удалить codespace, используйте подкоманду `gh codespace delete`, а затем выберите codespace в открывшемся списке.

```shell
gh codespace delete
```

Если у вас есть несохраненные изменения, будет предложено подтвердить удаление. С помощью флага `--force` можно выполнить удаление без вывода этого запроса.

Дополнительные сведения об этой команде см. в [ руководстве по {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_codespace_delete).

{% endcli %}

## Массовое удаление codespace

{% webui %}

Вы можете использовать {% data variables.product.prodname_cli %} для удаления нескольких или всех ваших codespace с помощью одной команды. Дополнительные сведения см. на вкладке {% data variables.product.prodname_cli %} в верхней части этой страницы.

{% endwebui %}

{% vscode %}

Вы можете использовать {% data variables.product.prodname_cli %} для удаления нескольких или всех ваших codespace с помощью одной команды. Дополнительные сведения см. на вкладке {% data variables.product.prodname_cli %} в верхней части этой страницы.

{% endvscode %}


{% cli %}

Вы можете удалить несколько или все свои codespace с помощью одной команды, используя `gh codespace delete`, за которой следует один из следующих флагов:

`--all` — удалить все codespace.

`--repo REPOSITORY` — удалить все codespace для этого репозитория. Или используйте вместе с флагом `--days` для фильтрации codespace по времени.

`--days NUMBER` — удалить все codespace старше указанного количества дней. Может использоваться вместе с флагом `--repo`.

По умолчанию вам будет предложено подтвердить удаление любых codespace, содержащих несохраненные изменения. Вы можете использовать флаг `--force`, чтобы пропустить это подтверждение. 

### Пример

Удалите все codespace для репозитория `octo-org/octo-repo`, созданного вами более 7 дней назад.

```
gh codespace delete --repo octo-org/octo-repo --days 7
```

{% endcli %}

## Удаление сред codespace в организации

Как владелец организации вы можете использовать {% data variables.product.prodname_cli %} для удаления любой среды codespace в вашей организации.

{% webui %}

Дополнительные сведения см. на вкладке {% data variables.product.prodname_cli %} в верхней части этой страницы.

{% endwebui %}

{% vscode %}

Дополнительные сведения см. на вкладке {% data variables.product.prodname_cli %} в верхней части этой страницы.

{% endvscode %}

{% cli %}

1. Введите одну из этих команд, чтобы отобразить список сред codespace.
   * `gh codespace delete --org ORGANIZATION` — перечисляет текущие среды codespace в указанной организации. 
   * `gh codespace delete --org ORGANIZATION --user USER` — перечисляет только среды codespace, созданные указанным пользователем.
   Вы должны быть владельцем указанной организации.
1. В списке сред codespace перейдите к среде codespace, которую требуется удалить.
1. Чтобы удалить выбранную среду codespace, нажмите клавишу <kbd>ВВОД</kbd>.

   Если codespace содержит несохраненные изменения, вам будет предложено подтвердить удаление.

{% endcli %}

Вы также можете удалить среды codespace вашей организации с помощью REST API. Дополнительные сведения см. в статье [Организации Codespaces](/rest/codespaces/organizations#delete-a-codespace-from-the-organization).

## Дополнительные материалы
- [Жизненный цикл codespace](/codespaces/getting-started/the-codespace-lifecycle)
- [Настройка автоматического удаления codespaces](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces)
