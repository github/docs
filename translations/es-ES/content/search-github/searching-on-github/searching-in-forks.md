---
title: Buscar en bifurcaciones
intro: 'De forma predeterminada, las [bifurcaciones](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks) no se muestran en los resultados de la búsqueda. Puedes elegir incluirlas en las búsquedas de repositorios y en las búsquedas de código si cumplen con determinados criterios.'
redirect_from:
  - /articles/searching-in-forks
  - /github/searching-for-information-on-github/searching-in-forks
  - /github/searching-for-information-on-github/searching-on-github/searching-in-forks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: 6375fdecd7dba47447b37207467e008f0e7b3fc0
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147785794'
---
Para mostrar bifurcaciones en los resultados de [búsqueda del repositorio](/search-github/searching-on-github/searching-for-repositories), agrega `fork:true` o `fork:only` a la consulta.

Las bifurcaciones solo se indexan para la [búsqueda de código](/search-github/searching-on-github/searching-code) cuando tienen más estrellas que el repositorio primario. No podrás buscar el código en una bifurcación que tenga menos estrellas que su padre. Para mostrar bifurcaciones con más estrellas que el repositorio primario en los resultados de búsqueda de código, agrega `fork:true` o `fork:only` a la consulta.

El calificador `fork:true` busca todos los resultados que coincidan con la consulta de búsqueda, incluidas las bifurcaciones. El calificador `fork:only` _solo_ busca bifurcaciones que coincidan con la consulta de búsqueda.

| Calificador:  | Ejemplo
| ------------- | -------------
| `fork:true` | [**github fork:true**](https://github.com/search?q=github+fork%3Atrue&type=Repositories) coincide con todos los repositorios que contienen la palabra "github", incluidas las bifurcaciones.
| | [**android language:java fork:true**](https://github.com/search?q=android+language%3Ajava+fork%3Atrue&type=Code) coincide con el código con la palabra "android" escrita en Java, tanto en las bifurcaciones como en los repositorios regulares.
| `fork:only` | [**github fork:only**](https://github.com/search?q=github+fork%3Aonly&type=Repositories) coincide con todos los repositorios de bifurcación con la palabra "github".
| | [**forks:>500 fork:only**](https://github.com/search?q=forks%3A%3E500+fork%3Aonly&type=Repositories) coincide con los repositorios con más de 500 bifurcaciones y solo devuelve los que son bifurcaciones.

## Información adicional

- "[Acerca de las bifurcaciones](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)"
- "[Acerca de la búsqueda en GitHub](/search-github/getting-started-with-searching-on-github/about-searching-on-github)"
