---
title: 活动仪表板
intro: 'The Activity dashboard gives you an overview of all the activity in your enterprise.'
redirect_from:
  - /enterprise/admin/articles/activity-dashboard/
  - /enterprise/admin/installation/activity-dashboard
  - /enterprise/admin/user-management/activity-dashboard
versions:
  enterprise-server: '*'
  github-ae: '*'
---

活动仪表板提供以下活动数量的周图、月度图和年度图表：
- 新拉取请求
- 已合并拉取请求
- 新问题
- 已关闭问题
- 新问题评论
- 新仓库
- 新用户帐户
- 新组织
- 新团队

![活动仪表板](/assets/images/enterprise/activity/activity-dashboard-yearly.png)

{% if enterpriseServerVersions contains currentVersion %}
For more analytics based on data from
{% data variables.product.product_name %}, you can purchase {% data variables.product.prodname_insights %}. 更多信息请参阅“[关于 {% data variables.product.prodname_insights %}](/insights/installing-and-configuring-github-insights/about-github-insights)”。
{% endif %}

### 访问活动仪表板

1. 在任一页面顶部，单击 **Explore**。 ![Explore 选项卡](/assets/images/enterprise/settings/ent-new-explore.png)
2. 在右上角单击 **Activity**。 ![Activity 按钮](/assets/images/enterprise/activity/activity-button.png)
