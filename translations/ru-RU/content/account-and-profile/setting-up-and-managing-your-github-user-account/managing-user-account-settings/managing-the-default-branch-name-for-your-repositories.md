---
title: Управление именем ветви по умолчанию для репозиториев
intro: You can set the default branch name for new repositories that you create on {% data variables.product.product_location %}.
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
shortTitle: Manage default branch name
ms.openlocfilehash: 5bf934f246a2d0e447a99d0f63888b5b87ecc033
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 05/17/2022
ms.locfileid: "145088869"
---
## <a name="about-management-of-the-default-branch-name"></a>Сведения об управлении именем ветви по умолчанию

Создаваемый в {% data variables.product.product_location %} репозиторий будет содержать одну ветвь, которая используется по умолчанию. Вы можете изменить имя, которое {% data variables.product.product_name %} использует для ветви по умолчанию в создаваемых репозиториях. Дополнительные сведения о ветви по умолчанию см. в разделе [Сведения о ветвях](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch).

{% data reusables.branches.change-default-branch %}

## <a name="setting-the-default-branch-name"></a>Настройка имени ветви по умолчанию

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.repo-tab %}
3. В разделе "Ветвь репозитория по умолчанию" щелкните **Изменить имя ветви по умолчанию**.
    ![Кнопка "Переопределить"](/assets/images/help/settings/repo-default-name-button.png)
4. Введите имя по умолчанию, которое требуется использовать для новых ветвей.
    ![Текстовое поле для ввода имени по умолчанию](/assets/images/help/settings/repo-default-name-text.png)
5. Нажмите кнопку **Обновить**.
    ![Кнопка "Обновить"](/assets/images/help/settings/repo-default-name-update.png)

## <a name="further-reading"></a>Дополнительные материалы

- [Управление именем ветви по умолчанию для репозиториев в организации](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization)
