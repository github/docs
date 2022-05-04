---
title: Configurar las suscripciones a Visual Studio con GitHub Enterprise
intro: 'La suscripción de tu equipo para {% data variables.product.prodname_vs %} también puede proporcionar acceso a {% data variables.product.prodname_enterprise %}.'
versions:
  ghec: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Configuración
---

## Acerca de la configuración de {% data variables.product.prodname_vss_ghe %}

{% data reusables.enterprise-accounts.vss-ghe-description %} Para ver más información, consulta la sección "[Acerca de las {% data variables.product.prodname_vss_ghe %}](/billing/managing-licenses-for-visual-studio-subscriptions-with-github-enterprise/about-visual-studio-subscriptions-with-github-enterprise)".

Esta guía te muestra cómo tu equipo puede obtener suscriptores de {% data variables.product.prodname_vs %} con licencia y comenzar a utilizar {% data variables.product.prodname_enterprise %}.

Si prefieres ver un video, puedes ver [Configurar tus licencias de {% data variables.product.prodname_enterprise %} con suscripciones de {% data variables.product.prodname_vs %}](https://www.youtube.com/watch?v=P_zBgp_BE_I) en el canal de YouTube de Microsoft Visual Studio.

## Roles para {% data variables.product.prodname_vss_ghe %}

Antes de configurar {% data variables.product.prodname_vss_ghe %}, es importante entender los roles para esta oferta combinada.

| Rol                                | Servicio                                                | Descripción                                                                                                                                     | Más información                                                                                                                                                              |
|:---------------------------------- |:------------------------------------------------------- |:----------------------------------------------------------------------------------------------------------------------------------------------- |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Administrador de suscripciones** | Suscripción de {% data variables.product.prodname_vs %} | Persona que asigna licencias para la suscripción de {% data variables.product.prodname_vs %}                                                    | [Vista general de las responsabilidades de administrador](https://docs.microsoft.com/en-us/visualstudio/subscriptions/admin-responsibilities) en los Documentos de Microsoft |
| **Suscriptor**                     | Suscripción de {% data variables.product.prodname_vs %} | Persona que utiliza una licencia para la suscripción a {% data variables.product.prodname_vs %}                                                 | [Documentación de suscripciones a Visual Studio](https://docs.microsoft.com/en-us/visualstudio/subscriptions/) en los Documentos de Microsoft                                |
| **Propietario de empresa**         | {% data variables.product.prodname_dotcom %}            | Person who has a personal account that's an administrator of an enterprise on {% data variables.product.product_location %}                     | "[Roles en una empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owner)"                                                   |
| **Propietario de organización**    | {% data variables.product.prodname_dotcom %}            | Person who has a personal account that's an owner of an organization in your team's enterprise on {% data variables.product.product_location %} | "[Roles en una organización](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#organization-owners)"                           |
| **Miembro de empresa**             | {% data variables.product.prodname_dotcom %}            | Person who has a personal account that's a member of an enterprise on {% data variables.product.product_location %}                             | "[Roles en una empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-members)"                                                 |

## Prerrequisitos

- La suscripción de tu equipo a {% data variables.product.prodname_vs %} debe incluir a {% data variables.product.prodname_enterprise %}. Para obtener más información, consulta las [Suscripciones y beneficios de {% data variables.product.prodname_vs %}](https://visualstudio.microsoft.com/subscriptions/) en el sitio web de {% data variables.product.prodname_vs %} y el [Resumen de responsabilidades de administrador](https://docs.microsoft.com/en-us/visualstudio/subscriptions/admin-responsibilities) en los Documentos de Microsoft.

 - Tu equipo debe tener una empresa en {% data variables.product.product_location %}. Si no estás seguro de que tu equipo tenga una empresa, contacta a tu administrador de {% data variables.product.prodname_dotcom %}. Si no estás seguro de quién en tu equipo es responsable de {% data variables.product.prodname_dotcom %}, contacta a {% data variables.contact.contact_enterprise_sales %}. Para obtener más información, consulta "[Acerca de las cuentas de empresa](/admin/overview/about-enterprise-accounts)".

## Configurar {% data variables.product.prodname_vss_ghe %}

Para configurar {% data variables.product.prodname_vss_ghe %}, los miembros de tu equipo deben completar las siguientes tareas.

Una persona podría completar las tareas porque tiene todos los roles, pero podrías necesitar coordinar dichas tareas con varias personas. Para obtener más información, consulta la sección "[Roles para {% data variables.product.prodname_vss_ghe %}](#roles-for-visual-studio-subscriptions-with-github-enterprise)".

1. Un propietario de empresa debe crear por lo menos una organización en tu empresa de {% data variables.product.product_location %}. Para obtener más información, consulta la sección "[Agregar organizaciones a tu empresa](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise)".

1. El administrador de suscripciones debe asignar una licencia de {% data variables.product.prodname_vs %} a los suscriptores de {% data variables.product.prodname_vss_admin_portal_with_url %}. Para obtener más información, consulta las secciones [Resumen del portal de administrador de suscripciones de {% data variables.product.prodname_vs %}](https://docs.microsoft.com/en-us/visualstudio/subscriptions/using-admin-portal) y [Asignar licencias de {% data variables.product.prodname_vs %} en el portal de administración de suscripciones de {% data variables.product.prodname_vs %}](https://docs.microsoft.com/en-us/visualstudio/subscriptions/assign-license) en los Documentos de Microsoft.

1. Opcionalmente, si un administrador de suscripción asignó licencias a los suscriptores en {% data variables.product.prodname_vs %} antes de agregar {% data variables.product.prodname_enterprise %} a la suscripción, este administrador puede mover a los suscriptores a la oferta combinada en el portal de administración de {% data variables.product.prodname_vs %}. Para obtener más información, consulta la sección [Administrar las suscripciones de {% data variables.product.prodname_vs %} con {% data variables.product.prodname_enterprise %}](https://docs.microsoft.com/en-us/visualstudio/subscriptions/assign-github#moving-to-visual-studio-with-github-enterprise) en los documentos de Microsoft.

1. Si el administrador de suscripciones no inhabilitó las notificaciones por correo electrónico, el suscriptor recibirá dos correos electrónicos de confirmación. Para obtener más información, consulta la sección [Suscripciones de {% data variables.product.prodname_vs %} con {% data variables.product.prodname_enterprise %}](https://docs.microsoft.com/en-us/visualstudio/subscriptions/access-github#what-is-the-visual-studio-subscription-with-github-enterprise-setup-process) en los documentos de Microsoft.

1. Un propietario de organización debe invitar al suscriptor a la organización en {% data variables.product.product_location %} desde el paso 1. El suscriptor puede aceptar la invitación con una cuenta personal existente de {% data variables.product.prodname_dotcom_the_website %} o crear una cuenta nueva. Después de que el suscriptor se una a la organización, este se convierte en miembro de la empresa. Para obtener más información, consulta la sección "[Invitar usuarios para que se unan a tu organización](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)".

   {% tip %}

   **Tips**:

   - Si bien no se requiere, recomendamos que el propietario de la organización envíe una invitación a la misma dirección de correo electrónico que se utiliza para el Nombre Primario de Usuario (UPN) del suscriptor. Cuando la dirección de correo electrónico de {% data variables.product.product_location %} coincide con el UPN del suscriptor, puedes asegurar que otra empresa no reclame la licencia del suscriptor.
   - Si el suscriptor acepta la invitación a la organización con una cuenta personal existente en {% data variables.product.product_location %}, recomendamos que este agregue la dirección de correo electrónico que utiliza para {% data variables.product.prodname_vs %} a su cuenta personal de {% data variables.product.product_location %}. Para obtener más información, consula la sección "[Agregar una dirección de correo electrónico a tu cuenta de {% data variables.product.prodname_dotcom %}](/account-and-profile/setting-up-and-managing-your-github-user-account/managing-email-preferences/adding-an-email-address-to-your-github-account)".
   - Si el propietario de la organización debe invitar a una gran cantidad de suscriptores, puedes llevar el proceso más rápidamente con un script. Para obtener más información, consulta el [script de ejemplo de PowerShell](https://github.com/github/platform-samples/blob/master/api/powershell/invite_members_to_org.ps1) en el repositorio `github/platform-samples`.

    {% endtip %}

Después de que se configure {% data variables.product.prodname_vss_ghe %} ara los suscriptores de tu equipo, los propietarios de la empresa podrán revisar la información de licencias en {% data variables.product.product_location %}. Para obtener más información, consulta "[Ver la suscripción y el uso de tu cuenta de empresa](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)".

## Leer más

- "[Iniciar con {% data variables.product.prodname_ghe_cloud %}](/get-started/onboarding/getting-started-with-github-enterprise-cloud)"
