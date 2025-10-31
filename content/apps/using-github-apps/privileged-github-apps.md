---
title: Privileged GitHub Apps
intro: 'Some {% data variables.product.prodname_github_apps %} are privileged apps, owned by {% data variables.product.company_short %}, that are granted special capabilities.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Privileged apps
redirect_from: 
  - /apps/using-github-apps/internal-github-apps
---

Some {% data variables.product.prodname_github_apps %} are privileged apps. These apps are owned by {% data variables.product.company_short %} and are granted special capabilities. For example, users can authorize these apps and use them to access data from an organization without requiring approval by the organization.

Some of these privileged apps are automatically included with {% data variables.product.company_short %} and do not require user authorization. These apps will not appear in your list of authorized {% data variables.product.prodname_github_apps %} or in your list of installed {% data variables.product.prodname_github_apps %}.{% ifversion ghec %}{% data variables.product.prodname_emus %} are allowed to install these privileged apps on their user account, while standard, unprivileged apps cannot be installed on {% data variables.product.prodname_emus %} user accounts.{% endif %}

These privileged apps will appear in the user security log, but will not appear in organization{% ifversion ghes or ghec %} or enterprise{% endif %} audit logs. {% ifversion ghes or ghec %}For more information, see [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log), [AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization), and [AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/about-the-audit-log-for-your-enterprise).{% else %}For more information, see [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log) and [AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization).{% endif %}

These {% data variables.product.prodname_github_apps %} are:

* Actions
* {% data variables.product.prodname_dependabot %}
* Git Src Migrator
* {% data variables.product.prodname_GHAS %}
* {% data variables.product.prodname_classroom %}
* {% data variables.product.prodname_github_codespaces %}
* {% data variables.product.prodname_copilot %} Plugin
* {% data variables.product.github %} Merge Queue
* {% data variables.product.prodname_pages %}
* {% data variables.product.github %} Project Automation
* {% data variables.product.github %} Team Synchronization
* Microsoft Teams for {% data variables.product.github %}
* OpenGraph (`custom-og-image`)
* Slack
