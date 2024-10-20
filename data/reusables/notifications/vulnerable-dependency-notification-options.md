{% ifversion fpt or ghec %}By default, you will receive notifications:{% endif %}{% ifversion ghes %}By default, if your enterprise owner has configured email for notifications on your instance, you will receive {% data variables.product.prodname_dependabot_alerts %}:{% endif %}

* In your inbox, as web notifications. A web notification is sent when {% data variables.product.prodname_dependabot %} is enabled for a repository, when a new manifest file is committed to the repository, and when a new vulnerability with a critical or high severity is found (**On {% data variables.product.prodname_dotcom %}** option).
* By email. An email is sent when {% data variables.product.prodname_dependabot %} is enabled for a repository, when a new manifest file is committed to the repository, and when a new vulnerability with a critical or high severity is found (**Email** option).
* On the command line. Warnings are displayed as callbacks when you push to repositories with any insecure dependencies (**CLI** option).
* On {% data variables.product.prodname_mobile %}, as web notifications. For more information, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#enabling-push-notifications-with-github-mobile)."

{% note %}

**Note:** The email and web/{% data variables.product.prodname_mobile %} notifications are:

* _Per repository_ when {% data variables.product.prodname_dependabot %} is enabled on the repository, or when a new manifest file is committed to the repository.

* _Per organization_ when a new vulnerability is discovered.

* Sent when a new vulnerability is discovered. {% data variables.product.prodname_dotcom %} doesn't send notifications when vulnerabilities are updated.

{% endnote %}

{% ifversion update-notification-settings-22 %}
You can customize the way you are notified about {% data variables.product.prodname_dependabot_alerts %}. For example, you can receive a daily or weekly digest email summarizing alerts for up to 10 of your repositories using the **Email weekly digest** option.
{% else %}
You can customize the way you are notified about {% data variables.product.prodname_dependabot_alerts %}. For example, you can receive a weekly digest email summarizing alerts for up to 10 of your repositories using the **Email a digest summary of vulnerabilities** and **Weekly security email digest** options.{% endif %}
