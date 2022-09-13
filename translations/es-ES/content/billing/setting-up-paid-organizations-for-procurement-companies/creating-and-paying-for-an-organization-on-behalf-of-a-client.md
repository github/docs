---
title: Crear una organización y pagar por ella en nombre de un cliente
intro: 'Puedes crear una organización {% data variables.product.prodname_dotcom %} y pagar por ella en nombre de un cliente.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/creating-and-paying-for-an-organization-on-behalf-of-a-client
  - /articles/creating-and-paying-for-an-organization-on-behalf-of-a-client
  - /github/setting-up-and-managing-billing-and-payments-on-github/setting-up-paid-organizations-for-procurement-companies/creating-and-paying-for-an-organization-on-behalf-of-a-client
versions:
  fpt: '*'
  ghec: '*'
type: quick_start
topics:
  - User account
  - Organizations
  - Upgrades
shortTitle: On behalf of a client
ms.openlocfilehash: 6c0cdaa09d3e2bf476b6314c38d369ec89840aad
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145091600'
---
## Requisitos

Antes de comenzar, asegúrate de saber lo siguiente:
- El nombre de usuario {% data variables.product.prodname_dotcom %} del cliente que se convertirá en el propietario de la organización que creaste
- El nombre que tu cliente deseará usar para la organización
- La dirección de correo electrónico a la que deseas que se envíen los recibos
- El [producto](/articles/github-s-products) que quiere comprar el cliente.
- El número de [puestos de pago](/articles/about-per-user-pricing/) que el cliente quiere comprar para la organización.

## Paso 1: Crea tu cuenta personal de {% data variables.product.prodname_dotcom %}.

Usarás tu cuenta personal para configurar la organización. También necesitarás iniciar sesión en esta cuenta para renovar la suscripción de tu cliente o hacer cambios en ella en el futuro.

Si ya tienes una cuenta personal en {% data variables.product.prodname_dotcom %}, ve al [paso 2](#step-2-create-the-organization).

1. Vaya a la página [Join GitHub](https://github.com/join) (Unirse a GitHub).
2. En "Create your personal account" (Crear tu cuenta personal), escriba su nombre de usuario, dirección de correo electrónico y contraseña, y luego haga clic en **Create an account** (Crear una cuenta).
![Formulario de entrada para crear una cuenta personal](/assets/images/help/billing/billing_create_your_personal_account_form.png)
3. Selecciona {% data variables.product.prodname_free_user %} para tu cuenta personal.
4. Haga clic en **Finish sign up** (Finalizar registro).

## Paso 2: Crea la organización.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.organizations %} {% data reusables.organizations.new-organization %}
3. En "Elegir el plan", haga clic en **Elegir {% data variables.product.prodname_free_team %}** . Actualizarás la organización en el próximo paso.
{% data reusables.organizations.organization-name %}
5. Debajo de "Contact email" (Correo electrónico de contacto), escribe una dirección de correo electrónico de contacto para tu cliente.
  ![Campo de correo electrónico de contacto](/assets/images/help/organizations/contact-email-field.png) {% data reusables.dotcom_billing.owned_by_business %}
8. Haga clic en **Next**.

## Paso 3: Actualiza la organización para que tenga una suscripción anual paga.


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.billing_plans %} {% data reusables.dotcom_billing.upgrade_org %} {% data reusables.dotcom_billing.choose_org_plan %} (Puede agregar más puestos a la organización en el paso siguiente).
6. En "Upgrade summary" (Resumen de la actualización), seleccione **Pay yearly** (Pago anual) para pagar anualmente por la organización.
![Botón de radio para facturación anual](/assets/images/help/billing/choose-annual-billing-org-resellers.png) {% data reusables.dotcom_billing.enter-payment-info %} {% data reusables.dotcom_billing.finish_upgrade %}

## Paso 4: Actualiza el número de asientos pagos de la organización.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.billing_plans %} {% data reusables.dotcom_billing.add-seats %} {% data reusables.dotcom_billing.number-of-seats %} {% data reusables.dotcom_billing.confirm-add-seats %}

## Paso 5: Invita a tu cliente a unirse a la organización.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.invite_member_from_people_tab %}
5. Escriba el nombre de usuario de {% data variables.product.prodname_dotcom %} del cliente y presione **Enter** (Entrar).
![Campo para escribir el nombre de usuario del cliente](/assets/images/help/organizations/org-invite-modal.png)
6. Elija el rol *propietario* para el cliente y, después, haga clic en **Send invitation** (Enviar invitación).
![Botón de radio de propietario y botón para enviar invitación](/assets/images/help/organizations/add-owner-send-invite-reseller.png)
7. Tu cliente recibirá un correo electrónico en el que se lo invitará a unirse a la organización. Será necesario que acepte la invitación para que puedas continuar con el paso siguiente.

## Paso 6: Transfiere la propiedad de la organización a tu cliente.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. Confirme que el cliente se encuentra en la lista de miembros de la organización y que tiene el rol de *propietario* asignado.
5. A la derecha del nombre de usuario, use el menú desplegable {% octicon "gear" aria-label="The Settings gear" %} y haga clic en **Manage** (Administrar).
  ![El enlace de administración de acceso](/assets/images/help/organizations/member-manage-access.png)
6. A la izquierda, haga clic en **Remove from organization** (Quitar de la organización).
  ![Botón Quitar de la organización](/assets/images/help/organizations/remove-from-org-button.png)
7. Confirme su elección y haga clic en **Remove members** (Quitar miembros).
  ![Botón para confirmar la eliminación de miembros](/assets/images/help/organizations/confirm-remove-from-org.png)

## Pasos siguientes

1. Póngase en contacto con el cliente y pídale que [le agregue a la organización como gerente de facturación](/articles/adding-a-billing-manager-to-your-organization). Será necesario que seas un gerente de facturación de la organización para que puedas renovar la suscripción de tu cliente o hacer cambios en esta en el futuro.
2. Si deseas que la tarjeta de crédito de tu organización se elimine de la organización para que no vuelvan a hacerse cargos en ella, ponte en contacto con {% data variables.contact.contact_support %}.
3. Cuando sea el momento de renovar la suscripción de pago del cliente, vea "[Renovación de la organización de pago del cliente](/articles/renewing-your-client-s-paid-organization)".

## Información adicional

- "[Acerca de las organizaciones para empresas de contratación](/articles/about-organizations-for-procurement-companies)"
- "[Cambio de la organización de pago del cliente a una versión posterior o anterior](/articles/upgrading-or-downgrading-your-client-s-paid-organization)"
- "[Renovación de la organización de pago del cliente](/articles/renewing-your-client-s-paid-organization)"
