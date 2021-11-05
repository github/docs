---
title: 关于代码所有者
intro: 您可以使用 CODEOWNERS 文件定义负责仓库代码的个人或团队。
redirect_from:
  - /articles/about-codeowners/
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
---

具有管理员或所有者权限的人员可以在仓库中创建 CODEOWNERS 文件。

您选择作为代码所有者的人员必须具有仓库的写入权限。 When the code owner is a team, that team must be visible and it must have write permissions, even if all the individual members of the team already have write permissions directly, through organization membership, or through another team membership.

## 关于代码所有者

当有人打开修改代码的拉取请求时，将自动请求代码所有者进行审查。 不会自动请求代码所有者审查拉取请求草稿。 有关拉取请求草稿的更多信息，请参阅“[关于拉取请求](/github/collaborating-with-issues-and-pull-requests/about-pull-requests#draft-pull-requests)”。 不会自动请求代码所有者审查拉取请求草稿。 如果将拉取请求转换为草稿，则已订阅通知的用户不会自动取消订阅。 更多信息请参阅“[更改拉取请求的阶段](/github/collaborating-with-issues-and-pull-requests/changing-the-stage-of-a-pull-request)”。

当具有管理员或所有者权限的人员启用必需审查时，他们也可选择性要求代码所有者批准后，作者才可合并仓库中的拉取请求。 更多信息请参阅“[关于受保护分支](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)”。

{% ifversion fpt or ghae or ghes or ghec %}如果团队启用了代码审查分配，则个别审批无法满足受保护分支中代码所有者审批的要求。 更多信息请参阅“[管理团队的代码审查分配](/organizations/organizing-members-into-teams/managing-code-review-assignment-for-your-team)”。{% endif %}

如果文件具有代码所有者，则在打开拉取请求之前可以看到代码所有者是谁。 在仓库中，您可以找到文件并悬停于 {% octicon "shield-lock" aria-label="The edit icon" %} 上。

![仓库中文件的代码所有者](/assets/images/help/repository/code-owner-for-a-file.png)

## CODEOWNERS 文件位置

要使用 CODEOWNERS 文件，请在仓库中您要添加代码所有者的分支的根目录 `docs/` 或 `.github/` 中，创建一个名为 `CODEOWNERS` 的新文件。

每个 CODEOWNERS 文件将为仓库中的一个分支分配代码所有者。 因此，您可以为不同的分支分配不同的代码所有者，例如为默认分支的代码基础分配 `@octo-org/codeowners-team`，为 `gh-pages` 分支的 {% data variables.product.prodname_pages %} 站点分配 `@octocat`。

为使代码所有者接收审查请求，CODEOWNERS 文件必须在拉取请求的基本分支上。 例如，如果您将 `@octocat` 分配为仓库 `gh-pages` 分支上 *.js* 文件的代码所有者，则在头部分支与 `gh-pages` 之间打开更改 *.js* 文件的拉取请求时，`@octocat` 将会收到审查请求。

{% ifversion fpt or ghae or ghes > 3.2 or ghec %}
## CODEOWNERS file size

CODEOWNERS files must be under 3 MB in size. A CODEOWNERS file over this limit will not be loaded, which means that code owner information not to be shown and the appropriate code owners will not be requested to review changes in a pull request.

To reduce the size of your CODEOWNERS file, consider using wildcard patterns to consolidate multiple entries into a single entry.
{% endif %}

## CODEOWNERS 语法

CODEOWNERS 文件使用遵循 [gitignore](https://git-scm.com/docs/gitignore#_pattern_format) 文件中所用大多数规则的模式，但有[一些例外](#syntax-exceptions)。 模式后接一个或多个使用标准 `@username` 或 `@org/team-name` 格式的 {% data variables.product.prodname_dotcom %} 用户名或团队名称。 Users must have `read` access to the repository and teams must have explicit `write` access, even if the team's members already have access. You can also refer to a user by an email address that has been added to their account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, for example `user@example.com`.

如果 CODEOWNERS 文件中的任何行包含无效语法，则该文件将不会被检测并且不会用于请求审查。
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

# In this example, @octocat owns any file in the `/apps` 
# directory in the root of your repository except for the `/apps/github` 
# subdirectory, as its owners are left empty.
/apps/ @octocat
/apps/github 
```
### 语法例外
gitignore 文件有一些语法规则在 CODEOWNERS 文件中不起作用：
- 使用 `\` 对以 `#` 开头的模式转义，使其被当作模式而不是注释
- 使用 `!` 否定模式
- 使用 `[ ]` 定义字符范围

## CODEOWNERS and branch protection
Repository owners can add branch protection rules to ensure that changed code is reviewed by the owners of the changed files. 更多信息请参阅“[关于受保护分支](/github/administering-a-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)”。

### CODEOWNERS 文件示例
```
# In this example, any change inside the `/apps` directory
# will require approval from @doctocat.
/apps/ @doctocat

# In this example, any change inside the `/apps` directory
# will require approval from @doctocat or @octocat.
/apps/ @doctocat @octocat

# In this example, any change inside the `/apps` directory
# will require approval from a member of the @example-org/content team.
# If a member of @example-org/content opens a pull request 
# with a change inside the `/apps` directory, their approval is implicit.
# The team is still added as a reviewer but not a required reviewer.
# Anyone can approve the changes.
/apps/ @example-org/content-team
```


## 延伸阅读

- "[创建新文件](/articles/creating-new-files)"
- "[邀请个人仓库的协作者](/articles/inviting-collaborators-to-a-personal-repository)"
- "[管理个人对组织仓库的访问](/articles/managing-an-individual-s-access-to-an-organization-repository)"
- "[管理团队对组织仓库的访问](/articles/managing-team-access-to-an-organization-repository)"
- "[查看拉取请求审查](/articles/viewing-a-pull-request-review)"
