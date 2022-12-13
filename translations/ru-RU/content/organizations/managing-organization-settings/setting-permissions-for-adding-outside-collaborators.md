---
title: Настройка разрешений для добавления внешних участников совместной работы
intro: 'Чтобы защитить данные организации и количество платных лицензий, используемых в вашей организации, можно указать, кто может добавлять сторонних участников совместной работы в репозитории организации.'
redirect_from:
  - /articles/restricting-the-ability-to-add-outside-collaborators-to-organization-repositories
  - /articles/setting-permissions-for-adding-outside-collaborators
  - /github/setting-up-and-managing-organizations-and-teams/setting-permissions-for-adding-outside-collaborators
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Set collaborator policy
ms.openlocfilehash: ec9133f5a4be38999d1b2051d538dadff4923abf
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109147'
---
По умолчанию любой пользователь с правами администратора в отношении репозитория может приглашать внешних участников для совместной работы в репозитории. При желании возможность добавлять внешних участников совместной работы можно предоставить только владельцам организации.

{% ifversion ghec %} {% note %}

**Примечание.** Организации, использующие {% data variables.product.prodname_ghe_cloud %}, могут ограничить возможность приглашения участников совместной работы, предоставив ее только владельцам организации. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %} {% endif %}

{% ifversion ghec %}Если ваша организация принадлежит корпоративной учетной записи и владелец предприятия настроил политику на уровне предприятия, вы{% else %}Вы{% endif %} не сможете настраивать этот параметр для своей организации. Дополнительные сведения см. в разделе [Применение политик управления репозиториями в организации]{% ifversion ghec %}(/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-collaborators-to-repositories){% else %}(/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories){% endif %}.

{% data reusables.organizations.outside-collaborators-use-seats %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}
5. В разделе "Внешние участники совместной работы в репозитории" снимите флажок **Разрешить администраторам репозитория приглашать внешних участников совместной работы в репозитории для этой организации**.
  ![Флажок, позволяющий администраторам репозитория приглашать внешних участников совместной работы в репозитории организации](/assets/images/help/organizations/repo-invitations-checkbox-updated.png)
6. Выберите команду **Сохранить**.
