---
title: Licencias
intro: La API de Licencias te permite recuperar las licencias populares de código abierto y la información sobre un archivo de licencia de un proyecto en particular.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/licenses
ms.openlocfilehash: f6d229eb27764441ae040abaaca211b5a894e7ef
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064870'
---
## Acerca de la API de licencias

La API de licencias usa el [licenciatario de código abierto Ruby Gem](https://github.com/benbalter/licensee) para intentar identificar la licencia del proyecto. Este licenciatario coincide con el contenido del archivo de `LICENSE` de un proyecto (si es que existe) contra una lista breve de licencias conocidas. Como resultado, la API no toma en cuenta las licencias de las dependencias del proyecto u otros medios de documentar la licencia de un proyecto tales como las referencias al nombre de la licencia en la documentación.

Si una licencia coincide, la llave de licencia y el nombre devuelto cumplen con la [especificación SPDX](https://spdx.org/).

**Nota**: Estos puntos de conexión también devolverán la información de licencia de un repositorio:

- [Obtener un repositorio](/rest/reference/repos#get-a-repository)
- [Enumerar los repositorios para un usuario](/rest/reference/repos#list-repositories-for-a-user)
- [Enumerar los repositorios de una organización](/rest/reference/repos#list-organization-repositories)
- [Enumerar las bifurcaciones](/rest/reference/repos#list-forks)
- [Enumerar los repositorios que el usuario está observando](/rest/reference/activity#list-repositories-watched-by-a-user)
- [Enumerar los repositorios de equipo](/rest/reference/teams#list-team-repositories)

{% warning %}

GitHub puede ser muchas cosas, pero no es un buró legal. Como tal, GitHub no proporcional consejo legal. Al utilizar la API de licencias o al enviarnos un mensaje de correo electrónico acerca de ellas no estás incurriendo en ningún consejo legal ni creando una relación abogado-cliente. Si tienes cualquier pregunta acerca de lo que puedes o no hacer con una licencia específica, debes acudir a tu propio consejero legal antes de continuar. De hecho, siempre debes consultar con tu propio abogado antes de que decidas tomar cualquier decisión que pudiera tener implicaciones legales o que pudiera impactar tus derechos.

GitHub creó la API de Licencias para ayudar a los usuarios a obtener información acerca de las licencias de código abierto y de los proyectos que las utilizan. Esperamos que te sea útil, pero ten presente que no somos abogados (por lo menos, la mayoría de nosotros no lo somos) y que cometemos errores como todo el mundo. Es por esto que GitHub proporciona la API "tal como está" y no da ninguna garantía de cualquier tipo de información o licencias que se proporcionen en o a través de ella y se deslinda de cualquier responsabilidad derivada de los daños que pudiesen resultar de su uso.

{% endwarning %}
