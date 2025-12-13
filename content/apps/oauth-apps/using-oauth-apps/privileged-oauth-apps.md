---
title: Privileged OAuth apps
intro: 'Some {% data variables.product.prodname_oauth_apps %} are privileged apps, owned by {% data variables.product.company_short %}, that are granted special capabilities.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Privileged apps
redirect_from: 
  - /apps/oauth-apps/using-oauth-apps/internal-oauth-apps
---

Some {% data variables.product.prodname_oauth_apps %} are privileged apps. These apps are owned by {% data variables.product.company_short %} and are granted special capabilities. For example, even if an organization owner has restricted access by {% data variables.product.prodname_oauth_apps %} to the organization's data, users can still authorize these apps and use them to access data from the organization.

Some of these privileged apps are automatically included with {% data variables.product.company_short %} and do not require user authorization. These apps will not appear in your list of authorized {% data variables.product.prodname_oauth_apps %}.

These privileged apps will appear in the user security log, but will not appear in organization{% ifversion ghes or ghec %} or enterprise{% endif %} audit logs. {% ifversion ghes or ghec %}For more information, see [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log), [AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization), and [AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/about-the-audit-log-for-your-enterprise).{% else %}For more information, see [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log) and [AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization).{% endif %}

These {% data variables.product.prodname_oauth_apps %} are :

* Gist
* Git Credential Manager
* {% data variables.product.prodname_android %}
* {% data variables.product.prodname_cli %}
* {% data variables.product.prodname_github_codespaces %} for JetBrains
* {% data variables.product.prodname_desktop %}
* {% data variables.product.prodname_education %}
* github-importer-production <!-- markdownlint-disable-line GHD034 -->
* {% data variables.product.prodname_ios %}
* {% data variables.product.company_short %} Support
* JetBrains IDE Integration
* {% data variables.product.prodname_vs %}
* {% data variables.product.prodname_vscode %}
