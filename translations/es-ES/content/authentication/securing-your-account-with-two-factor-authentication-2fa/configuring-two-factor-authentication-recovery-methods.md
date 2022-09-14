---
title: Configurar la autenticación de dos factores mediante métodos de recuperación
intro: Puedes configurar diversos métodos de recuperación para acceder a tu cuenta si pierdes tus credenciales de autenticación de dos factores.
redirect_from:
  - /articles/downloading-your-two-factor-authentication-recovery-codes
  - /articles/setting-a-fallback-authentication-number
  - /articles/about-recover-accounts-elsewhere
  - /articles/adding-a-fallback-authentication-method-with-recover-accounts-elsewhere
  - /articles/generating-and-storing-an-account-recovery-token
  - /articles/configuring-two-factor-authentication-recovery-methods
  - /github/authenticating-to-github/configuring-two-factor-authentication-recovery-methods
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: Configure 2FA recovery
ms.openlocfilehash: a16f8dda2f834beb4c4a1634fae812b18a8730a3
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145091769'
---
Además de almacenar tus códigos de recuperación de autenticación de dos factores de manera segura, recomendamos configurar uno o más métodos de recuperación adicionales.

## Descargar tus códigos de recuperación de autenticación de dos factores

{% data reusables.two_fa.about-recovery-codes %} También puedes descargar tus códigos de recuperación en cualquier punto luego de habilitar la autenticación de dos factores.

Para mantener la cuenta segura, no compartas ni distribuyas tus códigos de recuperación. Recomendamos guardarlos en un administrador de contraseñas seguro, como:
- [1Password](https://1password.com/)
- [LastPass](https://lastpass.com/)

Si generas nuevos códigos de recuperación o inhabilitas y vuelves a habilitar 2FA, los códigos de recuperación de tus parámetros de seguridad se actualizarán automáticamente.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %} {% data reusables.two_fa.show-recovery-codes %}
4. Guarde los códigos de recuperación en un lugar seguro. Tus códigos de recuperación te ayudarán a regresar a tu cuenta si pierdes acceso.
    - Para guardar los códigos de recuperación en el dispositivo, haga clic en **Descargar**.
    - Para guardar una copia en papel de los códigos de recuperación, haga clic en **Imprimir**.
    - A fin de copiar los códigos de recuperación para el almacenamiento en un administrador de contraseñas, haga clic en **Copiar**.
  ![Lista de códigos de recuperación con opción para descargar, imprimir o copiar los códigos](/assets/images/help/2fa/download-print-or-copy-recovery-codes-before-continuing.png)

## Generar un nuevo conjunto de códigos de recuperación

Una vez que usas un código de recuperación para recuperar el acceso a tu cuenta, no puedes volver a usarlo. Si has usado los 16 códigos de recuperación, puedes generar otra lista de códigos. La generación de un nuevo conjunto de códigos de recuperación invalidará todos los códigos que generaste previamente.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %} {% data reusables.two_fa.show-recovery-codes %}
3. Para crear otro lote de códigos de recuperación, haga clic en **Generate new recovery codes** (Generar nuevos códigos de recuperación).
    ![Botón para generar nuevos códigos de recuperación](/assets/images/help/2fa/generate-new-recovery-codes.png)

## Configurar una clave de seguridad como un método de autenticación de dos factores adicional

Puedes configurar una clave de seguridad como un método de autenticación de dos factores secundario, y usar la clave de seguridad para recuperar el acceso a tu cuenta. Para obtener más información, vea "[Configuración de autenticación en dos fases](/articles/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key)".

{% ifversion fpt or ghec %}

## Configurar un número de autenticación de reserva

Puedes brindar un segundo número para un dispositivo de reserva. Si pierdes acceso a tu dispositivo primario y a tus códigos de recuperación, un número de SMS de respaldo puede volver a brindarte acceso a tu cuenta.

Puedes usar un número de reserva independientemente de que hayas configurado la autenticación mediante un mensaje de texto o aplicación móvil TOTP.

{% warning %}

**Advertencia**: El uso de un número de reserva debe ser un último recurso. Recomendamos configurar métodos de recuperación adicionales si estableces un número de autenticación de reserva.
- Los malos actores pueden atacar a los proveedores de teléfono celular, de manera que la autenticación SMS es riesgosa.
- Los mensajes SMS solo son compatibles con determinados países fuera de EE. UU. Para obtener la lista, vea "[Países donde se admite la autenticación por SMS](/articles/countries-where-sms-authentication-is-supported)".

{% endwarning %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %}
3. Junto a "Fallback SMS number" (Número de SMS de reserva), haga clic en **Add** (Agregar).
![Botón para agregar número de SMS de reserva](/assets/images/help/2fa/add-fallback-sms-number-button.png)
4. En "Fallback SMS number" (Número de SMS de reserva), haga clic en **Add fallback SMS number** (Agregar número de SMS de reserva).
![Texto para agregar número de SMS de reserva](/assets/images/help/2fa/add_fallback_sms_number_text.png)
5. Selecciona el código de tu país y escribe tu número de teléfono móvil, incluyendo el código de área. Cuando la información sea correcta, haga clic en **Set fallback** (Establecer reserva).
    ![Establecimiento de número de SMS de reserva](/assets/images/help/2fa/2fa-fallback-number.png)

Después de la configuración, el dispositivo de copia de seguridad recibirá un SMS de confirmación.

{% endif %}

## Información adicional

- "[Acerca de la autenticación en dos fases](/articles/about-two-factor-authentication)"
- "[Configuración de la autenticación en dos fases](/articles/configuring-two-factor-authentication)"
- "[Acceso a {% data variables.product.prodname_dotcom %} mediante la autenticación en dos fases](/articles/accessing-github-using-two-factor-authentication)".
- "[Recuperación de la cuenta en caso de perder las credenciales de autenticación en dos fases](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)"
