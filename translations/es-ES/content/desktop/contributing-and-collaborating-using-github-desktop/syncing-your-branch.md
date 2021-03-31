---
title: Sincronizar tu rama
intro: 'Conforme se suban las confirmaciones a tu proyecto en {% data variables.product.prodname_dotcom %}, podrás mantener una copia local de éste en sincornización si lo extraes del repositorio remoto.'
redirect_from:
  - /desktop/contributing-to-projects/syncing-your-branch
versions:
  free-pro-team: '*'
---

### Acerca de la sincronización de ramas

Puedes sincronizar tu rama local con el repositorio remoto si extraes cualquier confirmación que se haya agregado a la rama en {% data variables.product.product_name %} desde la última vez que lo sincronizaste. Si realizas confirmaciones desde otro dispositivo o si muchas personas colaboran con el proyecto, necesitarás sincronizar tu rama local para mantenerla actualizada.

Cuando extraes información a tu rama local, únicamente estás actualizando la copia local del repositorio. Para actualziar tu rama en {% data variables.product.prodname_dotcom %}, deberás subir tus cambios. Para obtener más información, consulta la sección "[Subir los cambios a {% data variables.product.prodname_dotcom %}](/desktop/contributing-to-projects/pushing-changes-to-github)".

Para agregar cambios de una rama en otra, puedes fusionar estas ramas. Para aplicar los cambios a tu rama desde otra rama en el mismo repositorio, puedes fusionar esta otra rama con la tuya en {% data variables.product.prodname_desktop %}. Para solicitar que se fusionen los cambios de tu rama en otra rama que se encuentre en el mismo repositorio o en otro repositorio dentro de la red, puedes crear una solicitud de extracción en {% data variables.product.prodname_desktop %}. Para obtener más información, consulta las secciones "[Fusionar otra rama en tu rama de proyecto](#merging-another-branch-into-your-project-branch)" y "
Acerca de las solicitudes de extracción".</p> 

Algunos flujos de trabajo requieren o se benefician con el rebase en vez de con la fusión. Al rebasar podemos reordenar, editar o combinar confirmaciones. Para obtener más información, consulta las secciones "[Acerca del rebase de Git](/github/getting-started-with-github/about-git-rebase)" y "[rebasar tu rama de proyecto en otra rama](#rebasing-your-project-branch-onto-another-branch)".



### Extraer tu rama local de la rama remota

1. En {% data variables.product.prodname_desktop %}, utiliza el menú desplegable de {% octicon "git-branch" aria-label="The branch icon" %} **Rama Actual** y selecciona la rama local que quieres actualizar.
2.  Para verificar las confirmaciones en la rama remota, da clic en **Obtener origen** ![El botón Fetch origin (Buscar origen)](/assets/images/help/desktop/fetch-button.png)

3. Para extraer cualquier confirmación de la rama remota, da clic en **Extraer origen** o en **Extraer origen con rebase**. ![El botón Pull origin (Extraer origen)](/assets/images/help/desktop/pull-button.png) 
   
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



### Rebasar tu rama de proyecto en otra rama

{% mac %}

1. En la barra de menú, utiliza el menú desplegable de **Rama** y da clic en **Rebasar la rama actual**. ![Rebase Current Branch (Rebasar rama actual) en el desplegable de rama](/assets/images/help/desktop/mac-rebase-current-branch.png)

2. Haz clic en la rama que deseas rebasar en la rama actual, luego haz clic en **Start rebase**. ![Botón Start rebase (Iniciar rebase)](/assets/images/help/desktop/start-rebase-button.png)

3. Si estás seguro de que deseas rebasar, haz clic en **Begin rebase** (Comenzar rebase). ![Botón Begin rebase (Comenzar rebase)](/assets/images/help/desktop/begin-rebase-button.png) 
   
   {% data reusables.desktop.resolve-merge-conflicts %}

4. Para subir tus cambios locales, da clic en **Subir el origen forzadamente**. ![Origen de empuje forzado](/assets/images/help/desktop/force-push-origin.png)

{% endmac %}

{% windows %}

1. Usa el desplegable ** Branch** y haz clic en **Rebase Current Branch**. ![Rebase Current Branch (Rebasar rama actual) en el desplegable de rama](/assets/images/help/desktop/windows-rebase-current-branch.png)

2. Haz clic en la rama que deseas rebasar en la rama actual, luego haz clic en **Start rebase**. ![Botón Start rebase (Iniciar rebase)](/assets/images/help/desktop/start-rebase-button.png)

3. Si estás seguro de que deseas rebasar, haz clic en **Begin rebase** (Comenzar rebase). ![Botón Begin rebase (Comenzar rebase)](/assets/images/help/desktop/begin-rebase-button.png) 
   
   {% data reusables.desktop.resolve-merge-conflicts %}

4. Para extraer tus cambios locales, haz clic en **Force push origin** (Origen de empuje forzado). ![Origen de empuje forzado](/assets/images/help/desktop/force-push-origin.png)

{% endwindows %}



### Leer más

- "[Extraer](/github/getting-started-with-github/github-glossary#pull)" en el glosario de {% data variables.product.prodname_dotcom %}
- "[Fusionar](/github/getting-started-with-github/github-glossary#merge)" en el glosario de {% data variables.product.prodname_dotcom %}
- "[Rebasar](/github/getting-started-with-github/github-glossary#rebase)" en el glosario de {% data variables.product.prodname_dotcom %}
