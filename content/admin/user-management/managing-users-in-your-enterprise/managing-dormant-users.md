---
title: Managing dormant users
redirect_from:
  - /enterprise/admin/articles/dormant-users
  - /enterprise/admin/articles/viewing-dormant-users
  - /enterprise/admin/articles/determining-whether-a-user-account-is-dormant
  - /enterprise/admin/user-management/managing-dormant-users
  - /admin/user-management/managing-dormant-users
intro: '{% data reusables.enterprise-accounts.dormant-user-activity-threshold %}'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Accounts
  - Enterprise
  - Licensing
---

{% ifversion ghec %}
{% data reusables.enterprise-accounts.dormant-user-release-phase %}
{% endif %}

## About dormant users

{% data reusables.enterprise-accounts.dormant-user-activity %}

{% ifversion ghes or ghae%}
## Viewing dormant users

{% data reusables.enterprise-accounts.viewing-dormant-users %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
3. In the left sidebar, click **Dormant users**.
![Dormant users tab](/assets/images/enterprise/site-admin-settings/dormant-users-tab.png){% ifversion ghes %}
4. To suspend all the dormant users in this list, at the top of the page, click **Suspend all**.
![Suspend all button](/assets/images/enterprise/site-admin-settings/suspend-all.png){% endif %}

## Determining whether a user account is dormant

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user %}
{% data reusables.enterprise_site_admin_settings.click-user %}
5. In the **User info** section, a red dot with the word "Dormant" indicates the user account is dormant, and a green dot with the word "Active" indicates the user account is active.
![Dormant user account](/assets/images/enterprise/stafftools/dormant-user.png)
![Active user account](/assets/images/enterprise/stafftools/active-user.png)

## Configuring the dormancy threshold

{% data reusables.enterprise_site_admin_settings.dormancy-threshold %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.options-tab %}
4. Under "Dormancy threshold", use the drop-down menu, and click the desired dormancy threshold.
![The Dormancy threshold drop-down menu](/assets/images/enterprise/site-admin-settings/dormancy-threshold-menu.png)

{% endif %}

{% ifversion ghec %}
## Downloading the dormant users report from your enterprise account

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.enterprise-accounts-compliance-tab %}
1. To download your Dormant Users (beta) report as a CSV file, under "Other", click {% octicon "download" aria-label="The Download icon" %} **Download**.
  ![Download button under "Other" on the Compliance page](/assets/images/help/business-accounts/dormant-users-download-button.png)

{% tip %}

**Tip:**
For the purposes of assessing user dormancy, user activity is scoped to include only user activity associated with organizations, repositories, or sign-on events that are associated with the enterprise. For example, if a user has recently commented on an issue in a public repository not associated with the enterprise, they may be considered dormant. However, if they have recently commented on an issue in a public repository associated with an organization in your enterprise, they will not be considered dormant and will not appear in the Dormant User report.

In the case of web sign-on events, only sign-on events through via an SSO domain associated with your enterprise are considered user activity associated with the enterprise.

{% endtip %}

{% endif %}
