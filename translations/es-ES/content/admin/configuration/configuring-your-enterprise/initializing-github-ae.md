---
title: Inicializar GitHub AE
intro: 'Para poner a tu empresa lista para operar, puedes completar la configuración inicial de {% data variables.product.product_name %}.'
versions:
  ghae: '*'
type: how_to
topics:
  - Enterprise
redirect_from:
  - /admin/configuration/initializing-github-ae
  - /enterprise-server@latest/admin/configuration/configuring-your-enterprise/initializing-github-ae
ms.openlocfilehash: a3c32a770bbf58be3589824302fe3a32be0e239a
ms.sourcegitcommit: ced661bdffebd0f96f6f76db109fbe31983448ba
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/16/2022
ms.locfileid: '148167056'
---
## Acerca de la inicialización

Antes de que puedas inicializar tue mpresa, debes comprar {% data variables.product.product_name %}. Para obtener más información, contacta a {% data variables.contact.contact_enterprise_sales %}.

{% data reusables.github-ae.initialize-enterprise %} Asegúrate de que la información que proporcionas empate con la información destinada del propietario de la empresa en el IdP. Para obtener más información sobre los propietarios de empresas, consulta "[Roles en una empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owner)".

{% note %}

**Notas**:

- Si la contraseña inicial para {% data variables.product.prodname_ghe_managed %} vence antes de que finalices la instalación, puedes solicitar un restablecimiento de contraseña en cualquier momento desde tu correo electrónico de invitación.

- Almacena de forma segura el nombre de usuario y contraseña iniciales para {% data variables.product.prodname_ghe_managed %} en un administrador de contraseñas. {% data reusables.saml.contact-support-if-your-idp-is-unavailable %}

{% endnote %}

Durante la inicialización, el propietario de la empresa nombrará a tu empresa, configurará el SSO de SAML, creará políticas para todas las organizaciones dentro de la empresa y configurará un contacto de soporte para tus usuarios.

## Prerrequisitos

Para comenzar la inicialización, recibirás un correo electrónico de invitación desde {% data variables.product.company_short %}. Antes de que configures {% data variables.product.prodname_ghe_managed %}, revisa los siguientes prerequisitos.


Para inicializar {% data variables.location.product_location %}, debes tener un proveedor de identidad (IdP) de SAML. {% data reusables.saml.ae-uses-saml-sso %} Para conectar tu IdP a tu empresa durante la inicialización, debes tener tu URL de ID de entidad (SSO) del IdP, URL de ID emisora, y certificado de firma público (cifrado en Base64). Para más información, vea "[Acerca de la administración de identidades y acceso para la empresa](/admin/authentication/about-identity-and-access-management-for-your-enterprise)".

{% note %}

**Nota**: {% data reusables.saml.create-a-machine-user %}

{% endnote %}

## Iniciar sesión y nombrar a tu empresa

1. Sigue las instrucciones en tu correo electrónico de bienvenida para llegar a tu empresa.
2. Escriba sus credenciales en "Change password" (Cambiar contraseña) y, luego, haga clic en **Change password** (Cambiar contraseña).
3. Debajo de "What would you like your enterprise account to be named?" (¿Qué nombre quiere darle a su cuenta empresarial?), escriba el nombre de la empresa y luego haga clic en **Save and continue** (Guardar y continuar).
  ![Botón "Guardar y continuar" para asignar un nombre a una empresa](/assets/images/enterprise/configuration/ae-enterprise-configuration.png)

## Conectar tu IdP a tu empresa

Para configurar la autenticación para {% data variables.product.product_name %}, debes proporcionar a {% data variables.product.product_name %} los detalles de tu IdP de SAML. {% data variables.product.company_short %} te recomienda utilizar Azure AD como tu IdP. Para más información, vea "[Configuración de la autenticación y el aprovisionamiento con el proveedor de identidades](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider)".

1. A la derecha de "Set up your identity provider" (Configurar el proveedor de identidades), haga clic en **Configure** (Configurar).
  ![Botón "Configurar" para la configuración del IdP](/assets/images/enterprise/configuration/ae-idp-configure.png)
1. Debajo de "URL de ingreso", copia y pega la URL de tu IdP de SAML.
  ![Campo de texto para la URL de registro del IdP de SAML](/assets/images/enterprise/configuration/ae-idp-sign-on-url.png)
