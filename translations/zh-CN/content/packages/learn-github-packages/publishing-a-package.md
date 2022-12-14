---
title: 发布包
intro: '您可以将包发布到 {% data variables.product.prodname_registry %} 以供他人下载和再用。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/publishing-a-package
  - /packages/publishing-and-managing-packages/publishing-a-package
permissions: Anyone with write permissions for a repository can publish a package to that repository.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: e13e33b6085fbdd736d77d7d8b4998595ea7ffcc
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145130320'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

## 关于发布的包

您可以在包页面上提供说明和其他详细信息，例如安装和使用说明，以帮助他人了解和使用您的包。 {% data variables.product.product_name %} 提供每个版本的元数据，例如发布日期、下载活动和最新版本。 有关示例包页面，请参阅 [@Codertocat/hello-world-npm](https://github.com/Codertocat/hello-world-npm/packages/10696?version=1.0.1)。

{% data reusables.package_registry.public-or-private-packages %} 一个仓库可连接到多个包。 为避免混淆，请确保使用自述文件和说明清楚地阐明每个包的相关信息。

{% ifversion fpt or ghec %} 如果包的新版本修复了安全漏洞，则应在存储库中发布安全公告。 {% data variables.product.prodname_dotcom %} 审查每个发布的安全通告，并且可能使用它向受影响的仓库发送 {% data variables.product.prodname_dependabot_alerts %}。 有关详细信息，请参阅“[关于 GitHub 安全公告](/github/managing-security-vulnerabilities/about-github-security-advisories)”。
{% endif %}

## 发布包

您可以按照一般准则，使用任何{% ifversion fpt or ghae or ghec %}支持的包客户端{% else %}为您的实例启用的包类型{% endif %}将包发布到 {% data variables.product.prodname_registry %}。

1. 针对要完成的任务，创建具有适当作用域的访问令牌或使用现有的此类令牌。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_registry %} 的权限](/packages/learn-github-packages/about-permissions-for-github-packages)”。
2. 按照包客户端的说明，使用访问令牌向 {% data variables.product.prodname_registry %} 验证。
3. 按照包客户端的说明发布包。

有关包客户端的特定说明，请参阅“[使用 GitHub Packages 注册表](/packages/working-with-a-github-packages-registry)”。

在发布包后，您可以在 {% data variables.product.prodname_dotcom %} 上查看该包。 有关详细信息，请参阅“[查看包](/packages/learn-github-packages/viewing-packages)”。
