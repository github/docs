---
title: Inicializar GitHub AE
intro: 'Para poner a tu empresa lista para operar, puedes completar la configuración inicial de {% data variables.product.product_name %}.'
versions:
  github-ae: '*'
---

### Acerca de la inicialización

Antes de que puedas inicializar tue mpresa, debes comprar {% data variables.product.product_name %}. Para obtener más información, contacta a {% data variables.contact.contact_enterprise_sales %}.

Después de haber comprado {% data variables.product.product_name %}, te pediremos que proporciones una dirección de correo electrónico y nombre de usuario de la persona que desea inicializar la empresa. Tu administrador de cuenta técnico dedicado en {% data variables.contact.enterprise_support %} creará una cuenta para el propietario de la empresa y le enviará un correo electrónico para ingresar en {% data variables.product.product_name %} y completar la inicialización. Asegúrate de que la información que proporciones empate en el IdP con aquella de quien se pretende sea el propietario. Para obtener más información acerca de los propietarios de las empresas, consulta la sección "[Roles en una empresa](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise#enterprise-owner)".

Durante la inicialización, el propietario de la empresa nombrará a tu empresa, configurará el SSO de SAML, creará políticas para todas las organizaciones dentro de la empresa y configurará un contacto de soporte para tus usuarios.

### Prerrequisitos

{% note %}

**Nota**: Antes de que comiences la inicialización, alamacena el nombre de usuario y contraseña iniciales para {% data variables.product.prodname_ghe_managed %} de forma segura en un administrador de contraseñas. {% data reusables.saml.contact-support-if-your-idp-is-unavailable %}

{% endnote %}

1. Para inicializar {% data variables.product.product_location %}, debes tener un proveedor de identiddad (IdP) de SAML. {% data reusables.saml.ae-uses-saml-sso %} Para conectar tu IdP a tu empresa durante la inicialización, debes tener tu URL de ID de entidad (SSO) del IdP, URL de ID emisora, y certificado de firma público (cifrado en Base64). Para obtener más información, consulta la sección "[Acerca de la administración de accesos e identidades para tu empresa](/admin/authentication/about-identity-and-access-management-for-your-enterprise)".

    {% note %}

    **Nota**: {% data reusables.saml.create-a-machine-user %}

    {% endnote %}

2. {% data reusables.saml.assert-the-administrator-attribute %}

### Iniciar sesión y nombrar a tu empresa

1. Sigue las instrucciones en tu correo electrónico de bienvenida para llegar a tu empresa.
2. Teclea tus credenciales debajo de "Cambiar contraseña", luego da clic en **Cambiar contraseña**.
3. Debajo de "¿Cómo te gustaría llamar a tu cuenta empresarial?", teclea el nombre de la empresa y luego da clic en **Guardar y continuar**. ![Botón de "Guardar y continuar" para nombrar a una empresa](/assets/images/enterprise/configuration/ae-enterprise-configuration.png)

### Conectar tu IdP a tu empresa

Para configurar la autenticación para {% data variables.product.product_name %}, debes proporcionar a {% data variables.product.product_name %} los detalles de tu IdP de SAML. {% data variables.product.company_short %} te recomienda utilizar Azure AD como tu IdP. Para obtener más información, consulta la sección "[Configurar la autenticación y el aprovisionamiento con tu proveedor de identidad](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider)".

1. A la derecha de "Configurar tu proveedor de identidad", da clic en **Configurar**. ![Botón de "Configurar" para una configuración de IdP](/assets/images/enterprise/configuration/ae-idp-configure.png)
1. Debajo de "URL de ingreso", copia y pega la URL de tu IdP de SAML. ![Campo de texto para la URL de ingreso del IdP de SAML](/assets/images/enterprise/configuration/ae-idp-sign-on-url.png)
1. Debajo de "Emisor", copiay pega la URL emisora para tu IdP de SAML. ![Campo de texto para la URL del emisor del IdP de SAML](/assets/images/enterprise/configuration/ae-idp-issuer-url.png)
1. Debajo de "Certificado público", copia y pega el certificado público para tu IdP de SAML. ![Campo de texto para el certificado público del IdP de SAML](/assets/images/enterprise/configuration/ae-idp-public-certificate.png)
1. Da clic en **Probar la configuración de SAML** para garantizar que la información que ingresaste sea correcta. ![Botón de "Probar la configuración de SAML"](/assets/images/enterprise/configuration/ae-test-saml-configuration.png)
1. Haz clic en **Save ** (guardar). ![Botón de "Guardar" para la configuración del IdP](/assets/images/enterprise/configuration/ae-save.png)

### Configurar las políticas de tu empresa

El configurar políticas pondrá limitaciones para la administración de repositorios y organizaciones en tu empresa. Estas pueden volver a configurarse después del proceso de inicialización.

