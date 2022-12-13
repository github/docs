---
title: Uso de conclusiones con los proyectos (beta)
intro: Puedes ver y personalizar gráficos creados a partir de los datos del proyecto.
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 2
versions:
  fpt: '*'
  ghec: '*'
topics:
- Projects
- Organizations
ms.openlocfilehash: b2e8f2bc76c584d4de33fe00da1fd95982f9d091
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 07/13/2022
ms.locfileid: "147064710"
---
{% data reusables.projects.insights-alpha %}

## <a name="about-insights"></a>Acerca de las conclusiones

Puedes usar conclusiones para ver y personalizar gráficos que usan como datos de origen los elementos agregados al proyecto. El gráfico predeterminado "Grabación" muestra el estado del elemento a lo largo del tiempo, lo que te permite visualizar los patrones de progreso y puntual a lo largo del tiempo. 

![Captura de pantalla en la que se muestra un ejemplo del gráfico de grabación predeterminado para la iteración actual](/assets/images/help/issues/burnup-example.png)

Puedes aplicar filtros al gráfico predeterminado y también crear tus propios gráficos. Cuando se crea un gráfico, se establecen los filtros, el tipo de gráfico y la información mostrada, y el gráfico está disponible para cualquier persona que pueda ver el proyecto.

![Captura de pantalla en la que se muestra un gráfico de columnas apiladas que muestra los tipos de elementos de cada iteración](/assets/images/help/issues/column-chart-example.png)

## <a name="creating-a-chart"></a>Creación de un gráfico

{% data reusables.projects.access-insights %}
3. En el menú de la izquierda, haz clic en **Nuevo gráfico**.
4. Opcionalmente, para cambiar el nombre del gráfico nuevo, haz clic en {% octicon "triangle-down" aria-label="The triangle icon" %}, escribe un nombre nuevo y presiona <kbd>Enter</kbd>.
5. Encima del gráfico, escribe filtros para cambiar los datos usados para crear el gráfico. Para obtener más información, consulta "[Filtrar proyectos](/issues/trying-out-the-new-projects-experience/filtering-projects)".
6. A la derecha del cuadro de texto de filtro, haz clic en **Guardar cambios**.

## <a name="configuring-a-chart"></a>Configuración de un gráfico

{% data reusables.projects.access-insights %}
1. En el menú de la izquierda, haz clic en el gráfico que quieres configurar.
1. En el lado derecho de la página, haz clic en **Configurar**. Se abrirá un panel a la derecha.
1. Para cambiar el tipo de gráfico, selecciona la lista desplegable **Diseño** y haz clic en el tipo de gráfico que quieras usar.
1. Para cambiar el campo usado para el eje X del gráfico, selecciona la lista desplegable **Eje X** y haz clic en el campo que quieras usar.
1. Opcionalmente, para agrupar los elementos del eje X por otro campo, selecciona **Agrupar por** y haz clic en el campo que quieras usar, o haz clic en "Ninguno" para deshabilitar la agrupación.
1. Opcionalmente, si el proyecto contiene campos numéricos y quieres que el eje Y muestre la suma, el promedio, el mínimo o el máximo de uno de esos campos numéricos, selecciona **Eje Y** y haz clic en una opción. A continuación, selecciona la lista desplegable que aparece debajo y haz clic en el campo numérico que quieras usar. 
1. Para guardar el gráfico, haz clic en **Guardar cambios**.
