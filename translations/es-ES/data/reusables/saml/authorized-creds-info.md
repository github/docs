Antes de que puedas autorizar un token de acceso personal o llave SSH, debes haber vinculado una identidad de SAML. Si eres miembro de una organización en donde está habilitado el SSO de SAML, puedes crear una identidad vinculada autenticándote en tu organización con tu IdP por lo menos una vez. Para obtener más información, consulta la sección "[Acerca de la autenticación con el inicio de sesión único de SAML](/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on)".

After you authorize a personal access token or SSH key. El token o llave permanecerá autorizado hasta que se revoque en una de estas formas.
- Un propietario de la organización revoca la autorización.
- Se te elimina de la organización.
- Se editan los alcances en un token de acceso personal o este se regenera.
- The personal access token expired as defined during creation.
