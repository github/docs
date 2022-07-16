---
title: Utilizar perspectivas con los proyectos (beta)
intro: Puedes ver y personalizar las gráficas que se crean a partir de los datos de tu proyecto.
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 2
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Projects
  - Organizations
---

{% data reusables.projects.insights-alpha %}

## Acerca de las perspectivas

Puedes utilizar las perspectivas para ver y personalizar los gráficos que utilizan los elementos que se agregaron a tu proyecto, como los datos fuente. El gráfico predeterminado de "Burn up" muestra el estado del elemento contra el tiempo, lo cual te permite visualizar el progreso y notar patrones a lo largo del tiempo.

![Captura de pantalla que muestra un ejemplo del gráfico predeterminado de 'burn up' para la iteración actual](/assets/images/help/issues/burnup-example.png)

Puedes aplicar filtros al gráfico predeterminado y también crear los tuyos propios. Cuando creas un gráfico, configuras los filtros, tipo de gráfico y la información mostrada y dicho gráfico se encuentra disponible para todos los que puedan ver el proyecto.

![Captura de pantalla que muestra un gráfico de columnas apilado que muestra tipos de elemento para cada iteración](/assets/images/help/issues/column-chart-example.png)

## Crear un gráfico

{% data reusables.projects.access-insights %}
3. En el menú de la izquierda, haz clic en **Gráfico nuevo**.
4. Opcionalmente, para cambiar el nombre del gráfico nuevo, haz clic en {% octicon "triangle-down" aria-label="The triangle icon" %}, escribe un nombre nuevo y presiona <kbd>Return</kbd>.
5. Sobre el gráfico, escribe los filtros para cambiar los datos que se utilizan para crearlo. Para obtener más información, consulta la sección "[Filtrar proyectos](/issues/trying-out-the-new-projects-experience/filtering-projects)".
6. A la derecha de la casilla de texto del filtro, haz clic en **Guardar cambios**.

## Configurar un gráfico

{% data reusables.projects.access-insights %}
1. En el menú de la izquierda, haz clic en el gráfico que te gustaría configurar.
1. A la derecha de la página, haz clic en **Configurar**. Se abrirá un panel a la derecha.
1. Para cambiar el tipo de gráfico, selecciona el menú desplegable de **Diseño** y haz clic en el tipo de gráfico que quieras utilizar.
1. Para cambiar el campo que se utiliza para el eje X de tu gráfico, selecciona el menú desplegable de **Eje X** y haz clic en el campo que quieras utilizar.
1. Opcionalmente, para agrupar los elementos en tu eje X por otro campo, selecciona **Agrupar por** y haz clic en el campo que quieras utilizar o haz clic en "Ninguno" para inhabilitar el agrupamiento.
1. Opcionalmente, si tu proyecto contiene campos numéricos y quieres que el eje Y muestre la suma, promedio, mínimo o máximo de alguno de estos campos de número, selecciona **Eje Y** y haz clic en alguna de las opciones. Posteriormente, selecciona el menú desplegable que se muestra debajo y haz clic en el campo de número que quieras utilizar.
1. Para guardar tu gráfico, haz clic en **Guardar cambios**.
