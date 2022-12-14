---
title: Crear un proyecto (beta)
intro: Aprende cómo crear un proyecto, llénalo y agrega campos personalizados.
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: tutorial
topics:
- Projects
ms.openlocfilehash: 3fa7e52f09f3be67a036000b13f484b29852a741
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 07/13/2022
ms.locfileid: "145135366"
---
Los proyectos son una colección personalizable de elementos que se mantienen actualizados con los datos de {% data variables.product.company_short %}. Tus proyectos pueden rastrear propuestas, solicitudes de cambios e ideas que aterrices. Puedes agregar campos personalizados y vistas creativas para propósitos específicos.

{% data reusables.projects.projects-beta %}

## <a name="creating-a-project"></a>Creación de un proyecto

### <a name="creating-an-organization-project"></a>Crear un proyecto organizacional

{% data reusables.projects.create-project %}

### <a name="creating-a-user-project"></a>Crear un proyecto de usuario

{% data reusables.projects.create-user-project %}

## <a name="updating-your-project-description-and-readme"></a>Actualizar la descripción y el README de tu proyecto

{% data reusables.projects.project-description %}

## <a name="adding-items-to-your-project"></a>Agregar elementos a tu proyecto

Tu proyecto puede rastrear borradores de propuestas, propuestas, y solicitudes de cambios.

### <a name="creating-draft-issues"></a>Crear borradores de propuestas

Los borradores de propuestas son útiles si quieres capturar ideas rápidamente.

1. Coloca tu cursor en la fila inferior del proyecto, junto al {% octicon "plus" aria-label="plus icon" %}.
1. Escriba su idea y presione **Entrar**.
1. Para agregar cuerpo de texto, haz clic en el título del borrador de propuesta. En el cuadro de entrada de Markdown que aparece, escriba el texto del cuerpo del borrador de la incidencia y, después, haga clic en **Save** (Guardar).

Los borradores de propuesta pueden tener un título, cuerpo de texto, asignados y cualquier campo personalizado desde tu proyecto. Para poder poblar el repositorio, las etiquetas o hitos de un borrador de propuesta, primero debes convertirla en una propuesta formal. Para obtener más información, vea "[Conversión de borradores de incidencias a incidencias](#converting-draft-issues-to-issues)".

{% note %}

**Nota**: Los usuarios no recibirán notificaciones cuando se les asigne o se les mencione en un borrador de incidencia, a menos de que este se convierta en una incidencia.

{% endnote %}

### <a name="issues-and-pull-requests"></a>Propuestas y solicitudes de extracción

#### <a name="paste-the-url-of-an-issue-or-pull-request"></a>Pegar la URL de una propuesta o solicitud de cambios

1. Coloca tu cursor en la fila inferior del proyecto, junto al {% octicon "plus" aria-label="plus icon" %}.
1. Pega la URL de la propuesta o solicitud de cambios.

#### <a name="searching-for-an-issue-or-pull-request"></a>Buscar una propuesta o solicitud de cambios

1. Coloca tu cursor en la fila inferior del proyecto, junto al {% octicon "plus" aria-label="plus icon" %}.
2. Escriba <kbd>#</kbd> .
3. Selecciona el repositorio en donde se ubica la solicitud de cambios o propuesta. Puedes teclear la parte del nombre de repositorio para reducir tus opciones.
4. Selecciona la propuesta o solicitud de cambios. Puedes teclear parte del título para reducir tus opciones.

#### <a name="adding-multiple-issues-or-pull-requests-from-a-repository"></a>Adición de varias incidencias o solicitudes de incorporación de cambios de un repositorio

1. En {% data variables.product.product_location %}, ve al repositorio que contiene las incidencias o solicitudes de incorporación de cambios que quieres agregar al proyecto.
{% data reusables.repositories.sidebar-issue-pr %}
1. A la izquierda de cada uno de los títulos de las incidencias, selecciona aquellas que quieres agregar al proyecto.
  ![Captura de pantalla que muestra la casilla para seleccionar la incidencia o solicitud de incorporación de cambios](/assets/images/help/issues/select-issue-checkbox.png)
1. Opcionalmente, para seleccionar todas las incidencias o solicitudes de incorporación de cambios de la página, en la parte superior de la lista de incidencias o solicitudes de incorporación de cambios, selecciona todas. 
  ![Captura de pantalla que muestra la casilla para seleccionar todo en pantalla](/assets/images/help/issues/select-all-checkbox.png)
1. Encima de la lista de incidencias o solicitudes de incorporación de cambios, haz clic en **Proyectos (beta)** . 
  ![Captura de pantalla que muestra la casilla para seleccionar todo en pantalla](/assets/images/help/issues/projects-beta-assign-button.png)
1. Haz clic en los proyectos a los que quieres agregar las incidencias o solicitudes de incorporación de cambios seleccionadas.
  ![Captura de pantalla que muestra la casilla para seleccionar todo en pantalla](/assets/images/help/issues/projects-beta-assign-dropdown.png)

