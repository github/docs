---
title: Crear un proyecto (beta)
intro: 'Aprende cómo crear un proyecto, llénalo y agrega campos personalizados.'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: tutorial
topics:
  - Projects
---

Los proyectos son una colección personalizable de elementos que se mantienen actualizados con los datos de {% data variables.product.company_short %}. Tus proyectos pueden rastrear propuestas, solicitudes de cambios e ideas que aterrices. Puedes agregar campos personalizados y vistas creativas para propósitos específicos.

{% data reusables.projects.projects-beta %}

## Crear un proyecto

### Crear un proyecto organizacional

{% data reusables.projects.create-project %}

### Crear un proyecto de usuario

{% data reusables.projects.create-user-project %}

## Agregar elementos a tu proyecto

Tu proyecto puede rastrear borradores de propuestas, propuestas, y solicitudes de cambios.

### Crear borradores de propuestas

Los borradores de propuestas son útiles si quieres capturar ideas rápidamente.

1. Coloca tu cursor en la fila inferior del proyecto, junto al {% octicon "plus" aria-label="plus icon" %}.
2. Teclea tu ida y luego presiona **Enter**.

Puedes convertir los borradores de propuestas en propuestas. Para obtener más información, consulta la sección [Convertir borradores de propuestas en propuestas](#converting-draft-issues-to-issues).

### Propuestas y solicitudes de extracción

#### Pegar la URL de una propuesta o solicitud de cambios

1. Coloca tu cursor en la fila inferior del proyecto, junto al {% octicon "plus" aria-label="plus icon" %}.
1. Pega la URL de la propuesta o solicitud de cambios.

#### Buscar una propuesta o solicitud de cambios

1. Coloca tu cursor en la fila inferior del proyecto, junto al {% octicon "plus" aria-label="plus icon" %}.
2. Ingresa <kbd>#</kbd>.
3. Selecciona el repositorio en donde se ubica la solicitud de cambios o propuesta. Puedes teclear la parte del nombre de repositorio para reducir tus opciones.
4. Selecciona la propuesta o solicitud de cambios. Puedes teclear parte del título para reducir tus opciones.

#### Asignar un rpoyecto desde dentro de una propuesta o solicitud de cambios

1. Navega a la propuesta o solicitud de cambios que quieras agregar a un proyecto.
2. En la barra lateral, haz clic en **Proyectos**.
3. Selecciona el proyecto al cual quieras agregar la propuesta o solicitud de cambios.
4. Opcionalmente, llena los campos personalizados.

   ![Barra lateral del proyecto](/assets/images/help/issues/project_side_bar.png)

## Convertir los borradores de propuestas en propuestas

En el diseño de la tabla:

1. Haz clic en el {% octicon "triangle-down" aria-label="the item menu" %} en el borrador de propuesta que quieras convertir.
2. Selecciona **Convertir en propuesta**.
3. Selecciona el repositorio al cual quieras agregar la propuesta.
4. Como alternativa, edita los campos de `assignee`, `labels`, `milestone` o `repository` en el borrador de propuesta que quieras convertir.

En el diseño del tablero:

1. Haz clic en el {% octicon "kebab-horizontal" aria-label="the item menu" %} en el borrador de propuesta que quieras convertir.
2. Selecciona **Convertir en propuesta**.
3. Selecciona el repositorio al cual quieras agregar la propuesta.

## Eliminar elementos de tu proyecto

Puedes archivar un elemento para mantener el contexto sobre este en el proyecto, pero eliminarlo de las vistas del proyecto. Puedes borrar un elemento para eliminarlo por completo del proyecto.

1. Selecciona el(los) elemento(s) a archivar o borrar. Para seleccionar elementos múltiples, realiza alguna de las siguientes acciones:
     - <kbd>Command</kbd>+Click (Mac) or <kbd>Ctrl</kbd>+Click (Windows/Linux) each item.
     - Select an item then <kbd>Shift</kbd>+<kbd>↑</kbd> or <kbd>Shift</kbd>+<kbd>↓</kbd> to select additional items above or below the initially selected item.
     - Select an item then <kbd>Shift</kbd>+Click another item to select all items between the two items.
     - Enter <kbd>Command</kbd>+<kbd>A</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>A</kbd> (Windows/Linux) to select all items in a column in a board layout or all items in a table layout.
2. To archive all selected items, enter <kbd>E</kbd>. To delete all selected items, enter <kbd>Del</kbd>. Como alternativa, selecciona el {% octicon "triangle-down" aria-label="the item menu" %} (en el diseño de tabla) o el {% octicon "kebab-horizontal" aria-label="the item menu" %} (en el diseño de tablero) y luego selecciona la acción deseada.

Puedes restablecer los elementos archivados, pero no los borrados. Para obtener más información, consulta la sección de [Cómo restaurar los elementos archivados](#restoring-archived-items).

## Restaurar los elementos archivados

Para restablecer un elemento archivado, navega a la propuesta o solicitud de cambios. En la barra lateral del proyecto sobre la propuesta o solicitud de cambios, haz clic en **Restablecer** en el proyecto al cual quieras restablecer el elemento. Los borradores de propuestas no pueden restaurarse.

## Agregar campos

Conforme cambian los valores de los campos, estos se sincronizan automáticamente para que tu proyecto y los elementos que rastrea estén actualizados.

### Mostrar campos existentes

Tu proyecto rastrea la información actualizada de las propuestas y solicitudes de cambio, incluyendo cualquier cambio al título, asignados, etiquetas, hitos y repositorio. Cuando tu proyecto inicializa, se muestran el "título" y los "asignados"; los otros campos están ocultos. Puedes cambiar la visibilidad de estos campos en tu proyecto.

1. {% data reusables.projects.open-command-palette %}
2. Comienza a teclear "show".
3. Selecciona el comando deseado (por ejemplo: "Show: Repository").

Como alternativa, puedes hacer esto en la IU:

1. Haz clic en {% octicon "plus" aria-label="the plus icon" %} en el encabezado de campo que está hasta la derecha. Aparecerá un menú desplegable con los campos de proyecto. ![Mostrar u ocultar los campos](/assets/images/help/issues/projects_fields_menu.png)
2. Selecciona el(los) campo(s) que quieras desplegar u ocultar. Un {% octicon "check" aria-label="check icon" %} indica qué campos se muestran.

### Agregar campos personalizados

Puedes agregar campos personalizados a tu proyecto. Los campos personalizados se mostrarán en la bara lateral de las propuestas y solicitudes de cambio en el proyecto.

Los campos personalizados pueden ser de texto, número, fecha, selección simple o iteración:

- Texto: El valor puede ser cualquier tipo de texto.
- Número: El valor debe ser un número.
- Fecha: El valor puede ser una fecha.
- Selección simple: El valor debe seleccionarse desde un conjunto de valores especificados.
- Iteración: el valor debe seleccionarse desde un conjunto de rangos de fechas (iteraciones). Las iteraciones pasadas se marcan automáticamente como "completadas" y la iteración que cubre el rango de fecha actual se marca como "actual".

1. {% data reusables.projects.open-command-palette %} Comienza a teclear cualquier parte de "Create new field". Cuando se muestre "Create new field" en la paleta de comandos, selecciónalo.
2. Como alternativa, haz clic en {% octicon "plus" aria-label="the plus icon" %} en el encabezado de campo que está lo más hacia la derecha. Aparecerá un menú desplegable con los campos de proyecto. Haz clic en **Campo nuevo**.
3. Se mostrará una ventana emergente para que ingreses la información sobre el campo nuevo. ![Campo nuevo](/assets/images/help/issues/projects_new_field.png)
4. En la caja de texto, ingresa un nombre para el campo nuevo.
5. Selecciona el menú desplegable y haz clic en el tipo deseado.
6. Si especificaste **Selección simple** como el tipo, ingresa las opciones.
7. Si especificaste **Iteración** como el tipo, ingresa la fecha de inicio de la primera iteración y la duración de la misma. Se crearán tres iteraciones automáticamente y podrás agregar iteraciones adicionales en la página de ajustes del proyecto.

Puedes editar las opciones del menú desplegable posteriormente para los campos de iteración y de selección sencilla.

{% data reusables.projects.project-settings %}
1. Debajo de **Campos**, selecciona aquél que quieras editar.
1. Para los campos de selección sencilla, puedes agregar, borrar o reordenar las opciones.
2. Para los campos de iteración, puedes agregar o borrar las iteraciones, cambiar los nombres de estas y cambiar la fecha de inicio y duración de las mismas.

## Personalizar tus vistas

Puedes ver tu proyecto como una tabla o tablero, agrupar los elementos por campo, elemento de filtrado y más. Para obtener más información, consulta la sección "[Personalizar las vistas de tu proyecto (beta)](/issues/trying-out-the-new-projects-experience/customizing-your-project-views)".

## Configurar la automatización integrada

{% data reusables.projects.about-workflows %}

Puedes habilitar o inhabilitar los flujos de trabajo integrados de tu proyecto.

{% data reusables.projects.enable-basic-workflow %}
