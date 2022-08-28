---
title: Configurar Git para GitHub Desktop
shortTitle: Configurar Git
intro: 'Si todavía no tienes Git instalado, debes configurarlo antes de usar GitHub Desktop.'
redirect_from:
  - /desktop/getting-started-with-github-desktop/configuring-git-for-github-desktop
  - /desktop/installing-and-configuring-github-desktop/configuring-git-for-github-desktop
versions:
  free-pro-team: '*'
---

{% data variables.product.prodname_desktop %} utiliza la dirección de correo electrónico que configuraste en tus ajustes locales de Git para conectar las confirmaciones con tu cuenta en {% data variables.product.product_name %}.

{% data reusables.desktop.update-email-address %}

{% tip %}

**Tip**: Cualquiera podrá ver la dirección de correo electrónico en tu configuración de Git si haces confirmaciones públicas. Para obtener más información, consulta "[Establecer tu dirección de correo electrónico de confirmación](/articles/setting-your-commit-email-address)."

{% endtip %}

{% mac %}

{% data reusables.desktop.sign-in-choose-product %}
{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.emails %}
{% data reusables.desktop.copy-email-git-config %}
{% data reusables.desktop.return-to-desktop %}
{% data reusables.desktop.mac-select-desktop-menu %}
7. En la ventana de preferencias, da clic en **Git**. ![El panel de Git en el menú Preferences (Preferencias)](/assets/images/help/desktop/mac-select-git-pane.png)
{% data reusables.desktop.name-field-git-config %}
  ![El campo con el nombre de la configuración de Git](/assets/images/help/desktop/mac-name-git-config.png)
{% data reusables.desktop.paste-email-git-config %}
  ![La dirección de correo electrónico copiada en el campo de configuración de Git](/assets/images/help/desktop/mac-email-git-config.png)
{% data reusables.desktop.click-save-git-config %}
  ![Botón de guardar en el campo de configuración de Git](/assets/images/help/desktop/mac-save-git-config.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.sign-in-choose-product %}
{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.emails %}
{% data reusables.desktop.copy-email-git-config %}
{% data reusables.desktop.return-to-desktop %}
{% data reusables.desktop.windows-choose-options %}
8. En la ventana de Opciones, da clic en **Git**. ![El panel de Git en el menú Options (Opciones)](/assets/images/help/desktop/windows-select-git-pane.png)
{% data reusables.desktop.name-field-git-config %}
  ![El campo con el nombre de la configuración de Git](/assets/images/help/desktop/windows-name-git-config.png)
{% data reusables.desktop.paste-email-git-config %}
  ![La dirección de correo electrónico copiada en el campo de configuración de Git](/assets/images/help/desktop/windows-email-git-config.png)
{% data reusables.desktop.click-save-git-config %}
  ![Botón de guardar en el campo de configuración de Git](/assets/images/help/desktop/windows-save-git-config.png)

{% endwindows %}

### Leer más

- [Agregar una dirección de correo electrónico a tu cuenta de GitHub](/articles/adding-an-email-address-to-your-github-account/)"
- "[Establecer tu dirección de correo electrónico de confirmación](/articles/setting-your-commit-email-address)."
