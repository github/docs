---
title: 关于代码所有者
intro: 您可以使用 CODEOWNERS 文件定义负责仓库代码的个人或团队。
redirect_from:
  - /articles/about-codeowners
  - /articles/about-code-owners
  - /github/creating-cloning-and-archiving-repositories/about-code-owners
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-code-owners
product: '{% data reusables.gated-features.code-owners %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 3b6822be6551d43b3af55220ac8f39deec8be1df
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106835'
---
具有管理员或所有者权限的人员可以在仓库中创建 CODEOWNERS 文件。

你选择作为代码所有者的人员必须具有仓库的写入权限。 当代码所有者是团队时，该团队必须可见且必须拥有写入权限，即使团队的所有成员都已经直接通过组织成员资格或通过另一个团队成员资格直接拥有写入权限。

## 关于代码所有者

当有人打开修改代码的拉取请求时，将自动请求代码所有者进行审查。 不会自动请求代码所有者审查拉取请求草稿。 有关草稿拉取请求的详细信息，请参阅“[关于拉取请求](/github/collaborating-with-issues-and-pull-requests/about-pull-requests#draft-pull-requests)”。 不会自动请求代码所有者审查拉取请求草稿。 如果将拉取请求转换为草稿，则已订阅通知的用户不会自动取消订阅。 有关详细信息，请参阅“[更改拉取请求的阶段](/github/collaborating-with-issues-and-pull-requests/changing-the-stage-of-a-pull-request)”。

当具有管理员或所有者权限的人员启用必需审查时，他们也可选择性要求代码所有者批准后，作者才可合并仓库中的拉取请求。 有关详细信息，请参阅“[关于受保护的分支](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)”。

如果文件具有代码所有者，则在打开拉取请求之前可以看到代码所有者是谁。 在存储库中，可浏览到文件并将鼠标悬停在 {% octicon "shield-lock" aria-label="The edit icon" %} 上。

![仓库中文件的代码所有者](/assets/images/help/repository/code-owner-for-a-file.png)

## CODEOWNERS 文件位置

要使用 CODEOWNERS 文件，请在存储库中要添加代码所有者的分支的根目录 `docs/` 或 `.github/` 中，创建一个名为 `CODEOWNERS` 的新文件。

每个 CODEOWNERS 文件将为仓库中的一个分支分配代码所有者。 因此，可为不同的分支分配不同的代码所有者，例如为默认分支的代码库分配 `@octo-org/codeowners-team`，为 `gh-pages` 分支的 {% data variables.product.prodname_pages %} 站点分配 `@octocat`。

为使代码所有者接收审查请求，CODEOWNERS 文件必须在拉取请求的基本分支上。 例如，如果将 `@octocat` 分配为存储库 `gh-pages` 分支上 .js 文件的代码所有者，则在头部分支与 `gh-pages` 之间打开更改 .js 文件的拉取请求时，`@octocat` 将会收到审查请求 。

## CODEOWNERS 文件大小

CODEOWNERS 文件大小必须低于 3MB。 将不会加载超过此限制的 CODEOWNERS 文件，这意味着不会显示代码所有者信息，并且不会要求相应的代码所有者查看拉取请求中的更改。

要减小 CODEOWNERS 文件的大小，请考虑使用通配符模式将多个条目合并为单个条目。

## CODEOWNERS 语法

{% warning %}

警告：gitignore 文件有一些语法规则在 CODEOWNERS 文件中不起作用：
- 使用 `\` 对以 `#` 开头的模式进行转义，就可将其视为模式而不是注释
- 使用 `!` 否定模式
- 使用 `[ ]` 定义字符范围

{% endwarning %}

CODEOWNERS 文件使用遵循 [gitignore](https://git-scm.com/docs/gitignore#_pattern_format) 文件中所用的大多数相同规则的模式。 模式后接一个或多个使用标准 `@username` 或 `@org/team-name` 格式的 {% data variables.product.prodname_dotcom %} 用户名或团队名称。 用户和团队必须具有对存储库的显式 `write` 访问权限，即使团队成员已具有访问权限也是如此。

{% ifversion fpt or ghec%}在大多数情况下，你{% else %}你{% endif %}还可通过已添加到用户在 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} 上帐户的电子邮件地址来引用用户，例如 `user@example.com`。 {% ifversion fpt or ghec %}不能使用电子邮件地址来引用{% data variables.enterprise.prodname_managed_user %}。 有关 {% data variables.enterprise.prodname_managed_users %} 的详细信息，请参阅 {% ifversion fpt %}{% data variables.product.prodname_ghe_cloud %} 文档中的{% else %}“[关于 {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users)”。{% endif %}{% endif %}

CODEOWNERS 路径区分大小写，因为 {% data variables.product.prodname_dotcom %} 使用区分大小写的文件系统。 由于 CODEOWNERS 是由 {% data variables.product.prodname_dotcom %} 评估的，因此即使是不区分大小写的系统（例如 macOS）也必须使用在 CODEOWNERS 文件中正确大小写的路径和文件。

{% ifversion codeowners-errors %} 如果 CODEOWNERS 文件中的任何行包含无效语法，将跳过该行。 当你在 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} 上导航到存储库中的 CODEOWNERS 文件时，你可以看到突出显示的任何错误。 存储库的 CODEOWNERS 文件中的错误列表也可以通过 API 访问。 有关详细信息，请参阅 REST API 文档中的“[存储库](/rest/reference/repos#list-codeowners-errors)”。
{% else %} 如果 CODEOWNERS 文件中的任何行包含无效语法，则该文件将不会被检测并且不会用于请求审查。
{% endif %}

### CODEOWNERS 文件示例
```
# This is a comment.
# Each line is a file pattern followed by one or more owners.

# These owners will be the default owners for everything in
# the repo. Unless a later match takes precedence,
# @global-owner1 and @global-owner2 will be requested for
# review when someone opens a pull request.
*       @global-owner1 @global-owner2

# Order is important; the last matching pattern takes the most
# precedence. When someone opens a pull request that only
# modifies JS files, only @js-owner and not the global
# owner(s) will be requested for a review.
*.js    @js-owner

# You can also use email addresses if you prefer. They'll be
# used to look up users just like we do for commit author
# emails.
*.go docs@example.com

# Teams can be specified as code owners as well. Teams should
# be identified in the format @org/team-name. Teams must have
# explicit write access to the repository. In this example,
# the octocats team in the octo-org organization owns all .txt files.
*.txt @octo-org/octocats

# In this example, @doctocat owns any files in the build/logs
# directory at the root of the repository and any of its
# subdirectories.
/build/logs/ @doctocat

# The `docs/*` pattern will match files like
# `docs/getting-started.md` but not further nested files like
# `docs/build-app/troubleshooting.md`.
docs/*  docs@example.com

# In this example, @octocat owns any file in an apps directory
# anywhere in your repository.
apps/ @octocat

# In this example, @doctocat owns any file in the `/docs`
# directory in the root of your repository and any of its
# subdirectories.
/docs/ @doctocat

# In this example, any change inside the `/scripts` directory
# will require approval from @doctocat or @octocat.
/scripts/ @doctocat @octocat

# In this example, @octocat owns any file in the `/apps`
# directory in the root of your repository except for the `/apps/github`
# subdirectory, as its owners are left empty.
/apps/ @octocat
/apps/github
```

## CODEOWNERS 和分支保护
存储库所有者可以添加分支保护规则，以确保已更改文件的所有者审阅已更改的代码。 有关详细信息，请参阅“[关于受保护的分支](/github/administering-a-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)”。

## 延伸阅读

- [创建新文件](/articles/creating-new-files)
- [邀请协作者参加个人存储库](/articles/inviting-collaborators-to-a-personal-repository)
- [管理个人对组织存储库的访问](/articles/managing-an-individual-s-access-to-an-organization-repository)
- [管理团队对组织存储库的访问](/articles/managing-team-access-to-an-organization-repository)
- [查看拉取请求审查](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/viewing-a-pull-request-review)
