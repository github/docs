---
title: Создание рекомендаций по безопасности репозитория
intro: Вы можете создать проект рекомендаций по безопасности для частного обсуждения и устранения уязвимости безопасности в проекте разработки ПО с открытым кодом.
redirect_from:
  - /articles/creating-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/creating-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/creating-a-security-advisory
  - /code-security/security-advisories/creating-a-security-advisory
  - /code-security/repository-security-advisories/creating-a-repository-security-advisory
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Security advisories
  - Vulnerabilities
shortTitle: Create repository advisories
ms.openlocfilehash: de22432173f6bf909d001a3f780b0f9943769ec0
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/27/2022
ms.locfileid: '148114111'
---
Любой пользователь с правами администратора в репозитории может создать рекомендации по безопасности.

{% data reusables.security-advisory.security-researcher-cannot-create-advisory %}

## Создание рекомендаций по безопасности

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-advisories %}
4. Щелкните **Создать черновик рекомендаций по безопасности** , чтобы открыть форму проекта рекомендаций.
  ![Кнопка для открытия черновика рекомендаций](/assets/images/help/security/security-advisory-new-draft-security-advisory-button.png)
5. Введите заголовок для рекомендаций по безопасности.
{% data reusables.repositories.security-advisory-edit-details %} {% data reusables.repositories.security-advisory-edit-severity %} {% data reusables.repositories.security-advisory-edit-cwe-cve %} {% data reusables.repositories.security-advisory-edit-description %}
11. Щелкните **Create draft security advisory** (Создать черновик рекомендаций по безопасности).
  ![Кнопка для создания рекомендаций по безопасности](/assets/images/help/security/security-advisory-create-security-advisory-button.png)

## Дальнейшие действия

- Прокомментируйте черновик рекомендаций по безопасности, чтобы обсудить уязвимость со своей командой.
- Добавьте в рекомендации по безопасности участников совместной работы. Дополнительные сведения см. в разделе [Добавление участника совместной работы в рекомендации по безопасности репозитория](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory).
- Осуществляйте закрытую совместную работу для устранения уязвимости во временной частной вилке. Дополнительные сведения см. в разделе [Совместная работа во временной частной вилке для устранения уязвимости репозитория](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability).
- Добавьте лиц, на чей счет должен быть отнесен вклад в работу над рекомендациями по безопасности. Дополнительные сведения см. в статье [Изменение рекомендаций по безопасности репозитория](/code-security/repository-security-advisories/editing-a-repository-security-advisory#about-credits-for-security-advisories).
- Опубликуйте рекомендации по безопасности, чтобы уведомить свое сообщество об уязвимости. Дополнительные сведения см. в статье [Публикация рекомендаций по безопасности репозитория](/code-security/repository-security-advisories/publishing-a-repository-security-advisory).
