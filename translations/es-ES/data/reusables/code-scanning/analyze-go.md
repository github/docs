---
ms.openlocfilehash: e9f2162fa5c65d4a59b2bd350aea2b131205f9a6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145113377"
---
{% data variables.product.prodname_codeql %} también ejecuta una compilación para que los proyectos de Go configuren el proyecto. Sin embargo, a diferencia de los demás lenguajes compilados, se extraen todos los archivos de Go del repositorio, no solo los compilados. Puede usar comandos de compilación personalizados para omitir la extracción de archivos de Go que no se han tocado en la compilación.
