---
title: Configurar la autenticación de dos factores mediante métodos de recuperación
intro: Puedes configurar diversos métodos de recuperación para acceder a tu cuenta si pierdes tus credenciales de autenticación de dos factores.
redirect_from:
  - /articles/downloading-your-two-factor-authentication-recovery-codes/
  - /articles/setting-a-fallback-authentication-number/
  - /articles/about-recover-accounts-elsewhere/
  - /articles/adding-a-fallback-authentication-method-with-recover-accounts-elsewhere/
  - /articles/generating-and-storing-an-account-recovery-token/
  - /articles/configuring-two-factor-authentication-recovery-methods
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - 2fa
---

Además de almacenar tus códigos de recuperación de autenticación de dos factores de manera segura, recomendamos configurar uno o más métodos de recuperación adicionales.

### Descargar tus códigos de recuperación de autenticación de dos factores

{% data reusables.two_fa.about-recovery-codes %} También puedes descargar tus códigos de recuperación en cualquier punto luego de habilitar la autenticación de dos factores.

Para mantener la cuenta segura, no compartas ni distribuyas tus códigos de recuperación. Recomendamos guardarlos en un administrador de contraseñas seguro, como:
- [1Password](https://1password.com/)
- [Keeper](https://keepersecurity.com/)
- [LastPass](https://lastpass.com/)

Si generas nuevos códigos de recuperación o inhabilitas y vuelves a habilitar 2FA, los códigos de recuperación de tus parámetros de seguridad se actualizarán automáticamente.

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security %}
{% data reusables.two_fa.show-recovery-codes %}
4. Guarda tus códigos de recuperación en un lugar seguro. Tus códigos de recuperación te ayudarán a regresar a tu cuenta si pierdes acceso.
    - Para guardar tus códigos de recuperación en tu dispositivo, haz clic en **Download** (Descargar).
    - Para guardar una copia impresa de tus códigos de recuperación, haz clic en **Print** (Imprimir).
    - Para copiar tus códigos de recuperación a fin de almacenarlo en un administrador de contraseñas, haz clic en **Copy** (Copiar). ![Lista de códigos de recuperación con opción para descargar, imprimir o copiar los códigos](/assets/images/help/2fa/download-print-or-copy-recovery-codes-before-continuing.png)

### Generar un nuevo conjunto de códigos de recuperación

Una vez que usas un código de recuperación para recuperar el acceso a tu cuenta, no puedes volver a usarlo. Si has usado los 16 códigos de recuperación, puedes generar otra lista de códigos. La generación de un nuevo conjunto de códigos de recuperación invalidará todos los códigos que generaste previamente.

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security %}
{% data reusables.two_fa.show-recovery-codes %}
3. Para crear otro lote de códigos de recuperación, haz clic en **Generate new recovery codes** (Generar nuevos códigos de recuperación). ![Botón para generar nuevos códigos de recuperación](/assets/images/help/2fa/generate-new-recovery-codes.png)

### Configurar una clave de seguridad como un método de autenticación de dos factores adicional

Puedes configurar una clave de seguridad como un método de autenticación de dos factores secundario, y usar la clave de seguridad para recuperar el acceso a tu cuenta. Para obtener más información, consulta "[Configurar autenticación de dos factores](/articles/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key)".

{% if currentVersion == "free-pro-team@latest" %}

### Configurar un número de autenticación de reserva

Puedes brindar un segundo número para un dispositivo de reserva. Si pierdes acceso a tu dispositivo primario y a tus códigos de recuperación, un número de SMS de respaldo puede volver a brindarte acceso a tu cuenta.

Puedes usar un número de reserva independientemente de que hayas configurado la autenticación mediante un mensaje de texto o aplicación móvil TOTP.

{% warning %}

**Advertencia:** Usar un número de reserva es tu último recurso. Recomendamos configurar métodos de recuperación adicionales si estableces un número de autenticación de reserva.
- Los malos actores pueden atacar a los proveedores de teléfono celular, de manera que la autenticación SMS es riesgosa.
- Los mensajes SMS solo son compatibles para determinados países fuera de los EE. UU., para conocer la lista, consulta "[Países donde la autenticación SMS es compatible](/articles/countries-where-sms-authentication-is-supported)".

{% endwarning %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security %}
3. Al lado de "Fallback SMS number" (Número de SMS de reserva), haz clic en **Add** (Agregar). ![Botón para agregar número de SMS de reserva](/assets/images/help/2fa/add-fallback-sms-number-button.png)
4. En "Fallback SMS number" (Número de SMS de reserva), haz clic en **Add fallbacck SMS number (Agregar número de SMS de reserva). ![Agregar texto al número de SMS de reserva](/assets/images/help/2fa/add_fallback_sms_number_text.png)</p></li>
5
Selecciona tu código de país y escribe el número de teléfono móvil, incluido el número de área. Cuando la información es correcta, haz clic en **Set fallback** (Establecer reserva). ![Establecer número de SMS de reserva](/assets/images/help/2fa/2fa-fallback-number.png)</ol>

Después de la configuración, el dispositivo de copia de seguridad recibirá un SMS de confirmación.

### Agregar un método de autenticación de reserva con Recuperar cuentas en otro lugar

Puedes generar una credencial de autenticación adicional para tu cuenta y almacenarla con un proveedor de recuperación asociado.

#### Acerca de Recuperar cuentas en otro lugar

Con Recuperar cuentas en otro lugar, puedes agregar un factor de seguridad adicional a tu cuenta {% data variables.product.product_name %} en caso de que pierdas acceso al método de autenticación de dos factores o los códigos de recuperación.

Recuperar cuentas en otro lugar te permite asociar tu cuenta {% data variables.product.product_name %} con tu cuenta de Facebook. Puedes almacenar una credencial de autenticación en la forma de un _token de recuperación de cuenta_ para tu cuenta {% data variables.product.product_name %} con Facebook.

Si pierdes acceso a tu cuenta {% data variables.product.product_name %} porque ya no tienes acceso a tu método de autenticación de dos factores o códigos de recuperación, puedes recuperar tu token de recuperación de cuenta del proveedor de recuperación para demostrar que eres el propietario de tu cuenta {% data variables.product.product_name %}.

Después de que recuperes tu token, {% data variables.contact.contact_support %} puede inhabilitar la autenticación de dos factores para tu cuenta. Luego, puedes proporcionar o restablecer tu contraseña para recuperar el acceso a tu cuenta.

Cuando generas o recuperas un token de recuperación de cuenta, se agrega un evento a tu registro de auditoría de la cuenta. Para obtener más información, consulta "[Revisar tu registro de seguridad](/articles/reviewing-your-security-log)".

#### Generar y almacenar un token de recuperación de cuenta

Puedes generar un token de recuperación de cuenta y almacenarlo con un proveedor de recuperación asociado.

1. Ingresa en tu cuenta de Facebook, luego regresa a

{% data variables.product.product_name %}.
{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security %}
4. Para generar un token nuevo, en "Recovery tokens" (Tokens de recuperación), haz clic en **Store new token** (Almacenar token nuevo). ![Botón para almacenar un nuevo token de recuperación](/assets/images/help/settings/store-new-recovery-token.png)
5. Obtén más información sobre tokens de recuperación de cuenta, luego haz clic en **Connect with https://www.facebook.com** (Conectar con https://www.facebook.com). ![Botón para conectar un token de recuperación con Facebook](/assets/images/help/settings/connect-recovery-token-with-facebook.png)
6. Una vez que eres redirigido a Facebook, lee la información sobre cómo activar la recuperación de cuenta con Facebook antes de hacer clic en **Save as [_YOUR NAME_]** (Guardar como [_TU NOMBRE_]. (Si guardas múltiples tokens dentro de un período breve, Facebook puede omitir este paso de confirmación después de que guardes tu primer token). ![Página de Facebook con botón para activar la recuperación de la cuenta](/assets/images/help/settings/security-turn-on-rae-facebook.png)

{% endif %}

### Leer más

- "[Acerca de la autenticación de dos factores](/articles/about-two-factor-authentication)"
- [Configurar autenticación de dos factores](/articles/configuring-two-factor-authentication)"
- "[Acceder {% data variables.product.prodname_dotcom %} utilizando autenticación de dos factores](/articles/accessing-github-using-two-factor-authentication)"
- [Recuperar tu cuenta si pierdes tus credenciales de autenticación de dos factores](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)"