1. A la derecha de "Configurar tus políticas empresariales", da clic en **Configurar**. ![Botón de "Configurar" para la configuración de políticas](/assets/images/enterprise/configuration/ae-policies-configure.png)
2. Debajo de "Permisos Predeterminados de los Repositorios", utiliza el menú desplegable y da clci en un nivel de permisos predeterminado para los repositorios de tu empresa. Si alguien tiene varios medios de acceso a una organización, ya sea indiviudalmente, a través de un equipo, o como un miembro de la misma, el permiso más alto anulará los permisos más bajos. Opcionalmente, para permitir que las organizaciones en tu empresa configuren sus permisos predeterminados para los repositorios, da clic en **Sin políticas** ![Menú desplegable para las opciones de permisos predeterminados del repositorio](/assets/images/enterprise/configuration/ae-repository-permissions-menu.png)
3. Debajo de "Creación de repositorios", elige si quieres permitir que los miembros creen repositorios o no. Opcionalmente, para permitir que las organizaciones dentro de tu empresa configuren los permisos, da clic en **Sin políticas**. ![Botón de "Los miembros pueden crear repositorios" para la configuración de las políticas empresariales](/assets/images/enterprise/configuration/ae-repository-creation-permissions.png)
4. Debajo de "Bifurcación de repositorios", elige si quieres permitir la bifurcación de repositorios privados e internos. Opcionalmente, para permitir que las organizaciones de tu empresa configuren los permisos, da clic en **Sin políticas** ![Menú desplegable para las opciones de permisos de bifurcación de repositorios](/assets/images/enterprise/configuration/ae-repository-forking-menu.png)
5. Debajo de "invitaciones a los repositorios", elige si los miembros o propietarios de la organización pueden invitar colaboradores a los repositorios. Opcionalmente, para permitir que las organizaciones de tu empresa configuren los permisos, da clic en **Sin políticas** ![Menú desplegable para las opciones de los permisos de invitación a los repositorios](/assets/images/enterprise/configuration/ae-repository-invitations-menu.png)
6. Debajo de "Visibilidad predeterminada de los repositorios", utiliza el menú desplegable y da clic en el ajuste de visibilidad predeterminada para los repositorios nuevos. ![Menú desplegable para las opciones de visibilidad predeterminadas de los repositorios](/assets/images/enterprise/configuration/ae-repository-visibility-menu.png)
7. Debajo de "Los usuarios pueden crear organizaciones", utiliza el menú desplegable para habilitar o inhabilitar el acceso para la creación de organizaciones para los miembros de la empresa. ![Menú desplegable para las opciones de permisos de creación en las organizaciones](/assets/images/enterprise/configuration/ae-organization-creation-permissions-menu.png)
8. Debajo de "subidas forzadas", utiliza el menú desplegable y elige si quieres permitir o bloquear las subidas forzadas. ![Menú desplegable para las opciones de configuración de subidas forzadas](/assets/images/enterprise/configuration/ae-force-pushes-configuration-menu.png)
9. Debajo de "Acceso SSH a Git", utiliza el menú desplegable y elige si quieres habilitar el acceso por SSH a Git para todos los repositorios en la empresa. ![Menú desplegable para las opciones de acceso SSH a Git](/assets/images/enterprise/configuration/ae-git-ssh-access-menu.png)
10. Haz clic en **Save (Guardar)** ![Botón de "Guardar" para la configuración de políticas empresariales](/assets/images/enterprise/configuration/ae-save.png)
11. Opcionalmente, para restablecer todas las selecciones, da clic en "Restablecer a las políticas predeterminadas". ![Enlace para restablecer todas las políticas predeterminadas](/assets/images/enterprise/configuration/ae-reset-default-options.png)

### Configurar tu contacto de soporte interno

Puedes configurar el método que tus usuarios utilizarán para contactar a tu equipo de soporte interno. Esto puede volver a configurarse después del proceso de inicialización.

1. En la parte derecha de "Contacto de soporte interno", da clic en **Configurar**. ![Botón de "Configurar" para la configuración del contacto de soporte interno](/assets/images/enterprise/configuration/ae-support-configure.png)
2. Debajo de "Contacto de soporte interno", selecciona el método para que los usuarios de tu empresa contacten a soporte, a través de una URL o de una dirección de correo electrónico. Posteriormente, teclea la información de contacto para soporte. ![Campo de texto para la URL de contacto de soporte interno](/assets/images/enterprise/configuration/ae-support-link-url.png)
3. Haz clic en **Save ** (guardar). ![Botón de "Guardar" para la configuración del contacto de soporte empresarial](/assets/images/enterprise/configuration/ae-save.png)
