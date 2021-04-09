---
title: Activity dashboard
intro: The Activity dashboard gives you an overview of all the activity in your enterprise.
redirect_from:
  - /enterprise/admin/articles/activity-dashboard/
  - /enterprise/admin/installation/activity-dashboard
  - /enterprise/admin/user-management/activity-dashboard
versions:
  enterprise-server: '*'
  github-ae: '*'
topics:
  - 엔터프라이즈
---

The Activity dashboard provides weekly, monthly, and yearly graphs of the number of:
- New pull requests
- Merged pull requests
- New issues
- Closed issues
- New issue comments
- New repositories
- New user accounts
- New organizations
- New teams

![Activity dashboard](/assets/images/enterprise/activity/activity-dashboard-yearly.png)

{% if enterpriseServerVersions contains currentVersion %}
For more analytics based on data from
{% data variables.product.product_name %}, you can purchase {% data variables.product.prodname_insights %}. For more information, see "[About {% data variables.product.prodname_insights %}](/insights/installing-and-configuring-github-insights/about-github-insights)."
{% endif %}

### Accessing the Activity dashboard

1. At the top of any page, click **Explore**. ![Explore tab](/assets/images/enterprise/settings/ent-new-explore.png)
2. In the upper-right corner, click **Activity**. ![Activity button](/assets/images/enterprise/activity/activity-button.png)