1. Debajo de "Emisor", copiay pega la URL emisora para tu IdP de SAML.
  ![Campo de texto para la URL del emisor del IdP de SAML](/assets/images/enterprise/configuration/ae-idp-issuer-url.png)
1. Debajo de "Certificado público", copia y pega el certificado público para tu IdP de SAML.
  ![Campo de texto para el certificado público del IdP de SAML](/assets/images/enterprise/configuration/ae-idp-public-certificate.png)
1. Para asegurarse de que la información especificada es correcta, haga clic en **Test SAML configuration** (Probar configuración de SAML).
  ![Botón "Probar configuración de SAML"](/assets/images/enterprise/configuration/ae-test-saml-configuration.png)
1. Haga clic en **Save**(Guardar).
  ![Botón "Guardar" para la configuración del IdP](/assets/images/enterprise/configuration/ae-save.png)
1. {% data reusables.saml.assert-the-administrator-attribute %}

## Configurar las políticas de tu empresa

El configurar políticas pondrá limitaciones para la administración de repositorios y organizaciones en tu empresa. Estas pueden volver a configurarse después del proceso de inicialización.

1. A la derecha de "Set your enterprise policies" (Establecer las directivas empresariales), haga clic en **Configure** (Configurar).
  ![Botón "Configurar" para la configuración de directivas](/assets/images/enterprise/configuration/ae-policies-configure.png)
2. Debajo de "Permisos Predeterminados de los Repositorios", utiliza el menú desplegable y da clci en un nivel de permisos predeterminado para los repositorios de tu empresa. Si alguien tiene varios medios de acceso a una organización, ya sea indiviudalmente, a través de un equipo, o como un miembro de la misma, el permiso más alto anulará los permisos más bajos. Opcionalmente, para permitir que las organizaciones de la empresa establezcan sus permisos de repositorio predeterminados, haga clic en **No policy** (Ninguna directiva)
  .![Menú desplegable para las opciones predeterminadas de los permisos del repositorio](/assets/images/enterprise/configuration/ae-repository-permissions-menu.png)
3. Debajo de "Creación de repositorios", elige si quieres permitir que los miembros creen repositorios o no. Opcionalmente, para permitir que las organizaciones de su empresa establezcan permisos, haga clic en **No policy** (Ninguna directiva).
  ![Botón "Los miembros pueden crear repositorios" para la configuración de las directivas de empresa](/assets/images/enterprise/configuration/ae-repository-creation-permissions.png)
4. Debajo de "Bifurcación de repositorios", elige si quieres permitir la bifurcación de repositorios privados e internos. Opcionalmente, para permitir que las organizaciones de la empresa establezcan sus permisos, haga clic en **No policy** (Ninguna directiva)
  .![Menú desplegable para las opciones predeterminadas de bifurcación del repositorio](/assets/images/enterprise/configuration/ae-repository-forking-menu.png)
5. Debajo de "invitaciones a los repositorios", elige si los miembros o propietarios de la organización pueden invitar colaboradores a los repositorios. Opcionalmente, para permitir que las organizaciones de la empresa establezcan sus permisos, haga clic en **No policy** (Ninguna directiva)
  .![Menú desplegable para las opciones predeterminadas de invitación del repositorio](/assets/images/enterprise/configuration/ae-repository-invitations-menu.png)
6. Debajo de "Visibilidad predeterminada de los repositorios", utiliza el menú desplegable y da clic en el ajuste de visibilidad predeterminada para los repositorios nuevos.
  ![Menú desplegable para las opciones de visibilidad predeterminadas del repositorio](/assets/images/enterprise/configuration/ae-repository-visibility-menu.png)
7. Debajo de "Los usuarios pueden crear organizaciones", utiliza el menú desplegable para habilitar o inhabilitar el acceso para la creación de organizaciones para los miembros de la empresa.
  ![Menú desplegable para las opciones de permisos de creación en las organizaciones](/assets/images/enterprise/configuration/ae-organization-creation-permissions-menu.png)
8. Debajo de "subidas forzadas", utiliza el menú desplegable y elige si quieres permitir o bloquear las subidas forzadas.
  ![Menú desplegable para las opciones de configuración de inserciones forzadas](/assets/images/enterprise/configuration/ae-force-pushes-configuration-menu.png)
9. Debajo de "Acceso SSH a Git", utiliza el menú desplegable y elige si quieres habilitar el acceso por SSH a Git para todos los repositorios en la empresa.
  ![Menú desplegable para las opciones de acceso SSH a Git](/assets/images/enterprise/configuration/ae-git-ssh-access-menu.png)
