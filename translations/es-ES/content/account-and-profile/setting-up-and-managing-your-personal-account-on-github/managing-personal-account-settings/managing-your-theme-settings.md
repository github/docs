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
shortTitle: Administrar la configuración de temas
---

Para obtener elecciones y flexibilidad en la forma y momento de utilizar {% data variables.product.product_name %}, puedes configurar los ajustes de tema para cambiar la forma en la que ves a {% data variables.product.product_name %}. Puedes elegir de entre los temas claros u oscuros o puedes configurar a {% data variables.product.product_name %} para que siga la configuración de tu sistema.

Puede que quieras utilizar un tema oscuro para reducir el consumo de energía en algunos dispositivos, para reducir la fatiga ocular en condiciones de luz baja o porque te gusta más cómo se ve.

{% ifversion fpt or ghes > 3.2 or ghae or ghec %} Si tu visión es limitada, puedes beneficiarte de un tema de contraste alto, con mayor contraste entre los elementos en primer y segundo plano.{% endif %}{% ifversion fpt or ghae or ghec %} Si tienes daltonismo, puedes beneficiarte de nuestros temas claro y oscuro para daltónicos.

{% endif %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.appearance-settings %}

1. Debajo de "Modo del tema", selecciona el menú desplegable y haz clic en una preferencia de tema.

   ![Menú desplegable debajo de "Modo del tema" para la selección de las preferencias del tema](/assets/images/help/settings/theme-mode-drop-down-menu.png)
1. Haz clic en el tema que quieres usar.
    - Si eliges un tema simple, haz clic en un tema.

      {% ifversion fpt or ghes > 3.2 or ghae or ghec %}![Radio buttons for the choice of a single theme](/assets/images/help/settings/theme-choose-a-single-theme-highcontrast.png){% else %}![Radio buttons for the choice of a single theme](/assets/images/help/settings/theme-choose-a-single-theme.png){% endif %}
    - Si eliges seguir tu configuración de sistema, haz clic en un tema de día y de noche.

      {% ifversion fpt or ghes > 3.2 or ghae or ghec %}![Buttons for the choice of a theme to sync with the system setting](/assets/images/help/settings/theme-choose-a-day-and-night-theme-to-sync-highcontrast.png){% else %}![Buttons for the choice of a theme to sync with the system setting](/assets/images/help/settings/theme-choose-a-day-and-night-theme-to-sync.png){% endif %}
    {% ifversion fpt or ghec %}
    - Si te gustaría elegir un tema que se encuentre actualmente en beta público, primero necesitas habilitarlo con la vista previa de características. Para obtener más información, consulta la sección [Explorar los lanzamientos de acceso adelantado con vista previa de características](/get-started/using-github/exploring-early-access-releases-with-feature-preview)".{% endif %}

{% ifversion command-palette %}

{% note %}

**Nota:** También puedes cambiar los ajustes de tu tema con la paleta de comandos. Para obtener más información, consulta la sección "[{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette)".

{% endnote %}

{% endif %}

## Leer más

- "[Configurar un tema para {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/setting-a-theme-for-github-desktop)"
