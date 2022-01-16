---
title: Iniciar con GitHub Enterprise Cloud
intro: 'Inicia con la configuración y administración de tu cuenta organizacional o empresarial de {% data variables.product.prodname_ghe_cloud %}.'
versions:
  fpt: '*'
---

Esta guía te mostrará cómo configurar, ajustar y administrar tu cuenta de {% data variables.product.prodname_ghe_cloud %} como organización o empresa.

{% data reusables.enterprise.ghec-cta-button %}

## Parte 1: Elegir tu tipo de cuenta

{% data variables.product.prodname_dotcom %} proporciona dos tipos de productos empresariales:

- **{% data variables.product.prodname_ghe_cloud %}**
- **{% data variables.product.prodname_ghe_server %}**

La diferencia principal entre los productos es que {% data variables.product.prodname_dotcom %} hospeda a {% data variables.product.prodname_ghe_cloud %}, mientras que {% data variables.product.prodname_ghe_server %} es auto-hospedado.

Con {% data variables.product.prodname_ghe_cloud %}, tienes la opción de utilizar {% data variables.product.prodname_emus %}. {% data reusables.enterprise-accounts.emu-short-summary %}

Si en vez de esto eliges permitir a que tus miembros creen y administren sus propias cuentas, hay dos tipos de cuentas que puedes utilizar con {% data variables.product.prodname_ghe_cloud %}:

- Una cuenta de organización simple
- Una cuenta empresarial que contiene varias organizaciones

### 1. Entender las diferencias entre una cuenta organizacional y una cuenta empresarial

Tanto las cuentas de empresa como las de organización se encuentran disponibles con {% data variables.product.prodname_ghe_cloud %}. Una organización es una cuenta compartida en donde los grupos de personas pueden colaborar a través de varios proyectos a la vez y los propietarios y administradores pueden administrar el acceso a los datos y proyectos. Una cuenta empresarial habilita la colaboración entre organizaciones múltiples y permite a los propietarios administrar políticas centralmente, facturar y proporcionar seguridad a estas organizaciones. Para encontrar más información sobre las diferencias, consulta la sección "[Organizaciones y cuentas empresariales](/organizations/collaborating-with-groups-in-organizations/about-organizations#organizations-and-enterprise-accounts)".



Si eliges una cuenta empresarial, ten en mente que algunas políticas se configuran mejor a nivel organizacional, mientras que otras pueden requerirse para todas las organizaciones en una empresa.

Una vez que elijas el tipo de cuenta que te gustaría utilizar, puedes proceder a configurarla. En cada sección de esta guía, procede a ya sea la sección de organización simple o de cuenta empresarial de acuerdo con tu tipo de cuenta.

## Parte 2: Configurar tu cuenta
Para iniciar con {% data variables.product.prodname_ghe_cloud %}, necesitarás crear tu cuenta de organización o de empresa y configurar y ver los ajustes de facturación, suscripciones y uso.
### Configurar una cuenta de organización simple con {% data variables.product.prodname_ghe_cloud %}

#### 1. Acerca de las organizaciones
Las organizaciones son cuentas compartidas donde grupos de personas pueden colaborar en muchos proyectos a la vez. Con {% data variables.product.prodname_ghe_cloud %}, los propietarios y administradores pueden manejar su organización con una administración y autenticación de usuarios sofisticada, así como soporte escalado y opciones de seguridad. Para obtener más información, consulta "[Acerca de las organizaciones](/organizations/collaborating-with-groups-in-organizations/about-organizations)".
#### 2. Crear o mejorar una cuenta organizacional

Para utilizar una cuenta de organización con {% data variables.product.prodname_ghe_cloud %}, primero necesitarás crear una organización. Cuando se te pida elegir un plan, selecciona "Empresa". Para obtener más información, consulta la sección "[Crear una organización nueva desde cero](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)".

Como alternativa, si tienes una cuenta organizacional existente que quisieras mejorar, sigue los pasos en "[Mejorar tu suscripción de {% data variables.product.prodname_dotcom %}](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription#upgrading-your-organizations-subscription)".
#### 3. Configurar y administrar la facturación

Cuando eliges utilizar una cuenta de organización con {% data variables.product.prodname_ghe_cloud %}, primero necesitarás tener acceso a la [prueba gratuita de 14 días](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud). Si no compras {% data variables.product.prodname_enterprise %} o {% data variables.product.prodname_team %} antes de que termine tu periodo de prueba, tu organización bajará de nivel a {% data variables.product.prodname_free_user %} y perderá acceso a cualquier herramienta avanzada y características que solo se incluyan con los productos de pago. Para obtener más información, consulta la sección "[Finalizar tu periodo de prueba](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud#finishing-your-trial)".

