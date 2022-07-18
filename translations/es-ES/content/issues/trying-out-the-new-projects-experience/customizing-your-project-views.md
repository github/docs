---
title: Personalizar las vistas de tu proyecto (beta)
intro: 'Muestra la información que necesitas cambiando el diseño, agrupamiento, forma de ordenar y los filtros de tu proyecto.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Projects
---

{% data reusables.projects.projects-beta %}

## Paleta de comandos de proyecto

Utiliza la paleta de comandos del proyecto para cambiar los ajustes y ejecutar comandos rápidamente en él.

1. {% data reusables.projects.open-command-palette %}
2. Comienza a teclear cualquier parte de un comando o navega a través de la ventana de la paleta de comandos para encontrarlo. Consulta las siguientes secciones para encontrar más ejemplos de comandos.

## Cambiar el diseño del proyecto

Puedes ver tu proyecto como una tabla o como un tablero.

1. {% data reusables.projects.open-command-palette %}
2. Comienza a teclear "Switch layout".
3. Elige el comando requerido. Por ejemplo, **Switch layout: Table**.

Como alternativa, haz clic en {% octicon "triangle-down" aria-label="the drop-down icon" %} junto a un nombre de vista y luego en **Tabla** o **Tablero**.

## Mostrar y ocultar campos

Puedes mostrar u ocultar un campo específico.

### Mostrar y ocultar los campos en el diseño de tabla

1. {% data reusables.projects.open-command-palette %}
2. Comienza a teclear la acción que quieres tomar ("show" o "hide") o el nombre del campo.
3. Elige el comando requerido. Por ejemplo, **Mostrar: Hito**.

Como alternativa, haz clic en {% octicon "plus" aria-label="the plus icon" %} a la derecha de la tabla. En el menú desplegable que se muestra, indica qué campos mostrar u ocultar. Un {% octicon "check" aria-label="check icon" %} indica qué campos se muestran.

Como alternativa, haz clic en {% octicon "triangle-down" aria-label="the drop-down icon" %} junto al nombre del campo y luego en **Ocultar campo**.

### Mostrar y ocultar los campos en diseño de tablero

1. Haz clic en {% octicon "triangle-down" aria-label="the drop-down icon" %} junto al nombre de vista.
2. Debajo de **configuración**, haz clic en {% octicon "list-unordered" aria-label="the unordered list icon" %}.
3. En el menú que se muestra, selecciona los campos para agregarlos y deselecciona los campos para eliminarlos de la vista.

## Reordenar los campos

Puedes cambiar el orden de los campos.

1. Haz clic en el encabezado del campo.
2. Haciendo clic, arrastra el campo a la ubicación requerida.

## Reordenar filas

En el diseño de tabla, puedes cambiar el orden de las filas.

1. Haz clic en el número al inicio de la fila.
2. Haciendo clic, arrastra la fila a la ubicación requerida.

## Clasificar por valor de campo

En el diseño de tabla, puedes organizar los elementos por valor de campo.

1. {% data reusables.projects.open-command-palette %}
2. Comienza a teclear "Sort by" o el nombre del campo por el cual quieras ordenar.
3. Elige el comando requerido. Por ejemplo, **Clasificar por: Asignados, asc**.

Como alternativa, haz clic en {% octicon "triangle-down" aria-label="the drop-down icon" %} junto al nombre de campo que quieras organizar y luego en **Ordenar ascendentemente** u **Ordenar descendentemente**.

{% note %}

**Nota:** Cuando se ordena una tabla, no puedes reordenar las filas manualmente.

{% endnote %}

Sigue pasos similares para eliminar una clasificación.

1. {% data reusables.projects.open-command-palette %}
2. Comienza a teclear "Remove sort-by".
3. Elige **Eliminar el ordenar por**.

Como alternativa, haz clic en {% octicon "triangle-down" aria-label="the drop-down icon" %} junto al nombre de vista y luego en el elemento del menú que indique la clasificación actual.

## Agrupar por valores de campo en el diseño de tabla

En el diseño de tabla, puedes agrupar elementos por un valor de campo personalizado. Cuando los elementos se agrupan, si arrastras un elemento a un grupo nuevo, se aplica el valor de este grupo. Por ejemplo, si agrupas por "Estado" y luego arrastras un elemento con un estado a `In progress` hacia el grupo `Done`, el estado del elemento cambiará a `Done`. De forma similar, cuando agregues un elemento nuevo a un grupo, este elemento se poblará con el valor del grupo.

{% note %}

**Nota:** Actualmente, no puedes agrupar por título, etiquetas, revisores o solicitudes de campo enlazadas.

{% endnote %}

1. {% data reusables.projects.open-command-palette %}
2. Comienza a teclear "Group by" o el nombre del campo por el cual quieres agrupar.
3. Elige el comando requerido. Por ejemplo, **Agrupar por: Estado**.

Como alternativa, haz clic en {% octicon "triangle-down" aria-label="the drop-down icon" %} junto al nombre de campo por el cual quieras agrupar y luego en **Agrupar por valores**.

Sigue pasos similares para eliminar un agrupamiento.

1. {% data reusables.projects.open-command-palette %}
2. Comienza a teclear "Remove group-by".
3. Elige **Eliminar el agrupar por**.

Como alternativa, haz clic en {% octicon "triangle-down" aria-label="the drop-down icon" %} junto al nombre de vista y luego en el elemento de menú que indica el agrupamiento actual.

