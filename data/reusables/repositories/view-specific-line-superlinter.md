{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
1. Optionally, to get a link to a specific line in the logs, click on the step's line number. You can then copy the link from the address bar of your web browser.
  {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
  ![Button to copy link](/assets/images/help/repository/copy-link-button-updated-2.png)
  {% else %}
  ![Button to copy link](/assets/images/help/repository/copy-link-button-updated.png)
  {% endif %}
{% else %}
1. Optionally, to get a link to a specific line in the logs, click on the step's line number. You can then copy the link from the address bar of your web browser.
  ![Button to copy link](/assets/images/help/repository/copy-link-button.png)
{% endif %}