---
ms.openlocfilehash: 5adfb74ac2eb64e2716c68382db44b69e46ff7f4
ms.sourcegitcommit: ea9a577cff7ec16ded25ed57417c83ec04816428
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 04/07/2022
ms.locfileid: "141525415"
---
## <a name="contents"></a>Contenido

Las terminales de esta API te permiten crear, modificar y borrar contenido cifrado en Base64 en un repositorio. Para solicitar el formato sin procesar y interpretado en HTML (cuando sea posible), utiliza los tipos de medios personalizados para el contenido de un repositorio.

### <a name="custom-media-types-for-repository-contents"></a>Tipos de medios personalizados para el contenido de un repositorio

Los [archivos Léame](/rest/reference/repos#get-a-repository-readme), los [archivos](/rest/reference/repos#get-repository-content) y los [vínculos simbólicos](/rest/reference/repos#get-repository-content) admiten los siguientes tipos de medios personalizados:

    application/vnd.github.VERSION.raw
    application/vnd.github.VERSION.html

Use el tipo de medios `.raw` para recuperar el contenido del archivo.

Para archivos de marcado como Markdown o AsciiDoc, puede recuperar el código HTML representado si usa el tipo de medios `.html`. Los lenguajes de marcado se representan en HTML mediante nuestra [biblioteca de marcado](https://github.com/github/markup) de código abierto.

[Todos los objetos](/rest/reference/repos#get-repository-content) admiten el siguiente tipo de medio personalizado:

    application/vnd.github.VERSION.object

Use el parámetro de tipo de medios `object` para recuperar el contenido en un formato de objeto consistente con independencia del tipo de contenido. Por ejemplo, en vez de una matriz de objetos para un directorio, la respuesta será un objeto con un atributo `entries` que contenga la matriz de objetos.

[Aquí](/rest/overview/media-types) puede obtener más información sobre el uso de los tipos de medios en la API.