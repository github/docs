---
title: Создание репозитория из шаблона
intro: 'Вы можете создать новый репозиторий с той же структурой каталогов и файлами, что и в существующем репозитории.'
redirect_from:
  - /articles/creating-a-repository-from-a-template
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-repository-from-a-template
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Create from a template
ms.openlocfilehash: 16d124431426e19cf95c768e8a4cdaa5f4da2e17
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160247'
---
## Сведения о шаблонах репозитория

Любой пользователь с разрешениями на чтение в репозитории шаблонов может создать репозиторий из этого шаблона. Дополнительные сведения см. в разделе [Создание репозитория шаблонов](/articles/creating-a-template-repository).

{% tip %}

**Совет**. Репозиторий легко можно создать из шаблона, используя {% data variables.product.prodname_cli %}. Дополнительные сведения см. в разделе [`gh repo create`](https://cli.github.com/manual/gh_repo_create) в документации по {% data variables.product.prodname_cli %}.

{% endtip %}

Можно включить структуру каталогов и файлы только из ветви репозитория шаблонов по умолчанию или включить все ветви. Ветви, созданные на основе шаблона, имеют несвязанные журналы, поэтому нельзя создавать запросы на вытягивание или выполнять слияние между ветвями.

Создание репозитория из шаблона аналогично созданию вилки репозитория, но существуют важные различия.
- Новая вилка включает весь журнал фиксаций родительского репозитория, а репозиторий, созданный из шаблона, начинается с одной фиксации.
- Фиксации в вилке не отображаются в графе вкладов, а фиксации в репозитории, созданном из шаблона, отображаются в графе вкладов.
- Вилка может быть временным способом внесения кода в существующий проект, а при создании репозитория из шаблона быстро запускается новый проект.

Дополнительную информацию о вилках см. в разделе [Сведения о вилках](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks).

## Создание репозитория из шаблона

{% data reusables.repositories.navigate-to-repo %}
1. Над списком файлов щелкните **Использовать этот шаблон**.
{% ifversion fpt or ghec %}
1. Выберите **Создать репозиторий**.

   ![Кнопка "Использовать этот шаблон"](/assets/images/help/repository/use-this-template-button.png)

   {% note %}

   **Примечание:** Кроме того, можно открыть шаблон в codespace и позже опубликовать свою работу в новом репозитории. Дополнительные сведения см. в разделе [Создание codespace на основе шаблона](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template).

   {% endnote %} {% endif %} {% data reusables.repositories.owner-drop-down %} {% data reusables.repositories.repo-name %} {% data reusables.repositories.choose-repo-visibility %}
1. Если вы решили использовать шаблон, то для того, чтобы включить в него структуру каталогов и файлы изо всех ветвей, а не только ветви по умолчанию, установите флажок **Включить все ветви**.
  ![Флажок "Включить все ветви"](/assets/images/help/repository/include-all-branches.png) {% data reusables.repositories.select-marketplace-apps %}
8. Щелкните **Create repository from template** (Создание репозитория из шаблона).
