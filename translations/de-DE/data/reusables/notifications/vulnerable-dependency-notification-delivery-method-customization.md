{% if currentVersion == "free-pro-team@latest" %}
You can choose the delivery method and frequency of notifications about
{% data variables.product.prodname_dependabot_alerts %} on repositories that you are watching or where you have subscribed to notifications for security alerts.
{% else %}
You can choose the delivery method for notifications about
{% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}security alerts{% endif %} on repositories that you are watching, as well as the frequency at which the notifications are sent to you.
{% endif %}
