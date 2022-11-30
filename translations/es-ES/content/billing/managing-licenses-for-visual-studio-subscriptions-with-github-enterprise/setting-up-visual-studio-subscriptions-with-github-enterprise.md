---
title: Configurar las suscripciones a Visual Studio con GitHub Enterprise
intro: 'La suscripción de tu equipo para {% data variables.product.prodname_vs %} también puede proporcionar acceso a {% data variables.product.prodname_enterprise %}.'
versions:
  ghec: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Set up
ms.openlocfilehash: ae030de637593aa723a5d2990485881ae30b333c
ms.sourcegitcommit: 6b649e03ca2fef38c9ebbeec92102219849380e2
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/31/2022
ms.locfileid: '148120629'
---
## Acerca de la configuración de {% data variables.visual_studio.prodname_vss_ghe %}

{% data reusables.enterprise-accounts.vss-ghe-description %} Para obtener más información, consulta "[Acerca de {% data variables.visual_studio.prodname_vss_ghe %}](/billing/managing-licenses-for-visual-studio-subscriptions-with-github-enterprise/about-visual-studio-subscriptions-with-github-enterprise)."

Esta guía te muestra cómo tu equipo puede obtener suscriptores de {% data variables.product.prodname_vs %} con licencia y comenzar a utilizar {% data variables.product.prodname_enterprise %}.

