{% if currentVersion == "free-pro-team@latest" %}
By default, you will receive
{% data variables.product.prodname_dependabot_alerts %}:
- by email, an email is sent every time a vulnerability is found (**Email each time a vulnerability is found** option)
- in the user interface, as warnings in your repository's file and code views (**UI alerts** option)
- on the command line, as warnings that are displayed as callbacks when you push to repositories with vulnerabilities (**Command Line** option)
- in your inbox, as web notifications (**Web** option)
You can customize the way you are notified about

{% data variables.product.prodname_dependabot_alerts %}. For example, you can receive a weekly digest email summarizing alerts for up to 10 of your repositories using the **Email a digest summary of vulnerabilities** and **Weekly security email digest** options.
{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" %}
By default, if your site administrator has configured email for notifications on your instance, you will receive
{% data variables.product.prodname_dependabot_alerts %}:
- by email, an email is sent every time a vulnerability is found (**Email each time a vulnerability is found** option)
- in the user interface, as warnings in your repository's file and code views (**UI alerts** option)
- on the command line, as warnings that are displayed as callbacks when you push to repositories with vulnerabilities (**Command Line** option)
- in your inbox, as web notifications (**Web** option)
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
