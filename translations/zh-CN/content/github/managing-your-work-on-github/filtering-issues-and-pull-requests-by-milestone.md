---
title: 按里程碑过滤议题和拉取请求
intro: '议题和拉取请求可基于与之关联的里程碑进行过滤。 [为议题或拉取请求关联了里程碑](/articles/associating-milestones-with-issues-and-pull-requests) 后，您可以根据里程碑查找项目。 在里程碑中，您可以排列议题和拉取请求的优先级。'
redirect_from:
  - /articles/filtering-issues-and-pull-requests-by-milestone
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

{% tip %}

**提示：**

- 如果要使用搜索栏过滤议题和拉取请求，您可以使用里程碑搜索语法。 对于名为 My Milestone 的里程碑，搜索语法为：`milestone:"My Milestone"`。
- 要清除过滤器选择，请单击 **Clear current search query, filters, and sorts（清除当前搜索查询、过滤和排序）**。
-  还可以使用 {% data variables.product.prodname_cli %} 过滤议题或拉取请求。 更多信息请参阅 {% data variables.product.prodname_cli %} 文档中的 "[`gh issue list`](https://cli.github.com/manual/gh_issue_list)" 或 "[`gh pr list`](https://cli.github.com/manual/gh_pr_list)"。

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
3. 选择 **Milestones（里程碑）**以查看仓库的所有可用里程碑列表。 ![里程碑按钮](/assets/images/help/issues/issues_milestone_button.png)
4. 从列表中选择您感兴趣的里程碑。 您可以从里程碑页面查看该里程碑的相关信息，包括与之关联的所有议题和拉取请求。 更多信息请参阅“[关于里程碑](/articles/about-milestones)”。

### 延伸阅读

- "[过滤议题和拉取请求](/articles/filtering-issues-and-pull-requests-by-labels)"
- "[排序议题和拉取请求](/articles/sorting-issues-and-pull-requests)"
- "[使用搜索过滤议题和拉取请求](/articles/using-search-to-filter-issues-and-pull-requests)"
- "[共享过滤](/articles/sharing-filters)"
- "[过滤项目板上的卡](/articles/filtering-cards-on-a-project-board)"
