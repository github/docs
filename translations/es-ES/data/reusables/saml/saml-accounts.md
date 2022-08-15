Si configuras el SSO de SAML, los miembros de tu organización seguirán iniciando sesión en sus cuentas personales en {% data variables.product.prodname_dotcom_the_website %}. Cuando un miembro acede a recursos no públicos dentro de tu organización, {% data variables.product.prodname_dotcom %} redirige al miembro a tu IdP para autenticarse. Después de una autenticación exitosa, tu IdP los redirige de vuelta a {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta la sección "[Acerca de la autenticación con el inicio de sesión único de SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on)".

{% note %}

**Note:** SAML SSO does not replace the normal sign-in process for {% data variables.product.prodname_dotcom %}. Unless you use {% data variables.product.prodname_emus %}, members will continue to sign into their personal accounts on {% data variables.product.prodname_dotcom_the_website %}, and each personal account will be linked to an external identity in your IdP.

{% endnote %}