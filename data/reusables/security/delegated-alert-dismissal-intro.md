Delegated alert dismissal lets you restrict which users can directly dismiss an alert. When the feature is enabled, users attempting to dismiss an alert will instead create a request for dismissal.

Enabling the feature automatically assigns organization owners and security managers with the permission to approve or deny dismissal requests for alerts. This permission is:

* "Review and manage {% data variables.product.prodname_code_scanning %} alert dismissal requests" permission for {% data variables.product.prodname_code_scanning %}.

* "Review and manage {% data variables.product.prodname_secret_scanning %} alert dismissal requests" permission for {% data variables.product.prodname_secret_scanning %}. This permission can also be applied to custom roles.

For more information about these permissions, see [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#permissions-for-organization-roles).

To learn more about the security manager role, see [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization).

>[!NOTE] The implementation of this approval process can potentially cause some friction, so it's important to ensure that the team of security managers has adequate coverage before proceeding.

Reviewers (security managers and organization owners):

* Get an email notification for requests. These users need to ensure that they can review these lists periodically, so that there is no backlog and that the process is smooth.
* Can process requests in a dedicated view in the "Security" tab of the organization. An alert will only be dismissed if the dismissal request is approved; otherwise, the alert will remain open.

Requesters will get an email notification with the decision as to whether the alert can be dismissed or not.
