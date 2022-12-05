---
title: Uso de la búsqueda de código de GitHub (beta)
intro: 'Puedes usar sugerencias, finalizaciones y búsquedas guardadas en la interfaz de búsqueda actualizada para encontrar rápidamente lo que buscas en {% data variables.product.prodname_dotcom_the_website %}.'
allowTitleToDifferFromFilename: true
versions:
  feature: github-code-search
topics:
  - GitHub search
ms.openlocfilehash: 7578dd05f251b1df23fbd64c63d04e533f7fa9ef
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160336'
---
{% note %}

**Nota:** {% data reusables.search.code-search-code-view-beta-note %}

{% data reusables.search.code-search-link %} {% data reusables.search.code-view-link %}

{% endnote %}

## Acerca del uso de la nueva búsqueda de código (beta)

Al acceder a la nueva versión beta de la búsqueda de código, GitHub indexará los repositorios que posees y los de las organizaciones de las que eres miembro (ya sean públicos, privados o internos). Esto significa que puedes buscar en todos tus repositorios, así como en los repositorios públicos de {% data variables.product.prodname_dotcom_the_website %} que ya están indexados. Solo los usuarios con permiso para ver tu código en {% data variables.product.prodname_dotcom_the_website %} podrán verlo en los resultados de las búsquedas. Las bifurcaciones se indexan y permiten realizar búsquedas de la misma manera que otros repositorios.

No todo el código se indexa. Además, actualmente solo puedes realizar búsquedas en las ramas predeterminadas de los repositorios. Para más información sobre las limitaciones conocidas, consulta "[Acerca de la búsqueda de código de GitHub (beta)](/search-github/github-code-search/about-github-code-search#limitations)".

La nueva búsqueda de código beta está integrada en la nueva vista de código beta. {% data reusables.search.code-view-link %}

## Uso de la barra de búsqueda

Además del nuevo motor de búsqueda de código, la versión beta incluye una interfaz de búsqueda actualizada en {% data variables.product.prodname_dotcom_the_website %}. Puedes encontrar rápidamente lo que estás buscando con sugerencias, finalizaciones y búsquedas guardadas, a menudo sin tener que escribir completamente una consulta ni consultar la página de resultados de la búsqueda.

Para obtener más información sobre la sintaxis de búsqueda de la nueva búsqueda de código (beta), consulta "[Descripción de la sintaxis de la búsqueda de código de GitHub (beta)](/search-github/github-code-search/understanding-github-code-search-syntax)".

{% data reusables.search.non-code-search-explanation %}

1. En la barra de navegación superior de {% data variables.product.prodname_dotcom_the_website %}, haz clic en la barra de búsqueda.
1. Bajo la barra de búsqueda, verás una lista de sugerencias organizadas por categoría, incluidas tus búsquedas recientes y los repositorios, equipos y proyectos a los que tienes acceso. También podrás ver una lista de las búsquedas guardadas que hayas creado. Para obtener más información sobre las búsquedas guardadas, consulta "[Creación y administración de búsquedas guardadas](#creating-and-managing-saved-searches)".

    ![Barra de búsqueda con sugerencias y búsquedas guardadas](/assets/images/help/search/code-search-beta-search-bar.png)

    Al hacer clic en una de las sugerencias que se muestran, se te dirigirá directamente a la página de esa sugerencia (por ejemplo, el repositorio o la página del proyecto). Por otro lado, si haces clic en una búsqueda reciente o una búsqueda guardada, según el tipo de búsqueda en cuestión, la consulta de búsqueda aparecerá en la barra de búsqueda o bien se te dirigirá a la página de resultados de la búsqueda para ese término de búsqueda.

1. Cuando empieces a escribir una consulta de búsqueda, verás una lista de finalizaciones y sugerencias que coinciden con tu consulta. Puedes hacer clic en cualquier sugerencia para ir a una ubicación específica. A medida que escribas más calificadores, verás sugerencias más específicas, como archivos de código a los que puedes ir directamente.
   
   ![Barra de búsqueda con una consulta y sugerencias de código](/assets/images/help/search/code-search-beta-search-bar-code-suggestions.png)

1.  También puedes presionar Entrar después de escribir una consulta para ir a la vista completa de resultados de la búsqueda, donde puedes ver todas las coincidencias y una interfaz visual para aplicar filtros. Para obtener más información, consulta "[Uso de la vista de resultados de la búsqueda](#using-the-search-results-view)".

## Creación y administración de búsquedas guardadas

1. En la barra de navegación superior de {% data variables.product.prodname_dotcom_the_website %}, haz clic en la barra de búsqueda y empieza a escribir una consulta de búsqueda (o cualquier letra).
1. Debajo de la barra de búsqueda, debería aparecer la sección "Búsquedas guardadas". Haz clic en {% octicon "plus-circle" aria-label="The plus-circle icon" %} **Crear búsqueda guardada**.

    ![Botón "Crear búsqueda guardada" en la barra de búsqueda](/assets/images/help/search/code-search-beta-create-saved-search.png)

1. En la ventana emergente, escribe un nombre para la consulta y la consulta que quieres guardar. Haz clic en **Crear búsqueda guardada**.

    ![Ventana "Crear búsqueda guardada"](/assets/images/help/search/code-search-beta-create-saved-search-window.png)

1. Si vuelves a hacer clic en la barra de búsqueda, ahora verás tu búsqueda guardada en la sección "Búsquedas guardadas" bajo la barra de búsqueda. Al hacer clic en una búsqueda guardada, se agregará la consulta a la barra de búsqueda y se filtrarán las sugerencias en consecuencia.

  ![Uso de una búsqueda guardada en la barra de búsqueda](/assets/images/help/search/code-search-beta-saved-search-in-search-bar.png)

    - Para editar una búsqueda guardada, en la sección "Búsquedas guardadas", haz clic en {% octicon "pencil" aria-label="The pencil icon" %} a la derecha de la búsqueda guardada. 
    - Para eliminar una búsqueda guardada, haz clic en {% octicon "trash" aria-label="The trash icon" %} a la derecha de la búsqueda guardada.

  ![Botones para editar o eliminar una búsqueda guardada](/assets/images/help/search/code-search-beta-edit-or-delete-saved-search.png)

## Uso de la vista de resultados de la búsqueda

La vista de resultados de la búsqueda ya existe para la búsqueda clásica en GitHub y la funciona de igual para la mayoría de los tipos de búsquedas, excepto para las búsquedas de código. Con la nueva versión beta de búsqueda de código habilitada, la página de resultados de la búsqueda tiene una interfaz de usuario rediseñada e incluye filtros compatibles con el nuevo motor de búsqueda de código, como los filtros de ruta de acceso y de símbolos.

Para construir una consulta de búsqueda, así como para ver y filtrar los resultados, mediante una interfaz visual, puedes usar la {% data variables.search.search_page_url %} o la {% data variables.search.advanced_url %}. Si presionas Entrar después de escribir una consulta de búsqueda en la barra de búsqueda, también se te dirigirá a la vista de resultados de la búsqueda.

En la vista de resultados de la búsqueda, puedes navegar entre diferentes tipos de resultados de búsqueda, como código, incidencias, solicitudes de incorporación de cambios, repositorios, etc. También puedes ver y usar filtros.

![Vista de resultados de la búsqueda](/assets/images/help/search/code-search-beta-results-view.png)
