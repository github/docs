---
title: 关于代码所有者
intro: 您可以使用 CODEOWNERS 文件定义负责仓库代码的个人或团队。
redirect_from:
  - /articles/about-codeowners/
  - /articles/about-code-owners
product: '{% data reusables.gated-features.code-owners %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

具有管理员或所有者权限的人员可以在仓库中创建 CODEOWNERS 文件。

您选择作为代码所有者的人员必须具有仓库的写入权限。 当代码所有者是团队时，该团队必须拥有写入权限，即使团队的所有成员都已经直接通过组织成员资格或通过另一个团队成员资格直接拥有写入权限。

### 关于代码所有者

当有人打开修改代码的拉取请求时，将自动请求代码所有者进行审查。 不会自动请求代码所有者审查拉取请求草稿。 有关拉取请求草稿的更多信息，请参阅“[关于拉取请求](/github/collaborating-with-issues-and-pull-requests/about-pull-requests#draft-pull-requests)”。 不会自动请求代码所有者审查拉取请求草稿。 如果将拉取请求转换为草稿，则已订阅通知的用户不会自动取消订阅。 更多信息请参阅“[更改拉取请求的阶段](/github/collaborating-with-issues-and-pull-requests/changing-the-stage-of-a-pull-request)”。

当具有管理员或所有者权限的人员启用必需审查时，他们也可选择性要求代码所有者批准后，作者才可合并仓库中的拉取请求。 更多信息请参阅“[启用拉取请求的必需审查](/github/administering-a-repository/enabling-required-reviews-for-pull-requests)”。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}如果团队启用了代码审查分配，则个别审批无法满足受保护分支中代码所有者审批的要求。 更多信息请参阅“[管理团队的代码审查分配](/github/setting-up-and-managing-organizations-and-teams/managing-code-review-assignment-for-your-team)”。{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
如果文件具有代码所有者，则在打开拉取请求之前可以看到代码所有者是谁。 In the repository, you can browse to the file and hover over
{% octicon "shield-lock" aria-label="The edit icon" %}.

![仓库中文件的代码所有者](/assets/images/help/repository/code-owner-for-a-file.png)
{% endif %}

### CODEOWNERS 文件位置

要使用 CODEOWNERS 文件，请在仓库中您要添加代码所有者的分支的根目录 `docs/` 或 `.github/` 中，创建一个名为 `CODEOWNERS` 的新文件。

每个 CODEOWNERS 文件将为仓库中的一个分支分配代码所有者。 Thus, you can assign different code owners for different branches, such as `@octo-org/codeowners-team` for a code base on the default branch and `@octocat` for a {% data variables.product.prodname_pages %} site on the `gh-pages` branch.

为使代码所有者接收审查请求，CODEOWNERS 文件必须在拉取请求的基本分支上。 例如，如果您将 `@octocat` 分配为仓库 `gh-pages` 分支上 *.js* 文件的代码所有者，则在头部分支与 `gh-pages` 之间打开更改 *.js* 文件的拉取请求时，`@octocat` 将会收到审查请求。

### CODEOWNERS 语法

CODEOWNERS 文件使用遵循 [gitignore](https://git-scm.com/docs/gitignore#_pattern_format) 文件中所用规则的模式。 模式后接一个或多个使用标准 `@username` 或 `@org/team-name` 格式的 {% data variables.product.prodname_dotcom %} 用户名或团队名称。 您也可以通过已经添加到其 {% data variables.product.product_name %} 帐户的电子邮件地址来指代用户，如 `user@example.com`。

If any line in your CODEOWNERS file contains invalid syntax, the file will not be detected and will not be used to request reviews. Invalid syntax includes inline comments and user or team names that do not exist on {% data variables.product.product_name %}.
#### CODEOWNERS 文件示例
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
# directory in the root of your repository.
/docs/ @doctocat
```

### 延伸阅读

- "[创建新文件](/articles/creating-new-files)"
- "[邀请个人仓库的协作者](/articles/inviting-collaborators-to-a-personal-repository)"
- "[管理个人对组织仓库的访问](/articles/managing-an-individual-s-access-to-an-organization-repository)"
- "[管理团队对组织仓库的访问](/articles/managing-team-access-to-an-organization-repository)"
- "[查看拉取请求审查](/articles/viewing-a-pull-request-review)"
