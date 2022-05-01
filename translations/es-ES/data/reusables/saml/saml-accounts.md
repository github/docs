Si configuras el SSO de SAML, los miembros de tu organización seguirán ingresando en sus cuentas personales en {% data variables.product.prodname_dotcom_the_website %}. Cuando un miembro acceda a los recursos que no sean públicos dentro de tu organización y que utilicen el SSO de SAML, {% data variables.product.prodname_dotcom %} lo redireccionará a tu IdP para autenticarse. Después de autenticarse exitosamente, tu IdP redirecciona a este miembro a {% data variables.product.prodname_dotcom %}, en donde puede acceder a los recursos de tu organización.

{% note %}

**Nota:** Los miembros organizacionales pueden realizar operaciones de lectura tales como ver, clonar y bifurcar los recursos públicos que pertenecen a tu organización, incluso si no tienen una sesión de SAML válida.

{% endnote %}
