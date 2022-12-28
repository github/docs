---
title: Удаление диспетчеров приложений GitHub из организации
intro: 'Владельцы организации могут отозвать разрешения руководителя {% data variables.product.prodname_github_app %}, предоставленные участнику организации.'
redirect_from:
  - /articles/removing-github-app-managers-from-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/removing-github-app-managers-from-your-organization
  - /organizations/managing-access-to-your-organizations-apps/removing-github-app-managers-from-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Remove GitHub App managers
ms.openlocfilehash: 65ce995fa63c3da520fd757ae888253d2f5c7419
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098038'
---
Дополнительные сведения о разрешениях диспетчера {% data variables.product.prodname_github_app %} см. в разделе [Роли в организации](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#github-app-managers).

## Удаление разрешений диспетчера {% data variables.product.prodname_github_app %} для всей организации

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.github-apps-settings-sidebar %}
1. В разделе «Управление» найдите имя пользователя, для которого вы хотите удалить разрешения диспетчера {% data variables.product.prodname_github_app %} и нажмите кнопку **Отозвать**.
![Отзыв разрешений диспетчера {% data variables.product.prodname_github_app %}](/assets/images/help/organizations/github-app-manager-revoke-permissions.png)

## Удаление разрешений диспетчера {% data variables.product.prodname_github_app %} для отдельных {% data variables.product.prodname_github_app %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.github-apps-settings-sidebar %}
1. В разделе {% data variables.product.prodname_github_apps %} выберите аватар приложения, из которого требуется удалить диспетчер {% data variables.product.prodname_github_app %}.
![Выберите {% data variables.product.prodname_github_app %}](/assets/images/help/organizations/select-github-app.png) {% data reusables.organizations.app-managers-settings-sidebar %}
1. В разделе «Диспетчеры приложений» найдите имя пользователя, для которого вы хотите удалить разрешения диспетчера {% data variables.product.prodname_github_app %} и нажмите кнопку **Отозвать**.
![Отзыв разрешений диспетчера {% data variables.product.prodname_github_app %}](/assets/images/help/organizations/github-app-manager-revoke-permissions-individual-app.png)

{% ifversion fpt or ghec %}
## Дополнительные материалы

- [Сведения о Marketplace {% data variables.product.prodname_dotcom %}](/articles/about-github-marketplace/) {% endif %}
