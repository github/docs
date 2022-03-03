---
title: 创建议题
intro: 议题可以通过多种方式创建，因此您可以为工作流程选择最方便的方法。
permissions: 'People with read access can create an issue in a repository where issues are enabled. {% data reusables.enterprise-accounts.emu-permission-repo %}'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/creating-an-issue
  - /articles/creating-an-issue
  - /github/managing-your-work-on-github/creating-an-issue
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/opening-an-issue-from-a-comment
  - /github/managing-your-work-on-github/opening-an-issue-from-a-comment
  - /issues/tracking-your-work-with-issues/creating-issues/opening-an-issue-from-a-comment
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/opening-an-issue-from-code
  - /articles/opening-an-issue-from-code
  - /github/managing-your-work-on-github/opening-an-issue-from-code
  - /issues/tracking-your-work-with-issues/creating-issues/opening-an-issue-from-code
  - /issues/tracking-your-work-with-issues/creating-issues/about-automation-for-issues-and-pull-requests-with-query-parameters
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/about-automation-for-issues-and-pull-requests-with-query-parameters
  - /articles/about-automation-for-issues-and-pull-requests-with-query-parameters
  - /github/managing-your-work-on-github/about-automation-for-issues-and-pull-requests-with-query-parameters
  - /issues/tracking-your-work-with-issues/creating-issues/creating-an-issue
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Project management
shortTitle: 创建议题
type: how_to
---

议题可用于跟踪漏洞、增强功能或其他请求。 更多信息请参阅“[关于议题](/issues/tracking-your-work-with-issues/about-issues)”。

{% data reusables.repositories.administrators-can-disable-issues %}

## 从仓库创建议题

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}
{% data reusables.repositories.new_issue %}
1. 如果您的仓库使用议题模板，请在要打开的议题类型旁边单击 **Get started（开始）**。 ![Select the type of issue you want to create](/assets/images/help/issues/issue_template_get_started_button.png)或者，如果您想打开的议题类型未包括在可用选项中，单击 **Open a blank issue（打开空白议题）**。 ![打开空白议题的链接](/assets/images/help/issues/blank_issue_link.png)
{% data reusables.repositories.type-issue-title-and-description %}
{% data reusables.repositories.assign-an-issue-as-project-maintainer %}
{% data reusables.repositories.submit-new-issue %}

## 使用 {% data variables.product.prodname_cli %} 创建议题

{% data reusables.cli.about-cli %} 要了解 {% data variables.product.prodname_cli %} 的更多信息，请参阅“[关于 {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli)”。

要创建议题，请使用 `gh issue create` 子命令。 若要跳过交互式提示，请包括 `--body` and the `--title` 标志。

```shell
gh issue create --title "My new issue" --body "Here are more details."
```

您还可以指定受理人、标签、里程碑和项目。

```shell
gh issue create --title "My new issue" --body "Here are more details." --assignee @me,monalisa --label "bug,help wanted" --project onboarding --milestone "learning codebase"
```

## 从评论创建议题

您可以从议题或拉取请求中的评论打开新议题。 从评论打开议题时，该议题包含一个代码段，显示评论的原始发布位置。

1. 导航到您要从中打开议题的评论。
2. 在该评论中，单击 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}。 ![拉取请求审查评论中的烤肉串式按钮](/assets/images/help/pull_requests/kebab-in-pull-request-review-comment.png)
3. 单击 **Reference in new issue（新议题中的引用）**。 ![新议题中的引用菜单项](/assets/images/help/pull_requests/reference-in-new-issue.png)
4. 使用“Repository（仓库）”下拉菜单，并选择要在其中打开议题的仓库。 ![新议题的仓库下拉列表](/assets/images/help/pull_requests/new-issue-repository.png)
5. 键入议题的描述性标题和正文。 ![新议题的标题和正文](/assets/images/help/pull_requests/new-issue-title-and-body.png)
6. 单击 **Create issue（创建过滤器）**。 ![创建新议题的按钮](/assets/images/help/pull_requests/create-issue.png)
{% data reusables.repositories.assign-an-issue-as-project-maintainer %}
{% data reusables.repositories.submit-new-issue %}

## 从代码创建议题

您可以从文件或拉取请求的特定代码行打开新议题。 从代码打开议题时，议题包含小片段，其中显示所选代码的行或范围。 只能打开存储代码的仓库中的议题。

![在从代码打开的议题中渲染的代码片段](/assets/images/help/repository/issue-opened-from-code.png)

{% data reusables.repositories.navigate-to-repo %}
1. 找到要在议题中引用的代码：
    - 要打开文件中代码相关的议题，请找到该文件。
    - 要打开拉取请求中代码相关的议题，请找到该拉取请求并单击 {% octicon "diff" aria-label="The file diff icon" %} **Files changed（文件已更改）**。 然后浏览到含有要包含在评论中的代码的文件，并单击 **View（查看）**。
{% data reusables.repositories.choose-line-or-range %}
4. 在代码范围左侧，单击 {% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %}。 在下拉菜单中，单击 **Reference in new issue（新议题中的引用）**。 ![带有从所选行打开新议题的选项的烤肉串式菜单](/assets/images/help/repository/open-new-issue-specific-line.png)
{% data reusables.repositories.type-issue-title-and-description %}
{% data reusables.repositories.assign-an-issue-as-project-maintainer %}
{% data reusables.repositories.submit-new-issue %}

