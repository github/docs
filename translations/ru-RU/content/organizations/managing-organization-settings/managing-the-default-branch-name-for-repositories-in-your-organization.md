---
title: Управление именем ветви по умолчанию для репозиториев в организации
intro: 'Вы можете задать имя ветви по умолчанию для репозиториев, создаваемых членами организации, на {% данных variables.location.product_location %}.'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-the-default-branch-name-for-repositories-in-your-organization
permissions: Organization owners can manage the default branch name for new repositories in the organization.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage default branch name
ms.openlocfilehash: 8919fa3b2aa512f97e81393a7f311b0677436f43
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098041'
---
## Сведения об управлении именем ветви по умолчанию

Когда участник вашей организации создает новый репозиторий в организации, репозиторий будет содержать одну ветвь, которая является ветвью по умолчанию. Вы можете изменить имя, которое {% data variables.product.product_name %} используется для ветви по умолчанию в новых репозиториях, создаваемых участниками организации. Дополнительные сведения о ветви по умолчанию см. в разделе [Сведения о ветвях](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch).

{% data reusables.branches.change-default-branch %}

Если владелец предприятия установил политику в отношении имени ветви по умолчанию для вашего предприятия, вы сможете задать имя ветви по умолчанию для вашей организации. Вместо этого можно изменить ветвь по умолчанию для отдельных репозиториев. Дополнительные сведения см. в разделе {% ifversion fpt %}[Принудительное применение политик управления репозиторием в организации](/enterprise-cloud@latest/admin/policies/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-the-default-branch-name){% else %}"[Принудительное применение политик управления репозиторием на предприятии](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-the-default-branch-name)"{% endif %} и [Изменение ветви по умолчанию](/github/administering-a-repository/changing-the-default-branch).

## Настройка имени ветви по умолчанию

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.repository-defaults %}
3. В разделе "Ветвь репозитория по умолчанию" щелкните **Изменить имя ветви по умолчанию**.
    ![Кнопка "Переопределить"](/assets/images/help/organizations/repo-default-name-button.png)
4. Введите имя по умолчанию, которое требуется использовать для новых ветвей.
    ![Текстовое поле для ввода имени по умолчанию](/assets/images/help/organizations/repo-default-name-text.png)
5. Нажмите кнопку **Обновить**.
    ![Кнопка "Обновить"](/assets/images/help/organizations/repo-default-name-update.png)

## Дополнительные материалы

- [Управление именем ветви по умолчанию для репозиториев](/github/setting-up-and-managing-your-github-user-account/managing-the-default-branch-name-for-your-repositories)
