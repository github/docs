When a contributor bypasses a push protection block, {% data variables.product.prodname_dotcom %}:
* Creates an alert in the **{% data variables.product.prodname_security_and_quality_tab %}** tab of the repository, organization, and enterprise
* Adds the bypass event to the audit log
* Sends an email alert to personal account, organization, and enterprise owners, security managers, and repository administrators who are watching the repository, with a link to the secret and the reason it was allowed
