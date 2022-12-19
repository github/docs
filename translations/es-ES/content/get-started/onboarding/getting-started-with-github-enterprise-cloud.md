---
title: Iniciar con GitHub Enterprise Cloud
intro: 'Inicia con la configuración y administración de tu cuenta organizacional o empresarial de {% data variables.product.prodname_ghe_cloud %}.'
versions:
  fpt: '*'
  ghec: '*'
ms.openlocfilehash: 6af835175eb5412ca9fbf0e925175450f2a2a254
ms.sourcegitcommit: fdc4466e89467a7b13239e26c6042dc1428946b6
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163804'
---
Esta guía te mostrará cómo configurar, ajustar y administrar tu cuenta de {% data variables.product.prodname_ghe_cloud %} como organización o empresa.

{% data reusables.enterprise.ghec-cta-button %}

## Parte 1: Elegir tu tipo de cuenta

{% data variables.product.prodname_dotcom %} proporciona dos tipos de productos empresariales:

- **{% data variables.product.prodname_ghe_cloud %}**
- **{% data variables.product.prodname_ghe_server %}**

La diferencia principal entre los productos es que {% data variables.product.prodname_dotcom %} hospeda a {% data variables.product.prodname_ghe_cloud %}, mientras que {% data variables.product.prodname_ghe_server %} es auto-hospedado.

{% data reusables.enterprise.about-github-for-enterprises %}

Con {% data variables.product.prodname_ghe_cloud %}, tienes la opción de utilizar {% data variables.product.prodname_emus %}. {% data reusables.enterprise-accounts.emu-short-summary %}

Si en vez de esto eliges permitir que tus miembros creen y administren sus propias cuentas, hay dos tipos de cuentas que puedes utilizar con {% data variables.product.prodname_ghe_cloud %}:

- Una cuenta de organización simple
- Una cuenta empresarial que contiene varias organizaciones

### 1. Descripción de las diferencias entre una cuenta de organización y una cuenta de empresa

Tanto las cuentas de empresa como las de organización se encuentran disponibles con {% data variables.product.prodname_ghe_cloud %}. Una organización es una cuenta compartida en donde los grupos de personas pueden colaborar a través de varios proyectos a la vez y los propietarios y administradores pueden administrar el acceso a los datos y proyectos. Una cuenta empresarial habilita la colaboración entre organizaciones múltiples y permite a los propietarios administrar políticas centralmente, facturar y proporcionar seguridad a estas organizaciones. Para más información sobre las diferencias, vea "[Cuentas de organización y de empresa](/organizations/collaborating-with-groups-in-organizations/about-organizations#organizations-and-enterprise-accounts)".

Si eliges una cuenta empresarial, ten en mente que algunas políticas se configuran mejor a nivel organizacional, mientras que otras pueden requerirse para todas las organizaciones en una empresa.

Una vez que elijas el tipo de cuenta que te gustaría utilizar, puedes proceder a configurarla. En cada sección de esta guía, procede a ya sea la sección de organización simple o de cuenta empresarial de acuerdo con tu tipo de cuenta.

## Parte 2: Configurar tu cuenta
Para iniciar con {% data variables.product.prodname_ghe_cloud %}, necesitarás crear tu cuenta de organización o de empresa y configurar y ver los ajustes de facturación, suscripciones y uso.
### Configurar una cuenta de organización simple con {% data variables.product.prodname_ghe_cloud %}

#### 1. Acerca de las organizaciones
Las organizaciones son cuentas compartidas en las que grupos de personas pueden colaborar en muchos proyectos a la vez. Con {% data variables.product.prodname_ghe_cloud %}, los propietarios y administradores pueden manejar su organización con una administración y autenticación de usuarios sofisticada, así como soporte escalado y opciones de seguridad. Para más información, vea "[Acerca de las organizaciones](/organizations/collaborating-with-groups-in-organizations/about-organizations)".
#### 2. Creación o actualización de una cuenta de organización

Para utilizar una cuenta de organización con {% data variables.product.prodname_ghe_cloud %}, primero necesitarás crear una organización. Cuando se te pida elegir un plan, selecciona "Empresa". Para más información, vea "[Creación de una organización desde cero](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)".

Como alternativa, si tiene una cuenta de organización existente que quiere actualizar, siga los pasos descritos en "[Actualización de la suscripción a {% data variables.product.prodname_dotcom %}](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription#upgrading-your-organizations-subscription)".
#### 3. Configuración y administración de la facturación

