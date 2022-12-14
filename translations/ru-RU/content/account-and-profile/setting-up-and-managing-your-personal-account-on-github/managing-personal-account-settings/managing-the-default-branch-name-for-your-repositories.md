---
title: Управление именем ветви по умолчанию для репозиториев
intro: 'Можно задать имя ветви по умолчанию для новых репозиториев, создаваемых на {% данных variables.location.product_location %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
redirect_from:
  - /github/setting-up-and-managing-your-github-user-account/managing-the-default-branch-name-for-your-repositories
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-the-default-branch-name-for-your-repositories
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-the-default-branch-name-for-your-repositories
shortTitle: Manage default branch name
ms.openlocfilehash: b1e36edcbaf8b20f8a4aa3d3adb4ad338dc1ab29
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098687'
---
## Сведения об управлении именем ветви по умолчанию

При создании репозитория на {% данных variables.location.product_location %}репозиторий содержит одну ветвь, которая является ветвью по умолчанию. Вы можете изменить имя, которое {% data variables.product.product_name %} использует для ветви по умолчанию в создаваемых репозиториях. Дополнительные сведения о ветви по умолчанию см. в разделе [Сведения о ветвях](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch).

{% data reusables.branches.change-default-branch %}

## Настройка имени ветви по умолчанию

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.repo-tab %}
3. В разделе "Ветвь репозитория по умолчанию" щелкните **Изменить имя ветви по умолчанию**.
    ![Кнопка "Переопределить"](/assets/images/help/settings/repo-default-name-button.png)
4. Введите имя по умолчанию, которое требуется использовать для новых ветвей.
    ![Текстовое поле для ввода имени по умолчанию](/assets/images/help/settings/repo-default-name-text.png)
5. Нажмите кнопку **Обновить**.
    ![Кнопка "Обновить"](/assets/images/help/settings/repo-default-name-update.png)

## Дополнительные материалы

- [Управление именем ветви по умолчанию для репозиториев в организации](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization)
