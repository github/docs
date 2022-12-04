---
title: Включение анонимного доступа на чтение GIT для репозитория
intro: 'Администратор репозитория может включить или отключить анонимный доступ на чтение Git для общедоступных репозиториев, которые удовлетворяют определенным требованиям.'
redirect_from:
  - /articles/enabling-anonymous-git-read-access-for-a-repository
  - /github/administering-a-repository/enabling-anonymous-git-read-access-for-a-repository
  - /github/administering-a-repository/managing-repository-settings/enabling-anonymous-git-read-access-for-a-repository
versions:
  ghes: '*'
shortTitle: Anonymous Git read access
ms.openlocfilehash: b289f2e70096775e567be0c925675e9986424821
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145136736'
---
Администраторы репозитория могут изменить параметр анонимного доступа на чтение GIT для него при соблюдении следующих условий:
- Администратор сайта включил закрытый режим и анонимный доступ на чтение GIT.
- Репозиторий является общедоступным в организации и не является вилкой.
- Администратор сайта не отключил анонимный доступ на чтение GIT для репозитория.

{% data reusables.enterprise_user_management.exceptions-for-enabling-anonymous-git-read-access %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. Рядом с пунктом "Включить анонимный доступ на чтение GIT" нажмите кнопку **Включить**.
![Кнопка "Включено" рядом с пунктом "Анонимный доступ на чтение GIT"](/assets/images/help/repository/enable-git-read-access-for-a-repo.png)
4. Просмотрите изменения. Чтобы подтвердить действие, введите имя репозитория и щелкните **Я понимаю, включить анонимный доступ на чтение GIT**.
