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
## Setting your enterprise's billing email

Your enterprise's billing email is where {% data variables.product.product_name %} sends receipts and other billing-related communication. The email address does not need to be unique to the enterprise account.

Only enterprise members with the owner or billing manager role can access or change billing settings for your enterprise. Para obtener más información, consulta la sección "[Administrar usuarios en tu empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)".

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. Click **Billing emails**.
2. Under "Email recipients", to the right of the billing email address, click **Edit**. ![Screenshot of the current billing email with the edit button emphasized](/assets/images/help/billing/billing-change-email.png)
2. Teclea una dirección de correo electrónico válida y luego haz clic en **Actualizar**. ![Screenshot of the edit billing email address modal window with a sample email address entered](/assets/images/help/billing/billing-change-email-modal.png)

## Managing additional recipients for your enterprise's billing email

Si tienes usuarios que quieran recibir reportes de facturación, puedes agregar sus direcciones de correo electrónico como destinatarios del correo de facturación.

Only enterprise members with the owner or billing manager role can access or change billing settings for your enterprise. Para obtener más información, consulta la sección "[Administrar usuarios en tu empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)".

### Agregar un destinatario para las notificaciones de facturación

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. Click **Billing emails**.
2. Under "Email recipients", to the right of the billing email address, click **Add**. ![Screenshot of the current billing email with the add button emphasized](/assets/images/help/billing/billing-add-email-recipient.png)
3. Teclea la dirección de correo electrónico del destinatario y luego da clic en **Agregar**. ![Screenshot of the add billing email address modal window without a sample email address entered](/assets/images/help/billing/billing-add-email-recipient-modal.png)

### Eliminar un destinatario de las notificaciones de facturación

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. Click **Billing emails**.
2. Debajo de "Destinatarios de correo electrónico", encuentra la dirección de correo electrónico que quieres eliminar.
3. Para la entrada del usuario en la lista, da clic en **Editar**. ![Screenshot of the recipient's email with the edit button emphasized](/assets/images/help/billing/billing-edit-email-recipient.png)
4. A la derecha de la dirección de correo electrónico, utiliza el menú desplegable "Editar" y haz clic en **Eliminar**. ![Screenshot of the recipient's email with the remove button emphasized](/assets/images/help/billing/billing-remove-email-recipient.png)
5. Revisa el mensaje de confirmación y luego da clic en **Eliminar**.
{% endif %}
