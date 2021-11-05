---
title: 许可仓库
intro: GitHub 上的公共仓库常用于共享开源软件。 要使仓库真正开源，您需要许可它供其他人免费使用、更改和分发软件。
redirect_from:
  - /articles/open-source-licensing/
  - /articles/licensing-a-repository
  - /github/creating-cloning-and-archiving-repositories/licensing-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - Repositories
---
  ### 选择合适的许可

我们创建了 [choosealicense.com](https://choosealicense.com)，以帮助您了解如何许可您的代码。 软件许可是告诉其他人，他们能够对您的代码做什么，不能做什么，因此做明智的决定很重要。

您没有选择许可的义务， 但如果没有许可，就会默认实施版权法，因此您会保留对您的源代码的所有权利，任何人都不能复制、分发您的工作或创建其派生作品。 如果您创建开源项目，强烈建议您包含开源许可。 [开源指南](https://opensource.guide/legal/#which-open-source-license-is-appropriate-for-my-project)提供为项目选择正确许可的附加指导。

{% note %}

**注：**如果您在 {% data variables.product.product_name %} 的公共仓库中发布源代码，{% if currentVersion == "free-pro-team@latest" %}根据[服务条款](/articles/github-terms-of-service)，{% endif %}其他 {% data variables.product.product_location %} 用户有权利查看您的仓库并对其复刻。 如果您已创建仓库，并且不再希望用户访问它，便可将仓库设为私有。 在将仓库的可见性变为私有时，其他用户创建的现有复刻或本地副本仍将存在。 更多信息请参阅“[设置仓库可见性](/github/administering-a-repository/setting-repository-visibility)”。

{% endnote %}

### 确定许可的位置

大多数人将其许可文件放在仓库根目录的文件 `LICENSE.txt`（或者 `LICENSE.md` 或 `LICENSE.rst`）中；[下面是 Hubot 中的一个示例](https://github.com/github/hubot/blob/master/LICENSE.md)。

有些项目在其自述文件中包含许可的相关信息。 例如，项目的自述文件可能包含一条注释，表示“此项目根据 MIT 许可的条款进行许可”。

作为最佳实践，我们建议您的项目随附许可文件。

### 按许可类型搜索 GitHub

您可以使用 `license` 限定符和准确的许可关键字，根据许可或许可系列来过滤仓库：

| 许可 | 许可关键字                                                         |
| -- | ------------------------------------------------------------- |
|    | Academic Free License v3.0 | `afl-3.0`                        |
|    | Apache license 2.0 | `apache-2.0`                             |
|    | Artistic license 2.0 | `artistic-2.0`                         |
|    | Boost Software License 1.0 | `bsl-1.0`                        |
|    | BSD 2-clause "Simplified" license | `bsd-2-clause`            |
|    | BSD 3-clause "New" or "Revised" license | `bsd-3-clause`      |
|    | BSD 3-clause Clear license | `bsd-3-clause-clear`             |
|    | Creative Commons 许可系列 | `cc`                                  |
|    | Creative Commons Zero v1.0 Universal | `cc0-1.0`              |
|    | Creative Commons Attribution 4.0 | `cc-by-4.0`                |
|    | Creative Commons Attribution Share Alike 4.0 | `cc-by-sa-4.0` |
|    | Do What The F*ck You Want To Public License | `wtfpl`         |
|    | Educational Community License v2.0 | `ecl-2.0`                |
|    | Eclipse Public License 1.0 | `epl-1.0`                        |
|    | Eclipse Public License 2.0 | `epl-2.0`                        |
|    | European Union Public License 1.1 | `eupl-1.1`                |
|    | GNU Affero General Public License v3.0 | `agpl-3.0`           |
|    | GNU General Public License 系列 | `gpl`                         |
|    | GNU General Public License v2.0 | `gpl-2.0`                   |
|    | GNU General Public License v3.0 | `gpl-3.0`                   |
|    | GNU Lesser General Public License 系列 | `lgpl`                 |
|    | GNU Lesser General Public License v2.1 | `lgpl-2.1`           |
|    | GNU Lesser General Public License v3.0 | `lgpl-3.0`           |
|    | ISC | `isc`                                                   |
|    | LaTeX Project Public License v1.3c | `lppl-1.3c`              |
|    | Microsoft Public License | `ms-pl`                            |
|    | MIT | `mit`                                                   |
|    | Mozilla Public License 2.0 | `mpl-2.0`                        |
|    | Open Software License 3.0 | `osl-3.0`                         |
|    | PostgreSQL License | `postgresql`                             |
|    | SIL Open Font License 1.1 | `ofl-1.1`                         |
|    | University of Illinois/NCSA Open Source License | `ncsa`      |
|    | The Unlicense | `unlicense`                                   |
|    | zLib License | `zlib`                                         |

按系列许可搜索时，搜索结果将包含该系列的所有许可。 例如，在使用查询 `license:gpl` 时，搜索结果将包含在 GNU General Public License v2.0 和 GNU General Public License v3.0 下许可的仓库。 更多信息请参阅“[搜索仓库](/articles/searching-for-repositories/#search-by-license)”。

### 检测许可

[开源 Ruby gem 被许可人](https://github.com/licensee/licensee)比较仓库的 *LICENSE* 文件与已知许可短列表。 被许可人还提供[许可 API](/rest/reference/licenses) 并[向我们提供如何许可 {% data variables.product.product_name %} 上的仓库的洞见](https://github.com/blog/1964-open-source-license-usage-on-github-com)。 如果您的仓库使用的许可未列在[选择许可网站](https://choosealicense.com/appendix/)中，您可以[申请包含该许可](https://github.com/github/choosealicense.com/blob/gh-pages/CONTRIBUTING.md#adding-a-license)。

如果您的仓库使用的许可列在“选择许可”网站中，但未明确显示在仓库页面顶部，其中可能包含多个许可或存在其他复杂性。 为使您的许可被检测到，请简化*许可*文件，并在其他位置注明复杂性，例如在仓库的*自述文件*中。

### 将许可应用到带现有许可的仓库

许可选择器仅当您在 GitHub 上创建新项目时可用。 您可以使用浏览器手动添加许可。 有关添加许可到仓库的更多信息，请参阅“[添加许可到仓库](/articles/adding-a-license-to-a-repository)”。

![GitHub.com 上许可选择器的屏幕截图](/assets/images/help/repository/repository-license-picker.png)

### 免责声明

GitHub 开源许可的目标是提供一个起点，帮助您做出明智的决定。 GitHub 显示许可信息以帮助用户了解开源许可以及使用它们的项目。 我们希望它有帮助，但请记住，我们不是律师，像其他人一样，我们也会犯错。 因此，GitHub“按原样”提供信息，对提供或通过其提供的任何信息或许可不做任何保证，并对使用许可信息所造成的损害不承担责任。 如果对适合您的代码的许可有任何疑问，或有任何其他相关的问题，最好咨询专业人员。

### 延伸阅读

- 开源指南的“[开源的法律 方面](https://opensource.guide/legal/)”部分{% if currentVersion == "free-pro-team@latest" %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}
