---
title: 创建议题
intro: 议题可用于跟踪漏洞、增强功能或其他请求。
permissions: People with read permissions can create an issue in a repository where issues are enabled.
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/creating-an-issue
  - /articles/creating-an-issue
  - /github/managing-your-work-on-github/creating-an-issue
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

您可以根据现有拉取请求中的代码打开新议题。 更多信息请参阅“[从代码打开议题](/github/managing-your-work-on-github/opening-an-issue-from-code)”。

可以直接从议题或拉取请求审查中的评论打开新议题。 更多信息请参阅“[从评论打开议题](/github/managing-your-work-on-github/opening-an-issue-from-a-comment)”。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
{% tip %}

**提示**：您也可以使用 {% data variables.product.prodname_cli %} 创建议题。 更多信息请参阅 {% data variables.product.prodname_cli %} 文档中的“[`gh 议题创建`](https://cli.github.com/manual/gh_issue_create)”。

{% endtip %}
{% endif %}

如果使用项目板对工作进行跟踪和排列优先级，您可以将项目板注释转换为议题。 更多信息请参阅“[关于项目板](/github/managing-your-work-on-github/about-project-boards)”和“[向项目板添加备注](/github/managing-your-work-on-github/adding-notes-to-a-project-board#converting-a-note-to-an-issue)”。

{% tip %}

**提示**：项目维护员可选择：
  - 为仓库创建议题模板。 模板包括议题正文中的信息提示。 更多信息请参阅“[关于议题和拉取请求模板](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates)”。
  - 对仓库禁用议题。 更多信息请参阅“[禁用议题](/github/managing-your-work-on-github/disabling-issues)”。 拉取请求无法禁用，始终可用。

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}
3. 单击 **New issue（新建议题）**。 ![新建议题按钮](/assets/images/help/issues/new_issues_button.png)
4. 如果有多个议题类型，请在要打开的议题类型旁边单击 **Get started（开始）**。 ![选择您想要创建的议题类型](/assets/images/help/issues/issue_template_get_started_button.png)
{% if currentVersion == "free-pro-team@latest" or currentVersion >= "enterprise-server@2.21" %}
5. （可选）如果您想打开的议题类型未包括在可用选项中，单击 **Open a blank issue（打开空白议题）**。 ![打开空白议题的链接](/assets/images/help/issues/blank_issue_link.png)
{% else %}
5. （可选）如果您想打开的议题类型未包括在可用选项中，单击 **Open a regular issue（打开常规议题）**。 ![打开常规议题的链接](/assets/images/help/issues/regular_issue_link.png)
{% endif %}
{% data reusables.repositories.type-issue-title-and-description %}
{% data reusables.repositories.assign-an-issue-as-project-maintainer %}
{% data reusables.repositories.submit-new-issue %}
### 延伸阅读

- "[在 GitHub 上编写](/github/writing-on-github)"
