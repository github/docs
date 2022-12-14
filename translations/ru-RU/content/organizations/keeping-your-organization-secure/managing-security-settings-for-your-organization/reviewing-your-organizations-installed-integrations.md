---
title: Проверка установленных интеграций вашей организации
intro: Вы можете просмотреть уровни разрешений для установленных интеграций в вашей организации и настроить доступ каждой интеграции к репозиториям организации.
redirect_from:
- /articles/reviewing-your-organization-s-installed-integrations
- /articles/reviewing-your-organizations-installed-integrations
- /github/setting-up-and-managing-organizations-and-teams/reviewing-your-organizations-installed-integrations
- /organizations/keeping-your-organization-secure/reviewing-your-organizations-installed-integrations
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Review installed integrations
ms.openlocfilehash: 66645e6ebb4305a34cd7735269d77881ea2ed5ee
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "145135116"
---
{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
1. В разделе "Интеграции" на боковой панели щелкните **{% octicon "apps" aria-label="The apps icon" %} {% data variables.product.prodname_github_apps %}** .
{% else %}
1. На левой боковой панели щелкните **Установленный {% data variables.product.prodname_github_apps %}** .
  ![Установленная вкладка {% data variables.product.prodname_github_apps %} на боковой панели параметров организации](/assets/images/help/organizations/org-settings-installed-github-apps.png) {% endif %}
2. Рядом с {% data variables.product.prodname_github_app %}, который нужно проверить, нажмите кнопку **Настроить**.
  ![Кнопка "Настроить"](/assets/images/help/organizations/configure-installed-integration-button.png)
6. Проверьте разрешения и доступ к репозиторию для {% data variables.product.prodname_github_app %}.
  ![Параметр для предоставления доступа к {% data variables.product.prodname_github_app %} ко всем или только к конкретным репозиториям](/assets/images/help/organizations/toggle-integration-repo-access.png)
    - Чтобы предоставить доступ к {% data variables.product.prodname_github_app %} ко всем репозиториям организации, выберите **Все репозитории**.
    - Чтобы выбрать конкретные репозитории, доступ к которым нужно предоставить приложению, выберите **Только выбранные репозитории**, а затем введите имя репозитория.
7. Выберите команду **Сохранить**.
