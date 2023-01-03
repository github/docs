---
title: Включение кодовых пространств для организации
shortTitle: Enable Codespaces
intro: Вы можете самостоятельно определять, какие пользователи в вашей организации могут использовать {% data variables.product.prodname_codespaces %}.
product: '{% data reusables.gated-features.codespaces %}'
permissions: To manage user permissions for {% data variables.product.prodname_codespaces %} for an organization, you must be an organization owner.
redirect_from:
- /codespaces/managing-codespaces-for-your-organization/managing-user-permissions-for-your-organization
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Codespaces
- Permissions
- Administrator
ms.openlocfilehash: bd4518ef6db3887e504b13459abb5c6a682c8659
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 07/13/2022
ms.locfileid: "145119928"
---
## <a name="about-enabling--data-variablesproductprodname_codespaces--for-your-organization"></a>Сведения о включении {% data variables.product.prodname_codespaces %} для организации

Владельцы организации могут контролировать, какие пользователи в организации могут создавать и использовать кодовые пространства.

Чтобы использовать кодовые пространства в организации, выполните следующие действия:

- Убедитесь, что у пользователей есть [разрешение как минимум на запись](/organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization) в отношении репозиториев, в которых они собираются использовать кодовое пространство. 
- [Включите {% data variables.product.prodname_codespaces %} для пользователей в организации](#enable-codespaces-for-users-in-your-organization). Вы можете разрешить {% data variables.product.prodname_codespaces %} для выбранных или только для определенных пользователей.
- [Установка предельной суммы расходов](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)
- Убедитесь, что в вашей организации нет списка разрешенных IP-адресов. Дополнительные сведения см. в разделе [«Управление разрешенными IP-адресами для организации](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list){% ifversion fpt %}» в документации по {% data variables.product.prodname_ghe_cloud %}. {% else %}. {% endif %}

По умолчанию кодовому пространству доступен только тот репозиторий, из которого оно было создано. Если вы хотите, чтобы кодовым пространствам в вашей организации были доступны другие репозитории организации, доступные создателю кодового пространства, см. статью [Управление доступом и безопасностью для {% data variables.product.prodname_codespaces %}](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces).

## <a name="enable--data-variablesproductprodname_codespaces--for-users-in-your-organization"></a>Включите {% data variables.product.prodname_codespaces %} для пользователей в организации.

{% ifversion fpt %} {% note %}

**Примечание.** Если вы являетесь проверенным преподавателем, включите {% data variables.product.prodname_codespaces %} в {% data variables.product.prodname_classroom %} чтобы использовать льготы {% data variables.product.prodname_codespaces %} Education. Дополнительные сведения см. в разделе [Использование GitHub Codespaces с GitHub Classroom](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom#about-the-codespaces-education-benefit-for-verified-teachers).

{% endnote %} {% endif %} {% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.click-codespaces %}
1. В разделе "Разрешения пользователя" выберите один из следующих параметров:

   * **Выбранные пользователи** — позволяет выбрать определенных участников организации для использования {% data variables.product.prodname_codespaces %}.
   * **Разрешить всем участникам организации** — позволяет разрешить использовать {% data variables.product.prodname_codespaces %} всем участникам организации.
   * **Разрешить всем участникам и внешним участникам совместной работы** — позволяет разрешить использовать {% data variables.product.prodname_codespaces %} всем участникам организации, а также внешним участникам совместной работы.

   ![Переключатели для разрешений пользователя](/assets/images/help/codespaces/org-user-permission-settings-outside-collaborators.png)

   {% note %}

   **Примечание.** Если выбрать параметр **Разрешить всем участникам и внешним участникам совместной работы**, создавать и использовать {% data variables.product.prodname_codespaces %} смогут все внешние участники совместной работы, добавленные в определенные репозитории. Вашей организация будет выставлен счета за всех внешних участников совместной работы. Дополнительные сведения об управлении внешними участниками совместной работы см. в статье [Сведения о внешних участниках совместной работы](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization#about-outside-collaborators).

   {% endnote %}

1. Выберите команду **Сохранить**.

## <a name="disabling--data-variablesproductprodname_codespaces--for-your-organization"></a>Отключение {% data variables.product.prodname_codespaces %} для вашей организации

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.click-codespaces %}
1. В разделе "Разрешения пользователя" выберите "**Отключено**".

## <a name="setting-a-spending-limit"></a>Установка предельной суммы расходов

{% data reusables.codespaces.codespaces-spending-limit-requirement %} 

Сведения об изменении предельной суммы расходов и управлении ею см. в статье [Управление предельной суммой расходов для {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces).
