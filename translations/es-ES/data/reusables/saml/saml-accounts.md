Si configuras el SSO de SAML, los miembros de tu organización seguirán iniciando sesión en sus cuentas personales en {% data variables.product.prodname_dotcom_the_website %}. Cuando un miembro acede a recursos no públicos dentro de tu organización, {% data variables.product.prodname_dotcom %} redirige al miembro a tu IdP para autenticarse. Después de una autenticación exitosa, tu IdP los redirige de vuelta a {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta la sección "[Acerca de la autenticación con el inicio de sesión único de SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on)".

{% note %}

**Nota:** El SSO de SAML no reemplaza al proceso de inicio de sesión normal para {% data variables.product.prodname_dotcom %}. A menos de que utilices {% data variables.product.prodname_emus %}, los miembros seguirán iniciando sesión en sus cuenta spersonales de {% data variables.product.prodname_dotcom_the_website %} y cada cuenta personal se enlazará a una identidad externa en tu IdP.

{% endnote %}