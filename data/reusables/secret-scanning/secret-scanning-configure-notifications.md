When a new secret is detected, {% data variables.product.product_name %} notifies all users with access to security alerts for the repository according to their notification preferences. These users include:
- Repository administrators
- Security managers
- Users with with custom roles with read/write access
- Organization owners and enterprise owners, if they are administrators of repositories where secrets were leaked

{% note %}

**Note:** Commit authors who've accidentally committed secrets will be notified, regardless of their notification preferences.

{% endnote %}

You will receive an email notification if:
- You are watching the repository.
- You have enabled notifications for "All Activity", or for custom "Security alerts" on the repository{% ifversion secret-scanning-notification-settings %}.
- In your notification settings, under "Subscriptions", then under "Watching", you have selected to receive notifications by email.{% endif %}
