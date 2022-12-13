---
title: Ограничение создания репозиториев в организации
intro: 'Чтобы защитить данные организации, можно настроить разрешения для создания репозиториев в организации.'
redirect_from:
  - /articles/restricting-repository-creation-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Restrict repository creation
ms.openlocfilehash: da5d32962c52b752dff9dd9012f8cc8e5494d8c6
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145069641'
---
Вы можете выбрать, предоставлять ли участникам возможность создавать репозитории в вашей организации. {% ifversion ghec or ghes or ghae %}Если вы разрешаете участникам создавать репозитории, то можете выбрать типы репозиториев, которые они смогут создавать.{% elsif fpt %}Если вы разрешаете участникам создавать репозитории, то можете выбрать, разрешать ли участникам создавать как общедоступные, так и частные репозитории или только общедоступные.{% endif %} Владельцы организации в любом случае могут создавать репозитории любого типа.

{% ifversion fpt %} Организации, использующие {% data variables.product.prodname_ghe_cloud %}, также могут разрешать участникам создавать только частные репозитории. Дополнительные сведения см. в [документации по {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/organizations/managing-organization-settings/restricting-repository-creation-in-your-organization).
{% endif %}

{% ifversion ghec or ghae or ghes %} Владельцы предприятия могут ограничить параметры, доступные для политики создания репозиториев в организации. Дополнительные сведения см. в разделе [Применение политик управления репозиториями в организации](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-creation).
{% endif %}

{% warning %}

**Предупреждение**. Этот параметр ограничивает только доступные параметры видимости при создании репозиториев и не влияет на возможность изменять видимость репозиториев в дальнейшем. Дополнительные сведения об ограничении на изменение видимости существующих репозиториев см. в статье [Ограничение на изменение видимости репозитория в организации](/organizations/managing-organization-settings/restricting-repository-visibility-changes-in-your-organization).

{% endwarning %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}
5. В разделе "Создание репозитория" выберите один или несколько параметров.

   {%- ifversion ghes or ghec or ghae %} ![Параметры создания репозиториев](/assets/images/help/organizations/repo-creation-perms-radio-buttons.png) {%- elsif fpt %} ![Параметры создания репозиториев](/assets/images/help/organizations/repo-creation-perms-radio-buttons-fpt.png) {%- endif %}
   
   {% ifversion fpt or ghec %} {% note %}

   **Примечание.** Чтобы разрешить участникам создавать только частные репозитории, ваша организация должна использовать {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %}

   {% endnote %} {%- endif %}

6. Выберите команду **Сохранить**.
