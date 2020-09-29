---
title: Configurar tu correo electrónico de facturación
intro: 'El correo electrónico de facturación de tu cuenta es donde {% data variables.product.product_name %} envía los recibos y otras comunicaciones relacionadas con la facturación.'
redirect_from:
  - /articles/setting-your-personal-account-s-billing-email/
  - /articles/can-i-change-what-email-address-received-my-github-receipt/
  - '/articles/how-do-i-change-the-billing-email,setting-your-billing-email/'
  - /articles/setting-your-organization-s-billing-email/
  - /articles/setting-your-billing-email
versions:
  free-pro-team: '*'
---

### Configurar el correo electrónico de facturación de tu cuenta personal

El correo electrónico principal de tu cuenta personal es donde {% data variables.product.product_name %} envía los recibos y otras comunicaciones relacionadas con la facturación.

Tu dirección principal de correo electrónico es el primer correo electrónico enumerado en las configuraciones de correo electrónico de tu cuenta. También utilizamos tu dirección principal de correo electrónico como nuestra dirección de correo electrónico de facturación.

Si deseas cambiar tu correo electrónico de facturación, consulta "[Cambiar tu dirección principal de correo electrónico](/articles/changing-your-primary-email-address)."

### Configurar el correo electrónico de facturación de tu organización

El correo electrónico de facturación de tu organización es donde {% data variables.product.product_name %} envía los recibos y otras comunicaciones relacionadas con la facturación.

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
4. Dentro de **Billing email (Correo electrónico de facturación)**, escribe una dirección de correo electrónico válida. El correo electrónico no necesariamente debe ser único para la cuenta de la organización. ![Casilla de texto para el correo electrónico de facturación](/assets/images/help/settings/org-billing-email.png)
5. Para confirmar tus cambios, haz clic en **Update profile (Actualizar perfil)**. ![Botón Actualizar perfil](/assets/images/help/settings/update-profile-button.png)

### Managing additional recipients for your organization's billing email

If you have users that want to receive billing reports, you can add their email addresses as billing email recipients. This feature is only available to organizations that are not managed by an enterprise.

#### Adding a recipient for billing notifications

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
1. Under "Billing management", to the right of "Email recipients", click **Add**. ![Add recipient](/assets/images/help/billing/billing-add-email-recipient.png)
1. Type the email address of the recipient, then click **Add**. ![Add recipient modal](/assets/images/help/billing/billing-add-email-recipient-modal.png)

#### Changing the primary recipient for billing notifications

One address must always be designated as the primary recipient. The address with this designation can't be removed until a new primary recipient is selected.

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
1. Under "Billing management", find the email address you want to set as the primary recipient.
1. To the right of the email address, use the "Edit" drop-down menu, and click **Mark as primary**. ![Mark primary recipient](/assets/images/help/billing/billing-change-primary-email-recipient.png)

#### Removing a recipient from billing notifications

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
1. Under "Email recipients", find the email address you want to remove.
1. For the user's entry in the list, click **Edit**. ![Edit recipient](/assets/images/help/billing/billing-edit-email-recipient.png)
1. To the right of the email address, use the "Edit" drop-down menu, and click *Remove**. ![Remove recipient](/assets/images/help/billing/billing-remove-email-recipient.png)
1. Review the confirmation prompt, then click **Remove**.
