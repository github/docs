---
title: Setting up Visual Studio subscriptions with GitHub Enterprise
intro: 'Your team''s subscription to {% data variables.product.prodname_vs %} can also provide access to {% data variables.product.prodname_enterprise %}.'
versions:
  ghec: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Configuración
---

## About setup of {% data variables.product.prodname_vss_ghe %}

{% data reusables.enterprise-accounts.vss-ghe-description %} Para ver más información, consulta la sección "[Acerca de las {% data variables.product.prodname_vss_ghe %}](/billing/managing-licenses-for-visual-studio-subscriptions-with-github-enterprise/about-visual-studio-subscriptions-with-github-enterprise)".

This guide shows you how your team can get {% data variables.product.prodname_vs %} subscribers licensed and started with {% data variables.product.prodname_enterprise %}.

## Roles for {% data variables.product.prodname_vss_ghe %}

Before setting up {% data variables.product.prodname_vss_ghe %}, it's important to understand the roles for this combined offering.

| Role                       | Servicio                                                | Descripción                                                                                                                                 | Más información                                                                                                                                    |
|:-------------------------- |:------------------------------------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------- |:-------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Subscriptions admin**    | {% data variables.product.prodname_vs %} subscription   | Person who assigns licenses for {% data variables.product.prodname_vs %} subscription                                                       | [Overview of admin responsibilities](https://docs.microsoft.com/en-us/visualstudio/subscriptions/admin-responsibilities) in Microsoft Docs         |
| **Subscriber**             | Suscripción de {% data variables.product.prodname_vs %} | Person who uses a license for {% data variables.product.prodname_vs %} subscription                                                         | [Visual Studio Subscriptions documentation](https://docs.microsoft.com/en-us/visualstudio/subscriptions/) in Microsoft Docs                        |
| **Propietario de empresa** | {% data variables.product.prodname_dotcom %}            | Person who has a user account that's an administrator of an enterprise on {% data variables.product.product_location %}                     | "[Roles en una empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owner)"                         |
| **Organization owner**     | {% data variables.product.prodname_dotcom %}            | Person who has a user account that's an owner of an organization in your team's enterprise on {% data variables.product.product_location %} | "[Roles en una organización](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#organization-owners)" |
| **Miembro de empresa**     | {% data variables.product.prodname_dotcom %}            | Person who has a user account that's a member of an enterprise on {% data variables.product.product_location %}                             | "[Roles en una empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-members)"                       |

## Prerrequisitos

- Your team's {% data variables.product.prodname_vs %} subscription must include {% data variables.product.prodname_enterprise %}. Para obtener más información, consulta las [Suscripciones y beneficios de {% data variables.product.prodname_vs %}](https://visualstudio.microsoft.com/subscriptions/) en el sitio web de {% data variables.product.prodname_vs %} y el [Resumen de responsabilidades de administrador](https://docs.microsoft.com/en-us/visualstudio/subscriptions/admin-responsibilities) en los Documentos de Microsoft.

 - Your team must have an enterprise on {% data variables.product.product_location %}. If you're not sure whether your team has an enterprise, contact your {% data variables.product.prodname_dotcom %} administrator. If you're not sure who on your team is responsible for {% data variables.product.prodname_dotcom %}, contact {% data variables.contact.contact_enterprise_sales %}. Para obtener más información, consulta "[Acerca de las cuentas de empresa](/admin/overview/about-enterprise-accounts)".

## Configurar {% data variables.product.prodname_vss_ghe %}

To set up {% data variables.product.prodname_vss_ghe %}, members of your team must complete the following tasks.

One person may be able to complete the tasks because the person has all of the roles, but you may need to coordinate the tasks with multiple people. Para obtener más información, consulta la sección "[Roles para {% data variables.product.prodname_vss_ghe %}](#roles-for-visual-studio-subscriptions-with-github-enterprise)".

1. An enterprise owner must create at least one organization in your enterprise on {% data variables.product.product_location %}. Para obtener más información, consulta la sección "[Agregar organizaciones a tu empresa](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise)".

1. The subscription admin must assign a license for {% data variables.product.prodname_vs %} to a subscriber in {% data variables.product.prodname_vss_admin_portal_with_url %}. Para obtener más información, consulta las secciones [Resumen del portal de administrador de suscripciones de {% data variables.product.prodname_vs %}](https://docs.microsoft.com/en-us/visualstudio/subscriptions/using-admin-portal) y [Asignar licencias de {% data variables.product.prodname_vs %} en el portal de administración de suscripciones de {% data variables.product.prodname_vs %}](https://docs.microsoft.com/en-us/visualstudio/subscriptions/assign-license) en los Documentos de Microsoft.

1. Opcionalmente, si un administrador de suscripción asignó licencias a los suscriptores en {% data variables.product.prodname_vs %} antes de agregar {% data variables.product.prodname_enterprise %} a la suscripción, este administrador puede mover a los suscriptores a la oferta combinada en el portal de administración de {% data variables.product.prodname_vs %}. Para obtener más información, consulta la sección [Administrar las suscripciones de {% data variables.product.prodname_vs %} con {% data variables.product.prodname_enterprise %}](https://docs.microsoft.com/en-us/visualstudio/subscriptions/assign-github#moving-to-visual-studio-with-github-enterprise) en los documentos de Microsoft.

1. If the subscription admin has not disabled email notifications, the subscriber will receive two confirmation emails. Para obtener más información, consulta la sección [Suscripciones de {% data variables.product.prodname_vs %} con {% data variables.product.prodname_enterprise %}](https://docs.microsoft.com/en-us/visualstudio/subscriptions/access-github#what-is-the-visual-studio-subscription-with-github-enterprise-setup-process) en los documentos de Microsoft.

1. An organization owner must invite the subscriber to the organization on {% data variables.product.product_location %} from step 1. El suscriptor puede aceptar la invitación con una cuenta de usuario existente en {% data variables.product.prodname_dotcom_the_website %} o crear una cuenta nueva. After the subscriber joins the organization, the subscriber becomes an enterprise member. Para obtener más información, consulta la sección "[Invitar usuarios para que se unan a tu organización](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)".

   {% tip %}

   **Tips**:

   - While not required, we recommend that the organization owner sends an invitation to the same email address used for the subscriber's User Primary Name (UPN). When the email address on {% data variables.product.product_location %} matches the subscriber's UPN, you can ensure that another enterprise does not claim the subscriber's license.
   - Si el suscriptor acepta la invitación a la organización con una cuenta de usuario existente en {% data variables.product.product_location %}, recomendamos que este agregue la dirección de correo electrónico que utiliza para {% data variables.product.prodname_vs %} a su cuenta de usuario de {% data variables.product.product_location %}. Para obtener más información, consula la sección "[Agregar una dirección de correo electrónico a tu cuenta de {% data variables.product.prodname_dotcom %}](/account-and-profile/setting-up-and-managing-your-github-user-account/managing-email-preferences/adding-an-email-address-to-your-github-account)".
   - If the organization owner must invite a large number of subscribers, a script may make the process faster. For more information, see [the sample PowerShell script](https://github.com/github/platform-samples/blob/master/api/powershell/invite_members_to_org.ps1) in the `github/platform-samples` repository.

    {% endtip %}

After {% data variables.product.prodname_vss_ghe %} is set up for subscribers on your team, enterprise owners can review licensing information on {% data variables.product.product_location %}. Para obtener más información, consulta "[Ver la suscripción y el uso de tu cuenta de empresa](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)".

## Leer más

- "[Iniciar con {% data variables.product.prodname_ghe_cloud %}](/get-started/onboarding/getting-started-with-github-enterprise-cloud)"
