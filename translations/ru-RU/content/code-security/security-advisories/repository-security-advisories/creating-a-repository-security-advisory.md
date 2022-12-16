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
ms.openlocfilehash: 5c78a8b0c0a2d5085a876de2b0788ef093c4c6b1
ms.sourcegitcommit: 74c60a4564bcc17e47b5a67941ac6d9fe13b6a5c
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/30/2022
ms.locfileid: '148186158'
---
Любой пользователь с правами администратора в репозитории может создать рекомендации по безопасности.

{% data reusables.security-advisory.security-researcher-cannot-create-advisory %}

## Создание рекомендаций по безопасности

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-advisories %}
1. Щелкните **Создать черновик рекомендаций по безопасности** , чтобы открыть форму черновика рекомендаций. Поля, помеченные звездочкой, являются обязательными.
  ![Кнопка для открытия черновика рекомендаций](/assets/images/help/security/security-advisory-new-draft-security-advisory-button.png)
1. Введите заголовок для рекомендаций по безопасности.
{% data reusables.repositories.security-advisory-edit-details %} {% data reusables.repositories.security-advisory-edit-severity %} {% data reusables.repositories.security-advisory-edit-cwe-cve %} {% data reusables.repositories.security-advisory-edit-description %}
1. Щелкните **Create draft security advisory** (Создать черновик рекомендаций по безопасности).
  ![Кнопка для создания рекомендаций по безопасности](/assets/images/help/security/security-advisory-create-security-advisory-button.png)

## Дальнейшие действия

- Прокомментируйте черновик рекомендаций по безопасности, чтобы обсудить уязвимость со своей командой.
- Добавьте в рекомендации по безопасности участников совместной работы. Дополнительные сведения см. в разделе [Добавление участника совместной работы в рекомендации по безопасности репозитория](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory).
- Осуществляйте закрытую совместную работу для устранения уязвимости во временной частной вилке. Дополнительные сведения см. в разделе [Совместная работа во временной частной вилке для устранения уязвимости репозитория](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability).
- Добавьте лиц, на чей счет должен быть отнесен вклад в работу над рекомендациями по безопасности. Дополнительные сведения см. в статье [Изменение рекомендаций по безопасности репозитория](/code-security/repository-security-advisories/editing-a-repository-security-advisory#about-credits-for-security-advisories).
- Опубликуйте рекомендации по безопасности, чтобы уведомить свое сообщество об уязвимости. Дополнительные сведения см. в статье [Публикация рекомендаций по безопасности репозитория](/code-security/repository-security-advisories/publishing-a-repository-security-advisory).
