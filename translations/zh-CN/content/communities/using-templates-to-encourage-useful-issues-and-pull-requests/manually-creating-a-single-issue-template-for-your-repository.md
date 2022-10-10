---
title: 手动为仓库创建单一议题模板
intro: 将手动创建的议题模板添加到仓库后，项目贡献者会自动在议题正文中看到模板的内容。
redirect_from:
  - /articles/creating-an-issue-template-for-your-repository
  - /articles/manually-creating-a-single-issue-template-for-your-repository
  - /github/building-a-strong-community/manually-creating-a-single-issue-template-for-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Create an issue template
ms.openlocfilehash: 0d10da9cc3be128744a7b0465c016d1c6346b6f3
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '145086511'
---
{% data reusables.repositories.legacy-issue-template-tip %}

可以在任何支持的文件夹中创建 ISSUE_TEMPLATE/ 子目录，以包含多个问题模板，并使用 `template` 查询参数指定填充问题正文的模板。 有关详细信息，请参阅“[关于使用查询参数自动处理问题和拉取请求](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)”。

您可以将 YAML 前页添加到每个议题模板以预填议题标题、自动添加标签和受理人，并且为模板提供名称和说明，人们在您的仓库中新建议题时就会从模板选择器中看到该名称和说明。

下面是 YAML 前页的示例。

```yaml
---
name: Tracking issue
about: Use this template for tracking new features.
title: "[DATE]: [FEATURE NAME]"
labels: tracking issue, needs triage
assignees: octocat
---
```
{% note %}

注意：如果前页值包含 YAML 保留字符（如 `:`），则必须将整个值放在引号中。 例如，`":bug: Bug"` 或 `":new: triage needed, :bug: bug"`。

{% endnote %}

{% ifversion fpt or ghec %}

{% data reusables.repositories.valid-community-issues %}

{% endif %}

{% ifversion fpt or ghes or ghec %}

{% data reusables.repositories.default-issue-templates %}

{% endif %}

## 添加议题模板

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. 在文件名字段中：
    -  要使问题模板显示在存储库的根目录中，请输入 issue_template 的名称。 例如，`issue_template.md`。
  ![根目录中的新问题模板名称](/assets/images/help/repository/issue-template-file-name.png)
    - 要使问题模板显示在存储库的 `docs` 目录中，请键入 docs/，后跟 issue_template 的名称 。 例如，`docs/issue_template.md`。![文档目录中的新问题模板](/assets/images/help/repository/issue-template-file-name-docs.png)
    - 要将文件存储在隐藏目录中，请键入 .github/，后跟 issue_template 的名称 。 例如，`.github/issue_template.md`。
  ![隐藏目录中的新问题模板](/assets/images/help/repository/issue-template-hidden-directory.png)
    - 要创建多个问题模板，并使用 `template` 查询参数指定填充问题正文的模板，请键入 .github/ISSUE_TEMPLATE/，后跟问题模板的名称。 例如，`.github/ISSUE_TEMPLATE/issue_template.md`。 还可以将多个问题模板存储在根目录或 `docs/` 目录的 `ISSUE_TEMPLATE` 子目录中。 有关详细信息，请参阅“[关于使用查询参数自动处理问题和拉取请求](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)”。
  ![隐藏目录中新的多问题模板](/assets/images/help/repository/issue-template-multiple-hidden-directory.png)
4. 在新文件的正文中，添加您的议题模板。 这可能包括：
    - YAML 前页
    - 预期行为和实际行为
    - 问题重现步骤
    - 项目、操作系统或硬件的版本等规范 {% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} 模板在合并到存储库的默认分支时可供协作者使用。
{% data reusables.files.propose_new_file %}

## 延伸阅读

- [关于问题和拉取请求模板](/articles/about-issue-and-pull-request-templates)
- [为存储库配置问题模板](/articles/configuring-issue-templates-for-your-repository)
- [关于使用查询参数自动处理问题和拉取请求](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)
- [创建问题](/articles/creating-an-issue)
