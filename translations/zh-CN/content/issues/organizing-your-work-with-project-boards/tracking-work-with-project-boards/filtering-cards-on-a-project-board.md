---
title: 'Filtering cards on a {% data variables.product.prodname_project_v1 %}'
intro: 'You can filter the cards on a {% data variables.projects.projects_v1_board %} to search for specific cards or view a subset of the cards.'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards/filtering-cards-on-a-project-board
  - /articles/filtering-cards-on-a-project-board
  - /github/managing-your-work-on-github/filtering-cards-on-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Filter cards on {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

On a card, you can click any assignee, milestone, or label to filter the {% data variables.projects.projects_v1_board %} by that qualifier. 要清除搜索，您可以再次单击相同的受理人、里程碑或标签。

You can also use the "Filter cards" search bar at the top of each {% data variables.projects.projects_v1_board %} to search for cards. 您可以使用以下搜索限定符的任意组合来过滤卡，或者直接输入您要搜索的某些文本。

- 使用 `author:USERNAME` 按作者过滤卡
- 使用 `assignee:USERNAME` 或 `no:assignee` 按受理人过滤卡
- 使用 `label:LABEL`、`label:"MULTI-WORD LABEL NAME"` 或 `no:label`，按标签过滤卡。
- 使用 `milestone:MY-MILESTONE` 按里程碑过滤
- 使用 `state:open`、`state:closed` 或 `state:merged` 按状态过滤卡
- 使用 `review:none`、`review:required`、`review:approved` 或 `review:changes_requested` 按审查状态过滤
- 使用 `status:pending`、`status:success` 或 `status:failure` 按检查状态过滤
- 使用 `type:issue`、`type:pr` 或 `type:note` 按类型过滤卡
- 使用 `is:open`、`is:closed` 或 `is:merged` 和 `is:issue`、`is:pr` 或 `is:note` 按状态和类型过滤卡
- 使用 `linked:pr`，按通过结束引用链接到拉取请求的问题筛选卡片
- Filter cards by repository in an organization-wide {% data variables.projects.projects_v1_board %} using `repo:ORGANIZATION/REPOSITORY`

1. Navigate to the {% data variables.projects.projects_v1_board %} that contains the cards you want to filter.
2. 在项目卡列上方，单击“Filter cards（过滤卡）”搜索栏并键入搜索查询以过滤卡。 ![过滤卡搜索栏](/assets/images/help/projects/filter-card-search-bar.png)

{% tip %}

**提示：**您可以拖放过滤出的卡或使用键盘快捷键在各列之间移动它们。 {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

{% endtip %}

## 延伸阅读

- "[关于 {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards)"
- "[Adding issues and pull requests to a {% data variables.product.prodname_project_v1 %}](/articles/adding-issues-and-pull-requests-to-a-project-board)"
- "[Adding notes to a {% data variables.product.prodname_project_v1 %}](/articles/adding-notes-to-a-project-board)"