Cuando decida usar una cuenta de organización con {% data variables.product.prodname_ghe_cloud %}, primero tendrá acceso a una [prueba de 30 días](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud). Si no compras {% data variables.product.prodname_enterprise %} o {% data variables.product.prodname_team %} antes de que termine tu periodo de prueba, tu organización bajará de nivel a {% data variables.product.prodname_free_user %} y perderá acceso a cualquier herramienta avanzada y características que solo se incluyan con los productos de pago. Para más información, vea "[Finalización de la prueba](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud#finishing-your-trial)".

La página de configuración de facturación de tu organización te permite administrar los ajustes como tu método de pago y ciclo de facturación, ver la información sobre tu suscripción y mejorar tu almacenamiento y minutos de {% data variables.product.prodname_actions %}. Para más información sobre cómo administrar la configuración de facturación, vea "[Administración de la configuración de facturación de {% data variables.product.prodname_dotcom %}](/billing/managing-your-github-billing-settings)".

Solo los miembros de la organización con los roles *propietario* o *administrador de facturación* pueden acceder a los valores de facturación de la organización o cambiarlos. Un gerente de facturación es un usuario que administra la configuración de facturación de tu organización y no utiliza una licencia en la suscripción de tu organización. Para más información sobre cómo agregar un administrador de facturación a la organización, vea "[Adición de un administrador de facturación a la organización](/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization)".

### Configurar una cuenta empresarial con {% data variables.product.prodname_ghe_cloud %}

#### 1. Acerca de las cuentas de empresa

Una cuenta empresarial te permite administrar las políticas y ajustes centralmente para organizaciones múltiples de {% data variables.product.prodname_dotcom %}, incluyendo el acceso de los miembros, la facturación, el uso y la seguridad. Para más información, vea "[Acerca de las cuentas de empresa](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts)".

