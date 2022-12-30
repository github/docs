---
title: 安装包
intro: '您可以从 {% data variables.product.prodname_registry %} 安装包，并将包用作自己项目中的依赖项。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/installing-a-package
  - /packages/publishing-and-managing-packages/installing-a-package
  - /packages/manage-packages/installing-a-package
permissions: You can install any package that you have permission to view.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 86c095ab1eddc969e4e04f3305059678ffcb9c20
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145130322'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

## 关于包的安装

您可以在 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} 上搜索，以查找 {% data variables.product.prodname_registry %} 中可以在自己项目中安装的包。 有关详细信息，请参阅“[在 {% data variables.product.prodname_registry %} 中搜索包](/search-github/searching-on-github/searching-for-packages)”。

找到包后，您可以在包页面上阅读包的说明以及安装和使用说明。

## 安装包

你可以按照相同的一般准则，使用任何为实例启用的{% ifversion fpt or ghae or ghec %}支持的包客户端{% else %}包类型{% endif %}从 {% data variables.product.prodname_registry %} 安装包。

1. 按照包客户端的说明，向 {% data variables.product.prodname_registry %} 验证。 有关详细信息，请参阅“[对 GitHub 包进行身份验证](/packages/learn-github-packages/introduction-to-github-packages#authenticating-to-github-packages)”。
2. 按照包客户端的说明安装包。

有关特定于包客户端的说明，请参阅“[使用 {% data variables.product.prodname_registry %} 注册表](/packages/working-with-a-github-packages-registry)”。