#### <a name="assigning-a-project-from-within-an-issue-or-pull-request"></a>Asignar un rpoyecto desde dentro de una propuesta o solicitud de cambios

1. Navega a la propuesta o solicitud de cambios que quieras agregar a un proyecto.
2. En la barra lateral, haga clic en **Projects** (Proyectos).
3. Selecciona el proyecto al cual quieras agregar la propuesta o solicitud de cambios.
4. Opcionalmente, llena los campos personalizados.

   ![Barra lateral del proyecto](/assets/images/help/issues/project_side_bar.png)

## <a name="converting-draft-issues-to-issues"></a>Convertir los borradores de propuestas en propuestas

En el diseño de la tabla:

1. Haz clic en el {% octicon "triangle-down" aria-label="the item menu" %} en el borrador de propuesta que quieras convertir.
2. Seleccione **Convert to issue** (Convertir en incidencia).
3. Selecciona el repositorio al cual quieras agregar la propuesta.
4. Como alternativa, edite los campos `labels`, `milestone` o `repository` del borrador de incidencia que quiere convertir.

En el diseño del tablero:

1. Haz clic en el {% octicon "kebab-horizontal" aria-label="the item menu" %} en el borrador de propuesta que quieras convertir.
2. Seleccione **Convert to issue** (Convertir en incidencia).
3. Selecciona el repositorio al cual quieras agregar la propuesta.

## <a name="removing-items-from-your-project"></a>Eliminar elementos de tu proyecto

Puedes archivar un elemento para mantener el contexto sobre este en el proyecto, pero eliminarlo de las vistas del proyecto. Puedes borrar un elemento para eliminarlo por completo del proyecto.

1. Selecciona el(los) elemento(s) a archivar o borrar. Para seleccionar elementos múltiples, realiza alguna de las siguientes acciones:
     - Hacer <kbd>Comando</kbd>+Clic (Mac) o <kbd>Ctrl</kbd>+Clic (Windows o Linux) en cada elemento.
     - Seleccionar un elemento y, después, presionar <kbd>Mayús</kbd>+<kbd>↑</kbd> o <kbd>Mayús</kbd>+<kbd>↓</kbd> para seleccionar elementos adicionales por encima o por debajo del elemento seleccionado inicialmente.
     - Seleccionar un elemento y luego presionar <kbd>Mayús</kbd>+Clic en otro elemento para seleccionar todos los elementos que estén entre estos dos.
     - Escribir <kbd>Comando</kbd>+<kbd>A</kbd> (Mac) o <kbd>Ctrl</kbd>+<kbd>A</kbd> (Windows o Linux) para seleccionar todos los elementos de una columna en un diseño de panel o todos los elementos de un diseño de tabla.
2. Para archivar todos los elementos seleccionados, escriba <kbd>E</kbd>. Para eliminar todos los elementos seleccionados, escriba <kbd>Del</kbd>. Como alternativa, seleccione el {% octicon "triangle-down" aria-label="the item menu" %} (en el diseño de tabla) o el {% octicon "kebab-horizontal" aria-label="the item menu" %} (en el diseño de panel) y, después, seleccione la acción deseada.

