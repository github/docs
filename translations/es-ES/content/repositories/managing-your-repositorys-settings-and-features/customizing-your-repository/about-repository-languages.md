---
title: Acerca de los idiomas del repositorio
intro: Los archivos y los directorios dentro de un repositorio determinan los idiomas que componen el repositorio. Puedes ver los idiomas de un repositorio para obtener una descripción general rápida del repositorio.
redirect_from:
  - /articles/my-repository-is-marked-as-the-wrong-language
  - /articles/why-isn-t-my-favorite-language-recognized
  - /articles/my-repo-is-marked-as-the-wrong-language
  - /articles/why-isn-t-sql-recognized-as-a-language
  - /articles/why-isn-t-my-favorite-language-recognized-by-github
  - /articles/about-repository-languages
  - /github/creating-cloning-and-archiving-repositories/about-repository-languages
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repository-languages
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Repository languages
ms.openlocfilehash: 3796ec1828bb8f64072f62255d76ca79c4467457
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145136818'
---
En {% data variables.product.product_name %} se usa la [biblioteca Linguist](https://github.com/github/linguist) de código abierto a fin determinar los lenguajes de archivo para el resaltado de sintaxis y las estadísticas del repositorio. Las estadísticas de lenguaje se actualizarán después de que subas los cambios a tu rama predeterminada.

Algunos archivos son difíciles de identificar y, a veces, los proyectos contienen más archivos de biblioteca y de proveedor que su código primario. Si recibe resultados incorrectos, consulte la [guía de solución de problemas](https://github.com/github/linguist/blob/master/docs/troubleshooting.md) de Linguist para obtener ayuda.

## Lenguaje Markup

Los lenguajes de marcado se representan en HTML mediante nuestra [biblioteca de marcado](https://github.com/github/markup) de código abierto. En este momento, no estamos aceptando nuevos lenguajes para mostrar dentro de {% data variables.product.product_name %}. Sin embargo, mantenemos activamente nuestros lengujes Markup actuales. Si ve un problema, [cree una incidencia](https://github.com/github/markup/issues/new).
