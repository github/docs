---
title: 连接第三方应用程序
intro: '您可以将 {% data variables.product.product_name %} 身份连接到使用 OAuth 的第三方应用程序。 在授权这些应用程序时，应确保您信任应用程序，查阅开发者是谁，并查阅应用程序要访问的信息类型。'
redirect_from:
  - /articles/connecting-with-third-party-applications
  - /github/authenticating-to-github/connecting-with-third-party-applications
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/connecting-with-third-party-applications
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Third-party applications
ms.openlocfilehash: b8cd20d36926c373116061e211be62701b1bd2f6
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '145098655'
---
当第三方应用程序要通过您的 {% data variables.product.product_name %} 登录识别您时，您会看到一个页面，其中包含开发者联系信息，以及申请的特定数据列表。

## 联系应用程序开发者

由于应用程序是由不是 {% data variables.product.product_name %} 的第三方开发的，因此我们并不确切地了解应用程序如何使用它申请访问的数据。 如果您对这些应用程序有疑问或疑虑，您可以使用页面顶部的开发者信息联系应用程序管理员。

![{% data variables.product.prodname_oauth_app %} 所有者信息](/assets/images/help/platform/oauth_owner_bar.png)

页面的右侧可能提供应用程序的详细说明及其相关网站，具体取决于开发者是否选择提供这些信息。

![OAuth 应用程序信息和网站](/assets/images/help/platform/oauth_app_info.png)

## 应用程序数据访问权限的类型

应用程序可以对 {% data variables.product.product_name %} 数据具有读取或写入访问权限 。

- “读取权限”仅允许应用程序查看数据。
- “写入权限”允许应用程序更改数据。

### 关于 OAuth 范围

范围是应用程序可请求访问公共和非公共数据的命名权限组。

要使用集成了 {% data variables.product.product_name %} 的第三方应用程序时，该应用程序会让您了解需要的数据访问权限类型。 如果您授予应用程序访问权限，则应用程序将能代您执行操作，例如读取或修改数据。 例如，如果要使用请求 `user:email` 作用域的应用，该应用将具有对专用电子邮件地址的只读访问权限。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_oauth_apps %} 的范围](/apps/building-integrations/setting-up-and-registering-oauth-apps/about-scopes-for-oauth-apps)”。

{% tip %}

注意：目前，无法将源代码访问范围限定为只读。

{% endtip %}

### 申请的数据类型

以下是应用程序可能申请的几种数据类型。

![OAuth 访问权限详细信息](/assets/images/help/platform/oauth_access_types.png)

{% tip %}

提示：{% data reusables.user-settings.review_oauth_tokens_tip %}

{% endtip %}

| 数据类型 | 说明 |
| --- | --- |
| 提交状态 | 您可以授权第三方应用程序报告您的提交状态。 提交状态访问权限允许应用程序确定对特定提交的构建是否成功。 应用程序无权访问代码，但它们可以根据特定提交读取和写入状态信息。 |
| 部署 | 部署状态访问权限允许应用程序根据仓库的特定提交确定部署是否成功。 应用程序无法访问您的代码。 |
| Gists | [Gist](https://gist.github.com) 访问权限允许应用程序读取或写入{% ifversion not ghae %} 公共、{% else %} 内部和 {% endif %} 机密 Gist。 |
| 挂钩 | [Webhook](/webhooks) 访问权限允许应用程序在管理的存储库上读取或写入挂钩配置。 |
| 通知 | 通知访问权限允许应用程序读取您的 {% data variables.product.product_name %} 通知，如议题和拉取请求的评论。 但应用程序仍然无法访问仓库中的任何内容。 |
| Organizations and teams（组织和团队） | 组织和团队访问权限允许应用程序访问并管理组织和团队成员资格。 |
| 个人用户数据 | 用户数据包括您的用户个人资料中的信息，例如您的姓名、电子邮件地址和地点。 |
| 存储库 | 仓库信息包括贡献者的姓名、您创建的分支以及仓库中的实际文件。 应用程序可以请求访问任何可见性级别的所有存储库。 有关详细信息，请参阅“[关于存储库](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)”。 |
| 仓库删除 | 应用程序可以申请删除您管理的仓库，但无法访问您的代码。 |

## 申请更新的权限

应用程序可以申请新的访问权限。 要求更新权限时，应用程序会通知您更新前后的差异。

![更改第三方应用程序访问权限](/assets/images/help/platform/oauth_existing_access_pane.png)
