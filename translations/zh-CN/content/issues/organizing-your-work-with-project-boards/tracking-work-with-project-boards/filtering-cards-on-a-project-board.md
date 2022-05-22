---
title: 过滤项目板上的卡
intro: 您可以过滤项目板上的卡以搜索特定卡或查看卡的子集。
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards/filtering-cards-on-a-project-board
  - /articles/filtering-cards-on-a-project-board
  - /github/managing-your-work-on-github/filtering-cards-on-a-project-board
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: 在板上筛选卡
---

{% data reusables.projects.project_boards_old %}

在卡上，您可以单击任意受理人、里程碑或标签，以便按该限定符过滤项目板。 要清除搜索，您可以再次单击相同的受理人、里程碑或标签。

也可使用每个项目板顶部的“Filter cards（过滤卡）”搜索栏来搜索卡。 您可以使用以下搜索限定符的任意组合来过滤卡，或者直接输入您要搜索的某些文本。

- 使用 `author:USERNAME` 按作者过滤卡
- 使用 `assignee:USERNAME` 或 `no:assignee` 按受理人过滤卡
- 使用 `label:LABEL`、`label:"MULTI-WORD LABEL NAME"` 或 `no:label`，按标签过滤卡。
- 使用 `milestone:MY-MILESTONE` 按里程碑过滤
- 使用 `state:open`、`state:closed` 或 `state:merged` 按状态过滤卡
- 使用 `review:none`、`review:required`、`review:approved` 或 `review:changes_requested` 按审查状态过滤
- 使用 `status:pending`、`status:success` 或 `status:failure` 按检查状态过滤
- 使用 `type:issue`、`type:pr` 或 `type:note` 按类型过滤卡
- 使用 `is:open`、`is:closed` 或 `is:merged` 和 `is:issue`、`is:pr` 或 `is:note` 按状态和类型过滤卡
- 使用 `linked:pr` 关闭引用，按链接到拉取请求的议题过滤卡{% ifversion fpt or ghes or ghae or ghec %}
- 使用 `repo:ORGANIZATION/REPOSITORY` 在组织范围的项目板中按仓库过滤卡{% endif %}

1. 导航到包含要过滤的卡的项目板。
2. 在项目卡列上方，单击“Filter cards（过滤卡）”搜索栏并键入搜索查询以过滤卡。 ![过滤卡搜索栏](/assets/images/help/projects/filter-card-search-bar.png)

{% tip %}

**提示：**您可以拖放过滤出的卡或使用键盘快捷键在各列之间移动它们。 {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

{% endtip %}

## 延伸阅读

- "[关于项目板](/articles/about-project-boards)"
- "[添加议题和拉取请求到项目板](/articles/adding-issues-and-pull-requests-to-a-project-board)"
- “[添加注释到项目板](/articles/adding-notes-to-a-project-board)”
