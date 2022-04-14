## External groups

The external groups API allows you to view the external identity provider groups that are available to your organization and manage the connection between external groups and teams in your organization.

この API を使用するには、認証されたユーザーがチームメンテナまたは Team に関連づけられた Organization のコードオーナーである必要があります。

{% ifversion ghec %}
{% note %}

**ノート:**

- The external groups API is only available for organizations that are part of a enterprise using {% data variables.product.prodname_emus %}. For more information, see "[About Enterprise Managed Users](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)."
- If your organization uses team synchronization, you can use the Team Synchronization API. For more information, see "[Team synchronization API](#team-synchronization)."

{% endnote %}
{% endif %}