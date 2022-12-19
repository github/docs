---
title: Administrar la configuración de tu tema
intro: 'Puedes administrar la forma en que {% data variables.product.product_name %} te ve si configuras las preferencias de tema que ya sea siguen la configuración de tu sistema o siempre utilzian un modo claro u oscuro.'
versions:
  fpt: '*'
  ghae: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
redirect_from:
  - /github/setting-up-and-managing-your-github-user-account/managing-your-theme-settings
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-your-theme-settings
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-your-theme-settings
shortTitle: Manage theme settings
ms.openlocfilehash: 3f7d35978d3a80f7fb63cce1d054afd15b579f13
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109864'
---
Para obtener elecciones y flexibilidad en la forma y momento de utilizar {% data variables.product.product_name %}, puedes configurar los ajustes de tema para cambiar la forma en la que ves a {% data variables.product.product_name %}. Puedes elegir de entre los temas claros u oscuros o puedes configurar a {% data variables.product.product_name %} para que siga la configuración de tu sistema.

Puede que quieras utilizar un tema oscuro para reducir el consumo de energía en algunos dispositivos, para reducir la fatiga ocular en condiciones de luz baja o porque te gusta más cómo se ve.

Si tu visión es limitada, puede ayudarte un tema de contraste alto, con mayor contraste entre los elementos en primer y segundo plano.{% ifversion fpt or ghae or ghec %} Si padeces daltonismo, nuestros temas claro y oscuro para daltonismo pueden ayudarte.

{% endif %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.appearance-settings %}

1. Debajo de "Modo del tema", selecciona el menú desplegable y haz clic en una preferencia de tema.

   ![Menú desplegable en "Theme mode" (Modo del tema) para la selección de preferencias de tema](/assets/images/help/settings/theme-mode-drop-down-menu.png)
1. Haz clic en el tema que quieres usar.
    - Si eliges un tema simple, haz clic en un tema.

      {%- ifversion ghes = 3.5 %} {% note %}

      **Nota**: El tema de contraste de luz alto no estaba disponible en {% data variables.product.product_name %} 3.5.0, 3.5.1, 3.5.2 y 3.5.3. El tema está disponible a partir de la versión 3.5.4. Para obtener más información sobre las actualizaciones, ponte en contacto con el administrador del sitio.

      Para obtener más información sobre cómo determinar la versión de {% data variables.product.product_name %} que usas, consulta "[Acerca de las versiones de {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs#github-enterprise-server)".
      {% endnote %} {%- endif %}

      ![Botones radiales para elegir un tema simple](/assets/images/help/settings/theme-choose-a-single-theme-highcontrast.png)
    - Si eliges seguir tu configuración de sistema, haz clic en un tema de día y de noche.

      ![Botones para elegir un tema para que se sincronice con la configuración del sistema](/assets/images/help/settings/theme-choose-a-day-and-night-theme-to-sync-highcontrast.png) {% ifversion fpt or ghec %}
    - Si te gustaría elegir un tema que se encuentre actualmente en beta público, primero necesitas habilitarlo con la vista previa de características. Para obtener más información, vea "[Explorar versiones de acceso anticipado con la vista previa de la característica](/get-started/using-github/exploring-early-access-releases-with-feature-preview)".{% endif %}

{% ifversion command-palette %}

{% note %}

**Nota**: También puede cambiar la configuración del tema con la paleta de comandos. Para obtener más información, vea "[{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette)".

{% endnote %}

{% endif %}

## Información adicional

- "[Configuración de un tema para {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/setting-a-theme-for-github-desktop)"
