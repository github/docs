---
title: 在仓库中显示赞助者按钮
intro: 您可以在仓库中添加赞助者按钮，以提高开源项目资助选项的可见性。
redirect_from:
  - /github/building-a-strong-community/displaying-a-sponsor-button-in-your-repository
  - /articles/displaying-a-sponsor-button-in-your-repository
  - /github/administering-a-repository/displaying-a-sponsor-button-in-your-repository
  - /github/administering-a-repository/managing-repository-settings/displaying-a-sponsor-button-in-your-repository
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Display a sponsor button
ms.openlocfilehash: 8fce9d4fe2b4aa697fa5d5a0ef0dfafb1caa4844
ms.sourcegitcommit: 76b840f45ba85fb79a7f0c1eb43bc663b3eadf2b
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/12/2022
ms.locfileid: '147558340'
---
## 关于 FUNDING 文件

可通过编辑默认分支上存储库的 `.github` 文件夹中的 FUNDING.yml 文件来配置赞助者按钮。 您也可以配置此按钮，以通过 {% data variables.product.prodname_sponsors %}、外部资助平台或自定义资助 URL 来包括被赞助的开发者。 有关 {% data variables.product.prodname_sponsors %} 的详细信息，请参阅“[关于 GitHub 赞助者](/sponsors/getting-started-with-github-sponsors/about-github-sponsors)”。

您也可以每个赞助平台添加一个用户名、包名称或项目名，以及最多四个自定义 URL。 可在 {% data variables.product.prodname_sponsors %} 中添加一个组织和最多四位被赞助的开发者。 在新行上添加每个平台，使用以下语法：

平台 | 语法
-------- | -----
[LFX Mentorship（以前称为 CommunityBridge）](https://lfx.linuxfoundation.org/tools/mentorship) | `community_bridge: PROJECT-NAME`
[{% data variables.product.prodname_sponsors %}](https://github.com/sponsors) | `github: USERNAME` 或 `github: [USERNAME, USERNAME, USERNAME, USERNAME]`
[IssueHunt](https://issuehunt.io/) | `issuehunt: USERNAME`
[Ko-fi](https://ko-fi.com/) | `ko_fi: USERNAME`
[Liberapay](https://en.liberapay.com/) | `liberapay: USERNAME`
[Open Collective](https://opencollective.com/) | `open_collective: USERNAME`
[Otechie](https://otechie.com/)| `otechie: USERNAME`
[Patreon](https://www.patreon.com/) | `patreon: USERNAME`
[Tidelift](https://tidelift.com/) | `tidelift: PLATFORM-NAME/PACKAGE-NAME`
自定义 URL | `custom: LINK1` 或 `custom: [LINK1, LINK2, LINK3, LINK4]`

对于 Tidelift，请使用带有以下平台名称的 `platform-name/package-name` 语法：

语言 | 平台名称
-------- | -------------
JavaScript | `npm`
Python | `pypi`
Ruby | `rubygems`
Java | `maven`
PHP | `packagist`
C# | `nuget`

下面是“FUNDING.yml”文件的示例：
```
github: [octocat, surftocat]
patreon: octocat
tidelift: npm/octo-package
custom: ["https://www.paypal.me/octocat", octocat.com]
```

{% note %}

注意：如果数组中的自定义 URL 包含 `:`，则必须将 URL 用引号括起来。 例如 `"https://www.paypal.me/octocat"`。

{% endnote %}

你可以为组织或个人帐户创建一个默认赞助者按钮。 有关详细信息，请参阅[创建默认社区运行状况文件](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)。

{% note %}

资助链接为开源项目提供了一个获得其社区直接资金支持的方式。 我们不支持出于其他目的使用资助链接，例如出于做广告或支持政治、社区或慈善团体的目的。 如果您对您的预期用途是否受支持存有疑问，请联系 {% data variables.contact.contact_support %}。

{% endnote %}

## 在仓库中显示赞助者按钮

任何有管理员权限的人都可以在仓库中启用赞助者按钮。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. 在“功能”下，选择“赞助”。
  ![用于启用“赞助”的复选框](/assets/images/help/sponsors/sponsorships-checkbox.png)
4. 在“赞助”下，单击“设置赞助者按钮”或“替代资助链接” 。
  ![用于设置“赞助者按钮”的按钮](/assets/images/help/sponsors/sponsor-set-up-button.png)
5. 在文件编辑器中，按照“FUNDING.yml”文件中的说明将链接添加到你的资助位置。
  ![编辑 FUNDING 文件以将链接添加到资助位置](/assets/images/help/sponsors/funding-yml-file.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}

## 延伸阅读
- [有关开源参与者的 {% data variables.product.prodname_sponsors %}](/sponsors/receiving-sponsorships-through-github-sponsors/about-github-sponsors-for-open-source-contributors)
- {% data variables.product.prodname_blog %} 上的“[{% data variables.product.prodname_sponsors %} 团队的常见问题解答](https://github.blog/2019-06-12-faq-with-the-github-sponsors-team/)”
