---
title: Изменение базовой ветви запроса на вытягивание
intro: 'После открытия запроса на вытягивание можно изменить базовую ветвь, чтобы сравнить изменения в запросе на вытягивание с изменениями в другой ветви.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request
  - /articles/changing-the-base-branch-of-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/changing-the-base-branch-of-a-pull-request
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Change the base branch
ms.openlocfilehash: 6e8e78ac4f3e0d3f81b5efc07bb48151040baa9d
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145137750'
---
{% warning %}

**Предупреждение**. При изменении базовой ветви запроса на вытягивание с временной шкалы могут быть удалены некоторые фиксации. Также могут устареть комментарии к проверке, если строка кода, на которую ссылается комментарий, не будет включена в изменения в запросе на вытягивание.

{% endwarning %}

{% data reusables.repositories.sidebar-pr %}
2. В списке "Запросы на вытягивание" щелкните запрос на вытягивание, который требуется изменить.
3. Рядом с заголовком запроса на вытягивание нажмите кнопку **Изменить**. ![Кнопка "Изменить запрос на вытягивание"](/assets/images/help/pull_requests/pull-request-edit.png)
4. В раскрывающемся меню базовой ветви выберите базовую ветвь, с которой требуется [сравнить изменения](/github/committing-changes-to-your-project/comparing-commits#comparing-branches). ![Раскрывающееся меню базовой ветви ](/assets/images/help/pull_requests/pull-request-edit-base-branch.png)
5. Прочтите сведения об изменении базовой ветви и нажмите кнопку **Изменить базу**. ![Кнопка подтверждения изменения базовой ветви ](/assets/images/help/pull_requests/pull-request-base-branch-confirm.png)

{% tip %}

**Совет**. При открытии запроса на вытягивание {% data variables.product.product_name %} установит в качестве базы фиксацию, на которую ссылается эта ветвь. При последующем обновлении этой ветви {% data variables.product.product_name %} не будет обновлять фиксацию базовой ветви.

{% endtip %}

## Дополнительные материалы

- [Создание запроса на вытягивание](/articles/creating-a-pull-request)
- [Сведения о запросах на вытягивание](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
- [Просмотр предлагаемых изменений в запросе на вытягивание](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)
