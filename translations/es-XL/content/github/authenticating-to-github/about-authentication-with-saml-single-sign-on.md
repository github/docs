---
title: Acerca de la autenticación con el inicio de sesión único de SAML
intro: 'Puedes acceder a una organización que usa inicio de sesión único (SSO) de SAML mediante la autenticación con un proveedor de identidad (IdP). Para autenticar con la API o Git en la linea de comandos cuando una organización impone SAML SSO, debe autorizar a tu token de acceso personal o llave de SSH.'
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/about-authentication-with-saml-single-sign-on
versions:
  free-pro-team: '*'
---

{% data reusables.saml.dotcom-saml-explanation %} Los propietarios de la organización pueden invitar a tu cuenta de usuario en {% data variables.product.prodname_dotcom %} para unirse a la organización que utiliza SAML SSO, lo cual te permite contribuir con ella y mantener tu identidad actual y las contribuciones con {% data variables.product.prodname_dotcom %}.

Cuando accedes a recurso dentro de la organización que utiliza SAML SSO, , {% data variables.product.prodname_dotcom %} te redirigirá a el SAML IdP de la organización para autenticarte. Después de que te autentiques exitosamente con tu cuenta en el IdP, este te redirigirá de vuelta a {% data variables.product.prodname_dotcom %}, en donde podrás acceder a los recursos de la organización.

{% data reusables.saml.outside-collaborators-exemption %}

Si te has autenticado recientemente con tu SAML IdP de la organización en tu navegador, estás autorizado automáticamente cuando accedas a la {% data variables.product.prodname_dotcom %} organización que utiliza SAML SSO. Si no te has autenticado recientemente con el SAML IdP de tu organización en tu navegador, debes hacerlo en el SAML IdP antes de acceder a la organización.

Te debes autenticar frecuentemente con tu SAML IdP para acceder a los recursos de la organización en {% data variables.product.prodname_dotcom %}. Tu IdP especifica la duración de este período de inicio de sesión y, generalmente, es de 24 horas. Este requisito de inicio de sesión periódico limita la duración del acceso y requiere que te vuelvas a identificar para continuar. Puedes ver y administrar tus sesiones SAML activas en tus parámetros de seguridad. Para obtener más información, consulta "[Ver y administrar tus sesiones de SAML activas](/articles/viewing-and-managing-your-active-saml-sessions)".

Para usar la API o Git en la línea de comandos para acceder a contenido protegido en una organización que usa SAML SSO, necesitarás usar un token de acceso personal autorizado a través de HTTPS o una clave SSH autorizada. Los tokens de acceso {% data variables.product.prodname_oauth_app %} están autorizados por defecto.

Si no tienes un token de acceso personal ni una clave SSH, puedes crear un token de acceso personal para la línea de comandos o generar una clave SSH nueva. Para obtener más información, consulta la sección "[Crear un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)" o "[Generar una nueva llave SSH y añadirla al agente de ssh](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)".

Para usar un token de acceso personal o una clave SSH nuevos o existentes con una organización que implementa SAML SSO, necesitarás autorizar el token o autorizar la clave SSH para usar con una organización de SAML SSO. Para obtener más información, consulta "[Autorizar un token de acceso personal para utilizarlo con el inicio de sesión único de SAML](/articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)" o "[Autorizar una llave SSH para su uso con el inicio de sesión único de SAML](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)."

Debes tener una sesión activa de SAML cada que autorices un {% data variables.product.prodname_oauth_app %}.

### Leer más

- "[Acerca de la administración de accesos e identidades con el inicio de sesión único de SAML](/github/setting-up-and-managing-organizations-and-teams/about-identity-and-access-management-with-saml-single-sign-on)"
