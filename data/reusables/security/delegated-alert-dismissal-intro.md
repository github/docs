Delegated alert dismissal lets you restrict which users can directly dismiss an alert. When the feature is enabled:
* Users with write access to a repository must request to dismiss alerts in that repository.
* Organization owners and security managers can approve or deny dismissal requests, as well as dismiss alerts directly themselves.

You can also use custom roles with the following permissions to let other team members manage requests and dismiss alerts directly:

* For {% data variables.product.prodname_code_scanning %}: "Review {% data variables.product.prodname_code_scanning %} alert dismissal requests" and "Bypass {% data variables.product.prodname_code_scanning %} alert dismissal requests"
* For {% data variables.product.prodname_secret_scanning %}: "Review and manage {% data variables.product.prodname_secret_scanning %} alert dismissal requests"
* For {% data variables.product.prodname_dependabot %}: "Review {% data variables.product.prodname_dependabot %} alert dismissal requests" and "Bypass {% data variables.product.prodname_dependabot %} alert dismissal requests"

Reviewers are notified of dismissal requests via email, and can either approve the request to dismiss the alert, or deny the request to leave the alert open. After a request is reviewed, the requester is notified of the outcome via email.

>[!NOTE] The implementation of this approval process can potentially cause some friction, so it's important to ensure that the team of security managers has adequate coverage to review dismissal requests regularly before proceeding.
