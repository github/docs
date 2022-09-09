---
ms.openlocfilehash: fa28240a725967485b76be7be90384f3010b084a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145113745"
---
### Búsqueda basada en el repositorio

Use el calificador `repo` para limitar las acciones a un repositorio específico. Por ejemplo:

  * `repo:my-org/our-repo` busca todos los eventos que se han producido para el repositorio `our-repo` de la organización `my-org`.
  * `repo:my-org/our-repo repo:my-org/another-repo` busca todos los eventos que se han producido para los repositorios `our-repo` y `another-repo` de la organización `my-org`.
  * `-repo:my-org/not-this-repo` excluye todos los eventos que se han producido para el repositorio `not-this-repo` de la organización `my-org`.

Tenga en cuenta que debe incluir el nombre de la cuenta en el calificador `repo`; la búsqueda de solo `repo:our-repo` no funcionará.
