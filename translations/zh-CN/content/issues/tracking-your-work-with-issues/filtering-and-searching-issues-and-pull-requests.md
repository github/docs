---
title: Filtering and searching issues and pull requests
intro: 'To find detailed information about a repository on {% data variables.product.product_name %}, you can filter, sort, and search issues and pull requests that are relevant to the repository.'
redirect_from:
  - /github/managing-your-work-on-github/finding-information-in-a-repository/filtering-issues-and-pull-requests-by-assignees
  - /articles/filtering-issues-and-pull-requests-by-assignees
  - /github/managing-your-work-on-github/filtering-issues-and-pull-requests-by-assignees
  - /github/managing-your-work-on-github/finding-information-in-a-repository/filtering-issues-and-pull-requests-by-labels
  - /articles/filtering-issues-and-pull-requests-by-labels
  - /github/managing-your-work-on-github/filtering-issues-and-pull-requests-by-labels
  - /github/managing-your-work-on-github/finding-information-in-a-repository/filtering-issues-and-pull-requests
  - /articles/filtering-issues-and-pull-requests
  - /github/managing-your-work-on-github/filtering-issues-and-pull-requests
  - /github/managing-your-work-on-github/finding-information-in-a-repository/filtering-pull-requests-by-review-status
  - /articles/filtering-pull-requests-by-review-status
  - /github/managing-your-work-on-github/filtering-pull-requests-by-review-status
  - /github/managing-your-work-on-github/finding-information-in-a-repository
  - /articles/finding-information-in-a-repository
  - /github/managing-your-work-on-github/finding-information-in-a-repository/sharing-filters
  - /articles/sharing-filters
  - /github/managing-your-work-on-github/sharing-filters
  - /github/managing-your-work-on-github/finding-information-in-a-repository/using-search-to-filter-issues-and-pull-requests
  - /articles/using-search-to-filter-issues-and-pull-requests
  - /github/managing-your-work-on-github/using-search-to-filter-issues-and-pull-requests
  - /github/managing-your-work-on-github/finding-information-in-a-repository/sorting-issues-and-pull-requests
  - /articles/sorting-issues-and-pull-requests
  - /github/managing-your-work-on-github/sorting-issues-and-pull-requests
  - /github/administering-a-repository/finding-information-in-a-repository
  - /github/administering-a-repository/finding-information-in-a-repository/filtering-issues-and-pull-requests
  - /github/administering-a-repository/finding-information-in-a-repository/filtering-issues-and-pull-requests-by-assignees
  - /github/administering-a-repository/finding-information-in-a-repository/filtering-issues-and-pull-requests-by-labels
  - /github/administering-a-repository/finding-information-in-a-repository/filtering-pull-requests-by-review-status
  - /github/administering-a-repository/finding-information-in-a-repository/sorting-issues-and-pull-requests
  - /github/administering-a-repository/finding-information-in-a-repository/using-search-to-filter-issues-and-pull-requests
  - /github/administering-a-repository/finding-information-in-a-repository/sharing-filters
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Issues
  - Pull requests
shortTitle: Filter and search
---

{% data reusables.cli.filter-issues-and-pull-requests-tip %}

## 过滤议题和拉取请求

议题和拉取请求带有一组默认过滤器，您可以应用这些过滤器来组织列表。

{% data reusables.search.requested_reviews_search %}

您可以过滤议题和拉取请求以查找：
- 所有打开的议题和拉取请求
- 您已创建的议题和拉取请求
- 分配给您的议题和拉取请求
- [**@提及**](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)您的议题和拉取请求

