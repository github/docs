{% ifversion ghes %}

If you remove a user from your IdP, you must also manually suspend them. Otherwise, the account's owner can continue to authenticate using access tokens or SSH keys. 更多信息请参阅“[挂起和取消挂起用户](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users)”。

{% endif %}