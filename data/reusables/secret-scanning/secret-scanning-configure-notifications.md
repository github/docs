When a new secret is detected, {% data variables.product.product_name %} notifies all users with access to security alerts for the repository according to their notification preferences. You will receive an email notification if:
- you are watching the repository.
- you have enabled notifications for "All Activity", or for custom "Security alerts" on the repository{% ifversion secret-scanning-notification-settings %}.
- in your notification settings, under "Subscriptions", then under "Watching", you have selected to receive notifications by email.{% endif %}

You will also be notified if you are the author of the commit that contains the secret and you are not ignoring the repository.