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

{% data variables.product.prodname_desktop %} también te permite cambiar el nombre de la rama predeterminada que te gustaría utilizar cuando crees repositorios nuevos. By default, {% data variables.product.prodname_desktop %} uses `main` as the default branch name in any new repositories you create.

{% tip %}

**Tip**: Cualquiera podrá ver la dirección de correo electrónico en tu configuración de Git si haces confirmaciones públicas. For more information, see "[Setting your commit email address](/articles/setting-your-commit-email-address/)."

{% endtip %}

## Configuring your global author information

Configuring your global author information in {% data variables.product.prodname_desktop %} will update the name and email address in your global Git configuration. This will be the default name and email address for all new local repositories you create in {% data variables.product.prodname_desktop %}.

{% mac %}

{% data reusables.desktop.mac-select-desktop-menu %}
7. En la ventana de preferencias, da clic en **Git**. ![El panel de Git en el menú Preferences (Preferencias)](/assets/images/help/desktop/mac-select-git-pane.png)
{% data reusables.desktop.name-field-git-config %}
  ![El campo con el nombre de la configuración de Git](/assets/images/help/desktop/mac-name-git-config.png)
{% data reusables.desktop.select-email-git-config %}
  ![Select email address in Git configuration field](/assets/images/help/desktop/mac-email-git-config.png)
{% data reusables.desktop.click-save-git-config %}
  ![Botón de guardar en el campo de configuración de Git](/assets/images/help/desktop/mac-save-git-config.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.windows-choose-options %}
8. En la ventana de Opciones, da clic en **Git**. ![El panel de Git en el menú Options (Opciones)](/assets/images/help/desktop/windows-select-git-pane.png)
{% data reusables.desktop.name-field-git-config %}
  ![El campo con el nombre de la configuración de Git](/assets/images/help/desktop/windows-name-git-config.png)
{% data reusables.desktop.select-email-git-config %}
  ![Select email address in Git configuration field](/assets/images/help/desktop/windows-email-git-config.png)
{% data reusables.desktop.click-save-git-config %}
  ![Botón de guardar en el campo de configuración de Git](/assets/images/help/desktop/windows-save-git-config.png)

{% endwindows %}

## Configuring different author information for an individual repository

You can change the name and email address used to author commits in a specific repository. This local Git configuration will override your global Git configuration settings for this one repository only.

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


## Configuring your default branch for new repositories

You can configure the default branch that will be used when you create a new repository in {% data variables.product.prodname_desktop %}. For more information about the default branch, see "[About the default branch](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)."

{% mac %}

{% data reusables.desktop.mac-select-desktop-menu %}
1. En la ventana de preferencias, da clic en **Git**. ![El panel de Git en el menú Preferences (Preferencias)](/assets/images/help/desktop/mac-select-git-pane.png)
1. Under "Default branch name for new repositories", select the default branch name you would like to use, or, to enter a custom name, select "Other...". ![Default branch name selection options](/assets/images/help/desktop/mac-select-default-branch-name.png)
{% data reusables.desktop.click-save-git-config %}
  ![Botón de guardar en el campo de configuración de Git](/assets/images/help/desktop/repository-settings-git-config-save.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.windows-choose-options %}
1. En la ventana de Opciones, da clic en **Git**. ![El panel de Git en el menú Options (Opciones)](/assets/images/help/desktop/windows-select-git-pane.png)
1. Under "Default branch name for new repositories", select the default branch name you would like to use, or select "Other..." to enter a custom name. ![Default branch name selection options](/assets/images/help/desktop/windows-select-default-branch-name.png)
{% data reusables.desktop.click-save-git-config %}
  ![Botón de guardar en el campo de configuración de Git](/assets/images/help/desktop/repository-settings-git-config-save.png)

{% endwindows %}

## Leer más

- [Agregar una dirección de correo electrónico a tu cuenta de GitHub](/articles/adding-an-email-address-to-your-github-account/)"
- "[Establecer tu dirección de correo electrónico de confirmación](/articles/setting-your-commit-email-address)."
- "[Acerca de las ramas](/github/collaborating-with-issues-and-pull-requests/about-branches)"
