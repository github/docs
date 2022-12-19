---
title: Отмена запроса на вытягивание
intro: Вы можете отменить изменения запроса на вытягивание после слияния с вышестоящей ветвью.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/incorporating-changes-from-a-pull-request/reverting-a-pull-request
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/reverting-a-pull-request
  - /articles/reverting-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/reverting-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 9e94b6e9358089da8f62ff5152800e14556db3e7
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145139662'
---
## Сведения об отмене запроса на вытягивание.

При отмене запроса на вытягивание в {% data variables.product.product_name %} создается новый запрос на вытягивание, содержащий одну операцию отмены фиксации слияния из исходного объединенного запроса на вытягивание. Чтобы отменять запросы на вытягивание, необходимо иметь [разрешения на запись](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization) в репозиторий. 

## Отмена запроса на вытягивание

{% note %}

**Примечание**. Отмена отдельных фиксаций в запросе на вытягивание может потребоваться в любом из следующих случаев.

- Отмена запроса на вытягивание приводит к конфликтам слияния.
- Исходный запрос на вытягивание изначально не был объединен с {% data variables.product.product_name %}. Например, другой пользователь мог выполнить быстрое слияние запроса на вытягивание с помощью командной строки.

Дополнительные сведения об использовании Git для отмены отдельных фиксаций вручную см. в описании команды [git revert](https://git-scm.com/docs/git-revert.html) в документации по Git.

{% endnote %}

{% data reusables.repositories.sidebar-pr %}
2. В списке "Запросы на вытягивание" щелкните запрос на вытягивание, который требуется отменить.
3. В нижней части запроса на вытягивание щелкните **Отменить изменения**. Если параметр **Отменить изменения** не отображается, обратитесь к администратору репозитория для получения разрешений на запись.
  ![Ссылка для отмены запроса на вытягивание](/assets/images/help/pull_requests/revert-pull-request-link.png)
4. Выполните слияние полученного запроса на вытягивание. Дополнительные сведения см. в разделе [Слияние запроса на вытягивание](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request).
