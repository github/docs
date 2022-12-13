---
title: Добавление сторонних участников совместной работы в репозитории в вашей организации
intro: 'Вы можете разрешить пользователям, которые не являются участниками вашей организации, получать доступ к репозиториям, принадлежащим вашей организации.'
redirect_from:
  - /articles/adding-outside-collaborators-to-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/adding-outside-collaborators-to-repositories-in-your-organization
  - /organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Add outside collaborator
permissions: People with admin access to a repository can add an outside collaborator to the repository.
ms.openlocfilehash: 76feea4a87b06b8fdfdc7226928d03c9be082dfb
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098026'
---
## Сведения о сторонних участниках совместной работы

Сторонний участник совместной работы — это человек, который не является членом вашей организации, но имеет доступ к одному или нескольким репозиториям в организации. Вы можете выбрать уровень доступа для каждого стороннего участника совместной работы. {% data reusables.organizations.outside_collaborator_forks %}

{% data reusables.organizations.outside-collaborators-use-seats %}

{% ifversion fpt %} Организации, использующие {% data variables.product.prodname_ghe_cloud %}, могут ограничить возможность приглашения участников совместной работы. Дополнительные сведения см. в разделе [Настройка разрешений для добавления сторонних участников совместной работы](/enterprise-cloud@latest/organizations/managing-organization-settings/setting-permissions-for-adding-outside-collaborators) в документации по {% data variables.product.prodname_ghe_cloud %}.
{% else %} Владелец организации может ограничить возможность приглашать участников совместной работы. Дополнительные сведения см. в разделе [Настройка разрешений для добавления сторонних участников совместной работы](/organizations/managing-organization-settings/setting-permissions-for-adding-outside-collaborators).
{% endif %}

{% ghes ifversion %} Чтобы добавить пользователя в качестве внешнего участника совместной работы в репозитории, пользователь должен иметь личную учетную запись на {% данных variables.location.product_location %}. Если в вашей организации используется сторонняя система проверки подлинности, например SAML или LDAP, пользователь, которого вы хотите добавить, должен выполнить вход через эту систему для создания учетной записи. Если у пользователя нет доступа к системе проверки подлинности и для предприятия включена встроенная проверка подлинности, администратор сайта может создать учетную запись для этого пользователя. Дополнительные сведения см. в разделе [Настройка встроенной проверки подлинности](/admin/identity-and-access-management/using-built-in-authentication/configuring-built-in-authentication).
{% endif %}

{% ifversion not ghae %} Если вашей организации требуется двухфакторная проверка подлинности, все сторонние участники должны включить двухфакторную проверку подлинности перед принятием приглашения для совместной работы в репозитории. Дополнительные сведения см. в разделе [Настройка требования двухфакторной проверки подлинности в организации](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization).
{% endif %}

## Добавление сторонних участников совместной работы в репозиторий

{% ifversion fpt или ghec или ghes > 3.3 или ghae > 3,3 %} Вы можете предоставить внешним участникам доступ к репозиторию в параметрах репозитория. Дополнительные сведения см. в разделе [Управление командами и людьми, имеющими доступ к репозиторию](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#inviting-a-team-or-person). {% else %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
5. На левой боковой панели щелкните **Участники совместной работы и команды**.
  ![Боковая панель параметров репозитория с выделенными участниками совместной работы и командами](/assets/images/help/repository/org-repo-settings-collaborators-and-teams.png)
6. В разделе «Участники совместной работы» введите имя пользователя, которому вы хотите предоставить доступ к репозиторию, а затем нажмите кнопку **Добавить участника совместной работы**.
![Раздел «Участники совместной работы» с именем пользователя Octocat, введенным в поле поиска](/assets/images/help/repository/org-repo-collaborators-find-name.png)
7. В раскрывающемся меню рядом с именем нового участника совместной работы и выберите соответствующий уровень доступа.
![Средство выбора разрешений репозитория](/assets/images/help/repository/org-repo-collaborators-choose-permissions.png) {% endif %}
