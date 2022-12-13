---
title: Управление диспетчерами безопасности в организации
intro: 'Вы можете предоставить специалистам по безопасности минимально необходимые права доступа к вашей организации, назначив команде роль руководителя безопасности.'
versions:
  feature: security-managers
topics:
  - Organizations
  - Teams
shortTitle: Security manager role
permissions: Organization owners can assign the security manager role.
ms.openlocfilehash: c29dd20a123ccb20a32d40896064e11d59643bd9
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145069629'
---
{% data reusables.organizations.security-manager-beta-note %}

{% data reusables.organizations.about-security-managers %}

## Разрешения для роли диспетчера безопасности

Члены команды с ролью диспетчера безопасности имеют только разрешения, необходимые для эффективного управления безопасностью в организации.

- доступ на чтение во всех репозиториях в организации в дополнение к правам доступа к любым существующим репозиториям;
- доступ на запись по всем оповещениям системы безопасности в организации {% ifversion not fpt %};
- доступ к обзору безопасности организации {% endif %};
- возможность настраивать параметры безопасности на уровне организации{% ifversion not fpt %}, в том числе возможность включать и отключать {% data variables.product.prodname_GH_advanced_security %}{% endif %}
- возможность настраивать параметры безопасности на уровне организации{% ifversion not fpt %}, в том числе возможность включать и отключать {% data variables.product.prodname_GH_advanced_security %}{% endif %}.

{% ifversion fpt %} Дополнительные функции, включая обзор безопасности для организации, доступны в организациях, которые используют {% data variables.product.prodname_ghe_cloud %} с {% data variables.product.prodname_advanced_security %}. Дополнительные сведения см. в [документации по {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization).
{% endif %}

Если у команды есть роль диспетчера безопасности, пользователи с правами администратора для команды и определенного репозитория могут изменить уровень доступа команды к такому репозиторию, но не могут аннулировать доступ. Дополнительные сведения см. в разделе "[Управление доступом команды к репозиторию организации](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository){% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %}" и "[Управление командами и пользователями с доступом к репозиторию](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository)".{% else %}."{% endif %}

  ![Управление пользовательским интерфейсом доступа к репозиторию с диспетчерами безопасности](/assets/images/help/organizations/repo-access-security-managers.png)

## Назначение роли диспетчера безопасности команде в организации
Роль диспетчера безопасности можно назначить максимум 10 командам в организации.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security-and-analysis %}
1. В разделе **Диспетчеры безопасности** выберите команду, которой нужно предоставить роль. Все выбранные команды появятся в списке под строкой поиска. 
  ![Добавление диспетчера безопасности](/assets/images/help/organizations/add-security-managers.png)
## Удаление роли диспетчера безопасности для команды в организации

{% warning %}

**Предупреждение.** Удаление роли диспетчера безопасности для команды приведет к тому, что команда не сможет управлять оповещениями и параметрами системы безопасности в организации, однако сохранит доступ на чтение к репозиториям, который был предоставлен при назначении роли. Нежелательные права доступа на чтение потребуется удалить вручную. Дополнительные сведения см. в статье "[Управление доступом команды к репозиторию организации](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository#removing-a-teams-access-to-a-repository)".

{% endwarning %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security-and-analysis %}
1. В разделе **Диспетчеры безопасности** справа от команды, для которой нужно удалить роль диспетчера безопасности, щелкните {% octicon "x" aria-label="The X icon" %}.
  ![Удаление диспетчеров безопасности](/assets/images/help/organizations/remove-security-managers.png)
