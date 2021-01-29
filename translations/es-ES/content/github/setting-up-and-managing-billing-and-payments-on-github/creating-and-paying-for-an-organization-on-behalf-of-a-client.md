---
title: Crear una organización y pagar por ella en nombre de un cliente
intro: 'Puedes crear una organización {% data variables.product.prodname_dotcom %} y pagar por ella en nombre de un cliente.'
redirect_from:
  - /articles/creating-and-paying-for-an-organization-on-behalf-of-a-client
versions:
  free-pro-team: '*'
---

### Requisitos

Antes de comenzar, asegúrate de saber lo siguiente:
- El nombre de usuario {% data variables.product.prodname_dotcom %} del cliente que se convertirá en el propietario de la organización que creaste
- El nombre que tu cliente deseará usar para la organización
- La dirección de correo electrónico a la que deseas que se envíen los recibos
- El [producto](/articles/github-s-products) que tu cliente desea comprar
- El número de [asientos pagos](/articles/about-per-user-pricing/) que tu cliente desea comprar para la organización

### Paso 1: Crea tu cuenta personal de {% data variables.product.prodname_dotcom %}.

Usarás tu cuenta personal para configurar la organización. También necesitarás iniciar sesión en esta cuenta para renovar la suscripción de tu cliente o hacer cambios en ella en el futuro.

Si ya posees una cuenta de usuario de {% data variables.product.prodname_dotcom %}, omite el [paso 2](#step-2-create-the-organization).

1. Dirígete a la página [Unirse a GitHub](https://github.com/join).
2. En "Crear tu cuenta personal", escribe tu nombre de usuario, dirección de correo electrónico y contraseña, y luego haz clic en **Crear una cuenta**. ![Crear el formulario de ingreso a una cuenta personal](/assets/images/help/billing/billing_create_your_personal_account_form.png)
3. Selecciona {% data variables.product.prodname_free_user %} para tu cuenta personal.
4. Haz clic en **Finalizar registración**.

### Paso 2: Crea la organización.

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.organizations %}
{% data reusables.organizations.new-organization %}
3. Dentro de "Choose a plan" (Elegir un plan), haz clic en **Choose (Elegir) {% data variables.product.prodname_free_team %}**. Actualizarás la organización en el próximo paso.
{% data reusables.organizations.organization-name %}
5. Debajo de "Contact email" (Correo electrónico de contacto), escribe una dirección de correo electrónico de contacto para tu cliente. ![Campo para el correo electrónico de contacto](/assets/images/help/organizations/contact-email-field.png)
{% data reusables.dotcom_billing.owned_by_business %}
8. Da clic en **Siguiente**.

### Paso 3: Actualiza la organización para que tenga una suscripción anual paga.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
{% data reusables.dotcom_billing.upgrade_org %}
{% data reusables.dotcom_billing.choose_org_plan %} (Puedes agregar más asientos a la organización en el siguiente paso).
6. En "Actualizar resumen", selecciona **Pago anual** para pagar por la organización de forma anual. ![Botón de selección para la facturación anual](/assets/images/help/billing/choose-annual-billing-org-resellers.png)
{% data reusables.dotcom_billing.show-plan-details %}
{% data reusables.dotcom_billing.add-payment-method %}
1. En "Pagar con" escribe los datos de tu tarjeta de crédito.![Formulario para ingresar datos de tarjeta de crédito](/assets/images/help/billing/settings_billing_upgrade_with_credit_card.png)
1. Haz clic en **Actualizar tarjeta de crédito**.
{% data reusables.dotcom_billing.finish_upgrade %}

### Paso 4: Actualiza el número de asientos pagos de la organización.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
{% data reusables.dotcom_billing.add-seats %}
{% data reusables.dotcom_billing.number-of-seats %}
{% data reusables.dotcom_billing.confirm-add-seats %}

### Paso 5: Invita a tu cliente a unirse a la organización.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.invite_member_from_people_tab %}
5. Escribe el nombre de usuario de {% data variables.product.prodname_dotcom %} de tu cliente y presiona **Enter**. ![Campo para escribir el nombre de usuario de tu cliente](/assets/images/help/organizations/org-invite-modal.png)
6. Elige el rol de *propietario* para tu cliente y luego haz clic en **Enviar invitación**. ![Botón de selección para el propietario y botón para enviar invitación](/assets/images/help/organizations/add-owner-send-invite-reseller.png)
7. Tu cliente recibirá un correo electrónico en el que se lo invitará a unirse a la organización. Será necesario que acepte la invitación para que puedas continuar con el paso siguiente.

### Paso 6: Transfiere la propiedad de la organización a tu cliente.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
4. Verifica que tu cliente se encuentre en la lista de miembros de la organización y tenga el rol de *propietario* asignado.
5. A la derecha de tu nombre de usuario, usa el menú desplegable {% octicon "gear" aria-label="The Settings gear" %} y haz clic en **Administrar**. ![Enlace de acceso al gerente](/assets/images/help/organizations/member-manage-access.png)
6. A la izquierda, haz clic en **Eliminar de la organización**. ![Botón para eliminar de la organización ](/assets/images/help/organizations/remove-from-org-button.png)
7. Confirma tu opción y haz clic en **Eliminar miembros**. ![Botón para confirmar la eliminación de miembros](/assets/images/help/organizations/confirm-remove-from-org.png)

### Pasos siguientes

1. Ponte en contacto con tu cliente y pídele que [te agregue a la organización como gerente de facturación](/articles/adding-a-billing-manager-to-your-organization). Será necesario que seas un gerente de facturación de la organización para que puedas renovar la suscripción de tu cliente o hacer cambios en esta en el futuro.
2. Si deseas que la tarjeta de crédito de tu organización se elimine de la organización para que no vuelvan a hacerse cargos en ella, ponte en contacto con {% data variables.contact.contact_support %}.
3. Cuando sea el momento de renovar la suscripción paga de tu cliente, consulta "[Renovar la organización paga de tu cliente](/articles/renewing-your-client-s-paid-organization)".

### Further reading

- "[Acerca de las organizaciones para empresas de contratación](/articles/about-organizations-for-procurement-companies)"
- "[Actualizar o bajar de categoría la organización paga de tu cliente](/articles/upgrading-or-downgrading-your-client-s-paid-organization)"
- "[Renovar la organización paga de tu cliente](/articles/renewing-your-client-s-paid-organization)"
