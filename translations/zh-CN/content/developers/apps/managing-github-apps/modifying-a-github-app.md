---
title: 修改 GitHub 应用程序
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
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '146178501'
---
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %} {% data reusables.user-settings.modify_github_app %}
5. 在“Basic information（基本信息）”中，修改您要更改的 GitHub 应用程序信息。
![GitHub 应用的基本信息部分](/assets/images/github-apps/github_apps_basic_information.png){% ifversion device-flow-is-opt-in %}
1. 如果 GitHub 应用将使用设备流来识别和授权用户，请单击“启用设备流”。 有关设备流的详细信息，请参阅“[授权 OAuth 应用](/developers/apps/building-oauth-apps/authorizing-oauth-apps#device-flow)”。
  ![显示启用设备流的字段的屏幕截图](/assets/images/oauth-apps/enable-device-flow.png){% endif %}
6. 单击“保存更改”。 
![保存 GitHub 应用更改的按钮](/assets/images/github-apps/github_apps_save_changes.png)
