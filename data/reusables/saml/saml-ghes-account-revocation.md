{% ifversion ghes %}

With JIT provisioning, if you remove a user from your IdP, you must also manually suspend the user's account on {% data variables.location.product_location %}. Otherwise, the account's owner can continue to authenticate using access tokens or SSH keys. For more information, see "[AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/suspending-and-unsuspending-users)".

{% endif %}
