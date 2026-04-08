* **{% data variables.product.prodname_secret_scanning_caps %}**: Detect secrets, for example keys and tokens, that have been checked into a repository and receive alerts.
* **Push protection**: Prevent secret leaks before they happen by blocking commits containing secrets.{% ifversion secret-scanning-ai-generic-secret-detection %}
* **{% data variables.secret-scanning.copilot-secret-scanning %}**: Leverage AI to detect unstructured credentials, such as passwords, that have been checked into a repository.{% endif %}
* **Custom patterns**: Detect and prevent leaks for organization-specific secrets.{% ifversion security-delegated-alert-dismissal %}
* **Delegated bypass for push protection** and **Delegated alert dismissal**:  Implement an approval process for better control over who in your enterprise can perform sensitive actions, supporting governance at scale.{% elsif ghes = 3.15 or ghes = 3.16 %}
* **Delegated bypass for push protection**: Implement controls over who can bypass push protection.{% endif %}{% ifversion security-campaigns-secrets %}
* **Security campaigns**: Remediate exposed secrets at scale by creating a campaign and collaborating to fix them.{% endif %}
* **Security overview**: Understand the distribution of risk across your organization.
