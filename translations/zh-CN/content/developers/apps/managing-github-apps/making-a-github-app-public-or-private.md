---
title: 将 GitHub 应用程序设为公共或私有
intro: '{% data reusables.shortdesc.making-a-github-app-public-or-private %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-github-apps/about-installation-options-for-github-apps
  - /apps/building-github-apps/installation-options-for-github-apps
  - /apps/building-integrations/managing-github-apps/changing-a-github-app-s-installation-option
  - /apps/managing-github-apps/changing-a-github-app-s-installation-option
  - /apps/managing-github-apps/making-a-github-app-public-or-private
  - /developers/apps/making-a-github-app-public-or-private
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Manage app visibility
ms.openlocfilehash: f276be130be76f110d4c4ad3c0bfa3bff708aad6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065888'
---
有关身份验证信息，请参阅“[使用 GitHub 应用进行身份验证](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation)”。

## 公共安装流程

公共安装流程有一个登录页面，可让除应用程序所有者以外的其他人在他们的仓库中安装应用程序。 设置您的 GitHub 应用程序时，在“Public link（公共链接）”字段中提供此链接。 有关详细信息，请参阅“[安装 GitHub 应用](/apps/installing-github-apps/)”。

## 私有安装流程

私有安装流程只允许 GitHub 应用程序的所有者安装它。 有关 GitHub 应用的有限信息仍将存在于公共页面，但“安装”按钮仅对组织管理员或个人帐户（如果 GitHub 应用由个人帐户所有）可用。 专用 GitHub 应用只能安装在所有者的用户或组织帐户上。

## 更改 GitHub 应用程序的安装权限

要更改 GitHub 应用程序的安装权限：

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %}
3. 选择要更改其安装权限选项的 GitHub 应用程序。
![应用选择](/assets/images/github-apps/github_apps_select-app.png) {% data reusables.user-settings.github_apps_advanced %}
5. 根据 GitHub 应用的安装选项，单击“设为公共”或“设为专用” 。
![更改 GitHub 应用安装选项的按钮](/assets/images/github-apps/github_apps_make_public.png)
6. 根据 GitHub 应用的安装选项，单击“是，将此 GitHub 应用设为公共”或“是，将此 GitHub 应用设为{% ifversion fpt or ghec %}内部{% else %}专用{% endif %}” 。
![确认更改安装选项的按钮](/assets/images/github-apps/github_apps_confirm_installation_option.png)
