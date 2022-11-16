---
title: Удаление участника совместной работы из рекомендаций по безопасности репозитория
intro: При удалении участника совместной работы из рекомендаций по безопасности для репозитория этот участник потеряет доступ на чтение и запись к обсуждению и метаданным рекомендаций по безопасности.
redirect_from:
  - /github/managing-security-vulnerabilities/removing-a-collaborator-from-a-security-advisory
  - /code-security/security-advisories/removing-a-collaborator-from-a-security-advisory
  - /code-security/repository-security-advisories/removing-a-collaborator-from-a-repository-security-advisory
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Security advisories
  - Vulnerabilities
  - Collaboration
shortTitle: Remove collaborators
ms.openlocfilehash: 77c21bea9c593935ee1b92028fc52859320f5a38
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/27/2022
ms.locfileid: '148114124'
---
Пользователи с разрешениями администратора в отношении рекомендаций по безопасности могут удалять участников совместной работы из рекомендаций по безопасности.

{% data reusables.security-advisory.repository-level-advisory-note %}

## Удаление участника совместной работы из рекомендаций по безопасности репозитория

{% data reusables.repositories.security-advisory-collaborators-public-repositories %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-advisories %}
4. В списке "Рекомендации по безопасности" щелкните рекомендацию по безопасности, из которой вы хотите удалить участника совместной работы.
  ![Советы по безопасности в списке](/assets/images/help/security/security-advisory-in-list.png)
5. В правой части страницы в разделе "Участники совместной работы" найдите имя пользователя или команды, которых вы хотите удалить из рекомендаций по безопасности.
  ![Участник совместной работы в рекомендациях по безопасности](/assets/images/help/security/security-advisory-collaborator.png)
6. Рядом с участником совместной работы, которого вы хотите удалить, щелкните значок **X**.
  ![Значок X для удаления участника совместной работы в рекомендациях по безопасности](/assets/images/help/security/security-advisory-remove-collaborator-x.png)

## Дополнительные материалы

- [Уровни разрешений для рекомендаций по безопасности репозитория](/code-security/repository-security-advisories/permission-levels-for-repository-security-advisories)
- [Добавление участника совместной работы в рекомендации по безопасности репозитория](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)
