---
title: 关于议题和拉取请求模板
intro: 利用议题和拉取请求模板，可以自定义和标准化您希望贡献者在您的仓库中打开议题和拉取请求时加入的信息。
redirect_from:
  - /articles/about-issue-and-pull-request-templates
  - /github/building-a-strong-community/about-issue-and-pull-request-templates
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: 关于模板
---

在仓库中创建议题和拉取请求后，贡献者可以根据仓库的参与指南使用模板打开议题或描述其拉取请求中提议的更改。 有关向仓库添加参与指南的更多信息，请参阅“[设置仓库贡献者指南](/articles/setting-guidelines-for-repository-contributors)”。

{% ifversion fpt or ghes or ghec %}

您可以为组织或用户帐户创建议题和拉取请求模板。 更多信息请参阅“[创建默认社区健康文件](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)”。

{% endif %}

## 议题模板

使用默认构建器{% ifversion fpt or ghec %} 或议题表单{% endif %} 为仓库创建议题模板后，贡献者在仓库中打开新议题时便可选择适当的模板。

![显示议题模板选项的新议题页面](/assets/images/help/issues/new-issue-page-with-multiple-templates.png)

当您想为开设议题提供指导，同时允许贡献者指定议题的内容时，议题模板很有用。 {% ifversion fpt or ghec %} 如果您希望贡献者在开设议题时提供特定的结构化信息，则议题表单有助于确保您收到所需的信息。{% endif %}

使用模板构建器，可以指定每个模板的标题和描述，添加模板内容，然后提交模板到默认分支或在仓库中打开拉取请求。 模板构建器会自动添加模板显示于新议题页面所需的 YAML 扉页标记。 更多信息请参阅“[为仓库配置议题模板](/articles/configuring-issue-templates-for-your-repository)”。

{% ifversion fpt or ghec %}
通过议题表单，您可以使用 {% data variables.product.prodname_dotcom %} 表单架构创建具有 Web 表单字段的模板。 当贡献者使用议题表单打开议题时，表单输入将转换为标准 Markdown 议题评论。 您可以指定不同的输入类型并根据需要设置输入，以帮助贡献者打开仓库中可操作的议题。 更多信息请参阅“[为仓库配置议题模板](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#creating-issue-forms)”和“[议题表单的语法](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms)”。
{% endif %}

{% ifversion fpt or ghae or ghes or ghec %}
{% data reusables.repositories.issue-template-config %}更多信息请参阅“[为仓库配置议题模板](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#configuring-the-template-chooser)”。
{% endif %}

议题模板存储在仓库的默认分支的隐藏目录 `.github/ISSUE_TEMPLATE` 中。 如果您在另一个分支中创建模板，协作者将无法使用。 议题模板文件名不区分大小写，并且需要 *.md* 扩展名。{% ifversion fpt or ghec %} 使用议题表单创建的议题模板需要 *.yml* 扩展名。{% endif %} {% data reusables.repositories.valid-community-issues %}

可以使用旧议题模板工作流程在 Markdown 中手动创建单一议题模板，然后项目贡献者将自动在议题中看到模板的内容。 但是，我们建议使用已升级的多个议题模板构建器{% ifversion fpt or ghec %} 或议题表单{% endif %} 创建议题模板。 有关旧工作流程的更多信息，请参阅"[手动为仓库创建单一议题模板](/articles/manually-creating-a-single-issue-template-for-your-repository)"。

{% data reusables.repositories.security-guidelines %}

## 拉取请求模板

将拉取请求模板添加到仓库后，项目贡献者会自动在拉取请求正文中看到模板的内容。

![示例拉取请求模板](/assets/images/help/pull_requests/pr-template-sample.png)

必须在仓库的默认分支中创建模板。 在其他分支创建的模板无法供协作者使用。 您可以将拉取请求模板存储在仓库的可见根目录的 `docs` 文件夹或隐藏目录 `.github` 中。 拉取请求模板文件名不区分大小写，并且具有 *.md* 或 *.txt* 等扩展名。

更多信息请参阅"[为仓库创建拉取请求模板](/articles/creating-a-pull-request-template-for-your-repository)"。
