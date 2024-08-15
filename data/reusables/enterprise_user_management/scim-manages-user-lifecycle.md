With SCIM, you manage the lifecycle of user accounts from your IdP:

* {% ifversion ghec %}After you configure provisioning for {% data variables.product.prodname_emus %}, your IdP uses SCIM to provision user accounts on {% data variables.location.product_location %} and add the accounts to your enterprise.{% else %}When you provision a new user, your IdP will prompt {% data variables.location.product_location %} to create an account and send an onboarding email to the user.{% endif %} If you assign a group to the application in your IdP, your IdP will provision accounts for all members of the group.
* When you update information associated with a user's identity on your IdP, your IdP will update the user's account on {% data variables.product.prodname_dotcom %}.
* When you unassign the user from the IdP application or deactivate a user's account on your IdP, your IdP will communicate with {% data variables.product.prodname_dotcom %} to invalidate any sessions and disable the member's account. The disabled account's information is maintained and their username is changed to a hash of their original username{% ifversion ghec %} with the short code appended{% endif %}.
* If you reassign a user to the IdP application or reactivate their account on your IdP, the user account will be reactivated, and the username will be restored.

{% ifversion ghec or ghes > 3.13 %}
To configure team and organization membership, repository access, and permissions on {% data variables.product.product_name %}, you can use groups on your IdP. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/managing-team-memberships-with-identity-provider-groups)."
{% endif %}
