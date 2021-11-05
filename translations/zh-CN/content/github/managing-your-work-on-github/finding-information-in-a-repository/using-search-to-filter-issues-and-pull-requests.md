---
title: 使用搜索过滤议题和拉取请求
intro: 每个议题和拉取请求视图都附带一个用于高级过滤器管理的搜索栏。
redirect_from:
  - /articles/using-search-to-filter-issues-and-pull-requests
  - /github/managing-your-work-on-github/using-search-to-filter-issues-and-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---
议题和拉取请求搜索栏可以定义您自己的自定义过滤器并按各种标准进行排序。 您可以在每个仓库的 **Issues（议题）**和 **Pull requests（拉取请求）**选项卡上以及[议题和拉取请求仪表板](/articles/viewing-all-of-your-issues-and-pull-requests)上找到搜索栏。

![议题和拉取请求搜索栏](/assets/images/help/issues/issues_search_bar.png)

{% tip %}

**提示：**{% data reusables.search.search_issues_and_pull_requests_shortcut %}

{% endtip %}

使用议题和拉取请求搜索词，您可以：

- 按作者过滤议题和拉取请求：`state:open type:issue author:octocat`
- 过滤涉及但不一定[**@提及**](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)的特定人员的议题和拉取请求：`state:open type:issue involves:octocat`
- 按受理人过滤议题和拉取请求：`state:open type:issue assignee:octocat`
- 按标签过滤议题和拉取请求：`state:open type:issue label:"bug"`
- 使用 `-` before the term: `state:open type:issue -author:octocat` 过滤搜索词。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
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
- 按[请求审查](/articles/requesting-a-pull-request-review)的特定用户过滤拉取请求：`state:open type:pr review-requested:octocat`
- 按申请审查的团队过滤拉取请求：`state:open type:pr team-review-requested:github/atom`{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
- 过滤链接到拉取请求可能关闭的议题的拉取请求：`linked:issue`{% endif %}

### 延伸阅读

- “[搜索议题](/articles/searching-issues)”
- "[过滤议题和拉取请求](/articles/filtering-issues-and-pull-requests-by-labels)"
- "[排序议题和拉取请求](/articles/sorting-issues-and-pull-requests)"
- "[共享过滤](/articles/sharing-filters)"
