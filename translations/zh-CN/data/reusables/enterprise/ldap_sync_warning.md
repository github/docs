{% if currentVersion != "free-pro-team@latest" %}

{% warning %}

If your {% data variables.product.prodname_ghe_server %} instance has [LDAP Sync enabled and the option to synchronize emails enabled](/enterprise/admin/guides/user-management/using-ldap/#enabling-ldap-sync), this API is disabled and will return a `403` response. Users managed in LDAP won't be able to add or delete an email address via the API with these options enabled. 在启用了这些选项的情况下，在 LDAP 中管理的用户将无法通过 API 添加或删除电子邮件地址。

{% endwarning %}

{% endif %}
