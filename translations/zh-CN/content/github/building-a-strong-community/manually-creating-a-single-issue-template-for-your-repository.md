---
title: 手动为仓库创建单一议题模板
intro: '将手动创建的议题模板添加到仓库后，项目贡献者会自动在议题正文中看到模板的内容。'
redirect_from:
  - /articles/creating-an-issue-template-for-your-repository/
  - /articles/manually-creating-a-single-issue-template-for-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data reusables.repositories.legacy-issue-template-tip %}

您可以在任何支持的文件夹中创建 *ISSUE_TEMPLATE/* 子目录，以包含多个议题模板，并且使用 `template` 查询参数指定填充议题正文的模板。 更多信息请参阅“[关于使用查询参数自动化议题和拉取请求](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)”。

您可以将 YAML 前页添加到每个议题模板以预填议题标题、自动添加标签和受理人，并且为模板提供名称和说明，人们在您的仓库中新建议题时就会从模板选择器中看到该名称和说明。

下面是 YAML 前页的示例。

```
---
name: Tracking issue
about: Use this template for tracking new features.
title: "[DATE]: [FEATURE NAME]"
labels: tracking issue, needs triage
assignees: octocat
---
```
{% note %}

**Note:** If a front matter value includes a YAML-reserved character such as `:` , you must put the whole value in quotes. For example, `":bug: Bug"` or `":new: triage needed, :bug: bug"`.

{% endnote %}

{% if currentVersion == "free-pro-team@latest" %}

{% data reusables.repositories.valid-community-issues %}

{% endif %}

{% data reusables.repositories.default-issue-templates %}

### 添加议题模板

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. 在文件名字段中：
    -  要使议题模板显示在仓库的根目录中，请输入 *issue_template* 的名称。 例如 `issue_template.md`。 ![根目录中的新议题模板名称](/assets/images/help/repository/issue-template-file-name.png)
    - 要使议题模板显示在仓库的 `docs` 目录中，请输入 *docs/*，后接 *issue_template* 的名称。 例如 `docs/issue_template.md`。 ![Docs 目录中的新议题模板](/assets/images/help/repository/issue-template-file-name-docs.png)
    - 要将文件存储在隐藏的目录中，请输入 *.github/*，后接 *issue_template* 的名称。 例如 `.github/issue_template.md`。 ![隐藏目录中的新议题模板](/assets/images/help/repository/issue-template-hidden-directory.png)
    - 要创建多个议题模板，并使用 `template` 查询参数指定填充议题正文的模板，请输入 *.github/ISSUE_TEMPLATE/*，后接议题模板的名称。 例如 `.github/ISSUE_TEMPLATE/issue_template.md`。 您也可以在根目录或 `docs/` 目录的 `ISSUE_TEMPLATE` 子目录中存储多个议题模板。 更多信息请参阅“[关于使用查询参数自动化议题和拉取请求](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)”。 ![隐藏目录中新的多议题模板](/assets/images/help/repository/issue-template-multiple-hidden-directory.png)
4. 在新文件的正文中，添加您的议题模板。 这可能包括：
    - YAML 前页
    - 预期行为和实际行为
    - 重现问题的步骤
    - 项目版本、操作系统或硬件等规范
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %} 模板可供协作者用来合并到仓库的默认分支。
{% data reusables.files.propose_new_file %}

### 延伸阅读

- "[关于议题和拉取请求模板](/articles/about-issue-and-pull-request-templates)"
- "[为仓库配置议题模板](/articles/configuring-issue-templates-for-your-repository)"
- "[关于使用查询参数自动化议题和拉取请求](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)"
- "[创建议题](/articles/creating-an-issue)"
