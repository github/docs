---
title: 查看仓库中的分支
intro: '分支是 {% data variables.product.product_name %} 上协作的中心，查看分支的最佳途径是分支页面。'
redirect_from:
  - /articles/viewing-branches-in-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.navigate-to-branches %}
3. 使用页面顶部的导航可查看特定的分支列表：
    - **Your branches（您的分支）**：在您有推送权限的仓库中，**Yours（您的）**视图显示您已推送的所有分支，最近的分支最先显示。
    - **Active branches（活动分支）**：**Active（活动）**视图显示过去三个月内任何人提交的所有分支，按最近的提交最先显示的顺序排序分支。
    - **Stale branches（过时的分支）**：**Stale（过时）**视图显示过去三个月内没有人提交的所有分支，按最早的提交最先显示的顺序排序分支。 使用此列表可确定[要删除的分支](/articles/creating-and-deleting-branches-within-your-repository)。
    - **All branches（所有分支）**：**All（所有）**视图显示默认分支，后跟所有其他分支，按最近的提交最先显示的顺序排序分支。

![Atom 仓库的分支页面](/assets/images/help/branches/branches-overview-atom.png)

### 延伸阅读

- “[在仓库内创建和删除分支](/articles/creating-and-deleting-branches-within-your-repository)”
- "[删除未使用的分支](/articles/deleting-unused-branches)"
