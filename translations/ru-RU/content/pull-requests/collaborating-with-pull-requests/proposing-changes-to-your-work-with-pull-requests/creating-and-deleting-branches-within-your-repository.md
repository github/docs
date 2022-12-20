---
title: Создание и удаление ветвей в репозитории
intro: 'Вы можете создавать или удалять ветви непосредственно в {% data variables.product.product_name %}.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository
  - /articles/deleting-branches-in-a-pull-request
  - /articles/creating-and-deleting-branches-within-your-repository
  - /github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Create & delete branches
ms.openlocfilehash: 44b56d8a1884e5cbfe0832f291cdc244b57a3810
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147526633'
---
## Создание ветви
В {% data variables.product.product_name %} создавать ветви можно различными способами.

{% note %}

**Примечание.** Создать ветвь можно только в репозитории, к которому у вас есть доступ на отправку.

{% endnote %}

{% ifversion create-branch-from-overview %}
### Общие сведения о создании ветви с помощью ветвей
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.navigate-to-branches %}
1. Щелкните **Новая ветвь**.
   ![Снимок экрана: страница обзора ветвей с выделенным элементом "Новая ветвь"](/assets/images/help/branches/new-branch-button.png)
2. В диалоговом окне введите имя ветви и при необходимости измените ее источник.  
   Если репозиторием является вилка, в качестве источника ветви также можно выбрать вышестоящий репозиторий.
   ![Снимок экрана: модальное окно создания ветви для вилки с выделенным источником ветви](/assets/images/help/branches/branch-creation-popup-branch-source.png)
3. Щелкните **Создать ветвь**.
   ![Снимок экрана: модальное окно создания ветви с выделенной кнопкой создания ветви](/assets/images/help/branches/branch-creation-popup-button.png) {% endif %}

### Создание ветви с помощью раскрывающегося списка ветви
{% data reusables.repositories.navigate-to-repo %}
1. Если вы хотите создать ветвь из ветви, которая не является ветвью по умолчанию для репозитория, щелкните {% octicon "git-branch" aria-label="The branch icon" %} **Ветви** и выберите другую ветвь.
    ![Ссылка на ветви на странице обзора](/assets/images/help/branches/branches-overview-link.png)
1. Нажмите на меню выбора ветви.
    ![Меню выбора ветви](/assets/images/help/branch/branch-selection-dropdown.png)
1. Введите уникальное имя для новой ветви и нажмите **Создать ветвь**.
    ![Текстовое поле создания ветви](/assets/images/help/branch/branch-creation-text-box.png)
    
{% ifversion fpt or ghec or ghes > 3.4 %}
### Создание ветви для проблемы
Вы можете создать ветвь для работы с проблемой непосредственно на странице проблемы и сразу приступить к работе. Дополнительные сведения см. в статье [Создание ветви для работы с проблемой](/issues/tracking-your-work-with-issues/creating-a-branch-for-an-issue).
{% endif %}

## Удаление ветви

{% data reusables.pull_requests.automatically-delete-branches %}

{% note %}

**Примечание.** Если ветвь, которую вы хотите удалить, используется как ветвь репозитория по умолчанию, перед ее удалением нужно выбрать новую ветвь по умолчанию. Дополнительные сведения см. в разделе [Изменение ветви по умолчанию](/github/administering-a-repository/changing-the-default-branch).

{% endnote %}

Если ветвь, которую вы хотите удалить, связана с открытым запросом на вытягивание, необходимо объединить или закрыть этот запрос на вытягивание перед удалением ветви. Дополнительные сведения см. в статьях [Слияние запроса на вытягивание](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request) и [Закрытие запроса на вытягивание](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request).

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.navigate-to-branches %}
1. Прокрутите страницу до ветви, которую хотите удалить, и нажмите на {% octicon "trash" aria-label="The trash icon to delete the branch" %}.
    ![удалить ветвь](/assets/images/help/branches/branches-delete.png) {% ifversion fpt or ghes > 3.5 or ghae-issue-6763 or ghec %}
1. При попытке удалить ветвь, связанную по крайней мере с одним открытым запросом на вытягивание, необходимо подтвердить, что планируется закрыть запросы на вытягивание.
   
   ![Подтверждение удаления ветви](/assets/images/help/branches/confirm-deleting-branch.png){% endif %}

{% data reusables.pull_requests.retargeted-on-branch-deletion %} Дополнительные сведения см. в статье [Сведения о ветвях](/github/collaborating-with-issues-and-pull-requests/about-branches#working-with-branches).

## Дополнительные материалы

- [Сведения о ветвях](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)
- [Просмотр ветвей в репозитории](/github/administering-a-repository/viewing-branches-in-your-repository)
- [Удаление и восстановление ветвей в запросе на вытягивание](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request)
