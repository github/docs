---
title: Sincronizar tu rama
intro: 'Tus confirmaciones suben a tu proyecto en {% data variables.product.prodname_dotcom %}, puedes conservar una copia local del proyecto en sincronía con el repositorio remoto.'
versions:
  free-pro-team: '*'
---

Debes sincronizar tu rama local con el repositorio remoto para obtener las confirmaciones adicionales que se agregaron a la rama ascendente desde que [creaste tu rama](/desktop/guides/contributing-to-projects/managing-branches) originalmente.

### Actualizar tu rama local

1. En {% data variables.product.prodname_desktop %}, alterna a la rama local que deseas actualizar haciendo clic en {% octicon "git-branch" aria-label="The branch icon" %}**Current Branch** (Rama actual) y seleccionando la rama de la lista.
2. Haz clic en **Fetch origin** (Extraer origen) para actualizar tu rama. ![El botón Fetch origin (Buscar origen)](/assets/images/help/desktop/fetch-button.png)
3. Si hay confirmaciones en la rama remota, puedes extraerlas haciendo clic en **Pull origin** (Extraer origen) o **Pull origin with rebase** (Extraer origen con rebase). ![El botón Pull origin (Extraer origen)](/assets/images/help/desktop/pull-button.png)
{% data reusables.desktop.resolve-merge-conflicts %}

### Fusionar otra rama en tu rama de proyecto

{% data reusables.desktop.current-branch-menu %}
{% data reusables.desktop.choose-a-branch-to-merge %}
{% data reusables.desktop.confirm-merging-branch %}

   {% note %}

   **Nota:** Si hay conflictos de fusión, {% data variables.product.prodname_desktop %} te advertiremos sobre **Merge <em>BRANCH</em> (Fusionar RAMA) en el botón <em>BRANCH</em>** (RAMA). No podrás fusionar las ramas hasta que hayas resuelto todos los conflictos.

   {% endnote %}

   ![El botón Merge (Fusionar)](/assets/images/help/desktop/merge-branch-button.png)
{% data reusables.desktop.push-origin %}

### Rebasa tu rama de proyecto en otra rama
Algunos flujos de trabajo requieren o se benefician a partir de un rebase en contraposición a una fusión. Al rebasar podemos reordenar, editar o combinar confirmaciones. Para obtener más información, consulta [Accerca del rebase de Git](/articles/about-git-rebase)."

1. Usa el desplegable ** Branch** y haz clic en **Rebase Current Branch**. ![Rebase Current Branch (Rebasar rama actual) en el desplegable de rama](/assets/images/help/desktop/rebase-current-branch.png)
2. Haz clic en la rama que deseas rebasar en la rama actual, luego haz clic en **Start rebase**. ![Botón Start rebase (Iniciar rebase)](/assets/images/help/desktop/start-rebase-button.png)
3. Si estás seguro de que deseas rebasar, haz clic en **Begin rebase** (Comenzar rebase). ![Botón Begin rebase (Comenzar rebase)](/assets/images/help/desktop/begin-rebase-button.png)
{% data reusables.desktop.resolve-merge-conflicts %}
4. Para extraer tus cambios locales, haz clic en **Force push origin** (Origen de empuje forzado). ![Origen de empuje forzado](/assets/images/help/desktop/force-push-origin.png)
