---
title: Configurar Git para GitHub Desktop
shortTitle: Configuring Git
intro: 'Puedes administrar las opciones de configuración de Git para los repositorios locales con {% data variables.product.prodname_desktop %}.'
redirect_from:
  - /desktop/getting-started-with-github-desktop/configuring-git-for-github-desktop
  - /desktop/installing-and-configuring-github-desktop/configuring-git-for-github-desktop
versions:
  fpt: '*'
ms.openlocfilehash: f14b309dcc7a4c779e9debb68f3962dfd38247cd
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146058520'
---
## Acerca de la configuración de Git para {% data variables.product.prodname_desktop %}

{% data variables.product.prodname_desktop %} usa las opciones de configuración de Git locales y proporciona la opción de configurar algunas de estas opciones, como la información de autor global y la rama predeterminada que se usa al crear un nuevo repositorio.

{% data variables.product.prodname_desktop %} te permite establecer el nombre y la dirección de correo electrónico que deseas asociar con las confirmaciones que realices en los repositorios. Si el nombre y la dirección de correo electrónico ya se han establecido en la configuración global de Git del equipo, {% data variables.product.prodname_desktop %} detectará y usará esos valores. {% data variables.product.prodname_desktop %} también permite establecer un nombre y una dirección de correo electrónico diferentes para un repositorio individual. Esto resulta útil cuando necesitas usar una dirección de correo electrónico de trabajo independiente para un repositorio específico.

Si la dirección de correo electrónico que se ha establecido en la configuración de Git no coincide con una dirección de correo electrónico asociada a la cuenta {% data variables.product.product_name %} en la que has iniciado sesión actualmente, {% data variables.product.prodname_desktop %} mostrará una advertencia antes de confirmar.

{% data variables.product.prodname_desktop %} también te permite cambiar el nombre de rama predeterminado que desea usar al crear nuevos repositorios. De forma predeterminada, {% data variables.product.prodname_desktop %} usa `main` como nombre de rama predeterminado en los repositorios nuevos que crees.

{% tip %}

**Sugerencia**: Si realiza confirmaciones públicas, cualquier usuario podrá ver las direcciones de correo electrónico en la configuración Git. Para más información, vea "[Configuración de la dirección de correo electrónico de confirmación](/articles/setting-your-commit-email-address/)".

{% endtip %}

## Configuración de la información global del autor

La configuración de la información global del autor en {% data variables.product.prodname_desktop %} actualizará el nombre y la dirección de correo electrónico en la configuración global de Git. Este será el nombre y la dirección de correo electrónico predeterminados de todos los repositorios locales nuevos que crees en {% data variables.product.prodname_desktop %}.

{% mac %}

{% data reusables.desktop.mac-select-desktop-menu %}
7. En la ventana Preferences, haga clic en **Git**.
  ![El panel Git en el menú de Preferencias](/assets/images/help/desktop/mac-select-git-pane.png) {% data reusables.desktop.name-field-git-config %} ![El campo de nombre de la configuración de Git](/assets/images/help/desktop/mac-name-git-config.png) {% data reusables.desktop.select-email-git-config %} ![Selección de la dirección de correo electrónico en el campo de configuración de Git](/assets/images/help/desktop/mac-email-git-config.png) {% data reusables.desktop.click-save-git-config %} ![Botón de guardar en el campo de configuración de Git](/assets/images/help/desktop/mac-save-git-config.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.windows-choose-options %}
8. En la ventana Options, haga clic en **Git**.
![El panel Git en el menú de Opciones](/assets/images/help/desktop/windows-select-git-pane.png) {% data reusables.desktop.name-field-git-config %} ![El campo de nombre de la configuración de Git](/assets/images/help/desktop/windows-name-git-config.png) {% data reusables.desktop.select-email-git-config %} ![Selección de la dirección de correo electrónico en el campo de configuración de Git](/assets/images/help/desktop/windows-email-git-config.png) {% data reusables.desktop.click-save-git-config %} ![Botón de guardar en el campo de configuración de Git](/assets/images/help/desktop/windows-save-git-config.png)

{% endwindows %}

## Configuración de información de autor diferente para un repositorio individual

Puedes cambiar el nombre y la dirección de correo electrónico que se usan para crear confirmaciones en un repositorio específico. Esta configuración de Git local invalidará las opciones de configuración globales de Git solo para este repositorio.

{% mac %}

{% data reusables.desktop.mac-repository-settings-menu %} {% data reusables.desktop.select-git-config %} {% data reusables.desktop.use-local-git-config %} {% data reusables.desktop.local-config-name %} {% data reusables.desktop.local-config-email %} {% data reusables.desktop.repository-settings-save %}

{% endmac %}

{% windows %}

{% data reusables.desktop.windows-repository-settings-menu %} {% data reusables.desktop.select-git-config %} {% data reusables.desktop.use-local-git-config %} {% data reusables.desktop.local-config-name %} {% data reusables.desktop.local-config-email %} {% data reusables.desktop.repository-settings-save %}

{% endwindows %}


## Configuración de la rama predeterminada para nuevos repositorios

Puedes configurar la rama predeterminada que se usará al crear un nuevo repositorio en {% data variables.product.prodname_desktop %}. Para más información sobre la rama predeterminada, consulta "[Acerca de la rama predeterminada](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)".

{% mac %}

{% data reusables.desktop.mac-select-desktop-menu %}
1. En la ventana Preferences, haga clic en **Git**.
  ![El panel de Git en el menú Preferencias](/assets/images/help/desktop/mac-select-git-pane.png)
1. En "Nombre de rama predeterminado para los nuevos repositorios", selecciona el nombre de rama predeterminado que desea usar o, para escribir un nombre personalizado, selecciona "Otros...".
  ![Opciones de selección de nombre de rama predeterminado](/assets/images/help/desktop/mac-select-default-branch-name.png) {% data reusables.desktop.click-save-git-config %} ![Botón Guardar en el campo de configuración de Git](/assets/images/help/desktop/repository-settings-git-config-save.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.windows-choose-options %}
1. En la ventana Options, haga clic en **Git**.
  ![El panel de Git en el menú Opciones](/assets/images/help/desktop/windows-select-git-pane.png)
1. En "Nombre de rama predeterminado para los nuevos repositorios", selecciona el nombre de rama predeterminado que deseas usar o selecciona "Otros..." para escribir un nombre personalizado.
  ![Opciones de selección de nombre de rama predeterminado](/assets/images/help/desktop/windows-select-default-branch-name.png) {% data reusables.desktop.click-save-git-config %} ![Botón Guardar en el campo de configuración de Git](/assets/images/help/desktop/repository-settings-git-config-save.png)

{% endwindows %}

## Lecturas adicionales

- "[Agregar una dirección de correo electrónico a su cuenta de GitHub](/articles/adding-an-email-address-to-your-github-account/)"
- "[Configuración de la dirección de correo electrónico de confirmación](/articles/setting-your-commit-email-address/)"
- "[Acerca de las ramas](/github/collaborating-with-issues-and-pull-requests/about-branches)"
