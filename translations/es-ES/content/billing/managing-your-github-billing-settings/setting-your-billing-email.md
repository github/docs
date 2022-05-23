---
title: Configurar tu correo electrónico de facturación
intro: 'El correo electrónico de facturación de tu cuenta es donde {% data variables.product.product_name %} envía los recibos y otras comunicaciones relacionadas con la facturación.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/setting-your-billing-email
  - /articles/setting-your-personal-account-s-billing-email
  - /articles/can-i-change-what-email-address-received-my-github-receipt
  - '/articles/how-do-i-change-the-billing-email,setting-your-billing-email'
  - /articles/setting-your-organization-s-billing-email
  - /articles/setting-your-billing-email
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-your-github-billing-settings/setting-your-billing-email
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Organizations
  - User account
shortTitle: Correo electrónico de facturación
---

## Configurar el correo electrónico de facturación de tu cuenta personal

El correo electrónico principal de tu cuenta personal es donde {% data variables.product.product_name %} envía los recibos y otras comunicaciones relacionadas con la facturación.

Tu dirección principal de correo electrónico es el primer correo electrónico enumerado en las configuraciones de correo electrónico de tu cuenta. También utilizamos tu dirección principal de correo electrónico como nuestra dirección de correo electrónico de facturación.

Si deseas cambiar tu correo electrónico de facturación, consulta "[Cambiar tu dirección principal de correo electrónico](/articles/changing-your-primary-email-address)."

## Configurar el correo electrónico de facturación de tu organización

El correo electrónico de facturación de tu organización es donde {% data variables.product.product_name %} envía los recibos y otras comunicaciones relacionadas con la facturación. La dirección de correo electrónico no necesariamente debe ser única para la cuenta de la organización.

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.organizations.billing-settings %}
1. Debabjo de "Administración de facturación", a la derecha de la dirección de correo electrónico para facturación, haz clic en **Editar**. ![Correos electrónicos de facturación actuales](/assets/images/help/billing/billing-change-email.png)
2. Teclea una dirección de correo electrónico válida y luego haz clic en **Actualizar**. ![Cambiar el modo de la dirección de correo electrónico para facturación](/assets/images/help/billing/billing-change-email-modal.png)

## Administrar los destinatarios adicionales para tu correo electrónico de facturación de la organización

Si tienes usuarios que quieran recibir reportes de facturación, puedes agregar sus direcciones de correo electrónico como destinatarios del correo de facturación. Esta característica se encuentra únicamente disponible para las organizaciones que no gestione una empresa.

{% data reusables.dotcom_billing.org-billing-perms %}

### Agregar un destinatario para las notificaciones de facturación

{% data reusables.organizations.billing-settings %}
1. Debajo de "Administración de facturación", a la derecha de "Destinatarios de correo electrónico", da clic en **Agregar**. ![Agregar destinatario](/assets/images/help/billing/billing-add-email-recipient.png)
1. Teclea la dirección de correo electrónico del destinatario y luego da clic en **Agregar**. ![Agregar modal de destinatario](/assets/images/help/billing/billing-add-email-recipient-modal.png)

### Cambiar el destinatario principal de las notificaciones de facturación

Siempre debe existir una dirección designada como el destinatario principal. La dirección con esta designación no puede eliminarse hasta que se seleccione un destinatario primario.

{% data reusables.organizations.billing-settings %}
1. Debajo de "Administración de facturación", encuentra la dirección de correo electrónico que quieras configurar como el destinatario principal.
1. A la derecha de la dirección de correo electrónico, utiliza el menú desplegable de "Editar", y da clic en **Marcar como principal**. ![Marcar destinatario principal](/assets/images/help/billing/billing-change-primary-email-recipient.png)

### Eliminar un destinatario de las notificaciones de facturación

{% data reusables.organizations.billing-settings %}
1. Debajo de "Destinatarios de correo electrónico", encuentra la dirección de correo electrónico que quieres eliminar.
1. Para la entrada del usuario en la lista, da clic en **Editar**. ![Editar destinatario](/assets/images/help/billing/billing-edit-email-recipient.png)
1. A la derecha de la dirección de correo electrónico, utiliza el menú desplegable "Editar" y haz clic en **Eliminar**. ![Eliminar destinatario](/assets/images/help/billing/billing-remove-email-recipient.png)
1. Revisa el mensaje de confirmación y luego da clic en **Eliminar**.

{% ifversion ghec %}
## Configurar el correo electrónico de facturación de la empresa

El correo electrónico de facturación de tu empresa es a donde {% data variables.product.product_name %} envía recibos y otra información relacionada con las facturas. La dirección de correo electrónico no necesita ser única para la cuenta empresarial.

Solo los miembros de las empresas con roles de gerente de facturación o de propietario pueden acceder o cambiar los ajustes de facturación de tu empresa. Para obtener más información, consulta la sección "[Administrar usuarios en tu empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)".

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. Haz clic en **Correos electrónicos de facturación**.
2. Debajo de "Receptores de correo electrónico", a la derecha de la dirección de correo electrónico para facturación, haz clic en **Editar**. ![Captura de pantalla del correo de facturación actual con énfasis en el botón de edición](/assets/images/help/billing/billing-change-email.png)
2. Teclea una dirección de correo electrónico válida y luego haz clic en **Actualizar**. ![Captura de pantalla de la ventana de editar dirección de correo electrónico para facturación con una dirección de correo electrónico de muestra escrita en ella](/assets/images/help/billing/billing-change-email-modal.png)

## Administrar los receptores adicionales de la dirección de correo electrónico de facturación de tu empresa

Si tienes usuarios que quieran recibir reportes de facturación, puedes agregar sus direcciones de correo electrónico como destinatarios del correo de facturación.

Solo los miembros de las empresas con roles de gerente de facturación o de propietario pueden acceder o cambiar los ajustes de facturación de tu empresa. Para obtener más información, consulta la sección "[Administrar usuarios en tu empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)".

### Agregar un destinatario para las notificaciones de facturación

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. Haz clic en **Correos electrónicos de facturación**.
2. Debajo de "Receptores de correo electrónico", a la derecha de la dirección de correo electrónico para facturación, haz clic en **Agregar**. ![Captura de pantalla de la dirección de correo electrónico actual con énfasis en el botón de agregar](/assets/images/help/billing/billing-add-email-recipient.png)
3. Teclea la dirección de correo electrónico del destinatario y luego da clic en **Agregar**. ![Captura de pantalla de la pantalla modal de dirección de correo electrónico de facturación sin una dirección ingresada](/assets/images/help/billing/billing-add-email-recipient-modal.png)

### Eliminar un destinatario de las notificaciones de facturación

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. Haz clic en **Correos electrónicos de facturación**.
2. Debajo de "Destinatarios de correo electrónico", encuentra la dirección de correo electrónico que quieres eliminar.
3. Para la entrada del usuario en la lista, da clic en **Editar**. ![Captura de pantalla del correo electrónico del receptor con énfasis en el botón de edición](/assets/images/help/billing/billing-edit-email-recipient.png)
4. A la derecha de la dirección de correo electrónico, utiliza el menú desplegable "Editar" y haz clic en **Eliminar**. ![Captura de pantalla del correo electrónico del receptor con énfasis en el botón de eliminar](/assets/images/help/billing/billing-remove-email-recipient.png)
5. Revisa el mensaje de confirmación y luego da clic en **Eliminar**.
{% endif %}
