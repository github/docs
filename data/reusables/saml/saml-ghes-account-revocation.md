{% ifversion ghes %}

If you remove a user from your IdP, you must also manually suspend them. Otherwise, the account's owner can continue to authenticate using access tokens or SSH keys. For more information, see "[Suspending and unsuspending users](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users)".

{% endif %}
