Antes de habilitar la sincronización de equipos para Okta, tú o tu administrador de IdP deben:

- Configurar la integración con SAML, SSO y SCIM en tu organización utilizando Okta. Para obtener más información, consulta la sección "[Configurar el inicio de sesión único de SAML y SCIM utilizando Okta](/organizations/managing-saml-single-sign-on-for-your-organization/configuring-saml-single-sign-on-and-scim-using-okta)".
- Proporcionar la URL del inquilino para tu instancia de Okta.
- Generar un token de SSWS válido con permisos administrativos de solo lectura para tu instalación de Okta como usuario de servicio. Para obtener más información, consulta la sección [Crear el token](https://developer.okta.com/docs/guides/create-an-api-token/create-the-token/) y [Usuarios de servicio](https://help.okta.com/en/prod/Content/Topics/Adv_Server_Access/docs/service-users.htm) en la documentación de Okta.