## Configurar el campo de columna en el diseño del tablero

En el diseño de tablero, puedes elegir cualquier campo simple o de iteración para tus columnas. Si arrastras a un elemento a una columna nueva, el valor de dicha columna se aplicará al elemento que arrastraste. Por ejemplo, si utilizas el campo "Estado" para tus columnas de tablero y luego arrastras un elemento con un estado de `In progress` a la columna `Done`, el estado del elemento se cambiará a `Done`.

1. {% data reusables.projects.open-command-palette %}
1. Comienza a teclear "Column field by" o el nombre del campo que quieras utilizar para tus columnas.
1. Elige el comando requerido. Por ejemplo, **Column field by: Status**.

Como alternativa, haz clic en el {% octicon "triangle-down" aria-label="the drop-down icon" %} juento a la vista de tablero que quieras modificar y haz clic en el **campo de columna** {% octicon "columns" aria-label="the column icon" %}. Posteriormente, selecciona el campo que quieras utilizar para las columnas del tablero.

## Filtrar elementos

Haz clic en el {% octicon "filter" aria-label="the filter icon" %} en la parte superior de la tabla para mostrar la barra de "Filtrar por palabra clave o por campo". Comienza a teclear el nombre de campo y valor por el cuál quieras filtrar. Conforme teclees, se mostrarán los posibles valores.

{% data reusables.projects.projects-filters %}

Como alternativa, utiliza la paleta de comandos.

1. {% data reusables.projects.open-command-palette %}
2. Comienza a teclear "Filter by" o el nombre del campo por el cual quieres filtrar.
3. Elige el comando requerido. Por ejemplo, **Filtrar por estado**.
4. Ingresa el valor por el cual quieras filtrar. Por ejemplo: "En progreso". También puedes filtrar por el criterio de ausencia de algún valor específico (por ejemplo: elige "Excluir estado" y luego elige un estado) o por la ausencia de todos los valores (Por ejemplo: "Sin estado").

En el diseño del tablero, puedes hacer clic en los datos del elemento o filtrar los elementos con este valor. Por ejemplo, haz clic en un asignado para mostrar únicamente los elementos de este. Para eliminar el filtro, haz clic en los datos de el elemento nuevamente.

Para obtener más información, consulta la sección "[Filtrar proyectos](/issues/trying-out-the-new-projects-experience/filtering-projects)".

## Crear una vista de proyecto

Las vistas de proyecto te permiten ver los aspectos específicos de tu proyecto rápidamente. Cada vista se muestra en una pestaña por separado en tu proyecto.

Por ejemplo, puedes tener:
- Una vista que muestre todos los elementos que aún no han iniciado (filtrar en "Estado").
- Una vista que muestre la carga de trabajo para cada equipo (agrupar por un campo personalizado de "Equipo").
- Una vista que muestre los elementos con la fecha de envío destino más reciente (ordenar por campo de fecha).

Para agregar una vista nueva:

1. {% data reusables.projects.open-command-palette %}
2. Comienza a teclear "New view" (para crear una vista nueva) o "Duplicate view" (para duplicar la vista actual).
3. Elige el comando requerido.

Como alternativa, haz clic en {% octicon "plus" aria-label="the plus icon" %} **Vista nueva** junto a la vista que está más hacia la derecha.

Como alternativa, haz clic en el {% octicon "triangle-down" aria-label="the drop-down icon" %} junto a un nombre de vista y luego en **Duplicar vista**.

La vista nueva se guarda automáticamente.

## Guardar los cambios en una vista

Cuando haces cambios en una vista, por ejemplo: clasificar, reordenar, filtrar o agrupar los datos en una vista, se muestra un punto junto al nombre de la vista para indicar que hay cambios sin guardar.

![Indicador de cambios sin guardar](/assets/images/help/projects/unsaved-changes.png)

Si no quieres guardar los cambios, puedes ignorar este indicador. Nadie verá tus cambios.

Para guardar la configuración actual de la vista para todos los miembros del proyecto:
1. {% data reusables.projects.open-command-palette %}
1. Comienza a teclear "Save view" o "Save changes to new view".
1. Elige el comando requerido.

Como alternativa, haz clic en el {% octicon "triangle-down" aria-label="the drop-down icon" %} junto a un nombre de vista y luego en **Guardar vista** o en **Guardar cambios en una vista nueva**.

## Reordenar las vistas guardadas

Para cambiar el orden de las pestañas que contienen tus vistas guardadas, haz clic y arrastra una pestaña a una ubicación nueva.

El orden de pestañas nuevo se guardará automáticamente.

## Renombrar una vista guardada

Para renombrar una vista:
1. Haz doble clic en el nombre de la pestaña del proyecto.
1. Cambia el nombre.
1. Presiona Enter o haz clic fuera de la pestaña.

El cambio de nombre se guarda automáticamente.

## Borrar una vista guardada

Para borrar una vista:
1. {% data reusables.projects.open-command-palette %}
2. Comienza a teclear "Delete view".
3. Elige el comando requerido.

Como alternativa, haz clic en el {% octicon "triangle-down" aria-label="the drop-down icon" %} junto a un nombre de vista y luego en **Borrar vista**.

## Leer más

- "[Acerca de los proyectos (beta)](/issues/trying-out-the-new-projects-experience/about-projects)"
- "[Crear un proyecto (beta)](/issues/trying-out-the-new-projects-experience/creating-a-project)"
