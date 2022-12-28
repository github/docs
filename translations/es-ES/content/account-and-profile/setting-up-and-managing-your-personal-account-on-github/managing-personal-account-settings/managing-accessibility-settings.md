---
title: Administrar los ajustes de accesibilidad
shortTitle: Manage accessibility settings
intro: 'La interfaz de usuario de {% data variables.product.product_name %} puede adaptarse a tus necesidades de visión, audición, motrices, cognitivas o de aprendizaje.'
versions:
  feature: keyboard-shortcut-accessibility-setting
redirect_from:
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-accessibility-settings
type: how_to
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 088bb097004f6c3b13412ec9716665b1f02edca5
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107217'
---
## Acerca de los ajustes de accesibilidad

Para crear una experiencia en {% ifversion fpt or ghec or ghes %}{% data variables.location.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %} que se adapte a tus necesidades, puedes personalizar la interfaz de usuario. La configuración de accesibilidad puede ser esencial para las personas con discapacidad, y también resultar útil a cualquier persona. Por ejemplo, la personalización de métodos abreviados de teclado es esencial para las personas que navegan mediante el control de voz, pero puede ser útil para cualquiera cuando un método abreviado de teclado de {% data variables.product.product_name %} entra en conflicto con otro método abreviado de aplicación.

## Administrar los ajustes de accesibilidad

Puedes decidir si quieres usar algunos o todos los métodos abreviados de teclado en {% ifversion fpt or ghec %}{% data variables.location.product_location %}{% elsif ghes or ghae %}el sitio web para {% data variables.location.product_location %}{% endif %} y puedes controlar la visualización de imágenes animadas.

### Administración de métodos abreviados de teclado

Puedes realizar acciones en el sitio web de {% data variables.product.product_name %} solo con el teclado. Los métodos abreviados de teclado pueden ser útiles para ahorrar tiempo, pero se pueden activar accidentalmente o interferir con la tecnología de asistencia.

De forma predeterminada, todos los métodos abreviados de teclado están habilitados en {% data variables.product.product_name %}. Para obtener más información, consulte "[Métodos abreviados de teclado](/get-started/using-github/keyboard-shortcuts)".

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.accessibility_settings %}
1. En "Métodos abreviados de teclado" puedes administrar la configuración de los métodos abreviados de teclado.

   - Para deshabilitar teclas de método abreviado que no usan teclas modificadoras como <kbd>Control</kbd> o <kbd>Comando</kbd>, en "General", anula la selección de las **teclas de caracteres**.
     - Si deshabilitas las teclas de caracteres, podrás desencadenar accesos directos para el explorador web y seguir desencadenando accesos directos para {% data variables.product.product_name %} que usen una tecla modificadora.
   {%- ifversion command-palette %}
   - Para personalizar los métodos abreviados de teclado para desencadenar la paleta de comandos, en "Command Palette" (Paleta de comandos) usa los menús desplegables para elegir un método abreviado de teclado. Para obtener más información, consulta "[Paleta de comandos de {% data variables.product.company_short %}](/get-started/using-github/github-command-palette)".
   {%- endif %}

{% ifversion motion-management %}

### Administración del movimiento

Puede controlar cómo {% data variables.product.product_name %} muestra imágenes animadas _.gif_.

De forma predeterminada, {% data variables.product.product_name %} se sincroniza con la preferencia a nivel del sistema para reducir el movimiento. Para obtener más información, revisa la documentación de tu sistema operativo específico.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.accessibility_settings %}
1. En "Motion" (Movimiento) puedes administrar la configuración del movimiento.

   - Para controlar cómo {% data variables.product.product_name %} muestra las imágenes animadas, en "Autoplay animated images" (Reproducción automática de imágenes animadas), selecciona **Sync with system** (Sincronizar con el sistema), **Enabled** (Habilitado) o **Disabled** (Deshabilitado).

{% endif %}
