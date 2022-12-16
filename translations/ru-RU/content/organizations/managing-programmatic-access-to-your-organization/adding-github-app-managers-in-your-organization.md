---
title: Добавление диспетчеров приложений GitHub из организации
intro: 'Владельцы организации могут предоставить пользователям возможность управлять некоторыми или всеми приложениями {% data variables.product.prodname_github_apps %}, принадлежащими организации.'
redirect_from:
  - /articles/adding-github-app-managers-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/adding-github-app-managers-in-your-organization
  - /organizations/managing-access-to-your-organizations-apps/adding-github-app-managers-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Add GitHub App managers
ms.openlocfilehash: 475e45ee3f44cc8c7c0140c5982a96a2c1697084
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099087'
---
Дополнительные сведения о разрешениях диспетчера {% data variables.product.prodname_github_app %} см. в разделе [Роли в организации](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#github-app-managers).

## Предоставление пользователям возможности управлять всеми {% data variables.product.prodname_github_apps %}, принадлежащими организации

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.github-apps-settings-sidebar %}
1. В разделе "Управление" введите имя пользователя, которого вы хотите назначить в качестве диспетчера {% data variables.product.prodname_github_app %} организации, и нажмите кнопку **Предоставить**.
![Добавление диспетчера {% data variables.product.prodname_github_app %}](/assets/images/help/organizations/add-github-app-manager.png)

## Предоставление пользователю возможности управлять отдельными данными {% data variables.product.prodname_github_app %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.github-apps-settings-sidebar %}
1. В разделе {% data variables.product.prodname_github_apps %} выберите аватар приложения, в который требуется добавить диспетчер {% data variables.product.prodname_github_app %}.
![Выберите {% data variables.product.prodname_github_app %}](/assets/images/help/organizations/select-github-app.png) {% data reusables.organizations.app-managers-settings-sidebar %}
1. В разделе "Диспетчеры приложений" введите имя пользователя, которого вы хотите назначить в качестве диспетчера приложений GitHub, и нажмите кнопку **Предоставить**.
![Добавление диспетчера {% data variables.product.prodname_github_app %} для конкретного приложения](/assets/images/help/organizations/add-github-app-manager-for-app.png)

{% ifversion fpt or ghec %}
## Дополнительные материалы

- [Сведения о Marketplace {% data variables.product.prodname_dotcom %}](/articles/about-github-marketplace/) {% endif %}