Puedes restablecer los elementos archivados, pero no los borrados. Para obtener más información, vea [Restauración de elementos archivados](#restoring-archived-items).

## <a name="restoring-archived-items"></a>Restaurar los elementos archivados

1. Navegar a tu proyecto.
1. En la parte superior derecha, haz clic en {% octicon "kebab-horizontal" aria-label="the kebab icon" %}.
1. En el menú, haz clic en **Elementos archivados**.
1. Opcionalmente, para filtrar los elementos archivados mostrados, escribe el filtro en el cuadro de texto situado encima de la lista de elementos. Para obtener más información sobre los filtros disponibles, consulta "[Filtrado de proyectos (beta)](/issues/trying-out-the-new-projects-experience/filtering-projects)".

   ![Captura de pantalla que muestra el campo para filtrar elementos archivados](/assets/images/help/issues/filter-archived-items.png)
   
1. A la izquierda de cada uno de los títulos de los elementos, selecciona aquellos que quieres restaurar.

   ![Captura de pantalla que muestra las casillas situadas junto a los elementos archivados](/assets/images/help/issues/select-archived-item.png)
   
1. Para restaurar los elementos seleccionados, encima de la lista de elementos, haz clic en **Restaurar**. 

   ![Captura de pantalla que muestra el botón "Restaurar"](/assets/images/help/issues/restore-archived-item-button.png)

## <a name="adding-fields"></a>Adición de campos

Conforme cambian los valores de los campos, estos se sincronizan automáticamente para que tu proyecto y los elementos que rastrea estén actualizados.

### <a name="showing-existing-fields"></a>Mostrar campos existentes

Tu proyecto rastrea la información actualizada de las propuestas y solicitudes de cambio, incluyendo cualquier cambio en el título, asignados, etiquetas, hitos, repositorios, revisores y solicitudes de cambio enlazadas. Cuando tu proyecto inicializa, se muestran el "título" y los "asignados"; los otros campos están ocultos. Puedes cambiar la visibilidad de estos campos en tu proyecto.

1. {% data reusables.projects.open-command-palette %}
2. Comienza a teclear "show".
3. Selecciona el comando deseado (por ejemplo: "Show: Repository").

Como alternativa, puedes hacer esto en la IU:

1. Haz clic en {% octicon "plus" aria-label="the plus icon" %} en el encabezado de campo que está hasta la derecha. Aparecerá un menú desplegable con los campos de proyecto.
   ![Mostrar u ocultar campos](/assets/images/help/issues/projects_fields_menu.png)
2. Selecciona el(los) campo(s) que quieras desplegar u ocultar. Un {% octicon "check" aria-label="check icon" %} indica qué campos se muestran.

### <a name="adding-custom-fields"></a>Agregar campos personalizados

Puedes agregar campos personalizados a tu proyecto. Los campos personalizados se mostrarán en la bara lateral de las propuestas y solicitudes de cambio en el proyecto.

Los campos personalizados pueden ser de texto, número, fecha, selección simple o iteración:

- Texto: El valor puede ser cualquier tipo de texto.
- Número: El valor debe ser un número.
- Fecha: El valor puede ser una fecha.
- Selección simple: El valor debe seleccionarse desde un conjunto de valores especificados.
- Iteración: el valor debe seleccionarse desde un conjunto de rangos de fechas (iteraciones). Las iteraciones pasadas se marcan automáticamente como "completadas" y la iteración que cubre el rango de fecha actual se marca como "actual". Para obtener más información, vea "[Administración de iteraciones en proyectos](/issues/trying-out-the-new-projects-experience/managing-iterations)".

1. {% data reusables.projects.open-command-palette %} Comienza a teclear cualquier parte de "Create new field". Cuando se muestre "Create new field" en la paleta de comandos, selecciónalo.
2. Como alternativa, haz clic en {% octicon "plus" aria-label="the plus icon" %} en el encabezado de campo que está lo más hacia la derecha. Aparecerá un menú desplegable con los campos de proyecto. Haga clic en **New field** (Nuevo campo).
3. Se mostrará una ventana emergente para que ingreses la información sobre el campo nuevo.
   ![Nuevo campo](/assets/images/help/issues/projects_new_field.png)
4. En la caja de texto, ingresa un nombre para el campo nuevo.
5. Selecciona el menú desplegable y haz clic en el tipo deseado.
6. Si ha especificado **Single select** (Selección única) como el tipo, introduzca las opciones.
7. Si ha especificado **Iteration** (Iteración) como tipo, escriba la fecha de inicio de la primera iteración y su duración. Se crearán tres iteraciones automáticamente y podrás agregar iteraciones adicionales en la página de ajustes del proyecto.

También puedes editar los campos personalizados.

{% data reusables.projects.project-settings %}
1. En **Fields** (Campos), seleccione el campo que quiere editar.
1. Para los campos de selección sencilla, puedes agregar, borrar o reordenar las opciones.
1. Para los campos de iteración, puedes agregar o borrar las iteraciones, cambiar los nombres de estas y cambiar la fecha de inicio y duración de las mismas.

   Para obtener más información sobre cómo modificar los campos de iteración, vea "[Administración de iteraciones en proyectos](/issues/trying-out-the-new-projects-experience/managing-iterations)".

## <a name="customizing-your-views"></a>Personalización de las vistas

Puedes ver tu proyecto como una tabla o tablero, agrupar los elementos por campo, elemento de filtrado y más. Para más información, vea "[Personalización de las vistas del proyecto (beta)](/issues/trying-out-the-new-projects-experience/customizing-your-project-views)".

## <a name="configuring-built-in-automation"></a>Configurar la automatización integrada

{% data reusables.projects.about-workflows %}

Puedes habilitar o inhabilitar los flujos de trabajo integrados de tu proyecto.

{% data reusables.projects.enable-basic-workflow %}

## <a name="adding-your-project-to-a-repository"></a>Agregar tu proyecto a un repositorio

Puedes listar los proyectos relevantes en un repositorio. Solo puedes listar proyectos que le pertenezcan al mismo usuario u organización propietaria del repositorio.

Para que los miembros de los repositorios vean un proyecto que se lista en dichos repositorios, deben tener visibilidad del proyecto. Para obtener más información, vea "[Administración de la visibilidad de los proyectos (beta)](/issues/trying-out-the-new-projects-experience/managing-the-visibility-of-your-projects)" y "[Administración del acceso a proyectos (beta)](/issues/trying-out-the-new-projects-experience/managing-access-to-projects)".

1. En {% data variables.product.prodname_dotcom %}, navega a la página principal de tu repositorio.
1. Haga clic en {% octicon "table" aria-label="the project icon" %} **Projects** (Proyectos).
1. Haga clic en **Projects (Beta)** (Proyectos (Beta)) en la barra lateral.
1. Haga clic en **Add project** (Agregar proyecto).
1. En la barra de búsqueda que se muestra, busca los proyectos que le pertenezcan al mismo usuario u organización propietaria del repositorio.
1. Haz clic en un proyecto para listarlo en tu repositorio.
