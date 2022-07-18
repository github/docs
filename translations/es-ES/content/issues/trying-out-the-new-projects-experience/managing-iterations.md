---
title: Administrar las iteraciones en los proyectos (beta)
intro: Puedes crear iteraciones para planear el trabajo y elementos de grupo próximos.
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 2
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Projects
  - Organizations
---

{% data reusables.projects.projects-beta %}

## Acerca de las iteraciones

Puedes crear un campo de iteración para asociar los elementos con bloques de tiempo repetitivos específicos. Las iteraciones pueden configurarse en cualquier longitud de tiempo, pueden incluir pausas y pueden editarse individualmente para modificar el nombre y rango de fecha. Con los proyectos, puedes agrupar por iteración para visualizar el balance del trabajo próximo, utilizar filtros para enfocarte en una sola iteración y clasificar por iteración.

Cuando creas un campo de iteración por primera vez, se crean tres iteraciones automáticamente.  Puedes agregar iteraciones adicionales y hacer otros cambios en tu página de ajustes de proyecto.

![Captura de pantalla que muestra los ajustes de un campo de iteración](/assets/images/help/issues/iterations-example.png)

## Crear un campo de iteración

Puedes crear un campo de iteración utilizando la paleta de comandos o la interfaz de proyectos.

1. {% data reusables.projects.open-command-palette %} Comienza a teclear cualquier parte de "Create new field". Cuando se muestre "Create new field" en la paleta de comandos, selecciónalo.

   Como alternativa, haz clic en {% octicon "plus" aria-label="the plus icon" %} en el encabezado de campo que está lo más hacia la derecha. Aparecerá un menú desplegable con los campos de proyecto. Haz clic en **Campo nuevo**.
1. En la caja de texto, ingresa el nombre del nuevo campo de iteración.
1. Selecciona el menú desplegable a continuación y haz clic en **Iteración**.
1. Opcionalmente, si quieres cambiar la fecha de inicio del día actual, selecciona el menú desplegable de calendario junto a "Inicia en" y haz clic en la fecha de inicio nueva.
2. Para cambiar la duración de cada iteración, escribe un número nuevo y luego selecciona el menú desplegable para hacer clic en ya sea **días** o **semanas**.
3. Haz clic en **Guardar & crear**.

## Agregar iteraciones nuevas

{% data reusables.projects.project-settings %}
1. Haz clic en el nombre del campo de iteración que quieras ajustar.
1. Para agregar una iteración nueva de la misma duración, haz clic en **Agregar iteración**.
1. Opcionalmente, para personalizar la duración de la iteración nueva, así como cuándo comenzará, haz clic en {% octicon "triangle-down" aria-label="The triangle icon" %} junto a "Agregar iteración", selecciona una fecha de inicio y duración y haz clic en **Agregar**.
1. Haz clic en **Guardar cambios**.

## Editar una iteración

Puedes editar las iteraciones en tus ajustes de proyecto. También puedes acceder a los ajustes de un campo de iteración haciendo clic en {% octicon "triangle-down" aria-label="The triangle icon" %} en el encabezado de tabla del campo y haciendo clic en **Editar valores**.

{% data reusables.projects.project-settings %}
1. Haz clic en el nombre del campo de iteración que quieras ajustar.
1. Para cambiar el nombre de una iteración, haz clic en el nombre y comienza a teclear.
1. Para cambiar la fecha o duración de una iteración, haz clic en la fecha para abrir el calendario. Haz clic en el día de inicio y luego en el día final para luego hacer clic en **Aplicar**.
1. Opcionalmente, para borrar una iteración, haz clic en {% octicon "trash" aria-label="The trash icon" %}.
1. Haz clic en **Guardar cambios**.

## Insertar una pausa

Puedes insertar pausas en tus iteraciones para comunicarte cuando estás descansando del trabajo programado. La duración de una pausa nueva se predetermina a la duración de la iteración que se creó más recientemente.

{% data reusables.projects.project-settings %}
1. Haz clic en el nombre del campo de iteración que quieras ajustar.
2. En la línea divisora sobre una iteración y a la derecha, haz clic en **Insertar pausa**. ![Captura de pantalla que muestra la ubicación del botón "insertar pausa"](/assets/images/help/issues/iteration-insert-break.png)
3. Opcionalmente, para cambiar la duración de esta, haz clic en la fecha para abrir el calendario. Haz clic en el día de inicio y luego en el de fin y luego en **Aplicar**.
4. Haz clic en **Guardar cambios**.
