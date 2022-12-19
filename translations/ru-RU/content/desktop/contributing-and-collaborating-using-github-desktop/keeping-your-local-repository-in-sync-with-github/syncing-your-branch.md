---
title: Синхронизация ветви
intro: 'Так как фиксации передаются в проект в {% data variables.product.prodname_dotcom %}, вы можете синхронизировать локальную копию проекта путем ее извлечения из удаленного репозитория.'
redirect_from:
  - /desktop/contributing-to-projects/syncing-your-branch
  - /desktop/contributing-and-collaborating-using-github-desktop/syncing-your-branch
versions:
  fpt: '*'
ms.openlocfilehash: eb803c8f5ef34c4ab25255c1635d31468b1b32af
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145092314'
---
## Сведения о синхронизации ветвей

Вы можете синхронизировать локальную ветвь с удаленным репозиторием, вытянув все фиксации, которые были добавлены в ветвь на {% data variables.product.product_name %} с момента последней синхронизации. Если вы осуществляете фиксации с другого устройства или в проекте участвуют несколько человек, потребуется синхронизировать локальную ветвь, чтобы обеспечить обновление ветви.

При вытягивании в локальную ветвь вы обновляете только локальную копию репозитория. Чтобы обновить ветвь на {% data variables.product.prodname_dotcom %}, необходимо отправить изменения. Дополнительные сведения см. в разделе [Отправка изменений в {% data variables.product.prodname_dotcom %}](/desktop/contributing-to-projects/pushing-changes-to-github).

