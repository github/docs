---
title: Internal GitHub Apps
intro: 'Some {% data variables.product.prodname_github_apps %} are internal apps, owned by {% data variables.product.company_short %}, that are granted special capabilities.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Internal apps
---

Some {% data variables.product.prodname_github_apps %} are internal apps. These apps are owned by {% data variables.product.company_short %} and are granted special capabilities. For example, users can authorize these apps and use them to access data from an organization without requiring approval by the organization.

Some of these internal apps are automatically included with {% data variables.product.company_short %} and do not require user authorization. These apps will not appear in your list of authorized {% data variables.product.prodname_github_apps %} or in your list of installed {% data variables.product.prodname_github_apps %}.{% ifversion ghec %}{% data variables.product.prodname_emus %} are allowed to install these internal apps on their user account, while standard, unprivileged apps cannot be installed on {% data variables.product.prodname_emus %} user accounts.{% endif %}

These internal apps will appear in the user security log, but will not appear in organization{% ifversion ghes or ghec %} or enterprise{% endif %} audit logs. {% ifversion ghes or ghec %}For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log)," "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization)", and "[AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/about-the-audit-log-for-your-enterprise)."{% else %}For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log)" and "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization)."{% endif %}

These {% data variables.product.prodname_github_apps %} are:

* Actions
* Dependabot
* Git Src Migrator
* GitHub Advanced Security
* GitHub Classroom
* GitHub Codespaces
* GitHub Copilot Plugin
* GitHub Merge Queue
* GitHub Pages
* GitHub Project Automation
* GitHub Team Synchronization
* Microsoft Teams for GitHub
* OpenGraph (`custom-og-image`)
* Slack
