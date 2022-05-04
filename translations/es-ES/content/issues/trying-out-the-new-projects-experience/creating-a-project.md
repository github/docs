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

## Actualizar la descripción y el README de tu proyecto

{% data reusables.projects.project-description %}

## Agregar elementos a tu proyecto

Tu proyecto puede rastrear borradores de propuestas, propuestas, y solicitudes de cambios.

### Crear borradores de propuestas

Los borradores de propuestas son útiles si quieres capturar ideas rápidamente.

1. Coloca tu cursor en la fila inferior del proyecto, junto al {% octicon "plus" aria-label="plus icon" %}.
1. Teclea tu ida y luego presiona **Enter**.
1. Para agregar cuerpo de texto, haz clic en el título del borrador de propuesta. En la caja de entrada de lenguaje de marcado que se muestra, ingresa el texto para el cuerpo del borrador de propuesta y luego haz clic en **Guardar**.

Los borradores de propuesta pueden tener un título, cuerpo de texto, asignados y cualquier campo personalizado desde tu proyecto. Para poder poblar el repositorio, las etiquetas o hitos de un borrador de propuesta, primero debes convertirla en una propuesta formal. Para obtener más información, consulta la sección "[Convertir los borradores de propuesta en propuestas formales](#converting-draft-issues-to-issues)".

{% note %}

**Nota**: Los usuarios no recibirán notificaciones cuando se les asigne o se les mencione en un borrador de propuesta, a menos de que este se convierta en una propuesta formal.

{% endnote %}

### Propuestas y solicitudes de extracción

#### Pegar la URL de una propuesta o solicitud de cambios

1. Coloca tu cursor en la fila inferior del proyecto, junto al {% octicon "plus" aria-label="plus icon" %}.
1. Pega la URL de la propuesta o solicitud de cambios.

#### Buscar una propuesta o solicitud de cambios

1. Coloca tu cursor en la fila inferior del proyecto, junto al {% octicon "plus" aria-label="plus icon" %}.
2. Ingresa <kbd>#</kbd>.
3. Selecciona el repositorio en donde se ubica la solicitud de cambios o propuesta. Puedes teclear la parte del nombre de repositorio para reducir tus opciones.
4. Selecciona la propuesta o solicitud de cambios. Puedes teclear parte del título para reducir tus opciones.

#### Agregar propuestas o solicitudes de cambio múltiples desde un repositorio

1. En {% data variables.product.product_location %}, navega al repositorio que contiene las propuestas o solicitudes de cambio que quieras agregar a tu proyecto.
{% data reusables.repositories.sidebar-issue-pr %}
1. A la izquierda de cada título de propuesta, selecciona aquellas que quieras agregar a tu proyecto. ![Captura de pantalla que muestra una casilla de verificación para seleccionar una propuesta o solicitud de cambios](/assets/images/help/issues/select-issue-checkbox.png)
1. Opcionalmente, para seleccionar todas las propuestas o solicitudes de cambio en la página, en la parte superior de la lista de propuesta o solicitudes de cambio, selecciona todas. ![Captura de pantalla que muestra la casilla de verificación para seleccionar todo en la pantalla](/assets/images/help/issues/select-all-checkbox.png)
1. Sobre la lista de propuestas o solicitudes de cambio, haz clic en **Proyectos (beta)**. ![Captura de pantalla que muestra la casilla de verificación para seleccionar todo en la pantalla](/assets/images/help/issues/projects-beta-assign-button.png)
1. Haz clic en los proyectos a los que quieras agregar las propuestas o solicitudes de cambio. ![Captura de pantalla que muestra la casilla de verificación para seleccionar todo en la pantalla](/assets/images/help/issues/projects-beta-assign-dropdown.png)

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
4. Como alternativa, edita los campos `labels`, `milestone` o `repository` del borrador de propuesta que quieras convertir.

En el diseño del tablero:

1. Haz clic en el {% octicon "kebab-horizontal" aria-label="the item menu" %} en el borrador de propuesta que quieras convertir.
2. Selecciona **Convertir en propuesta**.
3. Selecciona el repositorio al cual quieras agregar la propuesta.

## Eliminar elementos de tu proyecto

Puedes archivar un elemento para mantener el contexto sobre este en el proyecto, pero eliminarlo de las vistas del proyecto. Puedes borrar un elemento para eliminarlo por completo del proyecto.

1. Selecciona el(los) elemento(s) a archivar o borrar. Para seleccionar elementos múltiples, realiza alguna de las siguientes acciones:
     - <kbd>Command</kbd>+Clic (Mac) o <kbd>Ctrl</kbd>+Click (Windows/Linux) en cada elemento.
     - Selecciona un elemento y luego presiona <kbd>Shift</kbd>+<kbd>↑</kbd> o <kbd>Shift</kbd>+<kbd>↓</kbd> para seleccionar los elementos adicionales sobre o debajo del que seleccionaste inicialmente.
     - Selecciona un elemento y luego presiona <kbd>Shift</kbd>+Clic en otro elemento para seleccionar todos los elementos entre dos de ellos.
     - Ingresa <kbd>Command</kbd>+<kbd>A</kbd> (Mac) o <kbd>Ctrl</kbd>+<kbd>A</kbd> (Windows/Linux) para seleccionar todos los elementos en una columna en un diseño amplio o todos los elementos en un diseño de tabla.
