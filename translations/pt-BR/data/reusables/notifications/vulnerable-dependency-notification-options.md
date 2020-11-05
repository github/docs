{% if currentVersion == "free-pro-team@latest" %}
By default, you will receive notification of new
{% data variables.product.prodname_dependabot_alerts %}:
- by email, an email is sent every time a vulnerability with a critical or high severity is found (**Email each time a vulnerability is found** option)
- in the user interface, a warning is shown in your repository's file and code views if there are any vulnerable dependencies (**UI alerts** option)
- on the command line, warnings are displayed as callbacks when you push to repositories with any vulnerable dependencies (**Command Line** option)
- in your inbox, as web notifications for new vulnerabilities with a critical or high severity (**Web** option)
You can customize the way you are notified about

{% data variables.product.prodname_dependabot_alerts %}. For example, you can receive a weekly digest email summarizing alerts for up to 10 of your repositories using the **Email a digest summary of vulnerabilities** and **Weekly security email digest** options.
{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" %}
Por padrão, se o administrador do site tiver configurado e-mail para notificações na sua instância, você receberá
{% data variables.product.prodname_dependabot_alerts %}:
- by email, an email is sent every time a vulnerability {% if currentVersion ver_gt "enterprise-server@2.23" %}with a critical or high severity {% endif %}is found (**Email each time a vulnerability is found** option)
- in the user interface, a warning is shown in your repository's file and code views if there are any vulnerable dependencies (**UI alerts** option)
- on the command line, warnings are displayed as callbacks when you push to repositories with any vulnerable dependencies (**Command Line** option)
- in your inbox, as web notifications {% if currentVersion ver_gt "enterprise-server@2.23" %}for new vulnerabilities with a critical or high severity {% endif %}(**Web** option)
You can customize the way you are notified about

{% data variables.product.prodname_dependabot_alerts %}. For example, you can receive a weekly digest email summarizing alerts for up to 10 of your repositories using the **Email a digest summary of vulnerabilities** and **Weekly security email digest** options.
{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
By default, if your site administrator has configured email for notifications on your instance, you will receive security alerts:
- by email, an email is sent every time a vulnerability is found (**Email each time a vulnerability is found** option)
- in the user interface, as warnings in your repository's file and code views (**UI alerts** option)
- on the command line, as warnings that are displayed as callbacks when you push to repositories with vulnerabilities (**Command Line** option)
- in your inbox, as web notifications (**Web** option)

You can customize the way you are notified about security alerts. For example, you can receive a weekly digest email summarizing alerts for up to 10 of your repositories using the **Email a digest summary of vulnerabilities** and **Weekly security email digest** options.
{% endif %}
