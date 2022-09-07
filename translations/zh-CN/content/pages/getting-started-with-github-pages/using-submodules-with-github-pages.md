---
title: 将子模块用于 GitHub Pages
intro: '您可以将子模块用于 {% data variables.product.prodname_pages %} 以在站点代码中包含其他项目。'
redirect_from:
  - /articles/using-submodules-with-pages
  - /articles/using-submodules-with-github-pages
  - /github/working-with-github-pages/using-submodules-with-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Use submodules with Pages
ms.openlocfilehash: cfe863c3a7d77d006ee4c78e9d58302fb01e4dd4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145130260'
---
如果 {% data variables.product.prodname_pages %} 站点的仓库包含子模块，则在构建站点时会自动拉取其内容。

只能使用指向公共仓库的子模块，因为 {% data variables.product.prodname_pages %} 服务器无法访问私有仓库。

对子模块（包括嵌套子模块）使用 `https://` 只读 URL。 你可以在 .gitmodules 文件中进行此更改。

## 延伸阅读

- _Pro Git_ 书中的“[Git 工具 - 子模块](https://git-scm.com/book/en/Git-Tools-Submodules)”
- [排查 {% data variables.product.prodname_pages %} 站点的 Jekyll 生成错误](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites)
