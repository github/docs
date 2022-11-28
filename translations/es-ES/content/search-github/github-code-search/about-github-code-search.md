---
title: Acerca de GitHub Code Search (versión beta)
intro: 'Puedes buscar, explorar y consultar código en GitHub con la nueva búsqueda de código (versión beta).'
allowTitleToDifferFromFilename: true
versions:
  feature: github-code-search
topics:
  - GitHub search
ms.openlocfilehash: 8bf3232e87de2fc773f69bf5047e75ab0e52c7e2
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160342'
---
{% note %}

**Nota:** {% data reusables.search.code-search-code-view-beta-note %}

{% data reusables.search.code-view-link %}

{% endnote %}

## Acerca de la nueva búsqueda de código (versión beta)

La nueva búsqueda de código (versión beta) te permite buscar, explorar y consultar rápidamente tu código, el del equipo y el de la comunidad de código abierto, todo desde {% data variables.product.prodname_dotcom_the_website %}. Este motor de búsqueda está diseñado para ser escalable, tener en cuenta el código y admitir la búsqueda de código en GitHub mediante expresiones regulares, operaciones booleanas, calificadores especializados y búsqueda de símbolos. Para obtener más información sobre la sintaxis de la nueva búsqueda de código (versión beta), consulta "[Descripción de la sintaxis de GitHub Code Search (versión beta)](/search-github/github-code-search/understanding-github-code-search-syntax)".

Además del nuevo motor de búsqueda de código, la búsqueda de código (versión beta) incluye nuevas características en la interfaz de búsqueda de {% data variables.product.prodname_dotcom_the_website %}, como sugerencias, finalizaciones y la posibilidad de guardar las búsquedas. La nueva interfaz de búsqueda te permite encontrar de forma más rápida y fácil lo que buscas. Para obtener más información, consulta "[Uso de GitHub Code Search (versión beta)](/search-github/github-code-search/using-github-code-search)".

{% data reusables.search.non-code-search-explanation %}

La nueva búsqueda de código (versión beta) está estrechamente integrada con una vista de código rediseñada (versión beta) en {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.search.code-view-link %}

Para obtener acceso a la nueva búsqueda de código (versión beta), así como a la nueva vista de código, puedes registrarte en la [lista de espera](https://github.com/features/code-search-code-view/signup). 

## Habilitación y deshabilitación de la nuevas búsqueda de código y vista de código (versión beta)

{% data reusables.search.enabling-and-disabling-code-search-and-view-beta %}

## Limitaciones

Hemos indexado muchos repositorios públicos para la nueva búsqueda de código (versión beta) y seguimos indexando más. Además, los repositorios privados de los usuarios de GitHub en la versión beta están indexados y pueden buscarlos los participantes de la versión beta que ya tengan acceso a esos repositorios privados en GitHub.com. Sin embargo, es posible que ni los repositorios muy grandes ni todo el código se indexen. 

Las limitaciones actuales del código indexado son las siguientes:
   - Se excluye el código generado y delegado a proveedores (según lo que determina [Enry](https://github.com/go-enry/go-enry))
   - Se excluyen los archivos vacíos y los de más de 350 KiB
   - Solo se incluyen los archivos con codificación UTF-8
   - Es posible que los repositorios muy grandes no se indexen

Actualmente solo se admite la búsqueda de código en la rama predeterminada de un repositorio.

Los resultados de cualquier búsqueda con la nueva búsqueda de código (versión beta) están restringidos a 100 resultados (10 páginas). La ordenación no se admite para los resultados de búsqueda de código en este momento. Esta limitación solo se aplica a la nueva búsqueda de código (versión beta) y no se aplica a otros tipos de búsquedas.

La nueva búsqueda de código (versión beta) admite la búsqueda de definiciones de símbolos en el código, como definiciones de función o clase, mediante el calificador `symbol:`. Sin embargo, ten en cuenta que el calificador `symbol:` solo busca definiciones y no referencias, y todavía no se admiten totalmente todos los tipos de símbolos y lenguajes. Para obtener una lista de los idiomas que se admiten, consulta "[Calificador de símbolos](/search-github/github-code-search/understanding-github-code-search-syntax#symbol-qualifier)".

## Comentarios y soporte técnico

Puedes ver y compartir comentarios sobre la nueva búsqueda de código (versión beta) en nuestro [foro de discusión](https://github.com/orgs/community/discussions/categories/code-search-and-navigation).
