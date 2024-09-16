---
title: Managing dormant users
redirect_from:
  - /enterprise/admin/articles/dormant-users
  - /enterprise/admin/articles/viewing-dormant-users
  - /enterprise/admin/articles/determining-whether-a-user-account-is-dormant
  - /enterprise/admin/user-management/managing-dormant-users
  - /admin/user-management/managing-dormant-users
  - /admin/user-management/managing-users-in-your-enterprise/managing-dormant-users
intro: '{% data reusables.enterprise-accounts.dormant-user-activity-threshold %}'
permissions: "{% ifversion ghec %}Enterprise owners can manage dormant users for an enterprise.{% elsif ghes %}Site administrators can manage dormant users on a {% data variables.product.product_name %} instance.{% endif %}"
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Enterprise
  - Licensing
---

## About dormant users

{% data reusables.enterprise-accounts.dormant-user-activity %}

> [!NOTE] You cannot mark a dormant user as active. To become active, a user must perform one of the activities listed above.

{% ifversion ghec %}
When assessing user dormancy, we only consider organizations, repositories, or sign-on events that are associated with the enterprise. For example, a user who has recently commented on an issue in a public repository outside of the enterprise may be considered dormant, while a user who has commented on an issue in a public repository within the enterprise will not be considered dormant.
{% endif %}

A user account is considered to be dormant if the user {% ifversion ghec %} hasn't performed any of the previous activities in the past 90 days.{% elsif ghes %} meets the following criteria:

* The user's account has existed for longer than the dormancy threshold {% data variables.location.product_location %}.
* The user hasn't performed any of the previous activities within the dormancy threshold.
* The user is not a site administrator for the instance.

You can customize the dormancy threshold for {% data variables.location.product_location %}.{% endif %}

Dormancy applies to both enterprise members and outside collaborators.

{% ifversion ghes %}

Dormant users are not automatically suspended. Consider suspending dormant users to release license seats. See "[AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/suspending-and-unsuspending-users)."

## Viewing dormant users

{% data reusables.enterprise-accounts.viewing-dormant-users %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
1. In the left sidebar, click **Dormant users**.
1. To suspend all the dormant users in this list, at the top of the page, click **Suspend all**.

## Determining whether a user account is dormant

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user %}
{% data reusables.enterprise_site_admin_settings.click-user %}
1. In the **User info** section, view the status of the user's account. Any users labeled with "{% octicon "hourglass" aria-hidden="true" %} Dormant" are dormant, and users labeled with "{% octicon "hourglass" aria-hidden="true" %} "Active" are not.

   ![Screenshot of the "User info" section of the site admin page for a user. The "User info" heading is highlighted in dark orange. Under the heading, the user is marked as active.](/assets/images/enterprise/stafftools/active-user.png)

## Configuring the dormancy threshold

{% data reusables.enterprise_site_admin_settings.dormancy-threshold %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.options-tab %}
1. Under "Dormancy threshold", select the dropdown menu, and click the desired dormancy threshold.

{% endif %}

{% ifversion ghec %}

## Downloading the dormant users report from your enterprise account

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.enterprise-accounts-compliance-tab %}
1. Scroll to "Reports".
1. Optionally, to generate a new report, next to "Dormant Users", click **New report**.
1. Under "Recent reports", next to the report you want to download, click {% octicon "download" aria-hidden="true" %} **Download**.
{% endif %}
