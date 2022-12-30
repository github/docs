---
title: Проверка установленных интеграций вашей организации
intro: Вы можете просмотреть уровни разрешений для установленных интеграций в вашей организации и настроить доступ каждой интеграции к репозиториям организации.
redirect_from:
  - /articles/reviewing-your-organization-s-installed-integrations
  - /articles/reviewing-your-organizations-installed-integrations
  - /github/setting-up-and-managing-organizations-and-teams/reviewing-your-organizations-installed-integrations
  - /organizations/keeping-your-organization-secure/reviewing-your-organizations-installed-integrations
  - /organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-your-organizations-installed-integrations
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Review installed integrations
ms.openlocfilehash: 1582e162eac10de35ff482cbac53243d02f89a89
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099079'
---
{% данных reusables.profile.access_org %} {% данных reusables.profile.org_settings %} {% ifversion fpt или ghec или ghes > 3.4 или ghae > 3,4 %}
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
