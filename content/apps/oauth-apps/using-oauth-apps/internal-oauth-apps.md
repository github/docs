---
title: Internal OAuth apps
intro: 'Some {% data variables.product.prodname_oauth_apps %} are internal apps, owned by {% data variables.product.company_short %}, that are granted special capabilities.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Internal apps
---

Some {% data variables.product.prodname_oauth_apps %} are internal apps. These apps are owned by {% data variables.product.company_short %} and are granted special capabilities. For example, even if an organization owner has restricted access by {% data variables.product.prodname_oauth_apps %} to the organization's data, users can still authorize these apps and use them to access data from the organization.

Some of these internal apps are automatically included with {% data variables.product.company_short %} and do not require user authorization. These apps will not appear in your list of authorized {% data variables.product.prodname_oauth_apps %}.

These internal apps will appear in the user security log, but will not appear in organization{% ifversion ghes or ghec %} or enterprise{% endif %} audit logs. {% ifversion ghes or ghec %}For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log)," "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization)", and "[AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/about-the-audit-log-for-your-enterprise)."{% else %}For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log)" and "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization)."{% endif %}

These {% data variables.product.prodname_oauth_apps %} are :

* Gist
* Git Credential Manager
* GitHub Android
* GitHub CLI
* GitHub Codespaces for JetBrains
* GitHub Desktop
* GitHub Education
* github-importer-production
* GitHub iOS
* GitHub Support
* JetBrains IDE Integration
* Visual Studio
* Visual Studio Code