Si prefiere ver un video, puede ver [Setting up your {% data variables.product.prodname_enterprise %} licenses with {% data variables.product.prodname_vs %} subscriptions](https://www.youtube.com/watch?v=P_zBgp_BE_I) (Configuración de las licencias de GitHub Enterprise con suscripciones de Visual Studio) en el canal de Microsoft Visual Studio en YouTube.

## Roles para {% data variables.visual_studio.prodname_vss_ghe %}

Antes de configurar {% data variables.visual_studio.prodname_vss_ghe %}, es importante entender los roles para esta oferta combinada.

| Role | Servicio | Descripción | Más información |
| :- | :- | :- | :- |
| **Administrador de suscripciones** | Suscripción de {% data variables.product.prodname_vs %} | Persona que asigna licencias para la suscripción de {% data variables.product.prodname_vs %} | [Información general sobre las responsabilidades del administrador](https://docs.microsoft.com/en-us/visualstudio/subscriptions/admin-responsibilities) en Microsoft Docs |
| **Suscriptor** | Suscripción de {% data variables.product.prodname_vs %} | Persona que utiliza una licencia para la suscripción a {% data variables.product.prodname_vs %} | [Documentación de Suscripciones de Visual Studio](https://docs.microsoft.com/en-us/visualstudio/subscriptions/) en Microsoft Docs |
| **Propietario de la empresa** | {% data variables.product.prodname_dotcom %} | Usuario que tiene una cuenta personal que es administradora de una empresa en {% data variables.location.product_location %} | "[Roles en una empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owner)" |
| **Propietario de la organización** | {% data variables.product.prodname_dotcom %} | Usuario que tiene una cuenta personal que es propietaria de una organización en la empresa de tu equipo en {% data variables.location.product_location %} | "[Roles en una organización](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#organization-owners)" |
| **Miembro de la empresa** | {% data variables.product.prodname_dotcom %} | Usuario que tiene una cuenta personal que es miembro de una empresa en {% data variables.location.product_location %} | "[Roles en una empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-members)"  |

## Prerrequisitos

- La suscripción de tu equipo a {% data variables.product.prodname_vs %} debe incluir a {% data variables.product.prodname_enterprise %}. Para más información, vea [Suscripciones y ventajas de {% data variables.product.prodname_vs %}](https://visualstudio.microsoft.com/subscriptions/) en el sitio web de {% data variables.product.prodname_vs %} e [Introducción a las responsabilidades del administrador](https://docs.microsoft.com/en-us/visualstudio/subscriptions/admin-responsibilities) en Microsoft Docs.
 
 - Tu equipo debe tener una empresa en {% data variables.location.product_location %}. Si no estás seguro de que tu equipo tenga una empresa, contacta a tu administrador de {% data variables.product.prodname_dotcom %}. Si no estás seguro de quién en tu equipo es responsable de {% data variables.product.prodname_dotcom %}, contacta a {% data variables.contact.contact_enterprise_sales %}. Para más información, vea "[Acerca de las cuentas empresariales](/admin/overview/about-enterprise-accounts)".

## Configuración de {% data variables.visual_studio.prodname_vss_ghe %}

Para configurar {% data variables.visual_studio.prodname_vss_ghe %}, los miembros de tu equipo deben completar las siguientes tareas.

Una persona podría completar las tareas porque tiene todos los roles, pero podrías necesitar coordinar dichas tareas con varias personas. Para más información, consulta "[Roles para {% data variables.visual_studio.prodname_vss_ghe %}](#roles-for-visual-studio-subscriptions-with-github-enterprise)".

1. Un propietario de empresa debe crear por lo menos una organización en tu empresa de {% data variables.location.product_location %}. Para más información, vea "[Adición de organizaciones a la empresa](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise)".

1. El administrador de suscripciones debe asignar una licencia de {% data variables.product.prodname_vs %} a los suscriptores de {% data variables.visual_studio.prodname_vss_admin_portal_with_url %}. Para más información, vea [Introducción al portal del administrador de suscripciones de {% data variables.product.prodname_vs %}](https://docs.microsoft.com/en-us/visualstudio/subscriptions/using-admin-portal) y [Asignación de licencias de {% data variables.product.prodname_vs %} en el Portal de administración de suscripciones de {% data variables.product.prodname_vs %}](https://docs.microsoft.com/en-us/visualstudio/subscriptions/assign-license) en Microsoft Docs.

1. Opcionalmente, si un administrador de suscripción asignó licencias a los suscriptores en {% data variables.product.prodname_vs %} antes de agregar {% data variables.product.prodname_enterprise %} a la suscripción, este administrador puede mover a los suscriptores a la oferta combinada en el portal de administración de {% data variables.product.prodname_vs %}. Para más información, vea [Administración de suscripciones de {% data variables.product.prodname_vs %} con {% data variables.product.prodname_enterprise %}](https://docs.microsoft.com/en-us/visualstudio/subscriptions/assign-github#moving-to-visual-studio-with-github-enterprise) en Microsoft Docs.

1. Si el administrador de suscripciones no inhabilitó las notificaciones por correo electrónico, el suscriptor recibirá dos correos electrónicos de confirmación. Para más información, vea [Suscripciones de {% data variables.product.prodname_vs %} con {% data variables.product.prodname_enterprise %}](https://docs.microsoft.com/en-us/visualstudio/subscriptions/access-github#what-is-the-visual-studio-subscription-with-github-enterprise-setup-process) en Microsoft Docs.

1. Un propietario de organización debe invitar al suscriptor a la organización en {% data variables.location.product_location %} desde el paso 1. El suscriptor puede aceptar la invitación con una cuenta de usuario existente en {% data variables.product.prodname_dotcom_the_website %} o crear una cuenta. Después de que el suscriptor se una a la organización, este se convierte en miembro de la empresa. Para más información, vea "[Invitación a los usuarios a unirse a la organización](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)".

   {% tip %}

   **Sugerencias**:

   - Si bien no se requiere, recomendamos que el propietario de la organización envíe una invitación a la misma dirección de correo electrónico que se utiliza para el Nombre Primario de Usuario (UPN) del suscriptor. Cuando la dirección de correo electrónico de {% data variables.location.product_location %} coincide con el UPN del suscriptor, puedes asegurar que otra empresa no reclame la licencia del suscriptor.
   - Si el suscriptor acepta la invitación a la organización con una cuenta personal existente en {% data variables.location.product_location %}, recomendamos que este agregue la dirección de correo electrónico que utiliza para {% data variables.product.prodname_vs %} a su cuenta personal de {% data variables.location.product_location %}. Para más información, vea "[Adición de una dirección de correo electrónico a la cuenta de {% data variables.product.prodname_dotcom %}](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/adding-an-email-address-to-your-github-account)".
   - Si el propietario de la organización debe invitar a una gran cantidad de suscriptores, puedes llevar el proceso más rápidamente con un script. Para más información, vea [el script de PowerShell de ejemplo](https://github.com/github/platform-samples/blob/master/api/powershell/invite_members_to_org.ps1) en el repositorio `github/platform-samples`.

    {% endtip %}

Después de que se configure {% data variables.visual_studio.prodname_vss_ghe %} para los suscriptores de tu equipo, los propietarios de la empresa podrán revisar la información de licencias en {% data variables.location.product_location %}. Para más información, vea "[Visualización de la suscripción y el uso de la cuenta empresarial](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)".

## Información adicional

- "[Introducción a {% data variables.product.prodname_ghe_cloud %}](/get-started/onboarding/getting-started-with-github-enterprise-cloud)"
