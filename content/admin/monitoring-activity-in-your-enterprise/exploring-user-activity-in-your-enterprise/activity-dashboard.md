---
title: Activity dashboard
intro: The Activity dashboard gives you an overview of all the activity in your enterprise.
redirect_from:
  - /enterprise/admin/articles/activity-dashboard
  - /enterprise/admin/installation/activity-dashboard
  - /enterprise/admin/user-management/activity-dashboard
  - /admin/user-management/activity-dashboard
  - /admin/user-management/monitoring-activity-in-your-enterprise/activity-dashboard
  - /admin/monitoring-activity-in-your-enterprise/exploring-user-activity/activity-dashboard
versions:
  ghes: '*'
topics:
  - Enterprise
---

The Activity dashboard provides weekly, monthly, and yearly graphs of the number of:

* New pull requests
* Merged pull requests
* New issues
* Closed issues
* New issue comments
* New repositories
* New user accounts
* New organizations
* New teams

## Accessing the Activity dashboard

{% ifversion global-nav-update %}
1. In the top-left corner of any page, select {% octicon "three-bars" aria-label="Open global navigation menu" %}, then click {% octicon "telescope" aria-hidden="true" %} **Explore**.

   ![Screenshot of the navigation bar on {% data variables.product.product_name %}. The "Open global navigation menu" icon is outlined in dark orange.](/assets/images/help/navigation/global-navigation-menu-icon.png)
{% else %}
1. At the top of any page, click **Explore**.

   ![Screenshot of the navigation bar at the top of the web UI for GitHub Enterprise Server. The word "Explore" is highlighted with an orange outline.](/assets/images/enterprise/settings/ent-new-explore.png)
{% endif %}
1. In the upper-right corner of the page, click {% octicon "pulse" aria-hidden="true" %} **Activity**.
1. To view activity over different periods, click **This week**, **This month**, or **This year**.

   ![Screenshot of the activity dashboard. A line graph compares the number of pull requests merged over this week and the previous week.](/assets/images/help/enterprises/activity-dashboard.png)