Чтобы добавить изменения из одной ветви в другую, можно выполнить слияние ветвей. Чтобы применить изменения к вашей ветви из другой ветви в том же репозитории, можно выполнить слияние другой ветви в вашу в {% data variables.product.prodname_desktop %}. Чтобы запросить объединение изменений из вашей ветви в другую ветвь в том же репозитории или в другом репозитории в сети, можно создать запрос на вытягивание в {% data variables.product.prodname_desktop %}. Дополнительные сведения см. в разделах [Слияние другой ветви с вашей ветвью проекта](#merging-another-branch-into-your-project-branch) и [Сведения о запросах на вытягивание](/github/collaborating-with-issues-and-pull-requests/about-pull-requests).

Для некоторых рабочих процессов обязательным или предпочтительным является перемещение изменений из одной ветви в другую, а не слияние. При этом вы можете переупорядочивать, изменять фиксации или выполнять их сжатие. Дополнительные сведения см. в разделах [О перемещении изменений между ветвями в Git](/github/getting-started-with-github/about-git-rebase) и [Перемещение изменений из вашей ветви проекта в другую ветвь](#rebasing-your-project-branch-onto-another-branch).

## Извлечение из удаленной ветви в локальную

1. В {% data variables.product.prodname_desktop %}используйте раскрывающийся список {% octicon "git-branch" aria-label="The branch icon" %} **Текущая ветвь** и выберите локальную ветвь, которую хотите обновить.
2.  Чтобы проверить наличие фиксаций в удаленной ветви, нажмите кнопку **Fetch origin** (Принести из origin).
![Кнопка "Fetch origin" (Принести из origin)](/assets/images/help/desktop/fetch-button.png)
3. Чтобы извлечь все фиксации из удаленной ветви, нажмите кнопку **Pull origin** (Отправить в origin) или **Pull origin with rebase** (Отправить в origin с перемещением изменений).
![Кнопка "Pull origin" (Отправить в origin)](/assets/images/help/desktop/pull-button.png) {% data reusables.desktop.resolve-merge-conflicts %}

## Слияние другой ветви с вашей ветвью проекта

{% data reusables.desktop.current-branch-menu %} {% data reusables.desktop.choose-a-branch-to-merge %} {% data reusables.desktop.confirm-merging-branch %}

   {% note %}

   **Примечание**. При наличии конфликтов слияния {% data variables.product.prodname_desktop %} выведет предупреждение над кнопкой **Merge <em>ветвь</em> into <em>ветвь</em>** (Слияние "имя ветви" с "имя ветви"). Вы не сможете выполнить слияние ветвей, пока не устраните все конфликты.

   {% endnote %}

   ![Кнопка "Слияние"](/assets/images/help/desktop/merge-branch-button.png) {% data reusables.desktop.push-origin %}

## Перемещение изменений из вашей ветви проекта в другую

{% mac %}

1. В строке меню используйте раскрывающийся список **Branch** (Ветвь) и выберите **Rebase Current Branch** (Переместить изменения для текущей ветви).
![Параметр "Rebase Current Branch" (Переместить изменения для текущей ветви) в раскрывающемся списке ветви](/assets/images/help/desktop/mac-rebase-current-branch.png)
2. Щелкните ветвь, изменения которой нужно переместить в текущую ветвь, а затем нажмите кнопку **Start rebase** (Запустить перемещение).
![Кнопка "Start rebase" (Начать перемещение)](/assets/images/help/desktop/start-rebase-button.png)
3. Если вы окончательно решили выполнить перемещение, нажмите кнопку **Begin rebase** (Начать перемещение).
![Кнопка "Begin rebase" (Начать перемещение)](/assets/images/help/desktop/begin-rebase-button.png) {% data reusables.desktop.resolve-merge-conflicts %}
4. Чтобы отправить локальные изменения, нажмите кнопку **Force push origin** (Принудительно отправить origin).
![Принудительная отправка origin](/assets/images/help/desktop/force-push-origin.png)

{% endmac %}

{% windows %}

1. Используйте раскрывающийся список **Branch** (Ветвь) и выберите **Rebase Current Branch** (Переместить изменения для текущей ветви).
![Параметр "Rebase Current Branch" (Переместить изменения для текущей ветви) в раскрывающемся списке ветви](/assets/images/help/desktop/windows-rebase-current-branch.png)
2. Щелкните ветвь, изменения которой нужно переместить в текущую ветвь, а затем нажмите кнопку **Start rebase** (Запустить перемещение).
![Кнопка "Start rebase" (Начать перемещение)](/assets/images/help/desktop/start-rebase-button.png)
3. Если вы окончательно решили выполнить перемещение, нажмите кнопку **Begin rebase** (Начать перемещение).
![Кнопка "Begin rebase" (Начать перемещение)](/assets/images/help/desktop/begin-rebase-button.png) {% data reusables.desktop.resolve-merge-conflicts %}
4. Чтобы отправить локальные изменения, нажмите кнопку **Force push origin** (Принудительно отправить origin).
![Принудительная отправка origin](/assets/images/help/desktop/force-push-origin.png)

{% endwindows %}

## Слияние со сжатием другой ветви с вашей ветвью проекта

1. Используйте раскрывающийся список **Branch** (Ветвь) и выберите **Squash and Merge into Current Branch** (Слияние со сжатием в текущую ветвь).
![Параметр слияния со сжатием в раскрывающемся списке ветви](/assets/images/help/desktop/squash-and-merge-menu.png)
2. Выберите ветвь, которую требуется объединить с текущей, а затем щелкните **Squash and merge** (Слияние со сжатием).
![Кнопка "Squash and merge" (Слияние со сжатием)](/assets/images/help/desktop/squash-and-merge-selection.png) {% note %}

   **Примечание**. При наличии конфликтов слияния {% data variables.product.prodname_desktop %} выведет предупреждение над кнопкой **Squash and merge** (Слияние со сжатием). Вы не сможете выполнить слияние со сжатием для ветви, пока не устраните все конфликты.

   {% endnote %} {% data reusables.desktop.push-origin %}

## Дополнительные материалы
- Термин [Вытягивание](/github/getting-started-with-github/github-glossary#pull) в глоссарии {% data variables.product.prodname_dotcom %}
- Термин [Слияние](/github/getting-started-with-github/github-glossary#merge) в глоссарии {% data variables.product.prodname_dotcom %}
- Термин [Перемещение изменений из одной ветви в другую](/github/getting-started-with-github/github-glossary#rebase) в глоссарии {% data variables.product.prodname_dotcom %}
