---
title: Crear un proyecto (beta)
intro: 'Aprende cómo crear un proyecto, llénalo y agrega campos personalizados.'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
type: quick_start
topics:
  - Projects
---

Los proyectos son una colección personalizable de elementos que se mantienen actualizados con los datos de {% data variables.product.company_short %}. Tus proyectos pueden rastrear propuestas, solicitudes de cambios e ideas que aterrices. Puedes agregar campos personalizados y vistas creativas para propósitos específicos.

{% data reusables.projects.projects-beta %}

## Crear un proyecto

{% data reusables.projects.create-project %}

## Agregar elementos a tu proyecto

Tu proyecto puede rastrear borradores de propuestas, propuestas, y solicitudes de cambios.

### Crear borradores de propuestas

Los borradores de propuestas son útiles si quieres capturar ideas rápidamente.

1. Coloca tu cursor en la fila inferior del proyecto, junto al {% octicon "plus" aria-label="plus icon" %}.
2. Teclea tu ida y luego presiona **Enter**.

### Propuestas y solicitudes de extracción

#### Pegar la URL de una propuesta o solicitud de cambios

1. Coloca tu cursor en la fila inferior del proyecto, junto al {% octicon "plus" aria-label="plus icon" %}.
1. Pega la URL de la propuesta o solicitud de cambios.

#### Buscar una propuesta o solicitud de cambios

1. Coloca tu cursor en la fila inferior del proyecto, junto al {% octicon "plus" aria-label="plus icon" %}.
2. Ingresa `#`.
3. Selecciona el repositorio en donde se ubica la solicitud de cambios o propuesta. Puedes teclear la parte del nombre de repositorio para reducir tus opciones.
4. Selecciona la propuesta o solicitud de cambios. Puedes teclear parte del título para reducir tus opciones.

#### Asignar un rpoyecto desde dentro de una propuesta o solicitud de cambios

1. Navega a la propuesta o solicitud de cambios que quieras agregar a un proyecto.
2. En la barra lateral, haz clic en **Proyectos**.
3. Selecciona el proyecto al cual quieras agregar la propuesta o solicitud de cambios.
4. Opcionalmente, llena los campos personalizados.

   ![Barra lateral del proyecto](/assets/images/help/issues/project_side_bar.png)

## Agregar campos

Conforme cambian los valores de los campos, estos se sincronizan automáticamente para que tu proyecto y los elementos que rastrea estén actualizados.

{% note %}

**Nota:** No puedes editar ni agregar campos hasta que agregues por lo menos un elemento a tu proyecto.

{% endnote %}

### Mostrar campos existentes

Tu proyecto rastrea la información actualizada de las propuestas y solicitudes de cambio, incluyendo cualquier cambio al título, asignados, etiquetas, hitos y repositorio. Cuando tu proyecto inicializa, se muestran el "título" y los "asignados"; los otros campos están ocultos. Puedes cambiar la visibilidad de estos campos en tu proyecto.

1. {% data reusables.projects.open-command-palette %}
2. Comienza a teclear "show".
3. Selecciona el comando deseado (por ejemplo: "Show: Repository").

Como alternativa, puedes hacer esto en la IU:

1. Haz clic en {% octicon "plus" aria-label="the plus icon" %} en el encabezado de campo que está hasta la derecha. Aparecerá un menú desplegable con los campos de proyecto. ![Muestra u oculta los campos](/assets/images/help/issues/projects_fields_menu.png)
2. Selecciona el(los) campo(s) que quieras desplegar u ocultar. Un {% octicon "check" aria-label="check icon" %} indica qué campos se muestran.

### Agregar campos personalizados

Puedes agregar campos personalizados a tu proyecto. Los campos personalizados pueden ser texto, número, fecha o selección simple. Los campos personalizados se mostrarán en la bara lateral de las propuestas y solicitudes de cambio en el proyecto.

1. {% data reusables.projects.open-command-palette %} Comienza a teclear cualquier parte de "Create new field". Cuando se muestre "Create new field" en la paleta de comandos, selecciónalo.
2. Como alternativa, haz clic en {% octicon "plus" aria-label="the plus icon" %} en el encabezado de campo que está lo más hacia la derecha. Aparecerá un menú desplegable con los campos de proyecto. Haz clic en **Campo nuevo**.
3. Se mostrará una ventana emergente para que ingreses la información sobre el campo nuevo. ![Campo nuevo](/assets/images/help/issues/projects_new_field.png)
4. En la caja de texto, ingresa un nombre para el campo nuevo.
5. Selecciona el menú desplegable y haz clic en el tipo deseado.
6. Si especificaste "single select" como el tipo, ingresa tus opciones.

## Personaliza tus vistas

Puedes ver tu proyecto como una tabla o tablero, agrupar los elementos por campo, elemento de filtrado y más. Para obtener más información, consulta la sección "[Personalizar las vistas de tu proyecto (beta)](/issues/trying-out-the-new-projects-experience/customizing-your-project-views)".
