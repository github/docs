---
title: Contenidos del repositorio
allowTitleToDifferFromFilename: true
shortTitle: Contents
intro: 'Las terminales de esta API te permiten crear, modificar y borrar contenido cifrado en Base64 en un repositorio.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: fd3619faeb8ccaeaa70e8a2be050881b4a169b64
ms.sourcegitcommit: cfe91073c844cb762131b2de9fb41f7f9db792fc
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181320'
---
## Acerca de Repository contents API

Para solicitar el formato sin procesar y interpretado en HTML (cuando sea posible), utiliza los tipos de medios personalizados para el contenido de un repositorio.

### Tipos de medios personalizados para el contenido de un repositorio

Los [archivos Léame](/rest/reference/repos#get-a-repository-readme), los [archivos](/rest/reference/repos#get-repository-content) y los [vínculos simbólicos](/rest/reference/repos#get-repository-content) admiten los siguientes tipos de medios personalizados:

    application/vnd.github.raw
    application/vnd.github.html

Use el tipo de medios `.raw` para recuperar el contenido del archivo.

Para archivos de marcado como Markdown o AsciiDoc, puede recuperar el código HTML representado si usa el tipo de medios `.html`. Los lenguajes de marcado se representan en HTML mediante nuestra [biblioteca de marcado](https://github.com/github/markup) de código abierto.

[Todos los objetos](/rest/reference/repos#get-repository-content) admiten el siguiente tipo de medio personalizado:

    application/vnd.github.object

Use el parámetro de tipo de medios `object` para recuperar el contenido en un formato de objeto consistente con independencia del tipo de contenido. Por ejemplo, en vez de una matriz de objetos para un directorio, la respuesta será un objeto con un atributo `entries` que contenga la matriz de objetos.

[Aquí](/rest/overview/media-types) puede obtener más información sobre el uso de los tipos de medios en la API.
