---
title: Administrar la configuración de tu tema
intro: 'Puedes administrar la forma en que {% data variables.product.product_name %} te ve si configuras las preferencias de tema que ya sea siguen la configuración de tu sistema o siempre utilzian un modo claro u oscuro.'
versions:
  fpt: '*'
  ghes: '>=3.2'
topics:
  - Accounts
redirect_from:
  - /github/setting-up-and-managing-your-github-user-account/managing-your-theme-settings
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-your-theme-settings
shortTitle: Administrar la configuración de temas
---

Para obtener elecciones y flexibilidad en la forma y momento de utilizar {% data variables.product.product_name %}, puedes configurar los ajustes de tema para cambiar la forma en la que ves a {% data variables.product.product_name %}. Puedes elegir de entre los temas claros u oscuros o puedes configurar a {% data variables.product.product_name %} para que siga la configuración de tu sistema.

Posiblemente necesites utilizar el tema oscuro para reducir el consumo de energía en algunos dispositivos, para reducir el cansancio de los ojos cuando haya poca luz o porque prefieres cómo se ve.{% ifversion fpt or ghae-issue-4618 %} Las personas con problemas de la vista pueden beneficiarse de un tema con contraste alto, el cual contrasta los elementos de fondo y superficie aún más.{% endif %}

{% data reusables.user_settings.access_settings %}
1. En la barra lateral de configuración de usuario, da clic en **Apariencia**. ![Pestaña de "Apariencia" en la barra lateral de configuración de usuario](/assets/images/help/settings/appearance-tab.png)
2. Debajo de "Modo del tema", selecciona el menú desplegable y haz clic en una preferencia de tema. ![Menú desplegable debajo de "Modo del tema" para la selección de las preferencias del tema](/assets/images/help/settings/theme-mode-drop-down-menu.png)
3. Haz clic en el tema que quieres usar.
    - Si eliges un tema simple, haz clic en un tema.
      {% ifversion fpt or ghae-issue-4618 %}![Radio buttons for the choice of a single theme](/assets/images/help/settings/theme-choose-a-single-theme-highcontrast.png){% else %}![Radio buttons for the choice of a single theme](/assets/images/help/settings/theme-choose-a-single-theme.png){% endif %}
    - Si eliges seguir tu configuración de sistema, haz clic en un tema de día y de noche.
      {% ifversion fpt or ghae-issue-4618 %}![Buttons for the choice of a theme to sync with the system setting](/assets/images/help/settings/theme-choose-a-day-and-night-theme-to-sync-highcontrast.png){% else %}![Buttons for the choice of a theme to sync with the system setting](/assets/images/help/settings/theme-choose-a-day-and-night-theme-to-sync.png){% endif %}

## Leer más

- "[Configurar un tema para {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/setting-a-theme-for-github-desktop)"
