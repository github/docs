---
title: Configurar Git para GitHub Desktop
shortTitle: Configurar Git
intro: 'Puedes administrar los ajustes de configuración de Git para tus repositorios locales con {% data variables.product.prodname_desktop %}.'
redirect_from:
  - /desktop/getting-started-with-github-desktop/configuring-git-for-github-desktop
  - /desktop/installing-and-configuring-github-desktop/configuring-git-for-github-desktop
versions:
  fpt: '*'
---

## Acerca de la configuración de Git para {% data variables.product.prodname_desktop %}

{% data variables.product.prodname_desktop %} Utiliza tus ajustes locales de configuración de Git y proporciona la opción para configurar algunos de estos, tal como la información de autor global y la rama predeterminada que se utiliza al crear un repositorio nuevo.

{% data variables.product.prodname_desktop %} te permite seleccionar el nombre y la dirección de correo electrónico que te gustaría asociar con las confirmaciones que hagas en tus repositorios. Si tu nombre y dirección de correo electrónico ya se ajustaron en la configuración global de Git para tu computadora, {% data variables.product.prodname_desktop %} detectará y utilizará esos valores. {% data variables.product.prodname_desktop %} también te permite configurar un nombre y dirección de correo electrónico diferentes para un repositorio individual. Esto es útil cuando necesitas utilizar una dirección de correo electrónico por separado para un repositorio específico.

Si la dirección de correo electrónico que se ajustó en tu configuración de Git no coincide con aquella asociada con la cuenta de {% data variables.product.product_name %} en la que estás actualmente, {% data variables.product.prodname_desktop %} mostrará una advertencia antes de realizar las confirmaciones.

{% data variables.product.prodname_desktop %} también te permite cambiar el nombre de la rama predeterminada que te gustaría utilizar cuando crees repositorios nuevos. Predeterminadamente, {% data variables.product.prodname_desktop %} utiliza `main` como su nombre de rama predeterminado en cualquier repositorio que crees.

{% tip %}

**Tip**: Cualquiera podrá ver la dirección de correo electrónico en tu configuración de Git si haces confirmaciones públicas. Para obtener más información, consulta la sección "[Establecer tu dirección de correo electrónico de confirmación](/articles/setting-your-commit-email-address/)."

{% endtip %}

## Configurar tu información de autor global

El configurar tu información de autor global en {% data variables.product.prodname_desktop %} actualizará el nombre y la dirección de correo electrónico en tu configuración global de Git. Esto será el nombre y dirección de correo electrónico predeterminados para cualquier repositorio local nuevo que crees en {% data variables.product.prodname_desktop %}.

{% mac %}

{% data reusables.desktop.mac-select-desktop-menu %}
7. En la ventana de preferencias, da clic en **Git**. ![El panel de Git en el menú Preferences (Preferencias)](/assets/images/help/desktop/mac-select-git-pane.png)
{% data reusables.desktop.name-field-git-config %}
  ![El campo con el nombre de la configuración de Git](/assets/images/help/desktop/mac-name-git-config.png)
{% data reusables.desktop.select-email-git-config %}
  ![Selecciona la dirección de correo electrónico en el campo de configuración de Git](/assets/images/help/desktop/mac-email-git-config.png)
{% data reusables.desktop.click-save-git-config %}
  ![Botón de guardar en el campo de configuración de Git](/assets/images/help/desktop/mac-save-git-config.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.windows-choose-options %}
8. En la ventana de Opciones, da clic en **Git**. ![El panel de Git en el menú Options (Opciones)](/assets/images/help/desktop/windows-select-git-pane.png)
{% data reusables.desktop.name-field-git-config %}
  ![El campo con el nombre de la configuración de Git](/assets/images/help/desktop/windows-name-git-config.png)
{% data reusables.desktop.select-email-git-config %}
  ![Selecciona la dirección de correo electrónico en el campo de configuración de Git](/assets/images/help/desktop/windows-email-git-config.png)
{% data reusables.desktop.click-save-git-config %}
  ![Botón de guardar en el campo de configuración de Git](/assets/images/help/desktop/windows-save-git-config.png)

{% endwindows %}

## Configurar información de autor diferente para un repositorio individual

Puedes cambiar el nombre y dirección de correo electrónico que se utilizan para crear confirmaciones en un repositorio específico. Esta configuración local de Git anulará los ajustes de configuración globales de Git únicamente para este repositorio.

{% mac %}

{% data reusables.desktop.mac-repository-settings-menu %}
{% data reusables.desktop.select-git-config %}
{% data reusables.desktop.use-local-git-config %}
{% data reusables.desktop.local-config-name %}
{% data reusables.desktop.local-config-email %}
{% data reusables.desktop.repository-settings-save %}

{% endmac %}

{% windows %}

{% data reusables.desktop.windows-repository-settings-menu %}
{% data reusables.desktop.select-git-config %}
{% data reusables.desktop.use-local-git-config %}
{% data reusables.desktop.local-config-name %}
{% data reusables.desktop.local-config-email %}
{% data reusables.desktop.repository-settings-save %}

{% endwindows %}


## Configurar tu rama predeterminada para repositorios nuevos

Puedes configurar una rama predeterminada que se utilizará cuando crees un repositorio en {% data variables.product.prodname_desktop %}. Para obtener más información sobre la rama predeterminada, consulta la sección "[Acerca de la rama predeterminada](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)".

{% mac %}

{% data reusables.desktop.mac-select-desktop-menu %}
1. En la ventana de preferencias, da clic en **Git**. ![El panel de Git en el menú Preferences (Preferencias)](/assets/images/help/desktop/mac-select-git-pane.png)
1. Debajo de "Nombre de rama predeterminado para los repositorios nuevos", selecciona el nombre de rama predeterminado que te gustaría utilizar o, para ingresar un nombre personalizado, selecciona "Otro...". ![Opciones de selección del nombre para la rama predeterminada](/assets/images/help/desktop/mac-select-default-branch-name.png)
{% data reusables.desktop.click-save-git-config %}
  ![Botón de guardar en el campo de configuración de Git](/assets/images/help/desktop/repository-settings-git-config-save.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.windows-choose-options %}
1. En la ventana de Opciones, da clic en **Git**. ![El panel de Git en el menú Options (Opciones)](/assets/images/help/desktop/windows-select-git-pane.png)
1. Debajo de "Nombre de rama predeterminado para los repositorios nuevos", selecciona el nombre de rama predeterminado que te gustaría utilizar o selecciona "Otro..." para ingresar un nombre personalizado. ![Opciones de selección del nombre para la rama predeterminada](/assets/images/help/desktop/windows-select-default-branch-name.png)
{% data reusables.desktop.click-save-git-config %}
  ![Botón de guardar en el campo de configuración de Git](/assets/images/help/desktop/repository-settings-git-config-save.png)

{% endwindows %}

## Leer más

- [Agregar una dirección de correo electrónico a tu cuenta de GitHub](/articles/adding-an-email-address-to-your-github-account/)"
- "[Establecer tu dirección de correo electrónico de confirmación](/articles/setting-your-commit-email-address)."
- "[Acerca de las ramas](/github/collaborating-with-issues-and-pull-requests/about-branches)"
