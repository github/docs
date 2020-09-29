{% if currentVersion != "free-pro-team@latest" %}

{% warning %}

Si tu instancia de {% data variables.product.prodname_ghe_server %} tiene [habilitadas la sincronización de LDAP y la opción para sincronizar correos electrónicos](/enterprise/admin/authentication/using-ldap#enabling-ldap-sync), esta API estará inhabilitada y devolverá una respuesta `403`. Los usuarios administrados en LDAP no podrán agregar o borrar una dirección de correo electrónico a través de la API si tienen estas opciones habilitadas.

{% endwarning %}

{% endif %}
