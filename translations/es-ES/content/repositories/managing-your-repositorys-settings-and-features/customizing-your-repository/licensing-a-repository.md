---
title: Generar licencia para un repositorio
intro: 'Los repositorios públicos de GitHub se suelen utilizar para compartir software de código abierto. Para que tu repositorio sea verdaderamente de código abierto, tendrás que generarle una licencia. De este modo, las demás personas podrán usar, modificar y distribuir el software con libertad.'
redirect_from:
  - /articles/open-source-licensing
  - /articles/licensing-a-repository
  - /github/creating-cloning-and-archiving-repositories/licensing-a-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/licensing-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: f49dad5c20909647b1d7da7bb44a80a771337966
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881800'
---
## Elegir la licencia correcta

Hemos creado [choosealicense.com](https://choosealicense.com), para ayudarle a comprender las licencias para el código. Una licencia de software les informa a las demás personas lo que pueden y no pueden hacer con tu código fuente; por lo tanto, es importante tomar una decisión informada.

No tienes la obligación de elegir una licencia. Sin embargo, sin una licencia, se aplican las leyes de derecho de autor predeterminadas, lo que implica que conservas todos los derechos de tu código fuente, y nadie puede reproducir, distribuir o crear trabajos a partir de tu trabajo. Si estás creando un proyecto de código abierto, te alentamos fuertemente a que incluyas una licencia de código abierto. En la [Guía de código abierto](https://opensource.guide/legal/#which-open-source-license-is-appropriate-for-my-project) se proporcionan instrucciones adicionales sobre cómo elegir la licencia correcta para el proyecto.

{% note %}

**Nota:** Si publica el código fuente en un repositorio público en {% data variables.product.product_name %}, {% ifversion fpt or ghec %}según los [Términos del servicio](/free-pro-team@latest/github/site-policy/github-terms-of-service), {% endif %}otros usuarios de {% data variables.product.product_location %} tienen derecho a ver el repositorio y bifurcarlo. Si ya creaste un repositorio y no quieres que los usuarios tengan acceso a él, puedes hacer este repositorio privado. Cuando cambias la visibilidad de un repositorio a privada, las bifurcaciones existentes o copias locales que crean otros usuarios seguirán existiendo. Para más información, vea "[Configuración de la visibilidad del repositorio](/github/administering-a-repository/setting-repository-visibility)".

{% endnote %}

## Determinar la ubicación de tu licencia

La mayoría de lis usuarios personas colocan el texto de su licencia en un archivo denominado `LICENSE.txt` (o bien `LICENSE.md` o `LICENSE.rst`) en la raíz del repositorio; [este es un ejemplo de Hubot](https://github.com/github/hubot/blob/master/LICENSE.md).

Algunos proyectos incluyen información acerca de sus licencias en sus README. Por ejemplo, el README de un proyecto puede incluir una nota que diga "Este proyecto cuenta con licencia conforme a los términos de la licencia MIT".

Como buena práctica, te alentamos a que incluyas el archivo de licencia en tu proyecto.

## Buscar en GitHub por tipo de licencia

Puede filtrar repositorios en función de su licencia o familia de licencias mediante el calificador `license` y la palabra clave exacta de la licencia:

Licencia | Palabra clave de la licencia
---  | ---
| Licencia gratuita académica v3.0 | `afl-3.0` |
| Licencia de Apache 2.0 | `apache-2.0` |
| Licencia artística 2.0 | `artistic-2.0` |
| Licencia de Boost Software 1.0 | `bsl-1.0` |
| Licencia "simplificada" de la cláusula 2 de BSD | `bsd-2-clause` |
| Licencia "nueva" o "revisada" de la cláusula 3 de BSD | `bsd-3-clause` |
| Licencia Clear de la cláusula 3 de BSD | `bsd-3-clause-clear` |
| Familia de licencias de Creative Commons | `cc` |
| Creative Commons Zero v1.0 Universal | `cc0-1.0` |
| Creative Commons Attribution 4.0 | `cc-by-4.0` |
| Creative Commons Attribution Share Alike 4.0 | `cc-by-sa-4.0` |
| Licencia pública Do What The F*ck You Want To | `wtfpl` |
| Educational Community License v2.0 | `ecl-2.0` |
| Eclipse Public License 1.0 | `epl-1.0` |
| Eclipse Public License 2.0 | `epl-2.0` |
| Licencia pública de la Unión Europea 1.1 | `eupl-1.1` |
| Licencia pública general de GNU Affero v3.0 | `agpl-3.0` |
| Familia de licencias públicas generales de GNU | `gpl` |
| Licencia pública general de GNU v2.0 | `gpl-2.0` |
| Licencia pública general de GNU v3.0 | `gpl-3.0` |
| Licencia Pública General Menor de GNU | `lgpl` |
| Licencia Pública General Menor de GNU v2.1 | `lgpl-2.1` |
| Licencia Pública General Menor de GNU v3.0 | `lgpl-3.0` |
| ISC | `isc` |
| Licencia pública de LaTeX Project v1.3c | `lppl-1.3c` |
| Licencia pública de Microsoft | `ms-pl` |
| MIT | `mit` |
| Licencia pública de Mozilla 2.0 | `mpl-2.0` |
| Licencia de Open Software 3.0 | `osl-3.0` |
| Licencia de PostgreSQL | `postgresql` |
| Licencia de SIL Open Font 1.1 | `ofl-1.1` |
| Licencia de código abierto de la Universidad de Illinois/NCSA | `ncsa` |
| The Unlicense | `unlicense` |
| Licencia de zLib | `zlib` |

Cuando busques por una licencia de familia, los resultados incluirán todas las licencias de esa familia. Por ejemplo, al usar la consulta `license:gpl` los resultados incluirán los repositorios con la licencia GNU General Public License v2.0 y GNU General Public License v3.0. Para más información, vea "[Búsqueda de repositorios](/search-github/searching-on-github/searching-for-repositories/#search-by-license)".

## Detectar una licencia

[El Licenciatario de código abierto de la gema de Ruby](https://github.com/licensee/licensee) compara el archivo *LICENSE* del repositorio con una breve lista de licencias conocidas. El Licenciatario también proporciona [Licenses API](/rest/reference/licenses) y [ofrece información sobre cómo se conceden licencias a los repositorios de {% data variables.product.product_name %}](https://github.com/blog/1964-open-source-license-usage-on-github-com). Si el repositorio usa una licencia que no aparece en el [sitio web Elegir una licencia](https://choosealicense.com/appendix/), puede [solicitar que se incluya la licencia](https://github.com/github/choosealicense.com/blob/gh-pages/CONTRIBUTING.md#adding-a-license).

Si tu repositorio utiliza una licencia que está detallada en el sitio web Choose a License y no se muestra claramente en la parte superior de la página del repositorio, puede que contenga múltiples licencias u otra complejidad. Para que la licencia se detecte, simplifica el archivo *LICENSE* y anote la complejidad en otra parte, por ejemplo en el archivo *README* del repositorio.

## Aplicar una licencia a un repositorio con una licencia existente

El selector de licencias solo está disponible cuando creas un proyecto nuevo en GitHub. Puedes agregar manualmente una licencia utilizando el buscador. Para más información sobre cómo agregar una licencia a un repositorio, vea "[Adición de una licencia a un repositorio](/articles/adding-a-license-to-a-repository)".

![Captura de pantalla del selector de licencias en GitHub.com](/assets/images/help/repository/repository-license-picker.png)

## Declinación de responsabilidades

El objetivo de los esfuerzos de generación de licencias de código abierto de GitHub es proporcionar un punto de partida para ayudarte a hacer una elección informada. GitHub muestra información de licencias para ayudar a los usuarios a obtener información acerca de las licencias de código abierto y los proyectos que las utilizan. Esperamos que te sea útil, pero ten presente que no somos abogados y que cometemos errores como todo el mundo. Por ese motivo, GitHub proporciona la información sobre una base hipotética de "tal cual" y no da garantías al respecto de ninguna información o licencia proporcionada en función o a través de esta. Tampoco se hace responsable de los daños que surjan por el uso de la información de la licencia. Si tienes alguna pregunta al respecto de la licencia correcta para tu código o cualquier otro problema legal relacionado con esto, siempre es mejor consultar con un profesional.

## Información adicional

- La sección "[The Legal Side of Open Source](https://opensource.guide/legal/)" (Aspectos legales del código abierto) de The Open Source Guides{% ifversion fpt or ghec %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}
