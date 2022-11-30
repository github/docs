---
title: 'Acerca de las conclusiones para {% data variables.product.prodname_projects_v2 %}'
intro: Puedes ver y personalizar gráficos creados a partir de los datos del proyecto.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/using-insights-with-projects
type: tutorial
product: '{% data reusables.gated-features.historical-insights-for-projects %}'
topics:
  - Projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 809d8492bb1ec7c8cd4eb051b1eaefb00d29097e
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158577'
---
{% ifversion fpt %}

{% note %}

**Nota:** Los gráficos históricos están disponibles actualmente como versión preliminar de características para las organizaciones que usan {% data variables.product.prodname_team %} y están disponibles con carácter general para las que usan {% data variables.product.prodname_ghe_cloud %}.

{% endnote %}

{% endif %}

 Puedes usar conclusiones {% data variables.product.prodname_projects_v2 %} a fin de ver, crear y personalizar gráficos que usan como datos de origen los elementos agregados al proyecto. Puedes aplicar filtros al gráfico predeterminado y también crear tus propios gráficos. Al crear un gráfico, se establecen los filtros, el tipo de gráfico y la información mostrada, y el gráfico está disponible para cualquiera que pueda ver el proyecto. Puedes generar dos tipos de gráficos: gráficos actuales y gráficos históricos.

 Con las conclusiones, se realiza un seguimiento de los elementos que has archivado o eliminado.

 ### Acerca de los gráficos actuales

Puedes crear gráficos actuales para visualizar los elementos del proyecto. Por ejemplo, puedes crear gráficos para mostrar cuántos elementos se asignan a cada individuo o cuántas incidencias se asignan a cada iteración futura.

También puedes usar filtros para manipular los datos usados para crear el gráfico. Por ejemplo, puedes crear un gráfico em el que se muestre la cantidad de trabajo pendiente, pero limitar esos resultados a etiquetas o usuarios asignados concretos. Para obtener más información, consulta "[Filtrar proyectos](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)".

 ![Captura de pantalla en la que se muestra un gráfico de columnas apiladas que muestra los tipos de elementos de cada iteración](/assets/images/help/issues/column-chart-example.png)

Para más información, consulta "[Creación de gráficos](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/creating-charts)".

 ### Acerca de los gráficos históricos

 Los gráficos históricos son gráficos basados en el tiempo que permiten ver las tendencias y el progreso del proyecto. Puedes ver el número de elementos, agrupados por estado y otros campos, en el tiempo.
 
 El gráfico predeterminado "Grabación" muestra el estado del elemento a lo largo del tiempo, lo que te permite visualizar los patrones de progreso y puntual a lo largo del tiempo. 

![Captura de pantalla en la que se muestra un ejemplo del gráfico de grabación predeterminado para la iteración actual](/assets/images/help/issues/burnup-example.png)

 Para crear un gráfico histórico, establece el eje X del gráfico en "Tiempo". Para más información, consulta "[Creación de gráficos](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/creating-charts)" y "[Configuración de gráficos](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/configuring-charts)".

## Información adicional

- "[Acerca de {% data variables.product.prodname_projects_v2 %}](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)"
- "[Deshabilitación de las conclusiones para {% data variables.product.prodname_projects_v2 %} en la organización](/organizations/managing-organization-settings/disabling-insights-for-projects-in-your-organization)"
