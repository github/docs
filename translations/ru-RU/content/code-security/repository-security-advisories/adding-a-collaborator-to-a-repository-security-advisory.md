---
title: Добавление участника совместной работы в рекомендации по безопасности репозитория
intro: Вы можете добавить других пользователей или команды для совместной работы по вопросам безопасности.
redirect_from:
- /articles/adding-a-collaborator-to-a-maintainer-security-advisory
- /github/managing-security-vulnerabilities/adding-a-collaborator-to-a-maintainer-security-advisory
- /github/managing-security-vulnerabilities/adding-a-collaborator-to-a-security-advisory
- /code-security/security-advisories/adding-a-collaborator-to-a-security-advisory
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Security advisories
- Vulnerabilities
- Collaboration
shortTitle: Add collaborators
ms.openlocfilehash: 6fa4062fab8e4ffc59724ceb0ba3b6b536871df9
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879138"
---
Пользователи с разрешениями администратора в отношении рекомендаций по безопасности могут добавлять участников совместной работы в рекомендации по безопасности.

{% data reusables.security-advisory.repository-level-advisory-note %}

## Добавление участника совместной работы в рекомендации по безопасности

Участники совместной работы имеют разрешения на запись для рекомендаций по безопасности. Дополнительные сведения см. в разделе [Уровни разрешений для рекомендаций по безопасности репозитория](/code-security/repository-security-advisories/permission-levels-for-repository-security-advisories).

{% note %}

{% data reusables.repositories.security-advisory-collaborators-public-repositories %} Дополнительные сведения об удалении участника совместной работы из рекомендаций по безопасности см. в разделе [Удаление участника совместной работы из рекомендаций по безопасности репозитория](/code-security/repository-security-advisories/removing-a-collaborator-from-a-repository-security-advisory).

{% endnote %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-advisories %}
4. В списке "Рекомендации по безопасности" щелкните рекомендацию по безопасности, куда вы хотите добавить участника совместной работы.
5. В правой части страницы в разделе "Участники совместной работы" введите имя пользователя или команды, которых вы хотите добавить в рекомендации по безопасности.
  ![Поле для ввода имени пользователя или команды](/assets/images/help/security/add-collaborator-field.png)
6. Нажмите кнопку **Добавить**.
  ![Кнопка "Добавить"](/assets/images/help/security/security-advisory-add-collaborator-button.png)

## Дополнительные материалы

- [Уровни разрешений для рекомендаций по безопасности репозитория](/code-security/repository-security-advisories/permission-levels-for-repository-security-advisories)
- [Совместная работа во временной частной вилке для устранения уязвимости репозитория](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)
- [Удаление участника совместной работы из рекомендаций по безопасности репозитория](/code-security/repository-security-advisories/removing-a-collaborator-from-a-repository-security-advisory)
