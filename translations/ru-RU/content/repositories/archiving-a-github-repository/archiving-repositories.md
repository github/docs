---
title: Архивирование репозиториев
intro: 'Вы можете архивировать репозиторий, чтобы сделать его доступным только для чтения для всех пользователей и указать, что его активная поддержка прекращена. Вы также можете извлекать репозитории из архива.'
redirect_from:
  - /articles/archiving-repositories
  - /github/creating-cloning-and-archiving-repositories/archiving-repositories
  - /articles/about-archiving-repositories
  - /github/creating-cloning-and-archiving-repositories/about-archiving-repositories
  - /github/creating-cloning-and-archiving-repositories/archiving-a-github-repository/about-archiving-repositories
  - /github/creating-cloning-and-archiving-repositories/archiving-a-github-repository/archiving-repositories
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: a9d5b33b94e6067bb4decfa8f47da8aa25860da4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145137054'
---
## Сведения об архивации репозитория

{% ifversion fpt or ghec %} {% note %}

**Примечание.** Если у вас есть устаревший план выставления счетов для каждого репозитория, с вас по-прежнему будет взиматься плата за архивный репозиторий. Если вы не хотите расходов за архивный репозиторий, необходимо обновить его до нового продукта. Дополнительные сведения см. в разделе [Продукты {% data variables.product.prodname_dotcom %}](/articles/github-s-products).

{% endnote %} {% endif %}

{% ifversion ghec or ghes > 3.4 or ghae-issue-6329 %} {% note %}

**Примечание.** Клиенты, использующие {% data variables.product.prodname_GH_advanced_security %}, могут включить {% data variables.product.prodname_secret_scanning %} в архивных репозиториях. Дополнительные сведения см. в разделе [Сведения о {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-private-repositories).

{% endnote %} {% endif %}

{% data reusables.repositories.archiving-repositories-recommendation %}

После архивации репозитория невозможно добавить или удалить участников совместной работы или команды. Участники с доступом к репозиторию могут только создать вилку проекта или пометить его звездочкой.

Если репозиторий заархивирован, его проблемы, запросы на вытягивание, код, метки, вехи, проекты, вики-сайт, выпуски, фиксации, теги, ветви, реакции, оповещения проверки кода, комментарии и разрешения становятся доступны только для чтения. Чтобы внести изменения в архивный репозиторий, сначала необходимо разархивировать его.

Архивные репозитории можно искать. Дополнительные сведения см. в статье "[Поиск репозиториев](/search-github/searching-on-github/searching-for-repositories/#search-based-on-whether-a-repository-is-archived)". Также можно искать проблемы и запросы на вытягивание в архивных репозиториях. Дополнительные сведения см. в разделе [Поиск проблем и запросов на вытягивание](/search-github/searching-on-github/searching-issues-and-pull-requests/#search-based-on-whether-a-repository-is-archived).  

## Архивация репозитория

{% data reusables.repositories.archiving-repositories-recommendation %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. В разделе "Опасная зона" щелкните **Архивировать этот репозиторий** или **Разархивировать этот репозиторий**.
   ![Кнопка "Архивировать этот репозиторий"](/assets/images/help/repository/archive-repository.png)
4. Прочитайте предупреждения.
5. Введите имя репозитория, который требуется заархивировать или разархивировать.
  ![Предупреждения архивации репозитория](/assets/images/help/repository/archive-repository-warnings.png)
6. Щелкните **Я понимаю последствия, заархивировать этот репозиторий**.