2. Para archivar todos los elementos seleccionados, ingresa <kbd>E</kbd>. Para borrar todos los elementos seleccionados, ingresa <kbd>Del</kbd>. Como alternativa, selecciona el {% octicon "triangle-down" aria-label="the item menu" %} (en el diseño de tabla) o el {% octicon "kebab-horizontal" aria-label="the item menu" %} (en el diseño de tablero) y luego selecciona la acción deseada.

Puedes restablecer los elementos archivados, pero no los borrados. Para obtener más información, consulta la sección de [Cómo restaurar los elementos archivados](#restoring-archived-items).

## Restaurar los elementos archivados

1. Navegar a tu proyecto.
1. En la parte derecha, haz clic en {% octicon "kebab-horizontal" aria-label="the kebab icon" %}.
1. En el menú, haz clic en **Elementos archivados**.
1. Opcionalmente, para filtrar los elementos archivados que se muestran, teclea tu filtro en la caja de texto superior a la lista de elementos. Para obtener más información sobre los filtros disponibles, consulta la sección "[Filtrar proyectos (beta)](/issues/trying-out-the-new-projects-experience/filtering-projects)".

   ![Captura de pantalla que muestra un campo para filtrar los elementos archivados](/assets/images/help/issues/filter-archived-items.png)

1. A la izquierda de cada título de elemento, selecciona aquellos que te gustaría restablecer.

   ![Captura de pantalla que muestra las casillas de verificación junto a los elementos archivados](/assets/images/help/issues/select-archived-item.png)

1. Para restablecer los elementos seleccionados, sobre la lista de elementos, haz clic en **Restablecer**.

   ![Captura de pantalla que muestra el botón "Restablecer"](/assets/images/help/issues/restore-archived-item-button.png)

## Agregar campos

Conforme cambian los valores de los campos, estos se sincronizan automáticamente para que tu proyecto y los elementos que rastrea estén actualizados.

### Mostrar campos existentes

Tu proyecto rastrea la información actualizada de las propuestas y solicitudes de cambio, incluyendo cualquier cambio en el título, asignados, etiquetas, hitos, repositorios, revisores y solicitudes de cambio enlazadas. Cuando tu proyecto inicializa, se muestran el "título" y los "asignados"; los otros campos están ocultos. Puedes cambiar la visibilidad de estos campos en tu proyecto.

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
- Iteración: el valor debe seleccionarse desde un conjunto de rangos de fechas (iteraciones). Las iteraciones pasadas se marcan automáticamente como "completadas" y la iteración que cubre el rango de fecha actual se marca como "actual". Para obtener más información, consulta la sección "[Administrar las iteraciones en los proyectos](/issues/trying-out-the-new-projects-experience/managing-iterations)".

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
1. Para los campos de iteración, puedes agregar o borrar las iteraciones, cambiar los nombres de estas y cambiar la fecha de inicio y duración de las mismas.

   Para encontrar más información sobre cómo modificar los campos de iteración, consulta "[Administrar las iteraciones en los proyectos](/issues/trying-out-the-new-projects-experience/managing-iterations)".

## Personalizar tus vistas

Puedes ver tu proyecto como una tabla o tablero, agrupar los elementos por campo, elemento de filtrado y más. Para obtener más información, consulta la sección "[Personalizar las vistas de tu proyecto (beta)](/issues/trying-out-the-new-projects-experience/customizing-your-project-views)".

## Configurar la automatización integrada

{% data reusables.projects.about-workflows %}

Puedes habilitar o inhabilitar los flujos de trabajo integrados de tu proyecto.

{% data reusables.projects.enable-basic-workflow %}

## Agregar tu proyecto a un repositorio

Puedes listar los proyectos relevantes en un repositorio. Solo puedes listar proyectos que le pertenezcan al mismo usuario u organización propietaria del repositorio.

Para que los miembros de los repositorios vean un proyecto que se lista en dichos repositorios, deben tener visibilidad del proyecto. Para obtener más información, consulta las secciones "[Administrar la visibilidad de tus proyectos (beta)](/issues/trying-out-the-new-projects-experience/managing-the-visibility-of-your-projects)" y "[Administrar el acceso a los proyectos (beta)](/issues/trying-out-the-new-projects-experience/managing-access-to-projects)".

1. En {% data variables.product.prodname_dotcom %}, navega a la página principal de tu repositorio.
1. Haz clic en {% octicon "table" aria-label="the project icon" %} **Proyectos**.
1. Haz clic en **Proyectos (Beta)** en la barra lateral.
1. Haz clic en **Agregar proyecto**.
1. En la barra de búsqueda que se muestra, busca los proyectos que le pertenezcan al mismo usuario u organización propietaria del repositorio.
1. Haz clic en un proyecto para listarlo en tu repositorio.
