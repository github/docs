{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" %}
{% if currentVersion == "free-pro-team@latest"%}By default, you will receive notifications:{% endif %}{% if enterpriseServerVersions contains currentVersion and currentVersion gt "enterprise-server@3.1" %}By default, if your site administrator has configured email for notifications on your instance, you will receive {% data variables.product.prodname_dependabot_alerts %}:{% endif %}

- by email, an email is sent when {% data variables.product.prodname_dependabot %} is enabled for a repository, when a new manifest file is committed to the repository, and when a new vulnerability with a critical or high severity is found (**Email each time a vulnerability is found** option).
- in the user interface, a warning is shown in your repository's file and code views if there are any vulnerable dependencies (**UI alerts** option).
- on the command line, warnings are displayed as callbacks when you push to repositories with any vulnerable dependencies (**Command Line** option).
- in your inbox, as web notifications. A web notification is sent when {% data variables.product.prodname_dependabot %} is enabled for a repository, when a new manifest file is committed to the repository, and when a new vulnerability with a critical or high severity is found (**Web** option).
- on {% data variables.product.prodname_mobile %}, as web notifications. For more information, see "[Enabling push notifications with GitHub for mobile](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#enabling-push-notifications-with-github-for-mobile)."

{% note %}

**Note:** The email and web/{% data variables.product.prodname_mobile %} notifications are:

- _per repository_ when {% data variables.product.prodname_dependabot %} is enabled on the repository, or when a new manifest file is committed to the repository.

- _per organization_ when a new vulnerability is discovered.

{% endnote %}

You can customize the way you are notified about {% data variables.product.prodname_dependabot_alerts %}. For example, you can receive a weekly digest email summarizing alerts for up to 10 of your repositories using the **Email a digest summary of vulnerabilities** and **Weekly security email digest** options.
{% endif %}

{% if currentVersion == "enterprise-server@2.22" or currentVersion == "enterprise-server@3.0" or currentVersion == "enterprise-server@3.1" %}
By default, if your site administrator has configured email for notifications on your instance, you will receive {% data variables.product.prodname_dependabot_alerts %}:
- by email, an email is sent every time a vulnerability {% if currentVersion ver_gt "enterprise-server@2.23" %}with a critical or high severity {% endif %}is found (**Email each time a vulnerability is found** option)
- in the user interface, a warning is shown in your repository's file and code views if there are any vulnerable dependencies (**UI alerts** option)
- on the command line, warnings are displayed as callbacks when you push to repositories with any vulnerable dependencies (**Command Line** option)
- in your inbox, as web notifications {% if currentVersion ver_gt "enterprise-server@2.23" %}for new vulnerabilities with a critical or high severity {% endif %}(**Web** option)

You can customize the way you are notified about {% data variables.product.prodname_dependabot_alerts %}. For example, you can receive a weekly digest email summarizing alerts for up to 10 of your repositories using the **Email a digest summary of vulnerabilities** and **Weekly security email digest** options.
{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
By default, if your site administrator has configured email for notifications on your instance, you will receive security alerts:
- by email, an email is sent every time a vulnerability is found (**Email each time a vulnerability is found** option)
- in the user interface, as warnings in your repository's file and code views (**UI alerts** option)
- on the command line, as warnings that are displayed as callbacks when you push to repositories with vulnerabilities (**Command Line** option)
- in your inbox, as web notifications (**Web** option)

You can customize the way you are notified about security alerts. For example, you can receive a weekly digest email summarizing alerts for up to 10 of your repositories using the **Email a digest summary of vulnerabilities** and **Weekly security email digest** options.
{% endif %}
