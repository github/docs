---
title: Изменение приложения GitHub
intro: '{% data reusables.shortdesc.modifying_github_apps %}'
redirect_from:
  - /apps/building-integrations/managing-github-apps/modifying-a-github-app
  - /apps/managing-github-apps/modifying-a-github-app
  - /developers/apps/modifying-a-github-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
ms.openlocfilehash: 9038a938d26aa5f1e9ec3cdec6fcecd417f0baf8
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '146178506'
---
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %} {% data reusables.user-settings.modify_github_app %}
5. В разделе "Основные сведения" измените нужные сведения о приложении GitHub.
![Раздел "Основные сведения" для приложения GitHub](/assets/images/github-apps/github_apps_basic_information.png){% ifversion device-flow-is-opt-in %}
1. Если приложение GitHub будет использовать поток устройства для идентификации и авторизации пользователей, установите флажок **Включить поток устройства**. Дополнительные сведения о потоке устройств см. в разделе [Авторизация приложений OAuth](/developers/apps/building-oauth-apps/authorizing-oauth-apps#device-flow).
  ![Снимок экрана: поле для включения потока устройства](/assets/images/oauth-apps/enable-device-flow.png) {% endif %}
6. Нажмите кнопку **Сохранить изменения**.
![Кнопка для сохранения изменений для приложения GitHub](/assets/images/github-apps/github_apps_save_changes.png)
