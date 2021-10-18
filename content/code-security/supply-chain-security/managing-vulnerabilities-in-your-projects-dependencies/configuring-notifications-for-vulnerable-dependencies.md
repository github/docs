---
title: Configuring notifications for vulnerable dependencies
shortTitle: Configuring notifications
intro: 'Optimize how you receive notifications about {% data variables.product.prodname_dependabot %} alerts.'
redirect_from:
  - /github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies
  - /code-security/supply-chain-security/configuring-notifications-for-vulnerable-dependencies
versions:
  fpt: '*'
  ghes: '>=3.0'
  ghae: issue-4864
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Alerts
  - Notifications
  - Vulnerabilities
  - Dependencies
  - Repositories
---
<!--For this article in earlier GHES versions, see /content/github/managing-security-vulnerabilities-->

## About notifications for vulnerable dependencies

When {% data variables.product.prodname_dependabot %} detects vulnerable dependencies in your repositories, we generate a {% data variables.product.prodname_dependabot %} alert and display it on the Security tab for the repository. {% data variables.product.product_name %} notifies the maintainers of affected repositories about the new alert according to their notification preferences.{% ifversion fpt or ghec %} {% data variables.product.prodname_dependabot %} is enabled by default on all public repositories. For {% data variables.product.prodname_dependabot_alerts %}, by default, you will receive {% data variables.product.prodname_dependabot_alerts %} by email, grouped by the specific vulnerability.
{% endif %} 

{% ifversion fpt or ghec %}If you're an organization owner, you can enable or disable {% data variables.product.prodname_dependabot_alerts %} for all repositories in your organization with one click. You can also set whether the detection of vulnerable dependencies will be enabled or disabled for newly-created repositories. For more information, see "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization#enabling-or-disabling-a-feature-for-all-new-repositories-when-they-are-added)."
{% endif %}

{% ifversion ghes or ghae-issue-4864 %}
By default, if your enterprise owner has configured email for notifications on your enterprise, you will receive {% data variables.product.prodname_dependabot_alerts %} by email.

Enterprise owners can also enable {% data variables.product.prodname_dependabot_alerts %} without notifications. For more information, see "[Enabling the dependency graph and {% data variables.product.prodname_dependabot_alerts %} on your enterprise account](/admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-the-dependency-graph-and-dependabot-alerts-on-your-enterprise-account)."
{% endif %}

## Configuring notifications for {% data variables.product.prodname_dependabot_alerts %}

{% ifversion fpt or ghes > 3.1 or ghec %}
When a new {% data variables.product.prodname_dependabot %} alert is detected, {% data variables.product.product_name %} notifies all users with access to {% data variables.product.prodname_dependabot_alerts %} for the repository according to their notification preferences. You will receive alerts if you are watching the repository, have enabled notifications for security alerts or for all the activity on the repository, and are not ignoring the repository. For more information, see "[Configuring notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository)."
{% endif %}

You can configure notification settings for yourself or your organization from the Manage notifications drop-down {% octicon "bell" aria-label="The notifications bell" %} shown at the top of each page. For more information, see "[Configuring notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-your-notification-settings)."

{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization2 %}
{% data reusables.notifications.vulnerable-dependency-notification-options %}

  ![{% data variables.product.prodname_dependabot_alerts %} options](/assets/images/help/notifications-v2/dependabot-alerts-options.png)

{% note %}

**Note:** You can filter your notifications on {% data variables.product.company_short %} to show {% data variables.product.prodname_dependabot %} alerts. For more information, see "[Managing notifications from your inbox](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#dependabot-custom-filters)."

{% endnote %}

{% data reusables.repositories.security-alerts-x-github-severity %} For more information, see "[Configuring notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications)."

## How to reduce the noise from notifications for vulnerable dependencies

If you are concerned about receiving too many notifications for {% data variables.product.prodname_dependabot_alerts %}, we recommend you opt into the weekly email digest, or turn off notifications while keeping {% data variables.product.prodname_dependabot_alerts %} enabled. You can still navigate to see your {% data variables.product.prodname_dependabot_alerts %} in your repository's Security tab. For more information, see "[Viewing and updating vulnerable dependencies in your repository](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)."

## Further reading

- "[Configuring notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)"
- "[Managing notifications from your inbox](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#supported-is-queries)"
