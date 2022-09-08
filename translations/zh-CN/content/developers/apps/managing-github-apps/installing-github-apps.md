---
title: 安装 GitHub 应用程序
intro: '当你的应用公开时，任何人都可以使用 {% ifversion fpt or ghec %} {% data variables.product.prodname_marketplace %} 或{% endif %}安装 URL 在其存储库中安装该应用。 当您的应用程序为私有时，只有您能将该应用程序安装在您自己的仓库中。'
redirect_from:
  - /apps/installing-github-apps
  - /developers/apps/installing-github-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
ms.openlocfilehash: 4244e1e4aacbcc5f7e0f16092df9823ce5832f0a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145085015'
---
{% note %}

注意：你的 {% data variables.product.prodname_github_app %} 将有权访问应用创建的任何存储库，即使用户只在选定的存储库中安装你的应用。

{% endnote %}

## 在您的仓库中安装您的私有 GitHub 应用程序

创建私有 GitHub 应用程序后，您可以将其安装在您的某个组织或用户仓库中。 有关详细信息，请参阅“[专用安装流](/apps/managing-github-apps/making-a-github-app-public-or-private/#private-installation-flow)”。

1. 在 [GitHub 应用设置页](https://github.com/settings/apps)，选择你的应用。
2. 在左侧边栏中，单击“安装应用”。
3. 单击包含适当存储库的组织或个人帐户旁边的“安装”。
4. 将应用程序安装在所有仓库或所选仓库中。
![应用安装权限](/assets/images/install_permissions.png)
5. 安装后，您将在所选帐户上看到应用程序的配置选项。 您可以在这里进行更改，或重复前面的步骤将应用程序安装到其他帐户上。

{% ifversion fpt or ghec %}
## 在 GitHub Marketplace 中提供您的应用程序

你可以在 [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace) 中提供应用的付费或免费版本，用户可在其中搜索你的应用并查看其详细信息。 {% data variables.product.prodname_marketplace %} 在订单完成后会自动安装 GitHub 应用程序。

若要了解如何在 {% data variables.product.prodname_marketplace %} 中上架应用，请参阅“[GitHub Marketplace 入门](/marketplace/getting-started/)”。

若要详细了解用户如何从 {% data variables.product.prodname_marketplace %} 安装你的应用，请参阅“[在 GitHub Marketplace 中购买和安装应用](/articles/purchasing-and-installing-apps-in-github-marketplace)”。

{% endif %}

## 允许用户在他们的仓库中安装您的公共应用程序

您可以通过在应用程序的主页等位置提供安装 URL，使其他人能够安装您的公共应用程序。 然后，您可以从 GitHub 的登陆页面指向您的应用程序主页。

 如果要从 OAuth 应用程序迁移到 GitHub 应用程序，您可以在安装 GitHub 应用程序时使用查询参数预先选择仓库和帐户。 有关详细信息，请参阅“[将 OAuth 应用迁移到 GitHub 应用](/apps/migrating-oauth-apps-to-github-apps/)”。

这些步骤假定你已[生成 {% data variables.product.prodname_github_app %}](/apps/building-github-apps/)：

1. 在 [GitHub 应用设置页](https://github.com/settings/apps)，选择要配置供他人安装的公共应用。
2. 在“主页 URL”中，键入应用主页的 URL，然后单击“保存更改”。
![主页 URL](/assets/images/github-apps/github_apps_homepageURL.png)
3. GitHub 为您的应用程序提供一个登录页面，其中包含指向应用程序“Homepage URL（主页 URL）”的链接。 要访问 GitHub 上的登录页面，请从“Public link（公共链接）”复制 URL 并将其粘贴到浏览器中。
![公用链接](/assets/images/github-apps/github_apps_public_link.png)
4. 为应用创建一个包含应用安装 URL 的主页：`{% data variables.product.oauth_host_code %}/apps/<app name>/installations/new`。

## 在安装过程中授权用户

您可以通过在应用程序安装过程中完成授权过程来简化它。 为此，在 GitHub 中创建或修改应用时请选择“在安装过程中请求用户授权 (OAuth)”。 有关详细信息，请参阅“[创建 GitHub 应用](/apps/building-github-apps/creating-a-github-app/)”。

一旦有人安装了您的应用程序，您将需要为用户获取访问令牌。 有关详细信息，请参阅“[识别站点上的用户](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site)”中的步骤 2 和 3。
## 在安装过程中保留应用程序状态

你可以在应用的安装 URL 中提供 `state` 参数，以保留应用程序页面的状态，并在用户安装、身份验证或接受 GitHub 应用的更新后将用户返回到该状态。 例如，可使用 `state` 参数将安装关联到用户或帐户。

要保留状态，请将其添加到安装 URL：

`{% data variables.product.oauth_host_code %}/apps/<app name>/installations/new?state=AB12t`