{% ifversion fpt or ghec %}

## 从讨论创建议题

对存储库具有分类权限的人员可以从讨论创建议题。

从讨论创建议题时，讨论帖子的内容将自动包含在议题正文中，并且将保留所有标签。 从讨论创建议题不会将讨论转换为议题或删除现有讨论。 有关 {% data variables.product.prodname_discussions %} 的更多信息，请参阅“[关于讨论](/discussions/collaborating-with-your-community-using-discussions/about-discussions)”。

{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. 在右侧边栏中，单击 {% octicon "issue-opened" aria-label="The issues icon" %} **Create issue from discussion（从讨论创建议题）**。 ![用于从讨论创建议题的按钮](/assets/images/help/discussions/create-issue-from-discussion.jpg)
{% data reusables.repositories.type-issue-title-and-description %}
{% data reusables.repositories.assign-an-issue-as-project-maintainer %}
{% data reusables.repositories.submit-new-issue %}

{% endif %}

## 从项目板说明创建议题

如果使用项目板对工作进行跟踪和排列优先级，您可以将项目板注释转换为议题。 更多信息请参阅“[关于项目板](/github/managing-your-work-on-github/about-project-boards)”和“[向项目板添加备注](/github/managing-your-work-on-github/adding-notes-to-a-project-board#converting-a-note-to-an-issue)”。

{% ifversion fpt or ghec %}

## 从任务列表项创建议题

在议题中，您可以使用任务列表将工作分解为较小的任务，并跟踪要完成的完整工作集。 如果任务需要进一步跟踪或讨论，您可以通过在任务上方悬停并单击任务右上角的 {% octicon "issue-opened" aria-label="The issue opened icon" %} 将任务转换为议题。 更多信息请参阅“[关于任务列表](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)”。

{% endif %}

## 从 URL 查询创建议题

您可以使用查询参数打开议题。 查询参数是 URL 中可以定制的部分，用于在 {% data variables.product.prodname_dotcom %} 上共享特定的网页视图，如搜索过滤结果或议题模板。 要创建自己的查询参数，必须将键与值进行配对。

{% tip %}

**提示：**也可使用默认标签、受理人和议题标题创建议题模板。 更多信息请参阅“[使用模板鼓励有用的议题和拉取请求](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)”。

{% endtip %}

必须具有适当的权限才可执行使用相关查询参数的操作。 例如，必须具有向议题添加标签的权限才可使用 `labels` 查询参数。 更多信息请参阅“[组织的仓库角色](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)”。

如果使用查询参数创建无效的 URL，或者没有适当的权限，URL 将返回 `404 未找到`错误页。 如果您创建的 URL 超过服务器限制，URL 将返回 `414 URI 过长`错误页面。

| 查询参数        | 示例                                                                                                                                                                                                                                                                              |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`     | `https://github.com/octo-org/octo-repo/issues/new?labels=bug&title=New+bug+report` 使用标签 "bug" 和标题 "New bug report" 创建议题。                                                                                                                                                    |
| `正文`        | `https://github.com/octo-org/octo-repo/issues/new?title=New+bug+report&body=Describe+the+problem.` 创建一个标题为 "New bug report" 的议题，并且议题正文中有评论 "Describe the problem"。                                                                                                          |
| `labels`    | `https://github.com/octo-org/octo-repo/issues/new?labels=help+wanted,bug` 使用标签 "help wanted" 和 "bug" 创建议题。                                                                                                                                                                      |
| `里程碑`       | `https://github.com/octo-org/octo-repo/issues/new?milestone=testing+milestones` 创建包含里程碑 "testing milestones" 的议题。                                                                                                                                                               |
| `assignees` | `https://github.com/octo-org/octo-repo/issues/new?assignees=octocat` 创建议题并分配到 @octocat。                                                                                                                                                                                         |
| `projects`  | `https://github.com/octo-org/octo-repo/issues/new?title=Bug+fix&projects=octo-org/1` 创建标题为 "Bug fix" 的议题并将其添加到组织的项目板 1。                                                                                                                                                     |
| `模板`        | `https://github.com/octo-org/octo-repo/issues/new?template=issue_template.md` 使用模板在议题正文中创建议题。 `template` 查询参数支持仓库根目录 `docs/` 或 `.github/` 的 `ISSUE_TEMPLATE` 子目录中存储的模板。 更多信息请参阅“[使用模板鼓励有用的议题和拉取请求](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)”。 |

{% if code-scanning-task-lists %}
## 从 {% data variables.product.prodname_code_scanning %} 警报创建议题

{% data reusables.code-scanning.beta-alert-tracking-in-issues %}
如果您使用议题来跟踪工作并确定其优先级，则可以使用议题来跟踪 {% data variables.product.prodname_code_scanning %} 警报。
{% data reusables.code-scanning.alert-tracking-link %}

{% endif %}

## 延伸阅读

- "[在 GitHub 上编写](/github/writing-on-github)"