10. Haga clic en **Save** (Guardar).
  ![Botón "Guardar" para la configuración de directivas empresariales](/assets/images/enterprise/configuration/ae-save.png)
11. Opcionalmente, para restablecer todas las selecciones, da clic en "Restablecer a las políticas predeterminadas".
  ![Vínculo para restablecer todas las directivas predeterminadas](/assets/images/enterprise/configuration/ae-reset-default-options.png)

## Configurar tu contacto de soporte interno

Puedes configurar el método que tus usuarios utilizarán para contactar a tu equipo de soporte interno. Esto puede volver a configurarse después del proceso de inicialización.

1. A la derecha de "Internal support contact" (Contacto de soporte técnico interno), haga clic en **Configure** (Configurar).
  ![Botón "Configurar" para la configuración de contacto de soporte técnico interno](/assets/images/enterprise/configuration/ae-support-configure.png)
2. Debajo de "Contacto de soporte interno", selecciona el método para que los usuarios de tu empresa contacten a soporte, a través de una URL o de una dirección de correo electrónico. Posteriormente, teclea la información de contacto para soporte.
  ![Campo de texto para la URL de contacto de soporte técnico interno](/assets/images/enterprise/configuration/ae-support-link-url.png)
3. Haga clic en **Save**(Guardar).
  ![Botón "Guardar" para la configuración de contacto de soporte técnico de empresa](/assets/images/enterprise/configuration/ae-save.png)

## Configurar los ajustes de tu correo electrónico

Una vez que se inicialice, puedes reconfigurar cualquier ajuste después del proceso de inicialización. Para más información, vea "[Configuración del correo electrónico para notificaciones](/admin/configuration/configuring-email-for-notifications)".

1. A la derecha de "Configure email settings" (Configurar opciones de correo electrónico), haga clic en **Configure** (Configurar).
  ![Botón "Configurar" para la configuración de las opciones de correo electrónico](/assets/images/enterprise/configuration/ae-email-configure.png)
2. Seleccione **Enable email** (Habilitar correo electrónico). Esto habilitará el correo electrónico tanto entrante como saliente, sin embargo, para que funcione el entrante, también necesitarás configurar tus ajustes de DNS. Para obtener más información, vea "[Configuración de DNS y opciones de firewall para permitir correos electrónicos entrantes](/admin/configuration/configuring-email-for-notifications#configuring-dns-and-firewall-settings-to-allow-incoming-emails)".
 ![Casilla "Habilitar" para la configuración de opciones de correo electrónico](/assets/images/enterprise/configuration/ae-enable-email-configure.png)
3. Completa tus ajustes de servidor de correo electrónico:
    - En el campo **Server address** (Dirección del servidor), escriba la dirección del servidor SMTP.
    - En el campo **Puerto**, escriba el puerto que usa el servidor SMTP para enviar correo electrónico.
    - En el campo **Domain** (Dominio), escriba el nombre de dominio que enviará el servidor SMTP con una respuesta HELO, si existe.
    - En la lista desplegable **Authentication** (Autenticación), elija el tipo de cifrado que usa el servidor SMTP.
    - En el campo **No reply email address** (Dirección de correo electrónico sin respuesta), escriba la dirección de correo electrónico a fin de usar en los campos De y Para en todos los correos electrónicos para notificaciones.

4. Si quiere descartar todos los correos electrónicos entrantes que estén dirigidos al correo electrónico sin respuesta, seleccione **Descartar correo electrónico dirigido a la dirección de correo electrónico sin respuesta**.
  ![Casilla "Descartar" para la configuración de las opciones de correo electrónico](/assets/images/enterprise/configuration/ae-discard-email.png)
5. Haga clic en **Probar configuración de correo electrónico**.
  ![Botón "Probar configuración de correo electrónico" para la configuración de las opciones de correo electrónico](/assets/images/enterprise/configuration/ae-test-email.png)
6. En "Enviar correo electrónico de prueba a", escriba la dirección de correo electrónico a la que quiera enviar un mensaje de prueba y haga clic en **Enviar correo electrónico de prueba**.
  ![Botón "Enviar correo electrónico de prueba" para la configuración de las opciones de correo electrónico](/assets/images/enterprise/configuration/ae-send-test-email.png)
7. Haga clic en **Save**(Guardar).
  ![Botón "Guardar" para la configuración de contacto de soporte técnico de empresa](/assets/images/enterprise/configuration/ae-save.png)
