---
title: 更改拉取请求的基本分支
intro: '打开拉取请求后，您可以更改基本分支，以根据不同的分支比较拉取请求中的更改。'
redirect_from:
  - /articles/changing-the-base-branch-of-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% warning %}

**警告**：更改拉取请求的基本分支时，有些提交可能会从时间表中被删除。 审查评论也可能过时，因为评论引用的代码行可能不再是拉取请求中更改的一部分。

{% endwarning %}

{% data reusables.repositories.sidebar-pr %}
2. 在“Pull Requests（拉取请求）”列表中，单击要修改的拉取请求。
3. 在拉取请求的标题旁边，单击 **Edit（编辑）**。 ![拉取请求编辑按钮](/assets/images/help/pull_requests/pull-request-edit.png)
4. 在基础分支下拉菜单中，选择要[用于比较更改](/github/committing-changes-to-your-project/comparing-commits#comparing-branches)的基础分支。 ![基本分支下拉菜单 ](/assets/images/help/pull_requests/pull-request-edit-base-branch.png)
5. 阅读有关更改基本分支的信息，然后单击 **Change base（更改基本分支）**。 ![基本分支更改确认按钮 ](/assets/images/help/pull_requests/pull-request-base-branch-confirm.png)

{% tip %}

**Tip:** When you open a pull request, {% data variables.product.product_name %} will set the base to the commit that branch references. If the branch is updated in the future, {% data variables.product.product_name %} will not update the base branch's commit.

{% endtip %}

### 延伸阅读

- “[创建拉取请求](/articles/creating-a-pull-request)”
- "[关于拉取请求](/articles/about-pull-requests)"
- "[审查拉取请求中提议的更改](/articles/reviewing-proposed-changes-in-a-pull-request)"
