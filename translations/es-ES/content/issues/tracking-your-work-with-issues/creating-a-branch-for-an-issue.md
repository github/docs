---
title: Creación de una rama para trabajar en una incidencia
intro: Puedes crear una rama para trabajar en una incidencia directamente desde la página de la incidencia y empezar de inmediato.
versions:
  fpt: '*'
  ghes: '>=3.5'
  ghae: '>= 3.5'
  ghec: '*'
allowTitleToDifferFromFilename: true
topics:
  - Issues
shortTitle: Create branch for issue
ms.openlocfilehash: 062b41705836537de23d882acc5342e0713c316d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061142'
---
{% note %}

**Nota:** La capacidad de crear una rama para una incidencia se encuentra actualmente en versión beta pública y está sujeta a cambios.

{% endnote %}

## Acerca de las ramas conectadas a una incidencia
Las ramas conectadas a una incidencia se muestran en la sección "Desarrollo" de la barra lateral de una incidencia. Al crear una solicitud de incorporación de cambios para una de estas ramas, se vincula automáticamente a la incidencia. La conexión con esa rama se quita y solo se muestra la solicitud de incorporación de cambios en la sección "Desarrollo". Para más información, vea "[Vinculación de una solicitud de incorporación de cambios a una incidencia](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue)".

## Creación de una rama para una incidencia

Cualquiera con permiso de escritura en un repositorio puede crear una rama para una incidencia. Puede vincular varias ramas para una incidencia.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issues %}
3. En la lista de incidencias, haga clic en aquella para la que quiera crear una rama.
4. En la barra lateral derecha, en "Desarrollo", haga clic en **Crear una rama**. Si la incidencia ya tiene una rama vinculada o una solicitud de incorporación de cambios, haga clic en {% octicon "gear" aria-label="The Gear icon" %} y en la parte inferior del menú desplegable, haga clic en **Crear una rama**.
   ![Captura de pantalla en la que se muestra la opción Crear una rama resaltada en la barra lateral](/assets/images/help/issues/create-a-branch.png)
5. De forma predeterminada, la nueva rama se crea en el repositorio actual a partir de la rama predeterminada. Edite el nombre de la rama y los detalles según sea necesario en el cuadro de diálogo "Crear una rama para esta incidencia".
   ![Captura de pantalla en la que se muestran las opciones del cuadro de diálogo Crear una rama](/assets/images/help/issues/create-a-branch-options.png)
6. Elija si quiere trabajar en la rama localmente o abrirla en GitHub Desktop.
7. Cuando esté listo para crear la rama, haga clic en **Crear rama**.
