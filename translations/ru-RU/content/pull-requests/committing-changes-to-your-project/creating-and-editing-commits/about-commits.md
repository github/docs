---
title: Сведения о фиксациях
intro: Вы можете сохранить небольшие группы значимых изменений в виде фиксаций.
redirect_from:
  - /articles/why-are-my-commits-in-the-wrong-order
  - /github/committing-changes-to-your-project/why-are-my-commits-in-the-wrong-order
  - /github/committing-changes-to-your-project/about-commits
  - /github/committing-changes-to-your-project/creating-and-editing-commits/about-commits
  - /pull-requests/committing-changes-to-your-project/viewing-and-comparing-commits/commit-branch-and-tag-labels
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 6847b0a2e69fb17e648b7841a9ae250eaa9b38fa
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410526'
---
## Сведения о фиксациях

{% data reusables.commits.about-commits %}

{% ifversion commit-signoffs %} Если для репозитория, для которого выполняется фиксация, включена обязательная фиксация, и вы выполняете фиксацию через веб-интерфейс, фиксация автоматически утверждается в процессе фиксации. Дополнительные сведения см. в разделе [Управление политикой утверждения фиксаций для репозитория](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-commit-signoff-policy-for-your-repository). {% endif %}

Вы можете добавить соавтора для любых фиксаций, в совместной работе над которыми вы участвуете. Дополнительные сведения см. в разделе [Создание фиксации с несколькими авторами](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors).

{% ifversion fpt or ghec %} Вы также можете создать фиксацию от имени организации. Дополнительные сведения см. в разделе [Создание фиксации от имени организации](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-on-behalf-of-an-organization). {% endif %}

Перемещение изменений из одной ветви в другую позволяет изменить серию фиксаций и порядок фиксаций на временной шкале. Дополнительные сведения см. в разделе [Сведения о git rebase](/github/getting-started-with-github/about-git-rebase).

## Сведения о ветвях фиксации и метках тегов

Чтобы увидеть, в какой ветви находится фиксация, просмотрите метки под фиксацией на странице фиксации.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.navigate-to-commit-page %}
1. Перейдите к фиксации, щелкнув ссылку в сообщении о фиксации.
   ![Снимок экрана: фиксация с выделенной ссылкой на сообщение фиксации](/assets/images/help/commits/commit-message-link.png)
2. Чтобы просмотреть, в какой ветви находится фиксация, проверьте метку под сообщением о фиксации.
   ![Снимок экрана: фиксация с выделенным индикатором ветви фиксации](/assets/images/help/commits/commit-branch-indicator.png)

Если фиксация отсутствует в ветви по умолчанию (`main`), метка отобразит ветви, содержащие фиксацию. Если фиксация является частью не объединенного с ветвью запроса на вытягивание, щелкните ссылку, чтобы перейти к запросу на вытягивание.

Когда фиксация окажется в ветви по умолчанию, будут отображаться все теги, содержащие фиксацию, и ветвь по умолчанию будет единственной ветвью в списке. Дополнительные сведения о тегах см. в разделе [Основы Git — добавление тегов](https://git-scm.com/book/en/v2/Git-Basics-Tagging) в документации по Git.

![Снимок экрана: фиксация с выделенным тегом фиксации](/assets/images/help/commits/commit-tag-label.png)

{% ifversion commit-tree-view %}

## Использование дерева файлов

Дерево файлов можно использовать для перехода между файлами в фиксации.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.navigate-to-commit-page %}
1. Перейдите к фиксации, щелкнув ссылку в сообщении о фиксации.
   ![Снимок экрана: фиксация с выделенной ссылкой на сообщение фиксации](/assets/images/help/commits/commit-message-link.png)
1. Щелкните файл в дереве файлов, чтобы просмотреть соответствующее различие файлов. Если дерево файлов скрыто, щелкните {% octicon "sidebar-collapse" aria-label="The sidebar collapse icon" %}, чтобы отобразить его.

  {% note %}

  **Примечание**. Дерево файлов не будет отображаться, если ширина экрана слишком узкая или если фиксация содержит только один файл.

  {% endnote %}
  
  ![Снимок экрана: поле поиска "Отфильтровать измененные файлы" с выделенным деревом файлов](/assets/images/help/repository/file-tree.png)
1. Чтобы выполнить фильтрацию по пути к файлу, введите часть или весь путь к файлу в поле поиска **Отфильтровать измененные файлы**.

{% endif %}

## Дополнительные материалы
- Раздел [Фиксация и просмотр изменений в проекте](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project#about-commits) в документации по {% data variables.product.prodname_desktop %}
