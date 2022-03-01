---
title: 为仓库创建拉取请求模板
intro: 将拉取请求模板添加到仓库后，项目贡献者会自动在拉取请求正文中看到模板的内容。
redirect_from:
  - /articles/creating-a-pull-request-template-for-your-repository
  - /github/building-a-strong-community/creating-a-pull-request-template-for-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: 创建 PR 模板
---

更多信息请参阅“[关于议题和拉取请求模板](/articles/about-issue-and-pull-request-templates)”。

您可以在任何支持的文件夹中创建 *PULL_REQUEST_TEMPLATE/* 子目录，以包含多个拉取请求模板，并使用 `template` 查询参数指定填充拉取请求正文的模板。 更多信息请参阅“[使用查询参数创建拉取请求](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/using-query-parameters-to-create-a-pull-request)”。

{% ifversion fpt or ghes or ghec %}

您可以为组织{% ifversion fpt or ghes or ghec %}或用户帐户{% endif %}创建默认的拉取请求模板。 更多信息请参阅“[创建默认社区健康文件](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)”。

{% endif %}

## 添加拉取请求模板

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. 在文件名字段中：
    -  要使拉取请求模板在存储库的根目录中可见，请将拉取请求模板命名为 `pull_request_template.md`。 ![根目录中的新拉取请求模板名称](/assets/images/help/repository/pr-template-file-name.png)
    - 要使拉取请求模板在仓库的 `docs` 目录中可见，请将拉取请求模板命名为 `docs/pull_request_template.md`。 ![Docs 目录中的新拉取请求模板](/assets/images/help/repository/pr-template-file-name-docs.png)
    - 要将文件存储在隐藏目录中，请将拉取请求模板命名为 `.github/pull_request_template.md`。 ![隐藏目录中的新拉取请求模板](/assets/images/help/repository/pr-template-hidden-directory.png)
    - 要创建多个拉取请求模板，并使用 `template` 查询参数指定填充拉取请求正文的模板，请输入 *.github/PULL_REQUEST_TEMPLATE/*，后接拉取请求模板的名称。 例如 `.github/PULL_REQUEST_TEMPLATE/pull_request_template.md`。 您也可以在根目录或 `docs/` 目录的 `PULL_REQUEST_TEMPLATE` 子目录中存储多个拉取请求模板。 更多信息请参阅“[关于使用查询参数自动化议题和拉取请求](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)”。 ![隐藏目录中新的多拉取请求模板](/assets/images/help/repository/pr-template-multiple-hidden-directory.png)
4. 在新文件的正文中，添加您的拉取请求模板。 这可能包括：
    - 对仓库中[相关议题的引用](/articles/basic-writing-and-formatting-syntax/#referencing-issues-and-pull-requests)。
    - 对拉取请求中所提议更改的说明。
    - [@提及](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)负责审查提议更改的人员或团队。
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %} 模板可供协作者用来合并到仓库的默认分支。
{% data reusables.files.propose_new_file %}

## 延伸阅读

- "[关于议题和拉取请求模板](/articles/about-issue-and-pull-request-templates)"
- "[关于使用查询参数自动化议题和拉取请求](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)"
- “[创建拉取请求](/articles/creating-a-pull-request)”
