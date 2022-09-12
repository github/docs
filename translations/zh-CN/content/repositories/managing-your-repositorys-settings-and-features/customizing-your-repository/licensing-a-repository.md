---
title: 许可仓库
intro: GitHub 上的公共仓库常用于共享开源软件。 要使仓库真正开源，您需要许可它供其他人免费使用、更改和分发软件。
redirect_from:
  - /articles/open-source-licensing
  - /articles/licensing-a-repository
  - /github/creating-cloning-and-archiving-repositories/licensing-a-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/licensing-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: f49dad5c20909647b1d7da7bb44a80a771337966
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145129345'
---
## 选择合适的许可

我们创建了 [choosealicense.com](https://choosealicense.com)，帮助你了解如何授权代码。 软件许可是告诉其他人，他们能够对您的代码做什么，不能做什么，因此做明智的决定很重要。

您没有选择许可的义务， 但如果没有许可，就会默认实施版权法，因此您会保留对您的源代码的所有权利，任何人都不能复制、分发您的工作或创建其派生作品。 如果您创建开源项目，强烈建议您包含开源许可。 [开放源代码指南](https://opensource.guide/legal/#which-open-source-license-is-appropriate-for-my-project)为项目选择正确许可证提供了额外指导。

{% note %}

注意：{% ifversion fpt or ghec %}根据[服务条款](/free-pro-team@latest/github/site-policy/github-terms-of-service)，如果你在 {% data variables.product.product_name %} 的公共存储库中发布源代码，{% endif %}{% data variables.product.product_location %} 的其他用户有权查看你的存储库并为其创建分支。 如果您已创建仓库，并且不再希望用户访问它，便可将仓库设为私有。 在将仓库的可见性变为私有时，其他用户创建的现有复刻或本地副本仍将存在。 有关详细信息，请参阅“[设置存储库可见性](/github/administering-a-repository/setting-repository-visibility)”。

{% endnote %}

## 确定许可的位置

大多数用户都会将许可证文本放在存储库根中名为 `LICENSE.txt`（或者 `LICENSE.md` 或 `LICENSE.rst`）的文件中；[此处有来自 Hubot 的示例](https://github.com/github/hubot/blob/master/LICENSE.md)。

有些项目在其自述文件中包含许可的相关信息。 例如，项目的自述文件可能包含一条注释，表示“此项目根据 MIT 许可的条款进行许可”。

作为最佳实践，我们建议您的项目随附许可文件。

## 按许可类型搜索 GitHub

你可以使用 `license` 限定符和精确的许可证关键字，根据存储库的许可证或许可证系列来筛选存储库：

许可证 | 许可关键字
---  | ---
| 学术自由许可证 v3.0 | `afl-3.0` |
| Apache 许可证 2.0 | `apache-2.0` |
| 艺术许可协议 2.0 | `artistic-2.0` |
| Boost 软件许可证 1.0 | `bsl-1.0` |
| 二条款 BSD“简化版”许可证 | `bsd-2-clause` |
| 三条款 BSD“新版”或“修改版”许可证 | `bsd-3-clause` |
| BSD 3 条款净化版许可证 | `bsd-3-clause-clear` |
| 知识共享许可证系列 | `cc` |
| 免费知识共享 v1.0 通用 | `cc0-1.0` |
| 知识共享署名 4.0 | `cc-by-4.0` |
| 知识共享署名相同方式共享 4.0 | `cc-by-sa-4.0` |
| 你想干嘛就干嘛公共许可证 | `wtfpl` |
| 教育社区许可证 v2.0 | `ecl-2.0` |
| Eclipse 公共许可证 1.0 | `epl-1.0` |
| Eclipse 公共许可证 2.0 | `epl-2.0` |
| 欧盟公共许可证 1.1 | `eupl-1.1` |
| GNU Affero 通用公共许可证 v3.0 | `agpl-3.0` |
| GNU 通用公共许可证系列 | `gpl` |
| GNU 通用公共许可证 v2.0 | `gpl-2.0` |
| GNU 通用公共许可证 v3.0 | `gpl-3.0` |
| GNU 宽通用公共许可证系列 | `lgpl` |
| GNU 宽通用公共许可证 v2.1 | `lgpl-2.1` |
| GNU 宽通用公共许可证 v3.0 | `lgpl-3.0` |
| ISC | `isc` |
| LaTeX 项目公共许可证 v1.3c | `lppl-1.3c` |
| Microsoft 公共许可证 | `ms-pl` |
| MIT | `mit` |
| Mozilla 公共许可证 2.0 | `mpl-2.0` |
| 开放软件许可证 3.0 | `osl-3.0` |
| PostgreSQL 许可证 | `postgresql` |
| SIL 开源字体许可 1.1 | `ofl-1.1` |
| 伊利诺伊大学/NCSA 开源许可证 | `ncsa` |
| The Unlicense | `unlicense` |
| zLib 许可证 | `zlib` |

按系列许可搜索时，搜索结果将包含该系列的所有许可。 例如，使用查询 `license:gpl` 时，搜索结果将包括由 GNU 通用公共许可证 v2.0 和 GNU 通用公共许可证 v3.0 许可的存储库。 有关详细信息，请参阅“[搜索存储库](/search-github/searching-on-github/searching-for-repositories/#search-by-license)”。

## 检测许可

[开放源代码 Ruby gem 被许可方](https://github.com/licensee/licensee)将存储库的许可证文件与已知许可证的简短列表进行比较。 被许可方还提供[许可证 API](/rest/reference/licenses)，[让我们了解 {% data variables.product.product_name %} 上的存储库如何获得许可](https://github.com/blog/1964-open-source-license-usage-on-github-com)。 如果存储库使用的许可证未在[选择许可证网站](https://choosealicense.com/appendix/)上列出，可以[请求包括许可证](https://github.com/github/choosealicense.com/blob/gh-pages/CONTRIBUTING.md#adding-a-license)。

如果您的仓库使用的许可列在“选择许可”网站中，但未明确显示在仓库页面顶部，其中可能包含多个许可或存在其他复杂性。 为使你的许可证被检测到，请简化许可证文件，并在其他地方（例如存储库的自述文件中）注明复杂度 。

## 将许可应用到带现有许可的仓库

许可选择器仅当您在 GitHub 上创建新项目时可用。 您可以使用浏览器手动添加许可。 有关将许可证添加到存储库的详细信息，请参阅“[将许可证添加到存储库](/articles/adding-a-license-to-a-repository)”。

![GitHub.com 上许可选择器的屏幕截图](/assets/images/help/repository/repository-license-picker.png)

## 免责声明

GitHub 开源许可的目标是提供一个起点，帮助您做出明智的决定。 GitHub 显示许可信息以帮助用户了解开源许可以及使用它们的项目。 我们希望它有帮助，但请记住，我们不是律师，像其他人一样，我们也会犯错。 因此，GitHub“按原样”提供信息，对提供或通过其提供的任何信息或许可不做任何保证，并对使用许可信息所造成的损害不承担责任。 如果对适合您的代码的许可有任何疑问，或有任何其他相关的问题，最好咨询专业人员。

## 延伸阅读

- 《开放源代码指南》的“[开放源代码的法律层面](https://opensource.guide/legal/)”部分{% ifversion fpt or ghec %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}) {% endif %}
