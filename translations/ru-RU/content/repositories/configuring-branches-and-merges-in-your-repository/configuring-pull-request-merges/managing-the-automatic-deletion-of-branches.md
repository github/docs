---
title: Управление автоматическим удалением ветвей
intro: Вы можете автоматически удалять головные ветви после объединения запросов на вытягивание в репозитории.
redirect_from:
  - /articles/managing-the-automatic-deletion-of-branches
  - /github/administering-a-repository/managing-the-automatic-deletion-of-branches
  - /github/administering-a-repository/configuring-pull-request-merges/managing-the-automatic-deletion-of-branches
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Automatic branch deletion
ms.openlocfilehash: feaeb7c2178beab4dc23a310df6924c6e1c52e0f
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882460'
---
Любой пользователь с разрешениями администратора репозитория может включить или отключить автоматическое удаление ветвей.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. В разделе {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}"Запросы на вытягивание"{% else %}"Кнопка слияния"{% endif %} установите или снимите флажок **Автоматически удалять главные ветви**.
  ![Флажок для включения или отключения автоматического удаления ветвей](/assets/images/help/repository/automatically-delete-branches.png)

## Дополнительные материалы
- [Слияние запроса на вытягивание](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)
- [Создание и удаление ветвей в репозитории](/articles/creating-and-deleting-branches-within-your-repository)
