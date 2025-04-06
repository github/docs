If a contributor bypasses a push protection block for a secret, {% data variables.product.prodname_dotcom %}:
* Creates an alert in the **Security** tab of the repository.
* Adds the bypass event to the audit log.{% ifversion secret-scanning-push-protection-email %}
* Sends an email alert to organization or personal account owners, security managers, and repository administrators who are watching the repository, with a link to the secret and the reason why it was allowed.{% endif %}
