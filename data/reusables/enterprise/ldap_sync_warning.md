{% if currentVersion != "free-pro-team@latest" %}

{% warning %}

If your {% data variables.product.prodname_ghe_server %} instance has [LDAP Sync enabled and the option to synchronize emails enabled](/enterprise/admin/authentication/using-ldap#enabling-ldap-sync), this API is disabled and will return a `403` response. Users managed in LDAP won't be able to add or delete an email address via the API with these options enabled.

{% endwarning %}

{% endif %}
