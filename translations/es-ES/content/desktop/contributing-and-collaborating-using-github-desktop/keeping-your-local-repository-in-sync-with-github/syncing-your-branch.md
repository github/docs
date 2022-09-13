---
title: Sincronizar tu rama
intro: 'Conforme se suban las confirmaciones a tu proyecto en {% data variables.product.prodname_dotcom %}, podrás mantener una copia local de éste en sincronización si lo extraes del repositorio remoto.'
redirect_from:
  - /desktop/contributing-to-projects/syncing-your-branch
  - /desktop/contributing-and-collaborating-using-github-desktop/syncing-your-branch
versions:
  fpt: '*'
ms.openlocfilehash: eb803c8f5ef34c4ab25255c1635d31468b1b32af
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145092315'
---
## Acerca de la sincronización de ramas

Puedes sincronizar tu rama local con el repositorio remoto si extraes cualquier confirmación que se haya agregado a la rama en {% data variables.product.product_name %} desde la última vez que lo sincronizaste. Si realizas confirmaciones desde otro dispositivo o si muchas personas colaboran con el proyecto, necesitarás sincronizar tu rama local para mantenerla actualizada.

Cuando extraes información a tu rama local, únicamente estás actualizando la copia local del repositorio. Para actualziar tu rama en {% data variables.product.prodname_dotcom %}, deberás subir tus cambios. Para más información, vea "[Inserción de cambios en {% data variables.product.prodname_dotcom %}](/desktop/contributing-to-projects/pushing-changes-to-github)".

Para agregar cambios de una rama en otra, puedes fusionar estas ramas. Para aplicar los cambios a tu rama desde otra rama en el mismo repositorio, puedes fusionar esta otra rama con la tuya en {% data variables.product.prodname_desktop %}. Para solicitar que se fusionen los cambios de tu rama en otra rama que se encuentre en el mismo repositorio o en otro repositorio dentro de la red, puedes crear una solicitud de extracción en {% data variables.product.prodname_desktop %}. Para más información, vea "[Combinación de otra rama en la rama del proyecto](#merging-another-branch-into-your-project-branch)" y "[Acerca de las solicitudes de incorporación de cambios](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)".

Algunos flujos de trabajo requieren o se benefician con el rebase en vez de con la fusión. Al rebasar podemos reordenar, editar o combinar confirmaciones. Para más información, vea "[Acerca de la fusión mediante cambio de base de Git](/github/getting-started-with-github/about-git-rebase)" y "[Fusión mediante cambio de base de la rama del proyecto en otra rama](#rebasing-your-project-branch-onto-another-branch)".

## Extraer tu rama local de la rama remota

1. En {% data variables.product.prodname_desktop %}, use el menú desplegable {% octicon "git-branch" aria-label="The branch icon" %} **Rama actual** y seleccione la rama local que quiera actualizar.
2.  Para comprobar si hay confirmaciones en la rama remota, haga clic en **Capturar origen**
![Botón Capturar origen](/assets/images/help/desktop/fetch-button.png)
3. Para extraer las confirmaciones de la rama remota, haga clic en **Origen de extracción** o en **Origen de extracción con fusión mediante cambio de base**.
![Botón Extraer origen](/assets/images/help/desktop/pull-button.png) {% data reusables.desktop.resolve-merge-conflicts %}

## Fusionar otra rama en tu rama de proyecto

{% data reusables.desktop.current-branch-menu %} {% data reusables.desktop.choose-a-branch-to-merge %} {% data reusables.desktop.confirm-merging-branch %}

   {% note %}

   **Nota:** Si hay conflictos de combinación, {% data variables.product.prodname_desktop %} le avisará encima del botón **Combinar <em>RAMA</em> en <em>RAMA</em>** . No podrás fusionar las ramas hasta que hayas resuelto todos los conflictos.

   {% endnote %}

   ![Botón Combinar](/assets/images/help/desktop/merge-branch-button.png) {% data reusables.desktop.push-origin %}

## Rebasar tu rama de proyecto en otra rama

{% mac %}

1. En la barra de menús, use la lista desplegable **Rama** y haga clic en **Fusionar mediante cambio de base la rama actual**.
![Fusionar mediante cambio de base la rama actual en el menú desplegable Rama](/assets/images/help/desktop/mac-rebase-current-branch.png)
2. Haga clic en la rama que quiera fusionar mediante cambio de base en la rama actual y, después, haga clic en **Iniciar fusionar mediante cambio de base**.
![Botón Iniciar fusionar mediante cambio de base](/assets/images/help/desktop/start-rebase-button.png)
3. Si está seguro de que quiere fusionar mediante cambio de base, haga clic en **Iniciar fusionar mediante cambio de base**.
![Botón Iniciar fusionar mediante cambio de base](/assets/images/help/desktop/begin-rebase-button.png) {% data reusables.desktop.resolve-merge-conflicts %}
4. Para insertar los cambios locales, haga clic en **Forzar origen de inserción**.
![Forzar origen de inserción](/assets/images/help/desktop/force-push-origin.png)

{% endmac %}

{% windows %}

1. Use la lista desplegable **Rama** y haga clic en **Fusionar mediante cambio de base la rama actual**.
![Fusionar mediante cambio de base la rama actual en el menú desplegable Rama](/assets/images/help/desktop/windows-rebase-current-branch.png)
2. Haga clic en la rama que quiera fusionar mediante cambio de base en la rama actual y, después, haga clic en **Iniciar fusionar mediante cambio de base**.
![Botón Iniciar fusionar mediante cambio de base](/assets/images/help/desktop/start-rebase-button.png)
3. Si está seguro de que quiere fusionar mediante cambio de base, haga clic en **Iniciar fusionar mediante cambio de base**.
![Botón Iniciar fusionar mediante cambio de base](/assets/images/help/desktop/begin-rebase-button.png) {% data reusables.desktop.resolve-merge-conflicts %}
4. Para insertar los cambios locales, haga clic en **Forzar origen de inserción**.
![Forzar origen de inserción](/assets/images/help/desktop/force-push-origin.png)

{% endwindows %}

## Combinar y fusionar otra rama en tu rama de proyecto

1. Use la lista desplegable **Rama** y haga clic en **Fusionar mediante combinación y combinar en la rama actual**.
![Fusionar mediante combinación y combinar en el menú desplegable Rama](/assets/images/help/desktop/squash-and-merge-menu.png)
2. Haga clic en la rama que quiera combinar en la rama actual y luego en **Fusionar mediante combinación y combinar**.
![Botón Fusionar mediante combinación y combinar](/assets/images/help/desktop/squash-and-merge-selection.png) {% note %}

   **Nota:** Si hay conflictos de combinación, {% data variables.product.prodname_desktop %} le avisará encima del botón **Fusionar mediante combinación y combinar**. No podrás combinar y fusionar la rama hasta que hayas resuelto todos los conflictos.

   {% endnote %} {% data reusables.desktop.push-origin %}

## Lecturas adicionales
- "[Incorporación de cambios](/github/getting-started-with-github/github-glossary#pull)" en el glosario de {% data variables.product.prodname_dotcom %}
- "[Combinar](/github/getting-started-with-github/github-glossary#merge)" en el glosario de {% data variables.product.prodname_dotcom %}
- "[Fusionar mediante cambio de base](/github/getting-started-with-github/github-glossary#rebase)" en el glosario de {% data variables.product.prodname_dotcom %}