La página de configuración de facturación de tu organización te permite administrar los ajustes como tu método de pago y ciclo de facturación, ver la información sobre tu suscripción y mejorar tu almacenamiento y minutos de {% data variables.product.prodname_actions %}. Para obtener más información sobre cómo administrar tu configuración de facturación, consulta la sección "[Administrar tu configuración de facturación de {% data variables.product.prodname_dotcom %}](/billing/managing-your-github-billing-settings)".

Solo los miembros de la organización con el rol de *propietario* o *gerente de facturación* pueden acceder o cambiar la configuración de facturación para tu organización. Un gerente de facturación es un usuario que administra la configuración de facturación de tu organización y no utiliza una licencia en la suscripción de tu organización. Para obtener más información sobre cómo agregar a un gerente de facturación a tu organización, consulta la sección "[Agregar a un gerente de facturación a tu organización](/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization)".

### Configurar una cuenta empresarial con {% data variables.product.prodname_ghe_cloud %}
 {% note %}

Para obtener una cuenta empresarial que se creó para ti, contacta al [Equipo de ventas de {% data variables.product.prodname_dotcom %}](https://enterprise.github.com/contact).

 {% endnote %}

#### 1. Acerca de las cuentas de empresa

Una cuenta empresarial te permite administrar las políticas y ajustes centralmente para organizaciones múltiples de {% data variables.product.prodname_dotcom %}, incluyendo el acceso de los miembros, la facturación, el uso y la seguridad. Para obtener más información, consulta "[Acerca de las cuentas de empresa](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/about-enterprise-accounts)".
#### 2. Agregar organizaciones en tu cuenta de empresa

Puedes crear nuevas organizaciones para administrar dentro de tu cuenta de empresa. Para obtener más información, consulta la sección "[Agregar organizaciones a tu empresa](/github/setting-up-and-managing-your-enterprise/managing-organizations-in-your-enterprise-account/adding-organizations-to-your-enterprise-account)".

Contacta a tu representante de cuenta de ventas de {% data variables.product.prodname_dotcom %} su quieres transferir una organización existente a tu cuenta empresarial.
#### 3. Ver la suscripción y el uso de tu cuenta de empresa
Puedes ver tu suscripción actual, uso de licencia, facturas, historial de pagos y otra información de facturación de tu cuenta empresarial en cualquier momento. Tanto los propietarios de empresas como los gerentes de facturación pueden acceder y administrar la configuración de facturación para las cuentas empresariales. Para obtener más información, consulta "[Ver la suscripción y el uso de tu cuenta de empresa](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/viewing-the-subscription-and-usage-for-your-enterprise-account)".

## Parte 3: Administrar los equipos y miembros de tu organización o empresa con {% data variables.product.prodname_ghe_cloud %}

### Administrar a los miembros y equipos de tu organización
Puedes configurar los permisos y roles de los miembros, crear y administrar equipos y darles a las personas acceso a los repositorios de tu organización.
#### 1. Administrar a los miembros de tu organización
{% data reusables.getting-started.managing-org-members %}
#### 2. Permisos y roles de la organización
{% data reusables.getting-started.org-permissions-and-roles %}
#### 3. Acerca de y crear equipos
{% data reusables.getting-started.about-and-creating-teams %}
#### 4. Administrar la configuración de los equipos
{% data reusables.getting-started.managing-team-settings %}
#### 5. Otorgar acceso a equipos y personas para los repositorios, tableros de proyecto y apps
{% data reusables.getting-started.giving-access-to-repositories-projects-apps %}

### Administrar a los miembros de una cuenta empresarial
Administrar a los miembros de una empresa es algo separado de administrar a los miembros o equipos de una organización. Es importante notar que los propietarios o administradores de una empresa no pueden acceder a los ajustes a nivel organizacional ni administrar a los miembros de las organizaciones en su empresa a menos de que se les haga un propietario de organización. Para obtener más información, consulta la sección anterior: "[Administrar los miembros y equipos de tu organización](#managing-members-and-teams-in-your-organization)".

Si tu empresa utiliza {% data variables.product.prodname_emus %}, tus miembros se administrarán integralmente mediante tu proveedor de identidad. Tanto la adición de miembros, hacer cambios a sus membrecías y asignar roles se administra utilizando tu IdP. Para obtener más información, consulta la sección "[Acerca de {% data variables.product.prodname_emus %}](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)".

Si tu empresa no utiliza {% data variables.product.prodname_emus %}, sigue estos pasos.

#### 1. Asignar roles en una empresa
Predeterminadamente, cualquiera en una empresa es un miembro de ella. También existen roles administrativos, incluyendo el del propietario y gerente de facturación, que tienen niveles diferentes de acceso a los datos y ajustes de una empresa. Para obtener más información, consulta la sección "[Roles en una empresa](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise)".
#### 2. Invitar a las personas para que administren tu empresa
Puedes invitar a personas para que administren tu empresa como propietarios o gerentes de facturación, así como eliminar a los que ya no necesiten acceso. Para obtener más información, consulta la sección "[Invitar a las personas para que administren tu empresa](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise)".

También puedes otorgar a los miembros de la empresa la capacidad para que administren tickets de soporte en el portal de soporte. Para obtener más información, consulta la sección "[Administrar la titularidad de soporte para tu empresa](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise)".
#### 3. Visualizar a las personas en tu empresa
Para auditar el acceso a los recursos que pertenecen a la empresa o al uso de licencias de los usuarios, puedes ver a todos los administradores, miembros y colaboradores externos de tu empresa. Puedes ver las organizaciones a las cuales pertenece un miembro y especificar los repositorios a los cuales tiene acceso un colaborador. Para obtener más información, consulta la sección "[Visualizar a las personas en tu empresa](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/viewing-people-in-your-enterprise)".

## Parte 4: Administrar la seguridad con {% data variables.product.prodname_ghe_cloud %}

* [Administrar la seguridad para una sola organización](#managing-security-for-a-single-organization)
* [Administrar la seguridad para una {% data variables.product.prodname_emu_enterprise %}](#managing-security-for-an-enterprise-with-managed-users)
* [Administrar la seguridad para una cuenta empresarial sin {% data variables.product.prodname_managed_users %}](#managing-security-for-an-enterprise-account-without-managed-users)

### Administrar la seguridad para una sola organización
Puedes ayudar a que tu organización se mantenga protegida requiriendo autenticación bifactorial, configurando las características de seguridad, revisando las bitácoras de auditoría e integraciones de tu organización y habilitando el inicio de sesión único de SAML y la sincronización de equipos.
#### 1. Requerir autenticación bifactorial
{% data reusables.getting-started.requiring-2fa %}
#### 2. Configurar las características de seguridad de tu organización
{% data reusables.getting-started.configuring-security-features %}

#### 3. Revisar las bitácoras de auditoría e integraciones de tu organización
{% data reusables.getting-started.reviewing-org-audit-log-and-integrations %}
#### 4. Habilitar y requerir el inicio de sesión único de SAML en tu organización
Si administras tus aplicaciones y las identidades de tus miembros de la organización con un proveedor de identidad (IdP), puedes configurar el inicio de sesión único (SSO) de SAML para controlar y proteger el acceso a los recursos organizacionales como los repositorios, propuestas y solicitudes de cambio. Cuando los miembros de tu organización acceden a los recursos de la misma que utilicen el SSO de SAML, {% data variables.product.prodname_dotcom %} los redireccionará a tu IdP para autenticarse. Para obtener más información, consulta la sección "[Acerca de la administración de identidad y accesos con el inicio de sesión único de SAML](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)".

Los propietarios de la organización pueden elegir inhabilitar, habilitar pero no requerir o habilitar y requerir el SSO de SAML. Para obtener más información, consulta las secciones "[Habilitar y probar el inicio de sesión único de SAML para tu organización](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization)" y "[Requerir el inicio de sesión único de SAML para tu organización](/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization)".
#### 5. Administrar la sincronización de equipos para tu organización
Los propietarios de la organización pueden habilitar la sincronización de equipos entre tu proveedor de identidad (IdP) y {% data variables.product.prodname_dotcom %} para permitir que los propietarios organizacionales y mantenedores de equipo conecten equipos en tu organización con los grupos de IdP. Para obtener más información, consulta la sección [Administrar la sincronización de equipos para tu organización](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)".

### Administrar la seguridad para una {% data variables.product.prodname_emu_enterprise %}

Con {% data variables.product.prodname_emus %}, el acceso y la identidad se administran centralmente mediante tu proveedor de identidad. La autenticación bifactorial y otros requisitos de inicio de sesión deben habilitarse y requerirse en tu IdP.

#### 1. Habilitar el inicio de sesión único de SAML y el aprovisionamiento en tu {% data variables.product.prodname_emu_enterprise %}

En una {% data variables.product.prodname_emu_enterprise %}, tu proveedor de identidad administra y aprovisiona a todos los miembros. Debes habilitar el SSO de SAML y el aprovisionamiento de SCIM antes de que puedas comenzar a utilizar tu empresa. Para obtener más información sobre cómo configurar el SSO de SAML y el aprovisionamiento para una {% data variables.product.prodname_emu_enterprise %}, consulta la sección "[Configurar el inicio de sesión único de SAML para los Usuarios Administrados de Enterprise](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users)".

#### 2. Administrar equipos en tu {% data variables.product.prodname_emu_enterprise %} con tu proveedor de identidad

Puedes conectar equipos en tus organizaciones a grupos de seguridad en tu proveedor de identidad, administrar la membrecía de tus equipos y acceder a repositorios mediante tu IdP. Para obtener más información, consulta la sección "[Administrar las membrecías de equipo con los grupos de proveedor de identidades](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups)".

#### 3. Administrar las direcciones IP permitidas para las organizaciones de tu {% data variables.product.prodname_emu_enterprise %}

Puedes configurar una lista de direcciones permitidas para IP específicas para restringir el acceso a los activos que pertenecen a las organizaciones de tu {% data variables.product.prodname_emu_enterprise %}. Para obtener más información, consulta la sección "[Requerir los parámetros de seguridad en tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account#managing-allowed-ip-addresses-for-organizations-in-your-enterprise-account)".

#### 4. Reforzar las políticas para las características de Seguridad Avanzada en tu {% data variables.product.prodname_emu_enterprise %}
{% data reusables.getting-started.enterprise-advanced-security %}

### Administrar la seguridad para una cuenta empresarial sin {% data variables.product.prodname_managed_users %}
Para administrar la seguridad de tu empresa, puedes requerir la autenticación bifactorial, administrar las direcciones IP permitidas, habilitar el inicio de sesión único de SAML y la sincronización de equipos a nivel empresaria y darte de alta para y requerir las características de la Seguridad Avanzada de GitHub.

#### 1. Requerir la autenticación bifactorial y administrar las direcciones IP permitidas para las organizaciones de tu cuenta empresarial
Los propietarios de empresa pueden requerir que los miembros de la organización, gerentes de facturación y colaboradores externos en todas las organizaciones que sean propiedad de una cuenta de empresa usen autenticación de dos factores para proteger sus cuentas personales. Antes de hacerlo, te recomendamos notificar a todos los que tengan acceso a las organizaciones de tu empresa. También puedes configurar una lista de direcciones IP permitidas específicas para restringir el acceso a los activos que pertenecen a las organizaciones en tu cuenta empresarial.

Para obtener más información sobre cómo requerir autenticación bifactorial y listas de direcciones IP, consulta la sección "[Requerir una configuración de seguridad en tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account#managing-allowed-ip-addresses-for-organizations-in-your-enterprise-account)".
#### 2. Habilitar y requerir el inicio de sesión único de SAML para las organizaciones de tu cuenta empresarial
Puedes administrar centralmente el acceso a los recursos de tu empresa, la membrecía organizacional y la de equipo utilizando tu IdP e inicio de sesión único (SSO) de SAML. Los propietarios de empresas pueden habilitar el SSO de SAML a través de todas las organizaciones que pertenezcan a una cuenta empresarial. Para obtener más información, consulta la sección "[Acerca de la administración de identidad y acceso para tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/about-identity-and-access-management-for-your-enterprise-account)".

#### 3. Administrar la sincronización de equipos
Puedes habilitar y administrar la sincronización de equipos entre un proveedor de identidad (IdP) y {% data variables.product.prodname_dotcom %} para permitir que las organizaciones que pertenezcan a tu cuenta empresarial administren la membrecía de los equipos con grupos de IdP. Para obtener más información, consulta la sección "[Administrar la sincronización de equipos para las organizaciones en tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/managing-team-synchronization-for-organizations-in-your-enterprise-account)".

#### 4. Requerir políticas para las características de seguridad avanzada en tu cuenta empresarial
{% data reusables.getting-started.enterprise-advanced-security %}

## Parte 5: Administrar políticas y ajustes a nivel de empresa y organización

### Administrar los ajustes para una sola organización
Para administrar y moderar tu organización, puedes configurar políticas de organización, administrar permisos para los cambios de repositorio y utilizar archivos de salud comunitaria a nivel de las organizaciones.
#### 1. Administrar las políticas organizacionales
{% data reusables.getting-started.managing-org-policies %}
#### 2. Administrar los cambios de repositorio
{% data reusables.getting-started.managing-repo-changes %}
#### 3. Utilizar archivos de salud comunitaria y herramientas de moderación a nivel organizacional
{% data reusables.getting-started.using-org-community-files-and-moderation-tools %}

### Administrar los ajustes de una cuenta empresarial
Para administrar y moderar tu empresa, puedes configurar políticas para las organizaciones dentro de la empresa, ver las bitácoras de auditoría, configurar webhooks y restringir las notificaciones por correo electrónico.
#### 1. Administrar políticas para las organizaciones en tu cuenta empresarial

Puedes elegir el requerir varias políticas para todas las organizaciones que pertenezcan a tu empresa o elegir permitir que estas políticas se configuren en cada organización. Los tipos de políticas que puedes requerir incluyen la administración de repositorios, tablero de proyectos y políticas de equipo. Para obtener más información, consulta la sección "[Configurar las políticas organizacionales](/github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account)".
#### 2. Ver las bitácoras de auditoría, configurar webhooks y restringir las notificaciones de tu empresa
Puedes ver las acciones de todas las organizaciones que pertenezcan a tu cuenta empresarial en la bitácora de auditoría empresarial. También puedes configurar webhooks para recibir eventos de organizaciones que pertenecen a tu cuenta de empresa. Para obtener más información, consulta las secciones "[Visualizar las bitácoras de auditoría para las organizaciones en tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise/managing-organizations-in-your-enterprise-account/viewing-the-audit-logs-for-organizations-in-your-enterprise-account)" y "[Configurar los webhooks para eventos de organizaciones en tu empresa](/github/setting-up-and-managing-your-enterprise/managing-organizations-in-your-enterprise-account/configuring-webhooks-for-organization-events-in-your-enterprise-account)".

También puedes restringir las notificaciones por correo electrónico de tu cuenta empresarial para que los miembros de tu empresa solo puedan utilizar una dirección de correo electrónico en un dominio aprobado o verificado para recibir notificaciones. Para obtener más información, consulta la sección "[Restringir las notificaciones por correo electrónico para tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/restricting-email-notifications-for-your-enterprise-account)".

## Parte 6: Personalizar y automatizar el trabajo de tu organización o empresa en {% data variables.product.prodname_dotcom %}
Los miembros de tu organización o empresa pueden utilizar herramientas del {% data variables.product.prodname_marketplace %}, la API de {% data variables.product.product_name %} y características existentes de {% data variables.product.product_name %} para personalizar y automatizar tu trabajo.

### 1. Uso de {% data variables.product.prodname_marketplace %}
{% data reusables.getting-started.marketplace %}
### 2. Utilizar la API de {% data variables.product.prodname_dotcom %}
{% data reusables.getting-started.api %}
### 3. Crear {% data variables.product.prodname_actions %}
{% data reusables.getting-started.actions %}
### 4. Publicar y administrar el {% data variables.product.prodname_registry %}
{% data reusables.getting-started.packages %}
### 5. Uso de {% data variables.product.prodname_pages %}
{% data variables.product.prodname_pages %} es un servicio de hospedaje de sitios estáticos que toma archivos de HTML, CSS y JavaScript directamente desde un repositorio y publica un sitio web. Puedes administrar la publicación de los sitios de {% data variables.product.prodname_pages %} a nivel organizacional. Para obtener más información, consulta las secciones "[Administrar la publicación de sitios de {% data variables.product.prodname_pages %} en tu organización](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)" y "[Acerca de {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages)".
## Parte 7: Participar en la comunidad de {% data variables.product.prodname_dotcom %}

Los miembros de tu organización o empresa pueden utilizar los recursos de apoyo y aprendizaje de GitHub para obtener la ayuda que necesitan. También puedes apoyar a la comunidad de código abierto.
### 1. Aprender con {% data variables.product.prodname_learning %}
Los miembros de tu organización o empresa pueden aprender habilidades nuevas completando proyectos divertidos y realistas en tu propio repositorio de GitHub con [{% data variables.product.prodname_learning %}](https://lab.github.com/). Cada curso es una lección didáctica que creó la comunidad de GitHub y que la enseña el amigable bot del Laboratorio de Aprendizaje.

Para obtener más información, consulta la sección "[Recursos de aprendizaje de Git y de {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/quickstart/git-and-github-learning-resources)".
### 2. Apoyar a la comunidad de código abierto
{% data reusables.getting-started.sponsors %}

### 3. Comunicarse con {% data variables.contact.github_support %}
{% data reusables.getting-started.contact-support %}

{% data variables.product.prodname_ghe_cloud %} te permite emitir solicitudes de soporte prioritario con un tiempo de respuesta de ocho horas. Para obtener más información, consulta la sección "[Soporte de {% data variables.product.prodname_ghe_cloud %}](/github/working-with-github-support/github-enterprise-cloud-support)".