#### 2. Creación de una cuenta de empresa

 Los clientes de {% data variables.product.prodname_ghe_cloud %} que pagan mediante facturas pueden crear una cuenta de empresa directamente desde {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta "[Creación de una cuenta de empresa](/enterprise-cloud@latest/admin/overview/creating-an-enterprise-account)". 
 
 Los clientes de {% data variables.product.prodname_ghe_cloud %} que actualmente no pagan mediante facturas pueden ponerse en contacto con el [equipo de ventas de {% data variables.product.prodname_dotcom %}](https://enterprise.github.com/contact) para que creen una cuenta de empresa en tu nombre.

#### 3. Adición de organizaciones a la cuenta de empresa

Puedes crear nuevas organizaciones para administrar dentro de tu cuenta de empresa. Para más información, vea "[Adición de organizaciones a la empresa](/enterprise-cloud@latest/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise)".

Contacta a tu representante de cuenta de ventas de {% data variables.product.prodname_dotcom %} su quieres transferir una organización existente a tu cuenta empresarial.
#### 4. Visualización de la suscripción y el uso de la cuenta de empresa
Puedes ver tu suscripción actual, uso de licencia, facturas, historial de pagos y otra información de facturación de tu cuenta empresarial en cualquier momento. Tanto los propietarios de empresas como los gerentes de facturación pueden acceder y administrar la configuración de facturación para las cuentas empresariales. Para más información, vea "[Visualización de la suscripción y el uso de la cuenta de empresa](/enterprise-cloud@latest/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)".

## Parte 3: Administrar los equipos y miembros de tu organización o empresa con {% data variables.product.prodname_ghe_cloud %}

### Administrar a los miembros y equipos de tu organización
Puedes configurar los permisos y roles de los miembros, crear y administrar equipos y darles a las personas acceso a los repositorios de tu organización. 
#### 1. Administración de miembros de la organización
{% data reusables.getting-started.managing-org-members %}
#### 2. Permisos y roles de la organización
{% data reusables.getting-started.org-permissions-and-roles %}
#### 3. Acerca de los equipos y creación de equipos
{% data reusables.getting-started.about-and-creating-teams %}
#### 4. Administrar la configuración del equipo
{% data reusables.getting-started.managing-team-settings %}
#### 5. Proporcionar acceso a repositorios, paneles de proyecto y aplicaciones a usuarios y equipos
{% data reusables.getting-started.giving-access-to-repositories-projects-apps %}

### Administrar a los miembros de una cuenta empresarial
Administrar a los miembros de una empresa es algo separado de administrar a los miembros o equipos de una organización. Es importante notar que los propietarios o administradores de una empresa no pueden acceder a los ajustes a nivel organizacional ni administrar a los miembros de las organizaciones en su empresa a menos de que se les haga un propietario de organización. Para más información, vea la sección anterior, "[Administración de miembros y equipos en la organización](#managing-members-and-teams-in-your-organization)".

Si tu empresa utiliza {% data variables.product.prodname_emus %}, tus miembros se administrarán integralmente mediante tu proveedor de identidad. Tanto la adición de miembros, hacer cambios a sus membrecías y asignar roles se administra utilizando tu IdP. Para más información, vea "[Acerca de {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)".

Si tu empresa no utiliza {% data variables.product.prodname_emus %}, sigue estos pasos.

#### 1. Asignación de roles en una empresa
Predeterminadamente, cualquiera en una empresa es un miembro de ella. También existen roles administrativos, incluyendo el del propietario y gerente de facturación, que tienen niveles diferentes de acceso a los datos y ajustes de una empresa. Para más información, vea "[Roles en una empresa](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)".
#### 2. Invitación a usuarios a administrar la empresa
Puedes invitar a personas para que administren tu empresa como propietarios o gerentes de facturación, así como eliminar a los que ya no necesiten acceso. Para más información, vea "[Invitación a usuarios a administrar la empresa](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise)".

También puedes otorgar a los miembros de la empresa la capacidad para que administren tickets de soporte en el portal de soporte. Para más información, vea "[Administración de derechos de soporte técnico para su empresa](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise)".
#### 3. Visualización de personas en la empresa
Para auditar el acceso a los recursos que pertenecen a la empresa o al uso de licencias de los usuarios, puedes ver a todos los administradores, miembros y colaboradores externos de tu empresa. Puedes ver las organizaciones a las cuales pertenece un miembro y especificar los repositorios a los cuales tiene acceso un colaborador. Para más información, vea "[Visualización de personas en la empresa](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise)".

## Parte 4: Administrar la seguridad con {% data variables.product.prodname_ghe_cloud %}

* [Administración de la seguridad de una sola organización](#managing-security-for-a-single-organization)
* [Administración de la seguridad de una {% data variables.enterprise.prodname_emu_enterprise %}](#managing-security-for-an-enterprise-with-managed-users)
* [Administración de la seguridad de una cuenta de empresa sin {% data variables.enterprise.prodname_managed_users %}](#managing-security-for-an-enterprise-account-without-managed-users)

### Administrar la seguridad para una sola organización
Puedes ayudar a que tu organización se mantenga protegida requiriendo autenticación bifactorial, configurando las características de seguridad, revisando las bitácoras de auditoría e integraciones de tu organización y habilitando el inicio de sesión único de SAML y la sincronización de equipos.
#### 1. Obligatoriedad de la autenticación en dos fases
{% data reusables.getting-started.requiring-2fa %}
#### 2. Configurar las características de seguridad de la organización
{% data reusables.getting-started.configuring-security-features %}

#### 3. Revisar el registro de auditoría y las integraciones de la organización
{% data reusables.getting-started.reviewing-org-audit-log-and-integrations %}

#### 4. Habilitación y aplicación del inicio de sesión único de SAML para la organización
Si administras tus aplicaciones y las identidades de tus miembros de la organización con un proveedor de identidad (IdP), puedes configurar el inicio de sesión único (SSO) de SAML para controlar y proteger el acceso a los recursos organizacionales como los repositorios, propuestas y solicitudes de cambio. Cuando los miembros de tu organización acceden a los recursos de la misma que utilicen el SSO de SAML, {% data variables.product.prodname_dotcom %} los redireccionará a tu IdP para autenticarse. Para más información, vea "[Acerca de la administración de identidades y acceso con el inicio de sesión único de SAML](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)".

Los propietarios de la organización pueden elegir inhabilitar, habilitar pero no requerir o habilitar y requerir el SSO de SAML. Para más información, vea ["Habilitación y prueba del inicio de sesión único de SAML para la organización](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization)" y "[Aplicación del inicio de sesión único de SAML para la organización](/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization)".
#### 5. Administración de la sincronización de equipos para la organización
Los propietarios de la organización pueden habilitar la sincronización de equipos entre tu proveedor de identidad (IdP) y {% data variables.product.prodname_dotcom %} para permitir que los propietarios organizacionales y mantenedores de equipo conecten equipos en tu organización con los grupos de IdP. Para más información, vea "[Administración de la sincronización de equipos para la organización](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)".

### Administración de la seguridad de una {% data variables.enterprise.prodname_emu_enterprise %}

Con {% data variables.product.prodname_emus %}, el acceso y la identidad se administran centralmente mediante tu proveedor de identidad. La autenticación bifactorial y otros requisitos de inicio de sesión deben habilitarse y requerirse en tu IdP. 

#### 1. Habilitación del inicio de sesión único de SAML y el aprovisionamiento en {% data variables.enterprise.prodname_emu_enterprise %}

En una {% data variables.enterprise.prodname_emu_enterprise %}, tu proveedor de identidad administra y aprovisiona a todos los miembros. Debes habilitar el SSO de SAML y el aprovisionamiento de SCIM antes de que puedas comenzar a utilizar tu empresa. Para más información sobre cómo configurar SSO y el aprovisionamiento de SAML para una instancia de {% data variables.enterprise.prodname_emu_enterprise %}, consulta "[Configuración del inicio de sesión único de SAML para usuarios administrados de la empresa](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users)".

#### 2. Administración de equipos en {% data variables.enterprise.prodname_emu_enterprise %} con el proveedor de identidades

Puedes conectar equipos en tus organizaciones a grupos de seguridad en tu proveedor de identidad, administrar la membrecía de tus equipos y acceder a repositorios mediante tu IdP. Para más información sobre cómo administrar equipos, vea "[Administración de pertenencias a equipos con grupos de proveedores de identidades](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups)".

#### 3. Administración de direcciones IP permitidas para las organizaciones en {% data variables.enterprise.prodname_emu_enterprise %}

Puedes configurar una lista de direcciones permitidas para IP específicas para restringir el acceso a los activos que pertenecen a las organizaciones de tu {% data variables.enterprise.prodname_emu_enterprise %}. Para más información, vea "[Aplicación de directivas de configuración de seguridad en la empresa](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise)".

#### 4. Aplicación de directivas para las características de Seguridad avanzada en {% data variables.enterprise.prodname_emu_enterprise %}
{% data reusables.getting-started.enterprise-advanced-security %}

### Administración de la seguridad de una cuenta de empresa sin {% data variables.enterprise.prodname_managed_users %}
Para administrar la seguridad de tu empresa, puedes requerir la autenticación bifactorial, administrar las direcciones IP permitidas, habilitar el inicio de sesión único de SAML y la sincronización de equipos a nivel empresaria y darte de alta para y requerir las características de la Seguridad Avanzada de GitHub. 

#### 1. Obligatoriedad de la autenticación en dos fases y administración de direcciones IP permitidas para las organizaciones en la cuenta de empresa
Los propietarios de empresa pueden requerir que los miembros de la organización, gerentes de facturación y colaboradores externos en todas las organizaciones que sean propiedad de una cuenta de empresa usen autenticación de dos factores para proteger sus cuentas personales. Antes de hacerlo, te recomendamos notificar a todos los que tengan acceso a las organizaciones de tu empresa. También puedes configurar una lista de direcciones IP permitidas específicas para restringir el acceso a los activos que pertenecen a las organizaciones en tu cuenta empresarial. 

Para más información sobre la aplicación de la autenticación en dos fases y las listas de direcciones IP permitidas, vea "[Aplicación de directivas para la configuración de seguridad en la empresa](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise)".
#### 2. Habilitación y aplicación del inicio de sesión único de SAML para organizaciones en la cuenta de empresa
Puedes administrar centralmente el acceso a los recursos de tu empresa, la membrecía organizacional y la de equipo utilizando tu IdP e inicio de sesión único (SSO) de SAML. Los propietarios de empresas pueden habilitar el SSO de SAML a través de todas las organizaciones que pertenezcan a una cuenta empresarial. Para más información, vea "[Acerca de la administración de identidades y acceso para la empresa](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/about-identity-and-access-management-for-your-enterprise)".

#### 3. Administración de la sincronización de equipos
Puedes habilitar y administrar la sincronización de equipos entre un proveedor de identidad (IdP) y {% data variables.product.prodname_dotcom %} para permitir que las organizaciones que pertenezcan a tu cuenta empresarial administren la membrecía de los equipos con grupos de IdP. Para más información, vea "[Administración de la sincronización de equipos para organizaciones en la cuenta de empresa](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise)".

#### 4. Aplicación de directivas para las características de Seguridad avanzada en la cuenta de empresa
{% data reusables.getting-started.enterprise-advanced-security %}

## Parte 5: Administrar políticas y ajustes a nivel de empresa y organización

### Administrar los ajustes para una sola organización
Para administrar y moderar tu organización, puedes configurar políticas de organización, administrar permisos para los cambios de repositorio y utilizar archivos de salud comunitaria a nivel de las organizaciones.
#### 1. Administración de directivas de la organización
{% data reusables.getting-started.managing-org-policies %}
#### 2. Administrar cambios en el repositorio
{% data reusables.getting-started.managing-repo-changes %}
#### 3. Usar archivos de mantenimiento y herramientas de moderación de la comunidad de nivel de organización
{% data reusables.getting-started.using-org-community-files-and-moderation-tools %}

### Administrar los ajustes de una cuenta empresarial
Para administrar y moderar tu empresa, puedes configurar políticas para las organizaciones dentro de la empresa, ver las bitácoras de auditoría, configurar webhooks y restringir las notificaciones por correo electrónico.
#### 1. Administración de directivas para organizaciones en la cuenta de empresa

Puedes elegir el requerir varias políticas para todas las organizaciones que pertenezcan a tu empresa o elegir permitir que estas políticas se configuren en cada organización. Los tipos de políticas que puedes requerir incluyen la administración de repositorios, tablero de proyectos y políticas de equipo. Para más información, vea "[Configuración de directivas para la empresa](/enterprise-cloud@latest/admin/policies)".
#### 2. Visualización de registros de auditoría, configuración de webhooks y restricción de notificaciones por correo electrónico para la empresa
Puedes ver las acciones de todas las organizaciones que pertenezcan a tu cuenta empresarial en la bitácora de auditoría empresarial. También puedes configurar webhooks para recibir eventos de organizaciones que pertenecen a tu cuenta de empresa. Para más información, vea "[Revisión de los registros de auditoría de la empresa](/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise)" y "[Supervisión de la empresa](/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise)".

También puedes restringir las notificaciones por correo electrónico de tu cuenta empresarial para que los miembros de tu empresa solo puedan utilizar una dirección de correo electrónico en un dominio aprobado o verificado para recibir notificaciones. Para más información, vea "[Restricción de las notificaciones por correo electrónico para una empresa](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise)".

## Parte 6: Personalizar y automatizar el trabajo de tu organización o empresa en {% data variables.product.prodname_dotcom %}
Los miembros de tu organización o empresa pueden utilizar herramientas desde {% data variables.product.prodname_marketplace %}, la API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} y las características existentes de {% data variables.product.product_name %} para personalizar y automatizar tu trabajo.

### 1. Uso de {% data variables.product.prodname_marketplace %}
{% data reusables.getting-started.marketplace %}
### 2. Uso de la API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}
{% data reusables.getting-started.api %}
### 3. Creación de {% data variables.product.prodname_actions %}
{% data reusables.getting-started.actions %}
### 4. Publicación y administración de {% data variables.product.prodname_registry %} 
{% data reusables.getting-started.packages %}
### 5. Uso de {% data variables.product.prodname_pages %}
{% data variables.product.prodname_pages %} es un servicio de hospedaje de sitios estáticos que toma archivos de HTML, CSS y JavaScript directamente desde un repositorio y publica un sitio web. Puedes administrar la publicación de los sitios de {% data variables.product.prodname_pages %} a nivel organizacional. Para más información, vea "[Administración de la publicación de sitios de {% data variables.product.prodname_pages %} para la organización](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)" y "[Acerca de {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages)".
## Parte 7: Participar en la comunidad de {% data variables.product.prodname_dotcom %}

Los miembros de tu organización o empresa pueden utilizar los recursos de apoyo y aprendizaje de GitHub para obtener la ayuda que necesitan. También puedes apoyar a la comunidad de código abierto. 

### 1. Lectura sobre {% data variables.product.prodname_ghe_cloud %} en {% data variables.product.prodname_docs %}
Puedes leer la documentación que refleje las características disponibles en {% data variables.product.prodname_ghe_cloud %}. Para más información, vea "[Acerca de las versiones de {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs)".

{% data reusables.enterprise.best-practices %}

### 2. Aprendizaje con {% data variables.product.prodname_learning %}
Los miembros de la organización o la empresa pueden aprender aptitudes nuevas si completan proyectos divertidos y realistas en su propio repositorio de GitHub con [{% data variables.product.prodname_learning %}](https://skills.github.com/). Cada curso es una lección práctica que ha creado la comunidad de GitHub y lo imparte un simpático bot.

Para más información, vea "[Recursos de aprendizaje para Git y {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/quickstart/git-and-github-learning-resources)".
### 3. Apoyo para la comunidad de código abierto
{% data reusables.getting-started.sponsors %}

### 4. Contacto con {% data variables.contact.github_support %}
{% data reusables.getting-started.contact-support %}

{% data variables.product.prodname_ghe_cloud %} te permite emitir solicitudes de soporte prioritario con un tiempo de respuesta de ocho horas. Para más información, vea "[Soporte técnico de {% data variables.product.prodname_ghe_cloud %}](/github/working-with-github-support/github-enterprise-cloud-support)".
