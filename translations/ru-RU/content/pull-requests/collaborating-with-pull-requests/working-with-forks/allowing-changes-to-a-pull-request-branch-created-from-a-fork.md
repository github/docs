---
title: 'Разрешение изменений в ветви запроса на вытягивание, созданной из вилки'
intro: 'Для более эффективной совместной работы можно разрешить фиксации в ветвях, созданных на основе ветвей, принадлежащих вашей личной учетной записи.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork
  - /articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork
  - /github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork
  - /github/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork
permissions: People with push access to the upstream repository of a fork owned by a personal account can commit to the forked branches.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Allow changes to a branch
ms.openlocfilehash: 26255f5aeab3bcaa5ecc1aa6cf865981990c456a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145139177'
---
Авторы запросов на вытягивание могут предоставлять ответственным за вышестоящий репозиторий или тем, у кого есть доступ к отправке в вышестоящий репозиторий, разрешение выполнять фиксации в ветви сравнения их запроса на вытягивание в вилке, принадлежащей пользователю. Дополнительные сведения о вышестоящих репозиториях см. в разделе [О вилках](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks).

Авторы запросов на вытягивание могут предоставлять эти разрешения при первоначальном создании запроса на вытягивание из вилки, принадлежащей пользователю, или после создания запроса на вытягивание. Дополнительные сведения см. в разделе [Создание запроса на вытягивание из вилки](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork).

Разрешения на фиксацию можно задавать при первом создании запроса на вытягивание из вилки. Дополнительные сведения см. в разделе [Создание запроса на вытягивание из вилки](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork). Кроме того, вы можете изменить существующий запрос на вытягивание, чтобы позволить ответственным за репозиторий выполнять фиксации в вашей ветви.

## Включение разрешений ответственных за репозиторий в существующих запросах на вытягивание

1. В {% data variables.product.product_name %}перейдите на главную страницу вышестоящего репозитория вашего запроса на вытягивание.
2. Под именем вышестоящего репозитория щелкните {% octicon "git-pull-request" aria-label="The pull request icon" %} **Запросы на вытягивание**.
![Выбор вкладки "Проблемы и запросы на вытягивание"](/assets/images/help/repository/repo-tabs-pull-requests.png)
3. В списке запросов на вытягивание перейдите к запросу на вытягивание, в котором вы хотите разрешить фиксации.
{% data reusables.repositories.allow-maintainers-user-forks %}

  ![allow-maintainers-to-make-edits-sidebar-checkbox](/assets/images/help/pull_requests/allow-maintainers-to-make-edits-sidebar-checkbox.png)

## Дополнительные материалы

- [Фиксация изменений в ветви запроса на вытягивание, созданной из вилки](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork)
