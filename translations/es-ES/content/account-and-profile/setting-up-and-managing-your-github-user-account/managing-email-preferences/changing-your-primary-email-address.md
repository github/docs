---
title: Cambiar tu dirección principal de correo electrónico
intro: Puedes cambiar la dirección de correo electrónico asociada con tu cuenta personal en cualquier momento.
redirect_from:
  - /articles/changing-your-primary-email-address
  - /github/setting-up-and-managing-your-github-user-account/changing-your-primary-email-address
  - /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/changing-your-primary-email-address
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
  - Notifications
shortTitle: Dirección principal de correo electrónico
---

{% note %}

**Nota:** No puedes cambiar tu dirección de correo electrónico primaria a una que ya se haya configurado como tu dirección de respaldo.

{% endnote %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.emails %}
3. Si deseas agregar una nueva dirección de correo electrónico para que sea tu dirección principal de correo electrónico, en "Add email address" (Agregar dirección de correo electrónico), escribe una nueva dirección de correo electrónico y haz clic en **Add** (Agregar). ![Botón Add another email address (Agregar otra dirección de correo electrónico)](/assets/images/help/settings/add_another_email_address.png)
4. En "Primary email address" (dirección principal de correo electrónico), usa el menú desplegable para hacer clic en la dirección de correo electrónico que deseas establecer como tu dirección principal de correo electrónico, y haz clic en **Save** (Guardar). ![Botón Set as primary (Establecer como principal)](/assets/images/help/settings/set_as_primary_email.png)
5. Para eliminar la dirección de correo electrónico antigua de tu cuenta, junto al correo electrónico antiguo, haz clic en {% octicon "trash" aria-label="The trash symbol" %}.
{% ifversion fpt or ghec %}
6. Verifica tu nueva dirección principal de correo electrónico. Sin una dirección de correo electrónico verificada, no podrás usar todas las características de {% data variables.product.product_name %}. Para obtener más información, consulta "[Verificar tu dirección de correo electrónico](/articles/verifying-your-email-address)".
{% endif %}
