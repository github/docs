---
title: Administrar la configuración de tu tema
intro: You can manage how {% data variables.product.product_name %} looks to you by setting a theme preference that either follows your system settings or always uses a light or dark mode.
versions:
  fpt: '*'
  ghae: '*'
  ghes: '>=3.2'
  ghec: '*'
topics:
- Accounts
redirect_from:
- /github/setting-up-and-managing-your-github-user-account/managing-your-theme-settings
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-your-theme-settings
shortTitle: Manage theme settings
ms.openlocfilehash: 238af803ead331a9323e9457024a85dff05fc5d4
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 05/17/2022
ms.locfileid: "145091925"
---
Para obtener elecciones y flexibilidad en la forma y momento de utilizar {% data variables.product.product_name %}, puedes configurar los ajustes de tema para cambiar la forma en la que ves a {% data variables.product.product_name %}. Puedes elegir de entre los temas claros u oscuros o puedes configurar a {% data variables.product.product_name %} para que siga la configuración de tu sistema.

Puede que quieras utilizar un tema oscuro para reducir el consumo de energía en algunos dispositivos, para reducir la fatiga ocular en condiciones de luz baja o porque te gusta más cómo se ve.

{% ifversion fpt or ghes > 3.2 or ghae or ghec %}Si tu visión es limitada, puede ayudarte un tema de contraste alto, con mayor contraste entre los elementos en primer y segundo plano.{% endif %}{% ifversion fpt or ghae or ghec %} Si padeces daltonismo, nuestros temas claro y oscuro para daltonismo pueden ayudarte.

{% endif %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.appearance-settings %}

1. Debajo de "Modo del tema", selecciona el menú desplegable y haz clic en una preferencia de tema.

   ![Menú desplegable en "Theme mode" (Modo del tema) para la selección de preferencias de tema](/assets/images/help/settings/theme-mode-drop-down-menu.png)
1. Haz clic en el tema que quieres usar.
    - Si eliges un tema simple, haz clic en un tema.

      {% ifversion fpt or ghes > 3.2 or ghae or ghec %}![Botones radiales para elegir un tema simple](/assets/images/help/settings/theme-choose-a-single-theme-highcontrast.png){% else %}![Botones radiales para elegir un tema simple](/assets/images/help/settings/theme-choose-a-single-theme.png){% endif %}
    - Si eliges seguir tu configuración de sistema, haz clic en un tema de día y de noche.

      {% ifversion fpt or ghes > 3.2 or ghae or ghec %}![Botones para la elección de un tema para sincronizar con la configuración del sistema](/assets/images/help/settings/theme-choose-a-day-and-night-theme-to-sync-highcontrast.png){% else %}![Botones para la elección de un tema para sincronizar con la configuración del sistema](/assets/images/help/settings/theme-choose-a-day-and-night-theme-to-sync.png){% endif %} {% ifversion fpt or ghec %}
    - Si te gustaría elegir un tema que se encuentre actualmente en beta público, primero necesitas habilitarlo con la vista previa de características. Para obtener más información, vea "[Explorar versiones de acceso anticipado con la vista previa de la característica](/get-started/using-github/exploring-early-access-releases-with-feature-preview)".{% endif %}

{% if command-palette %}

{% note %}

**Nota**: También puede cambiar la configuración del tema con la paleta de comandos. Para obtener más información, vea "[{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette)".

{% endnote %}

{% endif %}

## <a name="further-reading"></a>Información adicional

- "[Configuración de un tema para {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/setting-a-theme-for-github-desktop)"
