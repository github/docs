---
title: 授权 GitHub Apps
intro: '您可以授权 {% data variables.product.prodname_github_app %} ，以允许应用程序检索有关您的 {% data variables.product.prodname_dotcom %} 帐户的信息，在某些情况下，您可以代表您在 {% data variables.product.prodname_dotcom %} 上进行更改。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
redirect_from:
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-github-apps
ms.openlocfilehash: 050f437f411919c4be488e61c032a8543a301e02
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145098656'
---
需要验证您的 {% data variables.product.prodname_dotcom %} 身份或代表您与 {% data variables.product.prodname_dotcom %} 上的数据交互的第三方应用程序可以要求您授权 {% data variables.product.prodname_github_app %} 这样做。 

在授权 {% data variables.product.prodname_github_app %} 时，应确保您信任应用程序，查阅开发者是谁，并查阅应用程序要访问的信息类型。

在授权期间，系统将提示您向 {% data variables.product.prodname_github_app %} 授予以下权限：
* **验证 {% data variables.product.prodname_dotcom %} 标识**<br/>
  获得授权后，{% data variables.product.prodname_github_app %} 将能够以编程方式检索你的公共 GitHub 个人资料以及一些私人详细信息（例如你的电子邮件地址），具体取决于请求的访问级别。
* **了解可以访问的资源**<br/>
  获得授权后，{% data variables.product.prodname_github_app %} 将能够以编程方式读取你可以访问的私有 {% data variables.product.prodname_dotcom %} 资源（例如私有 {% data variables.product.prodname_dotcom %} 存储库），其中还安装有 {% data variables.product.prodname_github_app %} 。 例如，应用程序可以使用它，以便它可以向您显示适当的存储库列表。
* **代表你执行操作**<br/>
  应用程序可能需要像你一样在 {% data variables.product.prodname_dotcom %} 上执行任务。 这可能包括创建议题或评论拉取请求。 这种代表你行事的能力仅限于你和 {% data variables.product.prodname_github_app %} 都可以访问的 {% data variables.product.prodname_dotcom %} 资源。 但是，在某些情况下，应用程序可能永远不会代表您进行任何更改。
  
## {% data variables.product.prodname_github_app %} 何时代表您行事？

{% data variables.product.prodname_github_app %} 代表您行事的情况根据 {% data variables.product.prodname_github_app %} 的目的和使用环境而有所不同。 

例如，集成开发环境 (IDE) 可能使用 {% data variables.product.prodname_github_app %} 代表您进行交互，以便将通过 IDE 创作的更改推送回 {% data variables.product.prodname_dotcom %} 上的存储库。  {% data variables.product.prodname_github_app %} 将通过[用户到服务器请求](/get-started/quickstart/github-glossary#user-to-server-request)来实现此目的。

当 {% data variables.product.prodname_github_app %} 以这种方式代表您行事时，在 GitHub 上通过一个特殊图标进行标识，该图标显示覆盖在您自己头像上的 {% data variables.product.prodname_github_app %} 小头像，类似于下面显示的头像。

![{% data variables.product.prodname_github_app %} 中的“用户到服务器”请求创建的问题](/assets/images/help/apps/github-apps-new-issue.png)

## {% data variables.product.prodname_github_app %} 可以在多大程度上知道您能访问哪些资源并代表您采取行动？

{% data variables.product.prodname_github_app %} 在您授权后可以知道您能访问哪些资源并代表您执行操作的程度受到以下限制：

* 安装应用程序的组织或存储库 
* 应用程序请求的权限
* 您对 {% data variables.product.prodname_dotcom %} 资源的访问权限

我们用一个例子来解释这一点。

{% data variables.product.prodname_dotcom %} 用户 Alice 使用其 {% data variables.product.prodname_dotcom %} 身份登录到第三方 Web 应用程序 ExampleApp。 在此过程中，Alice 授权 ExampleApp 代表他们执行操作。

但是，ExampleApp 能够代表 Alice 在 {% data variables.product.prodname_dotcom %} 中执行的活动受到以下因素的限制：安装 ExampleApp 的存储库、ExampleApp 请求的权限以及 Alice 对 {% data variables.product.prodname_dotcom %} 资源的访问权限。 

这意味着，为了让 ExampleApp 代表 Alice 在名为 Repo A 的存储库中创建议题，必须满足以下所有条件：

* ExampleApp 的 {% data variables.product.prodname_github_app %} 请求对议题有写入权限。
* 对存储库 A 具有管理员访问权限的用户必须在 Repo A 上安装了 ExampleApp 的 {% data variables.product.prodname_github_app %} 。
* Alice 必须具有存储库 A 的读取权限。有关执行各种活动所需的权限的信息，请参阅“[组织的存储库角色](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)”。
