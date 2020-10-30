---
title: Cargar cambios en GitHub
shortTitle: Cargar cambios
intro: 'De manera que confirmes cambios localmente en tu proyecto, puedes cargarlos a {% data variables.product.prodname_dotcom %} para que otros puedan acceder a ellos desde el repositorio remoto.'
permissions: Las personas con permisos de escritura pueden cargar cambios a un repositorio.
versions:
  free-pro-team: '*'
---

### Acerca de cargar cambios a {% data variables.product.prodname_dotcom %}

Cuando cargas cambios, envías los cambios confirmados en tu repositorio local al repositorio remoto en {% data variables.product.prodname_dotcom %}. Si cambias tu proyecto localmente y quieres que otros tengan acceso a los cambios, deberás cargar los cambios a {% data variables.product.prodname_dotcom %}.

Antes de cargar los cambios, debes actualizar tu rama local para que incluya cualquier confirmación que se haya agregado al repositorio remoto. Si alguien hizo confirmaciones en la rama remota, las cuales no están en tu rama local, {% data variables.product.prodname_desktop %} te solicitará conseguir las confirmaciones nuevas antes de cargar tus cambios para evitar conflictos de fusión. Para obtener más información, consulta la sección "[Sincronizar tu rama](/desktop/contributing-to-projects/syncing-your-branch)".

{% data reusables.desktop.protected-branches %}

### Cargar cambios a {% data variables.product.prodname_dotcom %}

{% note %}

**Nota:** {% data variables.product.prodname_desktop %} rechazará una carga si excede ciertos límites.

- Una carga contiene un archivo grande de más de 100MB de tamaño.
- Una carga es mayor a 2GB en su tamaño total.

{% endnote %}

{% data reusables.desktop.push-origin %}
2. Si {% data variables.product.prodname_desktop %} te pide traer las confirmaciones nuevas de la rama remota, da clic en **Recuperar**. ![El botón de recuperar](/assets/images/help/desktop/fetch-newer-commits.png)
3. Opcionalmente, da clic en **Crear Solicitud de Extracción** para abrir una solicitud de extracción y colaborar en tus cambios. Para obtener más información, consulta la sección "[Crear un informe de problemas o solicitud de extracción](/desktop/contributing-to-projects/creating-an-issue-or-pull-request)" ![El botón de crear solicitud de extracción](/assets/images/help/desktop/create-pull-request.png)

### Leer más
- "[Cargar](/github/getting-started-with-github/github-glossary/#push)" en el glosario de {% data variables.product.prodname_dotcom %}
- "[Confirmar y revisar los cambios hechos a tu proyecto](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project)"
