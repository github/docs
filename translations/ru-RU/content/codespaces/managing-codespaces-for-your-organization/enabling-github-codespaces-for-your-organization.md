---
title: Включение GitHub Codespaces для организации
shortTitle: 'Enable {% data variables.product.prodname_codespaces %}'
intro: 'Вы можете самостоятельно определять, какие пользователи в вашей организации могут использовать {% data variables.product.prodname_github_codespaces %} за счет организации.'
permissions: 'To alter an organization''s billing settings, you must be an organization owner.'
redirect_from:
  - /codespaces/managing-codespaces-for-your-organization/managing-user-permissions-for-your-organization
  - /codespaces/managing-codespaces-for-your-organization/enabling-codespaces-for-your-organization
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Billing
  - Administrator
ms.openlocfilehash: 992d744e04ae00db4d760b59a9d08d1700846998
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158904'
---
## Сведения о включении {% data variables.product.prodname_github_codespaces %} для организации

Владельцы организации могут контролировать, какие пользователи в организации могут создавать и использовать codespace за счет организации. Сведения о ценах см. в разделе [Сведения о выставлении счетов за {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces).

Только пользователи, которые могут отправить изменения в репозиторий или создать вилку репозитория, могут создать пространство кода для этого репозитория. Чтобы пользователи могли создавать codespace для репозиториев, принадлежащих вашей организации, необходимо:

- Убедитесь, что у пользователей есть разрешение как минимум на запись в отношении репозиториев, в которых они собираются использовать кодовое пространство. Дополнительные сведения см. в разделе [Управление командами и людьми, имеющими доступ к репозиторию](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository).
- Убедитесь, что в вашей организации нет списка разрешенных IP-адресов. Дополнительные сведения см. в разделе [«Управление разрешенными IP-адресами для организации](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization){% ifversion fpt %}» в документации по {% data variables.product.prodname_ghe_cloud %}. {% else %}. {% endif %}

Чтобы пользователи могли создавать codespace, для которых будет выставляться счет вашей организации, необходимо:

- [Установка предельной суммы расходов](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)
- [Выбрать пользователей, которые могут создавать codespace, счета за использование которых выставляются вашей организации](#choose-who-can-create-codespaces-that-are-billed-to-your-organization)

{% ifversion fpt %} {% note %}

**Примечание:** Если вы являетесь проверенным преподавателем или преподавателем, необходимо включить {% data variables.product.prodname_github_codespaces %} из {% data variables.product.prodname_classroom %}, чтобы использовать ваше преимущество {% data variables.product.prodname_codespaces %} для образования. Дополнительные сведения см. в разделе [Использование {% data variables.product.prodname_github_codespaces %} с {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom#about-the-codespaces-education-benefit-for-verified-teachers).

{% endnote %} {% endif %}

По умолчанию кодовому пространству доступен только тот репозиторий, из которого оно было создано. Если вы хотите, чтобы codespace в вашей организации были доступны другие репозитории организации, доступные создателю codespace, см. статью [Управление доступом к репозиторию для codespace вашей организации](/codespaces/managing-codespaces-for-your-organization/managing-repository-access-for-your-organizations-codespaces).

## Выберите пользователей, которые могут создавать codespace, счета за использование которых выставляются вашей организации

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.click-codespaces %}
1. В разделе "Выставление счетов" выберите один из следующих вариантов:

   * **Отключено** — с вашей организации не будет взиматься плата за использование codespace. Для {% data variables.product.prodname_codespaces %}, созданных для репозиториев вашей организации, будет выставлен счет отдельным пользователям, создавшим их.
   * **Выбранным участникам** — {% data variables.product.prodname_codespaces %}, созданным для репозиториев вашей организации выбранными участниками, будут выставлены счета для организации.
   * **Всем участникам** — {% data variables.product.prodname_codespaces %}, созданным для репозиториев вашей организации участниками вашей организации, будут выставлены счета для организации.
   * **Всем участникам и внешним участникам совместной работы** — {% data variables.product.prodname_codespaces %}, созданным для репозиториев вашей организации участниками организации и внешними участниками совместной работы, будут выставлены счета для организации.

   ![Переключатели для раздела "Выставление счетов"](/assets/images/help/codespaces/codespaces-org-billing-settings.png)

   {% note %}

   **Примечание.** Если выбрать параметр **Всем участникам и внешним участникам совместной работы**, все внешние участники совместной работы, добавленные в определенные репозитории, смогут создавать и использовать {% data variables.product.prodname_codespaces %} для этих репозиториев, а вашей организации будут выставляться счета за их использование. Дополнительные сведения об управлении внешними участниками совместной работы см. в статье [Сведения о внешних участниках совместной работы](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization#about-outside-collaborators).

   {% endnote %}

1. Выберите команду **Сохранить**.
1. Если выбрано **Выбранным участникам**, появится поле ввода, в которое можно ввести имена пользователей, которых вы хотите выбрать.

   ![Поле ввода для выбора пользователей](/assets/images/help/codespaces/codespaces-org-billing-add-users.png)

## Отключение {% data variables.product.prodname_codespaces %} для вашей организации

Вы можете предотвратить создание и использование codespace, за которые вашей организации выставляются счета.

{% data reusables.codespaces.codespaces-disabling-org-billing %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.click-codespaces %}
1. В разделе "Выставление счетов" выберите **Отключено**.

## Установка предельной суммы расходов

{% data reusables.codespaces.codespaces-spending-limit-requirement %} 

Сведения об изменении предельной суммы расходов и управлении ею см. в статье [Управление предельной суммой расходов для {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces).