{% data reusables.cli.filter-issues-and-pull-requests-tip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
3. 单击 **Filters（过滤器）**以选择您感兴趣的过滤器类型。 ![使用过滤器下拉菜单](/assets/images/help/issues/issues_filter_dropdown.png)

## 按受理人过滤议题和拉取请求

Once you've [assigned an issue or pull request to someone](/articles/assigning-issues-and-pull-requests-to-other-github-users), you can find items based on who's working on them.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
3. 在右上角，选择 Assignee（受理人）下拉菜单。
4. Assignee（受理人）下拉菜单将列出对仓库有写入权限的每个人。 单击要查看项目的受理人用户名，或单击 **Assigned to nobody（未分配给任何人）**以查看未分配的议题。 ![使用受理人下拉菜单选项卡](/assets/images/help/issues/issues_assignee_dropdown.png)

{% tip %}

要清除过滤器选择，请单击 **Clear current search query, filters, and sorts（清除当前搜索查询、过滤和排序）**。

{% endtip %}

## 按标签过滤议题和拉取请求

Once you've [applied labels to an issue or pull request](/articles/applying-labels-to-issues-and-pull-requests), you can find items based on their labels.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.labels %}
4. 在标签列表中，单击标签以查看应用了该标签的议题和拉取请求。 ![仓库标签列表](/assets/images/help/issues/labels-page.png)

{% tip %}

**提示：**要清除过滤器选择，请单击 **Clear current search query, filters, and sorts（清除当前搜索查询、过滤和排序）**。

{% endtip %}

## 按审查状态过滤拉取请求

您可以使用过滤器按审查状态列出拉取请求，查找您已审查的拉取请求或其他人要求您审查的拉取请求。

您可以过滤仓库的拉取请求列表以查找：
- 尚未[审查](/articles/about-pull-request-reviews)的拉取请求
- [需要审查](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)后才能合并的拉取请求
- 审查者已批准的拉取请求
- 审查者要求更改的拉取请求
- Pull requests that you have reviewed{% ifversion fpt or ghae or ghes > 3.2 %}
- Pull requests that someone has asked you directly to review{% endif %}
- [有人要求您或您所属团队进行审查](/articles/requesting-a-pull-request-review)的拉取请求

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
3. 在右上角，选择 Reviews（审查）下拉菜单。 ![拉取请求列表上方过滤器菜单中的审查下拉菜单](/assets/images/help/pull_requests/reviews-filter-dropdown.png)
4. 选择一个过滤器以查找具有该过滤器状态的所有拉取请求。 ![审查下拉菜单中的过滤器列表](/assets/images/help/pull_requests/pr-review-filters.png)

## 使用搜索过滤议题和拉取请求

You can use advanced filters to search for issues and pull requests that meet specific criteria.

### Searching for issues and pull requests

{% include tool-switcher %}

{% webui %}

议题和拉取请求搜索栏可以定义您自己的自定义过滤器并按各种标准进行排序。 您可以在每个仓库的 **Issues（议题）**和 **Pull requests（拉取请求）**选项卡上以及[议题和拉取请求仪表板](/articles/viewing-all-of-your-issues-and-pull-requests)上找到搜索栏。

![议题和拉取请求搜索栏](/assets/images/help/issues/issues_search_bar.png)

{% tip %}

**提示：**{% data reusables.search.search_issues_and_pull_requests_shortcut %}

{% endtip %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

You can use the {% data variables.product.prodname_cli %} to search for issues or pull requests. Use the `gh issue list` or `gh pr list` subcommand along with the `--search` argument and a search query.

For example, you can list, in order of date created, all issues that have no assignee and that have the label `help wanted` or `bug`.

```shell
gh issue list --search 'no:assignee label:"help wanted",bug sort:created-asc'
```

You can also list all pull requests that mention the `octo-org/octo-team` team.

```shell
gh pr list --search "team:octo-org/octo-team"
```

{% endcli %}

### About search terms

使用议题和拉取请求搜索词，您可以：

- 按作者过滤议题和拉取请求：`state:open type:issue author:octocat`
- 过滤涉及但不一定[**@提及**](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)的特定人员的议题和拉取请求：`state:open type:issue involves:octocat`
- 按受理人过滤议题和拉取请求：`state:open type:issue assignee:octocat`
- 按标签过滤议题和拉取请求：`state:open type:issue label:"bug"`
- 使用 `-` before the term: `state:open type:issue -author:octocat` 过滤搜索词。

{% ifversion fpt or ghes > 3.2 or ghae-next %}
{% tip %}

**Tip:** You can filter issues and pull requests by label using logical OR or using logical AND.
- To filter issues using logical OR, use the comma syntax: `label:"bug","wip"`.
- To filter issues using logical AND, use separate label filters: `label:"bug" label:"wip"`.

{% endtip %}
{% endif %}

{% ifversion fpt or ghes or ghae %}
对于议题，您还可以使用搜索来：

- 通过关闭引用过滤链接到拉取请求的议题：`linked:pr`
{% endif %}

对于拉取请求，您还可以使用搜索来：
- 过滤[草稿](/articles/about-pull-requests#draft-pull-requests)拉取请求：`is:draft`
- 过滤尚未[审查](/articles/about-pull-request-reviews)的拉取请求：`state:open type:pr review:none`
- 过滤[需要审查](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)然后才能合并的拉取请求：`state:open type:pr review:required`
- 过滤审查者已批准的拉取请求：`state:open type:pr review:approved`
- 过滤审查者要求更改的拉取请求：`state:open type:pr review:changes_requested`
- 按[审查者](/articles/about-pull-request-reviews/)过滤拉取请求：`state:open type:pr reviewed-by:octocat`
- Filter pull requests by the specific user [requested for review](/articles/requesting-a-pull-request-review): `state:open type:pr review-requested:octocat`{% ifversion fpt or ghae or ghes > 3.2 %}
- Filter pull requests that someone has asked you directly to review: `state:open type:pr user-review-requested:@me`{% endif %}
- 按申请审查的团队过滤拉取请求：`state:open type:pr team-review-requested:github/atom`{% ifversion fpt or ghes or ghae %}
- 过滤链接到拉取请求可能关闭的议题的拉取请求：`linked:issue`{% endif %}

## 排序议题和拉取请求

可以排序过滤器以在特定时间段内提供更好的信息。

您可以按以下各项排序任何过滤的视图：

* 最新创建的议题或拉取请求
* 最早创建的议题或拉取请求
* 评论最多的议题或拉取请求
* 评论最少的议题或拉取请求
* 最新更新的议题或拉取请求
* 最早更新的议题或拉取请求
* 反应最多的议题或拉取请求

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
1. 在右上角，选择 Sort（排序）下拉菜单。 ![使用排序下拉菜单选项卡](/assets/images/help/issues/issues_sort_dropdown.png)

要清除您的排序选择，请单击 **Sort（排序）<**>**Newest（最新）**。


## 共享过滤器

当您过滤或排序议题和拉取请求时，浏览器的 URL 自动更新以匹配新视图。

您可以将议题生成的 URL 发送给任何用户，这些用户将能够看到与您所见相同的过滤视图。

例如，如果您过滤分配给 Hubot 的议题，然后对最早的开放议题进行排序，您的 URL 将更新为类似如下内容：

```
/issues?q=state:open+type:issue+assignee:hubot+sort:created-asc
```

## 延伸阅读

- "[Searching issues and pull requests](/articles/searching-issues)""
